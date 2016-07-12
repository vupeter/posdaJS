var data = {
   "tags" : {
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Presentation State",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Presentation State",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0252)" : {
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
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
         "entity" : "Presentation State",
         "name" : "Pattern Off Color CIELab Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0028,1202)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,0216)[<0>](0010,0214)" : {
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
         "name" : "Strain Stock Number",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0226)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Compound Graphic Instance ID",
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0244)" : {
         "entity" : "Presentation State",
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
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "name" : "Shadow Style",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0062,000b)" : {
         "module" : "Presentation State Relationship",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence"
      },
      "(0008,1049)[<0>](0040,1101)" : {
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
         "module" : "General Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "Presentation State",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0252)" : {
         "entity" : "Presentation State",
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
         "name" : "Pattern Off Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
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
         ],
         "module" : "General Series"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Presentation State"
      },
      "(0028,6100)[<0>](0028,6110)" : {
         "name" : "Mask Frame Numbers",
         "entity" : "Presentation State",
         "desc" : "Specifies the frame numbers of the pixel data used to generate this mask. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. Required if Mask Operation (0028,6101) is AVG_SUB.",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "req" : "1C"
      },
      "(60xx,3000)" : {
         "name" : "Overlay Data",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0278)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Indicates whether the tick label should be initially visible.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ],
         "entity" : "Presentation State",
         "name" : "Show Tick Label"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0294)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
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
                     "content" : [
                        "Implementers may add private graphic types."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d200444f-236a-4a2f-a60a-70abb9ea44e8"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Compound Graphic Type"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Fill Style Sequence",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "entity" : "Series",
         "name" : "Series Description",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0106)" : {
         "entity" : "Presentation State",
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
         "name" : "Context Group Version",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0246)" : {
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
         "entity" : "Presentation State",
         "name" : "Shadow Offset Y",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
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
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "req" : "1C",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "name" : "Requested Procedure ID"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "name" : "Performed Protocol Code Sequence"
      },
      "(0008,0105)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Mapping Resource",
         "entity" : "Presentation State",
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         ]
      },
      "(0070,0060)[<0>](0070,0401)" : {
         "entity" : "Presentation State",
         "desc" : [
            "A default color triplet value in which it is recommended that the layer be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.7.1.1"
               }
            },
            "."
         ],
         "name" : "Graphic Layer Recommended Display CIELab Value",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "module" : "Graphic Layer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "entity" : "Presentation State",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0247)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         "name" : "Shadow Color CIELab Value"
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of one Series to which the Presentation applies.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "module" : "Presentation State Relationship"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0255)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d72be373-7a7e-43ca-86b7-e209489ad5c6"
                     },
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
         "name" : "Line Pattern",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
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
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "desc" : "Person's mailing address"
      },
      "(0028,6100)[<0>](0028,6102)" : {
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "req" : "1C",
         "name" : "Applicable Frame Range",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Each pair of numbers in this multi-valued attribute specify a beginning and ending frame number inclusive of a range where this particular mask operation is valid. Discontinuous ranges are represented by multiple pairs of numbers. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. If this Attribute is missing in this particular sequence item, then the mask operation is applicable throughout the entire Multi-frame Image, subject to certain limits as described in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.10.1.1"
                  }
               },
               "."
            ],
            "Required if Mask Operation (0028,6101) equals REV_TID. May be present otherwise."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "name" : "Encrypted Content"
      },
      "(0008,0014)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0022)" : {
         "name" : "Graphic Data",
         "desc" : [
            "Coordinates that specify this graphic annotation.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0229)" : {
         "entity" : "Presentation State",
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "name" : "CSS Font Name",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0008,0201)" : {
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
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
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     }
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0012,0062)" : {
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
         "name" : "Patient Identity Removed",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,1101)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7-22a"
         ],
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
         "entity" : "Presentation State",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "entity" : "Patient",
         "name" : "Ethnic Group",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series",
         "name" : "Date"
      },
      "(0070,005a)[<0>](0070,0102)" : {
         "name" : "Presentation Pixel Aspect Ratio",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Ratio of the vertical size and the horizontal size of the pixels in the referenced image, to be used to display the referenced image, specified by a pair of integer values where the first value is the vertical pixel size and the second value is the horizontal pixel size. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.7"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Presentation Pixel Spacing (0070,0101) is not present.",
            {
               "el" : "note",
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
                                 "attrs" : {
                                    "xml:id" : "para_b5005f7b-391d-4be0-ab15-405c0c6cfbe4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This value may be different from the aspect ratio specified by Pixel Aspect Ratio (0028,0034) in the referenced image, or implied by the values of Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored."
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
                                 "content" : [
                                    "This value must be specified even if the aspect ratio is 1:1."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_54875bde-8e88-4796-8e82-2ac2abc5faf5"
                                 }
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1C"
      },
      "(0070,005a)[<0>](0070,0101)" : {
         "name" : "Presentation Pixel Spacing",
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
                                    "This value may be different from Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored, since some form of calibration may have been performed (for example by reference to an object of known size in the image)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_5aaa7c82-2a2a-4907-8795-c4f96b35d3f4"
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
                                 "attrs" : {
                                    "xml:id" : "para_7b070d90-65d8-4103-9440-686e60e41212"
                                 },
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
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Required if Presentation Size Mode (0070,0100) is TRUE SIZE, in which case the values will correspond to the physical distance between the center of each pixel on the display device.",
            "May be present if Presentation Size Mode (0070,0100) is SCALE TO FIT or MAGNIFY, in which case the values are used to compute the aspect ratio of the image pixels."
         ],
         "entity" : "Presentation State",
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,2203)" : {
         "entity" : "Study",
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
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "req" : "2C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(60xx,1500)" : {
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "entity" : "Presentation State",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "name" : "Overlay Label"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0012,0010)" : {
         "req" : "1",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "entity" : "Patient",
         "name" : "Clinical Trial Sponsor Name"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
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
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0253)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "name" : "Line Thickness"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "entity" : "Presentation State",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ],
         "module" : "Displayed Area",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Patient",
         "name" : "Patient ID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "name" : "Type of Instances",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0070,005a)[<0>](0070,0053)" : {
         "name" : "Displayed Area Bottom Right Hand Corner",
         "desc" : [
            "The bottom right (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "figure_C.10.4-1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Presentation State",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0252)" : {
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
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
         "name" : "Pattern Off Color CIELab Value"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Specific Character Set",
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
         "entity" : "Presentation State"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0243)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Vertical Alignment",
         "entity" : "Presentation State",
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
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ]
      },
      "(0028,6100)[<0>](0028,9454)" : {
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask",
         "req" : "3",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "name" : "Mask Selection Mode",
         "desc" : [
            "Specifies the method of selection of the mask operations of this item.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "name" : "Graphic Group ID",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0018,1030)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "name" : "Protocol Name"
      },
      "(0010,2298)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Responsible Person Role",
         "entity" : "Patient",
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
         ]
      },
      "(0008,0053)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3006)" : {
         "entity" : "Presentation State",
         "desc" : "LUT Data in this Sequence.",
         "name" : "LUT Data",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "module" : "Softcopy VOI LUT"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,1054)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052).",
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
            "Required if Rescale Intercept is present."
         ],
         "name" : "Rescale Type",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0062,000b)" : {
         "req" : "1C",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Segment Number"
      },
      "(0008,0096)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0251)" : {
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
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0028,2002)" : {
         "entity" : "Presentation State",
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
         "name" : "Color Space",
         "usage" : "M",
         "req" : "3",
         "module" : "ICC Profile",
         "mod_tables" : [
            "table_C.11.15-1"
         ]
      },
      "(60xx,1302)" : {
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "entity" : "Presentation State",
         "desc" : [
            "ROI Mean.",
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
         ],
         "name" : "ROI Mean"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "name" : "Requested Procedure Description",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Series",
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,0108)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0070,005a)[<0>](0048,0301)" : {
         "entity" : "Presentation State",
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Displayed Area Top Left Hand Corner (0070,0052) and Displayed Area Bottom Right Hand Corner (0070,0053) are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.4.1.4"
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
         ],
         "name" : "Pixel Origin Interpretation",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0005)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Units of measure for the axes of the graphic annotation.",
            "Enumerated Values for Graphic Annotation Units (0070,0005) are the same as for Bounding Box Annotation Units (0070,0003)."
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Annotation Units"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0012)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "Location of the text relative to the vertical edges of the bounding box.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "entity" : "Presentation State",
         "name" : "Bounding Box Text Horizontal Justification"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0245)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         "name" : "Shadow Offset X"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0028,2000)" : {
         "name" : "ICC Profile",
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "module" : "ICC Profile",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1622)" : [
         {
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.11.12-1"
            ],
            "module" : "Presentation State Shutter",
            "entity" : "Presentation State",
            "desc" : [
               "A single grayscale unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values.",
               [
                  "Required if the ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.11",
                        "xrefstyle" : "select: title"
                     },
                     "el" : "xref"
                  },
                  " or ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.15",
                        "xrefstyle" : "select: title"
                     },
                     "el" : "xref"
                  },
                  " is present."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "attrs" : {
                           "xml:id" : "para_08f1175b-4f72-4e97-99f5-85d57a5d8c86"
                        },
                        "content" : [
                           "The requirement in this module is type 1C, which overrides the type 3 in the ",
                           {
                              "attrs" : {
                                 "linkend" : "sect_C.7.6.11",
                                 "xrefstyle" : "select: title"
                              },
                              "el" : "xref"
                           },
                           "."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ],
            "name" : "Shutter Presentation Value"
         },
         {
            "module" : "Display Shutter",
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "req" : "3",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "name" : "Shutter Presentation Value",
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "attrs" : {
                           "xml:id" : "para_ffd1df8a-26f5-4fb0-aeb7-f15acf3c3a88"
                        },
                        "el" : "para",
                        "content" : [
                           "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "entity" : "Presentation State"
         },
         {
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                        ],
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_f13a676b-7dbc-4422-a81d-db5d50311f88"
                        }
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "entity" : "Presentation State",
            "name" : "Shutter Presentation Value",
            "req" : "1",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "module" : "Bitmap Display Shutter"
         }
      ],
      "(0070,0084)" : {
         "entity" : "Presentation State",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "name" : "Content Creator's Name",
         "usage" : "M",
         "req" : "2",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
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
         "name" : "Strain Nomenclature",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "2",
         "usage" : "M",
         "name" : "Series Number",
         "desc" : "A number that identifies this Series.",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0254)" : {
         "name" : "Line Dashing Style",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
               ]
            }
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1052)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "name" : "Rescale Intercept",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(60xx,1301)" : {
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "name" : "ROI Area",
         "entity" : "Presentation State",
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
         ]
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0070,0001)[<0>](0070,0008)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Text Object Sequence",
         "desc" : [
            "Sequence that describes a text annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "entity" : "Presentation State"
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,005a)[<0>](0070,0052)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ],
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
         "entity" : "Presentation State",
         "name" : "Displayed Area Top Left Hand Corner"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
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
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Pattern Off Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Presentation State",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0241)" : {
         "name" : "Text Color CIELab Value",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0226)" : {
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
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,0015)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Instance Coercion DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,0034)" : {
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
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
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0257)" : {
         "name" : "Fill Mode",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.14.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
         "name" : "Person's Telecom Information"
      },
      "(60xx,1001)" : {
         "mod_tables" : [
            "table_C.11.7-1"
         ],
         "module" : "Overlay Activation",
         "usage" : "C - Required if referenced image contains overlay data that is to be displayed or Presentation State Instance contains Overlay data other than Bitmap Shutter",
         "req" : "2C",
         "name" : "Overlay Activation Layer",
         "entity" : "Presentation State",
         "desc" : [
            [
               "The layer (defined in Graphic Layer (0070,0002) of the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.10.7"
                  },
                  "el" : "xref"
               },
               " in which the Overlay described in group 60xx shall be displayed. If no layer is specified (zero length) then the overlay shall not be displayed."
            ],
            "Required if Group 60xx is present in the referenced image(s) or the Presentation State instance containing this Module."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1084)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
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
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "entity" : "Study",
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
         "name" : "Distribution Type",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0070,0042)" : {
         "name" : "Image Rotation",
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
                     "attrs" : {
                        "xml:id" : "para_c7b27490-fc1c-4738-b72f-a7e27350b392"
                     },
                     "content" : [
                        "Negative values are not permitted since the Value Representation is unsigned."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "module" : "Spatial Transformation",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "req" : "1",
         "usage" : "C - Required if rotation or flipping are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0229)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "CSS Font Name",
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "entity" : "Presentation State"
      },
      "(60xx,0010)" : {
         "entity" : "Presentation State",
         "desc" : "Number of Rows in Overlay.",
         "name" : "Overlay Rows",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Presentation State",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
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
         "entity" : "Presentation State"
      },
      "(0070,0082)" : {
         "name" : "Presentation Creation Date",
         "desc" : [
            "Date on which this presentation was created.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_65edff7b-a56e-4bd4-86d8-f4dfa39610e2"
                     },
                     "el" : "para",
                     "content" : [
                        "This date may be different from the date that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "module" : "Presentation State Identification",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
      "(0008,010f)" : {
         "req" : "1",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.6"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Context Identifier"
      },
      "(0070,0001)[<0>](0008,1140)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Referenced Image Sequence",
         "entity" : "Presentation State",
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
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0028,6100)[<0>](0028,6120)" : {
         "req" : "2C",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
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
                     "linkend" : "sect_C.7.6.10.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If zero length, TID Offset defaults to 1. Required if Mask Operation (0028,6101) is TID or REV_TID."
         ],
         "entity" : "Presentation State",
         "name" : "TID Offset"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Series",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Certified Timestamp",
         "entity" : "Presentation State",
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
         ]
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "desc" : "A number that identifies this SOP Instance.",
            "entity" : "Presentation State",
            "mod_tables" : [
               "table_C.11.10-1",
               "table_10-12"
            ],
            "module" : "Presentation State Identification",
            "req" : "1",
            "usage" : "M"
         },
         {
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "entity" : "Presentation State",
            "name" : "Instance Number"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Study Description",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
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
         "entity" : "Patient"
      },
      "(0070,0060)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "module" : "Graphic Layer",
         "desc" : [
            "A sequence of Items each of which represents a single layer in which overlays, curves, graphics or text may be rendered.",
            "One or more Items shall be included in this Sequence.",
            [
               "An Item is required for each layer referenced from the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.10.5"
                  },
                  "el" : "xref"
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
         "name" : "Graphic Layer Sequence"
      },
      "(0008,1111)" : {
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Referenced Performed Procedure Step Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier of a Series that is part of the Study defined by the Study Instance UID (0020,000D) in the enclosing data set.",
            {
               "el" : "note",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8e6f8130-b38c-4ee9-a366-c41dfe640dcc"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "module" : "Presentation State Relationship"
      },
      "(0008,009d)" : {
         "entity" : "Study",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0008,0110)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0254)" : {
         "entity" : "Presentation State",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Line Dashing Style",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Presentation State",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  }
               },
               "."
            ],
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
         "entity" : "Patient",
         "name" : "Patient Position"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1608)" : {
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "entity" : "Presentation State",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "name" : "Shutter Lower Horizontal Edge"
      },
      "(0028,6100)[<0>](0028,6190)" : {
         "name" : "Mask Operation Explanation",
         "desc" : "Free form explanation of this particular mask operation.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask",
         "req" : "3",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
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
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
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
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "entity" : "Presentation State",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0295)" : {
         "desc" : "A number that defines the corresponding group object in the Graphic Group Sequence (0070,0234). If the attribute is not present the object does not belong to a group.",
         "entity" : "Presentation State",
         "name" : "Graphic Group ID",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0028,3110)[<0>](0028,3010)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "name" : "VOI LUT Sequence",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "module" : "Softcopy VOI LUT"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0010,0033)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
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
         "name" : "Patient's Birth Date in Alternative Calendar"
      },
      "(0028,1199)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table",
         "req" : "3",
         "usage" : "M",
         "name" : "Palette Color Lookup Table UID",
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
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "req" : "1",
         "usage" : "M",
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
         "name" : "Value Type"
      },
      "(0020,000e)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "desc" : "Unique identifier of the Series."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0245)" : {
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.2"
               }
            },
            "."
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Offset X",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(60xx,0102)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     },
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
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Overlay Bit Position",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
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
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0226)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Compound Graphic Instance ID",
         "entity" : "Presentation State",
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
      "(0028,3000)[<0>](0028,3003)" : {
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Presentation State",
         "name" : "LUT Explanation",
         "req" : "3",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0282)" : {
         "desc" : [
            "Type of dimension used in attributes for the Compound Graphic when specifying distances and locations.",
            {
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
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Presentation State",
         "name" : "Compound Graphic Units",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0247)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "entity" : "Presentation State",
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
         ]
      },
      "(0018,1602)" : {
         "entity" : "Presentation State",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "name" : "Shutter Left Vertical Edge",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "entity" : "Series"
      },
      "(0070,0041)" : {
         "usage" : "C - Required if rotation or flipping are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Spatial Transformation",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Whether or not to flip the image horizontally after any Image Rotation has been applied such that the left side of the image becomes the right side.",
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
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No vertical flip is specified since the same result can be achieved by a combination of a 180 degree rotation and a horizontal flip."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c7a32424-a3d2-41e2-a5ed-87347c8dc7cb"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Image Horizontal Flip"
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1160)" : {
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
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3"
         ],
         "module" : "Softcopy VOI LUT"
      },
      "(0010,0026)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0024)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Graphic Filled",
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
         "entity" : "Presentation State"
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0244)" : {
         "entity" : "Presentation State",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1155)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "A sequence of Items that describe Compound Graphics.",
            "One or more Items are permitted in this Sequence.",
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
         "name" : "Compound Graphic Sequence"
      },
      "(0070,005a)[<0>](0070,0100)" : {
         "name" : "Presentation Size Mode",
         "entity" : "Presentation State",
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
                     "linkend" : "sect_C.10.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0228)" : {
         "entity" : "Presentation State",
         "desc" : [
            {
               "list" : [
                  [
                     "ISO_32000",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "name" : "Font Name Type",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "name" : "Subject Relative Position in Image",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
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
         "name" : "Person Identification Code Sequence"
      },
      "(0008,0122)" : {
         "req" : "3",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Mapping Resource Name"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "entity" : "Presentation State",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0028,3110)" : {
         "name" : "Softcopy VOI LUT Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Defines a sequence of VOI LUTs or Window Centers and Widths and to which images and frames they apply.",
            "No more than one VOI LUT Sequence containing a single Item or one pair of Window Center/Width values shall be specified for each image or frame.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.11.8-1"
         ],
         "module" : "Softcopy VOI LUT",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "entity" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0042)" : {
         "entity" : "Patient",
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
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
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
         "entity" : "Patient"
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "entity" : "Patient",
         "name" : "Patient's Name",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
         "name" : "Identifier Type Code",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "name" : "Performed Procedure Step Description",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,001b)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0258)" : {
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0400,0561)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Original Attributes Sequence"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0070,0060)[<0>](0070,0062)" : {
         "entity" : "Presentation State",
         "desc" : "An integer indicating the order in which it is recommended that the layer be rendered, if the display is capable of distinguishing. Lower numbered layers are to be rendered first.",
         "name" : "Graphic Layer Order",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "module" : "Graphic Layer"
      },
      "(0028,1223)" : {
         "module" : "Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
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
         "entity" : "Presentation State"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
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
      "(0018,1623)" : {
         "req" : "1",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "mod_tables" : [
            "table_C.7.6.15-1"
         ],
         "module" : "Bitmap Display Shutter",
         "desc" : [
            "Specifies the Group (60xx) of an Overlay stored within the Presentation State IOD that contains the bitmap data, as defined in the ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.9.2"
               }
            },
            {
               "attrs" : {
                  "linkend" : "sect_C.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Presentation State",
         "name" : "Shutter Overlay Group"
      },
      "(0028,3000)[<0>](0028,3002)" : {
         "name" : "LUT Descriptor",
         "entity" : "Presentation State",
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
            ]
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0258)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Shadow Opacity"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0257)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Fill Mode",
         "desc" : [
            "The texture of the closed object to be displayed.",
            {
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
               ],
               "type" : "variablelist"
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0251)" : {
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
         "entity" : "Presentation State",
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "module" : "Presentation State Relationship",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Modified Attributes Sequence"
      },
      "(0012,0040)" : {
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Name",
         "entity" : "Presentation State",
         "desc" : "The coding scheme full common name"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Text Style Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(60xx,0040)" : {
         "name" : "Overlay Type",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "2",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0028,1203)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table",
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
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0070,005a)" : {
         "name" : "Displayed Area Selection Sequence",
         "entity" : "Presentation State",
         "desc" : [
            [
               "A sequence of Items each of which describes the displayed area selection for a group of images or frames. Sufficient Items shall be present to describe every image and frame listed in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1606)" : {
         "entity" : "Presentation State",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "name" : "Shutter Upper Horizontal Edge",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
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
         "req" : "1C"
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Date",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0241)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
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
         "name" : "Text Color CIELab Value"
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "entity" : "Patient",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ]
      },
      "(0070,0001)[<0>](0070,0002)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Graphic Layer",
         "entity" : "Presentation State",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
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
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "usage" : "M",
         "name" : "Patient Breed Description",
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
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0251)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
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
         "name" : "Pattern On Color CIELab Value"
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Softcopy VOI LUT",
         "req" : "1",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)"
      },
      "(0018,1000)" : {
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
         "entity" : "Equipment",
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0010,0200)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.1"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "entity" : "Patient",
         "name" : "Quality Control Subject"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0004)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Anchor Point Annotation Units",
         "entity" : "Presentation State",
         "desc" : [
            "Units of measure for the axes of the text anchor point annotation.",
            "Enumerated Values for Anchor Point Annotation Units (0070,0004) are the same as for Bounding Box Annotation Units (0070,0003).",
            "Required if Anchor Point (0070,0014) is present."
         ]
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
            ]
         ],
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
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
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
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
         "name" : "Measurement Units Code Sequence"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0258)" : {
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "name" : "Shadow Opacity",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0273)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         ],
         "name" : "Rotation Point"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
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
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0279)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Tick Label Alignment",
         "entity" : "Presentation State",
         "desc" : [
            "The alignment of the label with respect to the tick.",
            {
               "title" : "Enumerated Values:",
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
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS. or CROSSHAIR."
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0245)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Shadow Offset X",
         "desc" : [
            "Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0289)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "The label of the tick.",
         "entity" : "Presentation State",
         "name" : "Tick Label"
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
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
         "entity" : "Presentation State",
         "name" : "Context UID",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "name" : "Person Name",
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
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0248)" : {
         "name" : "Underlined",
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
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,005a)[<0>](0008,1140)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "entity" : "Presentation State",
         "desc" : [
            [
               "The subset of images and frames listed in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.11",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
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
         "name" : "Referenced Image Sequence"
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0014)" : {
         "name" : "Anchor Point",
         "entity" : "Presentation State",
         "desc" : [
            "Location of a point in the image or Specified Displayed Area to which the Unformatted Text Value (0070,0006) is related, in Anchor Point Annotation Units (0070,0004), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) and Bounding Box Bottom Right Hand Corner (0070,0011) are not present. May be present otherwise."
         ],
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
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
         "name" : "UID"
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
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
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
         "entity" : "Series",
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
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0003)" : {
         "name" : "Bounding Box Annotation Units",
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
                           "attrs" : {
                              "linkend" : "sect_C.8.12.4.1.3",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
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
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0010)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Bounding Box Top Left Hand Corner",
         "desc" : [
            "Location of the Top Left Hand Corner (TLHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Presentation State",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0288)" : {
         "entity" : "Presentation State",
         "desc" : "The position of the tick in the range 0.0 (start point) to 1.0 (end point).",
         "name" : "Tick Position",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0020,000d)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "name" : "Study Instance UID"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "entity" : "Presentation State",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Presentation State",
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
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
               ]
            }
         ],
         "name" : "MAC Algorithm"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Line Style Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1160)" : {
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
         "entity" : "Presentation State",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ]
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "name" : "Patient ID"
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "req" : "3",
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
         "name" : "Requested Procedure Code Sequence"
      },
      "(0008,0012)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(60xx,0022)" : {
         "entity" : "Presentation State",
         "desc" : "User-defined comments about the overlay.",
         "name" : "Overlay Description",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(60xx,1303)" : {
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
         ],
         "entity" : "Presentation State",
         "name" : "ROI Standard Deviation",
         "req" : "3",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0022)" : {
         "desc" : [
            "Numerical data Items that specify this Compound Graphic (points, vectors and scalars).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Data",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
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
      "(0070,0086)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(fffa,fffa)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Digital Signatures Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0246)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.10.5.1.3.13.1",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Offset Y"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Presentation State",
         "name" : "Block Identifying Information Status"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
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
         "name" : "Referenced Frame Number"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Patient ID",
         "desc" : [
            "Primary identifier for the patient.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0295)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Graphic Group ID",
         "entity" : "Presentation State",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "desc" : "Time the Study started.",
         "name" : "Study Time",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "entity" : "Presentation State",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0070,0087)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "module" : "Presentation State Identification",
         "usage" : "M",
         "req" : "3",
         "name" : "Alternate Content Description Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3d164798-44f3-4257-89fd-277d3c965c3d"
                     },
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0228)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "desc" : [
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "ISO_32000",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Font Name (0070,0227) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f9bd128a-6616-4a5b-8fd9-6a7343ebd276"
                     },
                     "content" : [
                        "This is the font naming system used by Adobe PDF and defined in ISO/IEC 14496-22."
                     ],
                     "el" : "para"
                  },
                  "\n                      "
               ]
            }
         ],
         "entity" : "Presentation State",
         "name" : "Font Name Type"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "entity" : "Patient",
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
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "name" : "Accession Number"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0227)" : {
         "name" : "Font Name",
         "entity" : "Presentation State",
         "desc" : "Font name in a standard type.",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         "name" : "Strain Source"
      },
      "(0070,0060)[<0>](0070,0002)" : {
         "name" : "Graphic Layer",
         "entity" : "Presentation State",
         "desc" : [
            "A string that identifies the layer.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0d188544-2fb7-43fa-ab14-7d8918bab397"
                     },
                     "el" : "para",
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
         "module" : "Graphic Layer",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID"
      },
      "(0070,0001)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "A sequence of Items each of which represents a group of annotations composed of graphics or text or both.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Graphic Annotation Sequence"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Presentation State",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,1102)" : {
         "entity" : "Presentation State",
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
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Modifying System",
         "entity" : "Presentation State",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Presentation State",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,3000)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this Sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "name" : "Modality LUT Sequence",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0024)" : {
         "name" : "Graphic Filled",
         "desc" : [
            [
               "Whether or not the closed graphics element is displayed as filled (in some unspecified manner that shall be distinguishable from an outline) or as an outline. See ",
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
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,0032)" : {
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,2210)" : {
         "entity" : "Series",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0245)" : {
         "name" : "Shadow Offset X",
         "entity" : "Presentation State",
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
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
      "(0008,1111)[<0>](0008,1150)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0251)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         "name" : "Pattern On Color CIELab Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
         "entity" : "Series",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0060)[<0>](0070,0068)" : {
         "name" : "Graphic Layer Description",
         "desc" : "A free text description of the contents of this layer.",
         "entity" : "Presentation State",
         "module" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "module" : "Presentation State Identification",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "entity" : "Presentation State",
         "name" : "Content Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Repository Unique ID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0021)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "Number of data Items, e.g., points, in this Compound Graphic.",
         "entity" : "Presentation State",
         "name" : "Number of Graphic Points"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
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
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
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
         "name" : "Retrieve URI"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
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
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0274)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Tick Alignment",
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
         "entity" : "Presentation State"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Presentation State"
      },
      "(0028,1221)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table",
         "entity" : "Presentation State",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Segmented Red Palette Color Lookup Table Data"
      },
      " (0010,0027) " : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "req" : "\n                  3 ",
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Contribution Description",
         "entity" : "Presentation State",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "name" : "Series Instance UID"
      },
      "(0010,0035)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "name" : "Patient's Alternative Calendar"
      },
      "(0028,6100)[<0>](0028,6101)" : [
         {
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "module" : "Presentation State Mask",
            "entity" : "Presentation State",
            "desc" : [
               "Type of mask operation to be performed",
               {
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.10.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "attrs" : {
                           "xml:id" : "para_a5ab1368-8080-4b86-b825-9f94af6fd3e7"
                        },
                        "content" : [
                           "The requirement in this module is for Enumerated Values, which overrides the requirements of the ",
                           {
                              "el" : "xref",
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.10"
                              }
                           },
                           "."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ],
            "name" : "Mask Operation"
         },
         {
            "desc" : [
               "Defined Term identifying the type of mask operation to be performed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "entity" : "Presentation State",
            "name" : "Mask Operation",
            "req" : "1",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "module" : "Mask",
            "mod_tables" : [
               "table_C.7-16"
            ]
         }
      ],
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(60xx,0050)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "name" : "Overlay Origin",
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0249)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
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
         "entity" : "Presentation State",
         "name" : "Bold"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0252)" : {
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
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
         ],
         "entity" : "Presentation State",
         "name" : "Pattern Off Color CIELab Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
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
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0253)" : {
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1604)" : {
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "entity" : "Presentation State",
         "name" : "Shutter Right Vertical Edge",
         "req" : "1C",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter"
      },
      "(0070,0234)" : {
         "name" : "Graphic Group Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the combined graphic object.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Graphic Group",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
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
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1160)" : {
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
         "entity" : "Presentation State",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
         "name" : "Related General SOP Class UID"
      },
      "(0028,6100)[<0>](0028,9416)" : {
         "req" : "1C",
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "Identification of the Subtraction Item used to associate a certain Mask Sub-Pixel Shift (0028,6114) in the Frame Pixel Shift Functional Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.14.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if SOP Class UID (0008,0016) equals \"1.2.840.10008.5.1.4.1.1.12.1.1\" or \"1.2.840.10008.5.1.4.1.1.12.2.1\". May be present otherwise."
         ],
         "entity" : "Presentation State",
         "name" : "Subtraction Item ID"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "entity" : "Presentation State",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "entity" : "Presentation State",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1"
      },
      "(0070,0234)[<0>](0070,0207)" : {
         "name" : "Graphic Group Label",
         "entity" : "Presentation State",
         "desc" : "Name used to identify the Graphic Group, i.e., the combined graphic object.",
         "module" : "Graphic Group",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,3110)[<0>](0008,1140)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Softcopy VOI LUT"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0020,0010)" : {
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "name" : "Study ID"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0246)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
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
         "name" : "Shadow Offset Y"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Presentation State"
      },
      "(0008,1110)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)" : {
         "name" : "Line Style Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3"
      },
      "(0038,0060)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "name" : "Service Episode ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "name" : "Date"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0258)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Shadow Opacity",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State"
      },
      "(0008,1040)" : {
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : [
            "The sequence of major ticks on the AXIS object.",
            "Two or more Items shall be present.",
            "Required if Compound Graphic Type (0070,0294) equals AXIS."
         ],
         "entity" : "Presentation State",
         "name" : "Major Ticks Sequence"
      },
      "(0018,1610)" : {
         "name" : "Center of Circular Shutter",
         "entity" : "Presentation State",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C"
      },
      "(0028,1222)" : {
         "module" : "Palette Color Lookup Table",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Segmented Green Palette Color Lookup Table Data",
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
         ],
         "entity" : "Presentation State"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Mapping Resource UID",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Presentation State"
      },
      "(0010,1100)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Patient Photo Sequence",
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
      "(0070,0060)[<0>](0070,0066)" : {
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the layer be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_befb1458-69b2-4738-9246-1ffb5f4d350c"
                     },
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Layer Recommended Display Grayscale Value",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "module" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0028,0120)" : {
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
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
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
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
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Equipment",
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Language Code Sequence",
         "entity" : "Presentation State",
         "desc" : "The language in which Content Description (0070,0081) within this Sequence item is written. A single Item shall be present."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0255)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Line Pattern",
         "desc" : [
            "Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d72be373-7a7e-43ca-86b7-e209489ad5c6"
                     },
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
         "entity" : "Presentation State"
      },
      "(0010,2294)" : {
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "name" : "Breed Registration Sequence"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         "name" : "Strain Source Registry Code Sequence"
      },
      "(0008,0123)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Presentation State",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0070,0086)[<0>](0040,1104)" : {
         "entity" : "Presentation State",
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
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(0028,1090)" : [
         {
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "module" : "Presentation State Mask",
            "req" : "1C",
            "usage" : "M",
            "name" : "Recommended Viewing Mode",
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
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "attrs" : {
                           "xml:id" : "para_eba2f6fd-7175-4336-84d1-bbb5778736d7"
                        },
                        "content" : [
                           "The requirements in this module are type 1C and a specified Enumerated Value, which override the requirements of the ",
                           {
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.10"
                              },
                              "el" : "xref"
                           },
                           "."
                        ],
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ],
            "entity" : "Presentation State"
         },
         {
            "name" : "Recommended Viewing Mode",
            "desc" : [
               "Specifies the recommended viewing protocol(s).",
               {
                  "type" : "variablelist",
                  "title" : "Defined Terms:",
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
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "content" : [
                           "If an implementation does not recognize the Defined Term for Recommended Viewing Mode (0028,1090), reverting to native display mode is recommended."
                        ],
                        "attrs" : {
                           "xml:id" : "para_9f1cf042-4cd2-4cab-8d21-b07b36cf64cd"
                        }
                     },
                     "\n                  "
                  ]
               }
            ],
            "entity" : "Presentation State",
            "mod_tables" : [
               "table_C.7-16"
            ],
            "module" : "Mask",
            "req" : "2",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted"
         }
      ],
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Presentation State",
         "name" : "Time of Last Calibration"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0011)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Location of the Bottom Right Hand Corner (BRHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "name" : "Bounding Box Bottom Right Hand Corner"
      },
      "(0070,0234)[<0>](0070,0295)" : {
         "name" : "Graphic Group ID",
         "desc" : "A unique number identifying the Graphic Group, i.e., the combined graphic object.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "module" : "Graphic Group",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0284)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0020,0060)" : {
         "req" : "2C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "name" : "Laterality"
      },
      "(0012,0020)" : {
         "entity" : "Patient",
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
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(60xx,0011)" : {
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "Number of Columns in Overlay.",
         "entity" : "Presentation State",
         "name" : "Overlay Columns"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "entity" : "Presentation State",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Presentation State Relationship",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0242)" : {
         "name" : "Horizontal Alignment",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
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
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "entity" : "Presentation State",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(0018,5100)" : {
         "name" : "Patient Position",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "2C"
      },
      "(0070,0081)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "module" : "Presentation State Identification",
         "usage" : "M",
         "req" : "2",
         "name" : "Content Description",
         "entity" : "Presentation State",
         "desc" : "A description of the content of the SOP Instance."
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "entity" : "Presentation State",
         "desc" : "LUT Data in this Sequence.",
         "name" : "LUT Data"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name"
      },
      "(0010,0040)" : {
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
         "name" : "Patient's Sex",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0032,1034)" : {
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Requesting Service Code Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series"
      },
      "(0028,3110)[<0>](0028,1056)" : {
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "module" : "Softcopy VOI LUT",
         "req" : "3",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "name" : "VOI LUT Function",
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
               "type" : "variablelist",
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
               ]
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
         "entity" : "Presentation State"
      },
      "(0008,0021)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Date the Series started.",
         "entity" : "Series",
         "name" : "Series Date"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "Presentation State",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient",
         "name" : "Retrieve AE Title",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "entity" : "Presentation State",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Presentation State",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0020)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
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
         "entity" : "Presentation State",
         "name" : "Graphic Dimensions"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
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
         "name" : "Person's Telecom Information"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "req" : "2",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "name" : "Patient's Birth Date"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0250)" : {
         "entity" : "Presentation State",
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
         ],
         "name" : "Italic",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       }
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 }
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
         "entity" : "Presentation State",
         "name" : "Deidentification Action",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0216)" : {
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Strain Stock Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0218)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
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
         "name" : "Strain Additional Information"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Presentation State",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0071)" : {
         "entity" : "Series",
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
         ],
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Fill Style Sequence",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Time"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "entity" : "Presentation State",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1020)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "name" : "Software Versions"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,2293)" : {
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
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "name" : "Storage Media File-Set ID"
      },
      "(0008,0018)" : {
         "entity" : "Presentation State",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0247)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
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
         "entity" : "Presentation State",
         "name" : "Shadow Color CIELab Value"
      },
      "(0028,3000)[<0>](0028,3004)" : {
         "entity" : "Presentation State",
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
            ]
         ],
         "name" : "Modality LUT Type",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Presentation State",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0227)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Font Name",
         "entity" : "Presentation State",
         "desc" : "Font name in a standard type."
      },
      "(0070,0080)" : {
         "name" : "Content Label",
         "desc" : "A label that is used to identify this SOP Instance.",
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "2",
         "name" : "Manufacturer",
         "entity" : "Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0244)" : {
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
         "entity" : "Presentation State",
         "name" : "Shadow Style",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
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
         "name" : "Private Creator Reference"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Presentation State",
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Retrieve URI",
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
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "name" : "Person Name"
      },
      "(0008,009c)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "name" : "Consulting Physician's Name"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0262)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Diameter of Visibility",
         "entity" : "Presentation State",
         "desc" : [
            "Diameter of the circle around the CROSSHAIR origin where the CROSSHAIR is visible. The Compound Graphic Units (0070,0282) of the Diameter of Visibility (0070,0262) shall be DISPLAY.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.10"
                  },
                  "el" : "xref"
               }
            ],
            "Required if Compound Graphic Type (0070,0294) equals CROSSHAIR."
         ]
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Responsible Person",
         "entity" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
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
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.12.1"
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
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
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
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "De-identification Method"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0243)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "name" : "Vertical Alignment",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Specifies the vertical position of the text relative to the horizontal edges of the bounding box. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.12.1",
                     "xrefstyle" : "select: label"
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
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0256)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "name" : "Fill Pattern"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0230)" : {
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
         "entity" : "Presentation State",
         "name" : "Rotation Angle",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
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
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0284)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Pattern On Opacity",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State"
      },
      "(0028,3110)[<0>](0008,1140)" : {
         "req" : "1C",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.11.8-1"
         ],
         "module" : "Softcopy VOI LUT",
         "desc" : [
            [
               "The subset of images and frames listed in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.11"
                  },
                  "el" : "xref"
               },
               ", to which this VOI LUT or Window Center and Width applies."
            ],
            "One or more Items shall be included in this Sequence.",
            [
               "Required if the VOI LUT transformation in this Item does not apply to all the images and frames listed in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.11"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Presentation State",
         "name" : "Referenced Image Sequence"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "Patient",
         "name" : "Referenced SOP Sequence"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0285)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Pattern Off Opacity"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1150)" : {
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Graphic Annotation"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0249)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
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
         "entity" : "Presentation State",
         "name" : "Bold"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "Presentation State",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1115)[<0>](0008,1140)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The set of images and frames to which the Presentation applies. These shall be of the Study defined by Study Instance UID (0020,000D) and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence.",
            "The referenced SOP Class shall be the same for all Images in any Item of this Referenced Series Sequence (0008,1115)."
         ],
         "name" : "Referenced Image Sequence",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "module" : "Presentation State Relationship"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
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
         "entity" : "Patient"
      },
      "(60xx,0045)" : {
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "name" : "Overlay Subtype",
         "entity" : "Presentation State",
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
      "(0070,0083)" : {
         "desc" : [
            "Time at which this presentation was created.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This time may be different from the time that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "attrs" : {
                        "xml:id" : "para_bc36ae88-f947-4ed7-a806-cfe9f96550ab"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "name" : "Presentation Creation Time",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1201)" : {
         "entity" : "Presentation State",
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
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0284)" : {
         "entity" : "Presentation State",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Pattern On Opacity",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0244)" : {
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Shadow Style",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.2",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0023)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Presentation State",
         "name" : "Graphic Type"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0284)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "name" : "Pattern On Opacity",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Signature",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "entity" : "Presentation State",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1"
      },
      "(60xx,0100)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "name" : "Overlay Bits Allocated",
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
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State"
      },
      "(0010,0212)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Strain Description",
         "desc" : [
            "The strain of the patient. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,103f)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Text Style Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series"
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3002)" : {
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "module" : "Softcopy VOI LUT",
         "entity" : "Presentation State",
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
         "name" : "LUT Descriptor"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0028,1053)" : {
         "name" : "Rescale Slope",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "entity" : "Presentation State",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "req" : "1C",
         "usage" : "C - Required if a Modality LUT is to be applied to referenced image(s)"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Accession Number",
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
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
         ],
         "name" : "Universal Entity ID"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series"
      },
      "(0028,3110)[<0>](0028,1050)" : {
         "name" : "Window Center",
         "entity" : "Presentation State",
         "desc" : [
            "Window Center for display.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
         ],
         "module" : "Softcopy VOI LUT",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1C"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment"
      },
      "(0018,1620)" : {
         "module" : "Display Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C",
         "name" : "Vertices of the Polygonal Shutter",
         "entity" : "Presentation State",
         "desc" : [
            "Required if Shutter Shape (0018,1600) is POLYGONAL.",
            "Multiple Values where the first set of two values are:",
            {
               "attrs" : {
                  "mark" : "none"
               },
               "content" : [
                  "\n                    ",
                  {
                     "el" : "listitem",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "row of the origin vertex\\column of the origin vertex"
                           ],
                           "el" : "para",
                           "attrs" : {
                              "xml:id" : "para_d59cd0c0-b975-4ac4-adee-bb16895e809c"
                           }
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "itemizedlist"
            },
            "Two or more pairs of values follow and are the row and column coordinates of the other vertices of the polygon shutter. Polygon shutters are implicitly closed from the last vertex to the origin vertex and all edges shall be non-intersecting except at the vertices."
         ]
      },
      "(0028,6100)[<0>](0028,6112)" : [
         {
            "entity" : "Presentation State",
            "desc" : [
               "Specified the number of contrast frames to average together before performing the mask operation.",
               "Required if Mask Frame Numbers (0028,6110) specifies more than one frame (i.e., is multi-valued).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "attrs" : {
                           "xml:id" : "para_ea23d410-78e9-446c-b6c8-6d26edf29f8f"
                        },
                        "el" : "para",
                        "content" : [
                           "The requirement in this module is conditional and overrides the optional requirements of the ",
                           {
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.10"
                              },
                              "el" : "xref"
                           },
                           "."
                        ]
                     },
                     "\n                "
                  ]
               }
            ],
            "name" : "Contrast Frame Averaging",
            "usage" : "M",
            "req" : "1C",
            "module" : "Presentation State Mask",
            "mod_tables" : [
               "table_C.11.13-1"
            ]
         },
         {
            "entity" : "Presentation State",
            "desc" : "Specifies the number of contrast frames to average together before performing the mask operation. If the Attribute is missing, no averaging is performed.",
            "name" : "Contrast Frame Averaging",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-16"
            ],
            "module" : "Mask"
         }
      ],
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Presentation State",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "name" : "Private Group Reference",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0246)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "desc" : [
            "Floating point value that defines the shadow offset in Y direction in Anchor Point Annotation Units (0070,0004) if used in Text Object Sequence Item or in Graphic Annotation Units (0070,0005) if used in Graphic Object Sequence Item. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.10.5.1.3.13.1"
               }
            }
         ],
         "entity" : "Presentation State",
         "name" : "Shadow Offset Y"
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "entity" : "Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "entity" : "Presentation State",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Presentation State"
      },
      "(0010,0219)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Strain Code Sequence",
         "entity" : "Patient",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0256)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Fill Pattern",
         "entity" : "Presentation State",
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0020)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Graphic Dimensions",
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
         }
      },
      "(0028,3110)[<0>](0028,1055)" : {
         "req" : "3",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "module" : "Softcopy VOI LUT",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "entity" : "Presentation State",
         "name" : "Window Center & Width Explanation"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0247)" : {
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
         "name" : "Shadow Color CIELab Value",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "name" : "XDS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0245)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Time"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
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
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0109)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series"
      },
      "(0070,0086)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Presentation State Identification",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "entity" : "Presentation State",
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this Sequence.",
         "name" : "Content Creator's Identification Code Sequence"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "name" : "Universal Entity ID Type"
      },
      "(0018,0015)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "targetdoc" : "PS3.16",
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
         "name" : "Body Part Examined"
      },
      "(0070,0001)[<0>](0070,0009)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            "Sequence that describes a graphic annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "name" : "Graphic Object Sequence"
      },
      "(0008,0060)" : [
         {
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
            "name" : "Modality",
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.11.9-1"
            ],
            "module" : "Presentation Series",
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
            "name" : "Modality"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0285)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Pattern Off Opacity"
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
         "entity" : "Presentation State",
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "M",
         "req" : "2",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "name" : "Source of Previous Values"
      },
      "(0012,0030)" : {
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
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0070,0234)[<0>](0070,0208)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Graphic Group",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "entity" : "Presentation State",
         "desc" : "Description of the group.",
         "name" : "Graphic Group Description"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0028,3110)[<0>](0028,3010)[<1>](0028,3003)" : {
         "module" : "Softcopy VOI LUT",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "req" : "3",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "entity" : "Presentation State"
      },
      "(0018,1200)" : {
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
         "name" : "Date of Last Calibration",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "name" : "Type of Patient ID"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0015)" : {
         "desc" : [
            "Flag to indicate whether or not a visible indication (such as a line or arrow) of the relationship between the text and the anchor point is to be displayed.",
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
            },
            "Required if Anchor Point (0070,0014) is present."
         ],
         "entity" : "Presentation State",
         "name" : "Anchor Point Visibility",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0028,6100)" : [
         {
            "usage" : "M",
            "req" : "1C",
            "module" : "Presentation State Mask",
            "mod_tables" : [
               "table_C.11.13-1"
            ],
            "entity" : "Presentation State",
            "desc" : [
               [
                  "Required if ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.10",
                        "xrefstyle" : "select: title"
                     },
                     "el" : "xref"
                  },
                  " is present."
               ],
               "Only a single Item shall be included in this Sequence.",
               "Applicable Frame Range (0028,6102) shall not be included in the Sequence Item.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.10",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for a complete definition of the Attributes in the Items of this Sequence other than Mask Operation (0028,6101) and Applicable Frame Range (0028,6102)."
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
                                    "content" : [
                                       "This Sequence is replicated here in order to specify one Item, additional conditions on Mask Operation (0028,6101) and to forbid Applicable Frame Range (0028,6102)."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_f5fe564a-44a8-4856-96ac-42e765b189ea"
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
                                       "The role of Applicable Frame Range (0028,6102) is replaced by Referenced Frame Number (0008,1160)."
                                    ],
                                    "el" : "para",
                                    "attrs" : {
                                       "xml:id" : "para_dd78600f-0ee3-4c9b-8ee1-31fbe94e6a5b"
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
               }
            ],
            "name" : "Mask Subtraction Sequence"
         },
         {
            "desc" : [
               "Defines a sequence that describes mask subtraction operations for a Multi-frame Image.",
               "One or more Items shall be included in this Sequence."
            ],
            "entity" : "Presentation State",
            "name" : "Mask Subtraction Sequence",
            "req" : "1",
            "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
            "module" : "Mask",
            "mod_tables" : [
               "table_C.7-16"
            ]
         }
      ],
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Relationship",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1070)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "name" : "Operators' Name"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Presentation State Identification"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
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
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Presentation State",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1612)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "module" : "Display Shutter",
         "req" : "1C",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "name" : "Radius of Circular Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "entity" : "Presentation State"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0006)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "desc" : [
            [
               "Text data that is unformatted and whose manner of display within the defined bounding box or relative to the specified anchor point is implementation dependent. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of ST.",
            [
               "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2671b17d-3bd6-48d8-8f8a-1bc0765a82e0"
                     },
                     "el" : "para",
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.5",
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Unformatted Text Value"
      },
      "(0028,3110)[<0>](0028,1051)" : {
         "entity" : "Presentation State",
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
         "name" : "Window Width",
         "usage" : "C - Required if a VOI LUT is to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11.8-1",
            "table_C.11-2b"
         ],
         "module" : "Softcopy VOI LUT"
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0070,005a)[<0>](0070,0103)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "module" : "Displayed Area",
         "req" : "1C",
         "usage" : "M",
         "name" : "Presentation Pixel Magnification Ratio",
         "desc" : [
            "Ratio of displayed pixels to source pixels, specified in one dimension.",
            "Required if Presentation Size Mode (0070,0100) is MAGNIFY.",
            {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "A value of 2.0 would imply that one pixel in the referenced image would be displayed as 4 pixels on the display (i.e., up-sampled by a factor of 2 in each of the row and column directions)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d6d1222c-48c5-44c7-838b-ebe21643872c"
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
                                    "xml:id" : "para_3aa44ae0-e6bd-4a52-987d-b968dfcddb6e"
                                 },
                                 "content" : [
                                    "A value of 0.5 would imply that 4 pixels in the referenced image would be displayed as 1 pixel on the display (i.e., down-sampled by a factor of 2 in each of the row and column directions)."
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
                                 "attrs" : {
                                    "xml:id" : "para_d2c687d8-cf4c-43d7-a265-377736387f90"
                                 },
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0242)" : {
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
         "name" : "Horizontal Alignment",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
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
         "name" : "Certificate of Signer"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0248)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Specifies whether or not the text shall be rendered underlined.",
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
         "name" : "Underlined"
      },
      "(0018,1600)" : [
         {
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "req" : "1",
            "name" : "Shutter Shape",
            "entity" : "Presentation State",
            "desc" : [
               "Shape(s) of the shutter defined for display.",
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
            ]
         },
         {
            "req" : "1",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "module" : "Bitmap Display Shutter",
            "desc" : [
               "Shape of the shutter defined for display.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "BITMAP",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               },
               "This Attribute shall contain one Value."
            ],
            "entity" : "Presentation State",
            "name" : "Shutter Shape"
         }
      ],
      "(0008,0051)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
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
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "name" : "Occupation",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0028,1103)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table",
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
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0021)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "desc" : "Number of data points in this graphic.",
         "entity" : "Presentation State",
         "name" : "Number of Graphic Points"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
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
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study",
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
         "name" : "Clinical Trial Time Point ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0028,6100)[<0>](0028,6114)" : {
         "usage" : "C - Required if the referenced image(s) are multi-frame and are to be subtracted",
         "req" : "3",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "entity" : "Presentation State",
         "desc" : [
            [
               "A pair of floating point numbers specifying the fractional vertical [adjacent row spacing] and horizontal [adjacent column spacing] pixel shift applied to the mask before subtracting it from the contrast frame. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.10.1.2"
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
                     "attrs" : {
                        "xml:id" : "para_ba00d9b2-ccac-4347-a36b-df304811ee58"
                     },
                     "content" : [
                        "When the Frame Pixel Shift Functional Group is present the values of the Mask Pixel Shift attribute of that Functional Group prevails over the values specified in this module."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Mask Sub-pixel Shift"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0253)" : {
         "entity" : "Presentation State",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "name" : "Line Thickness",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0250)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
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
         ],
         "name" : "Italic"
      },
      "(0040,0250)" : {
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0261)" : {
         "entity" : "Presentation State",
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
         "name" : "Gap Length",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "module" : "Graphic Annotation"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "entity" : "Presentation State",
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
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0285)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "entity" : "Presentation State",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "name" : "Pattern Off Opacity"
      },
      "(0018,a001)" : {
         "entity" : "Presentation State",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Additional Patient History",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history."
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Presentation State",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
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
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1624)" : [
         {
            "usage" : "M",
            "req" : "1C",
            "module" : "Presentation State Shutter",
            "mod_tables" : [
               "table_C.11.12-1"
            ],
            "entity" : "Presentation State",
            "desc" : [
               [
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
               [
                  "Required if the ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.11",
                        "xrefstyle" : "select: title"
                     },
                     "el" : "xref"
                  },
                  " or ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: title",
                        "linkend" : "sect_C.7.6.15"
                     },
                     "el" : "xref"
                  },
                  " is present and the SOP Class is other than Grayscale Softcopy Presentation State Storage."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "el" : "para",
                        "content" : [
                           "The requirement in this module is type 1C, which overrides the type 3 in the ",
                           {
                              "el" : "xref",
                              "attrs" : {
                                 "linkend" : "sect_C.7.6.11",
                                 "xrefstyle" : "select: title"
                              }
                           },
                           " and ",
                           {
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.15"
                              },
                              "el" : "xref"
                           },
                           "."
                        ],
                        "attrs" : {
                           "xml:id" : "para_c32bf2c4-03a3-450c-a29d-bb0017da52c9"
                        }
                     },
                     "\n                "
                  ]
               }
            ],
            "name" : "Shutter Presentation Color CIELab Value"
         },
         {
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "req" : "3",
            "name" : "Shutter Presentation Color CIELab Value",
            "entity" : "Presentation State",
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
            ]
         },
         {
            "module" : "Bitmap Display Shutter",
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "req" : "3",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "name" : "Shutter Presentation Color CIELab Value",
            "desc" : [
               "A color triplet value used to replace those parts of the image occluded by the shutter, when rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "entity" : "Presentation State"
         }
      ],
      "(0012,0051)" : {
         "name" : "Clinical Trial Time Point Description",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "Patient",
         "name" : "Series Instance UID"
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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
