var data = {
   "tags" : {
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0255)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d72be373-7a7e-43ca-86b7-e209489ad5c6"
                     }
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ],
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Pattern"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0252)" : {
         "name" : "Pattern Off Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "usage" : "M",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Study",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "req" : "1C",
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0012,0062)" : {
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
         "req" : "3",
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "2",
         "entity" : "Patient"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0021)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Number of data Items, e.g., points, in this Compound Graphic.",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Number of Graphic Points",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Reason for requesting this procedure."
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Displayed Area",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
               "content" : [
                  "\n",
                  {
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0024)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
            "Required if Graphic Data (0070,0022) is \"closed\", that is Graphic Type (0070,0023) is CIRCLE or ELLIPSE, or Graphic Type (0070,0023) is POLYLINE or INTERPOLATED and the first data point is the same as the last data point."
         ],
         "req" : "1C",
         "name" : "Graphic Filled",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0070,0082)" : {
         "mod_tables" : [
            "table_C.11.10-1"
         ],
         "name" : "Presentation Creation Date",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Date on which this presentation was created.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This date may be different from the date that the DICOM SOP Instance was created, since the presentation state information contained may have been recorded earlier."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_65edff7b-a56e-4bd4-86d8-f4dfa39610e2"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Presentation State Identification",
         "entity" : "Presentation State"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(60xx,1001)" : {
         "name" : "Overlay Activation Layer",
         "mod_tables" : [
            "table_C.11.7-1"
         ],
         "usage" : "C - Required if referenced image contains overlay data that is to be displayed or Presentation State Instance contains Overlay data other than Bitmap Shutter",
         "desc" : [
            [
               "The layer (defined in Graphic Layer (0070,0002) of the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.10.7"
                  }
               },
               " in which the Overlay described in group 60xx shall be displayed. If no layer is specified (zero length) then the overlay shall not be displayed."
            ],
            "Required if Group 60xx is present in the referenced image(s) or the Presentation State instance containing this Module."
         ],
         "module" : "Overlay Activation",
         "req" : "2C",
         "entity" : "Presentation State"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
         "req" : "2",
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
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Name"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0012)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of the text relative to the vertical edges of the bounding box.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Bounding Box Text Horizontal Justification"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern Off Color CIELab Value",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1160)" : {
         "entity" : "Presentation State",
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
         "usage" : "M",
         "module" : "Displayed Area",
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0294)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The shape of this Compound Graphic.",
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
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d200444f-236a-4a2f-a60a-70abb9ea44e8"
                     },
                     "el" : "para",
                     "content" : [
                        "Implementers may add private graphic types."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Compound Graphic Type",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0230)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Rotation Angle"
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
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0018,1622)" : [
         {
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
                        "attrs" : {
                           "xml:id" : "para_08f1175b-4f72-4e97-99f5-85d57a5d8c86"
                        },
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ],
            "usage" : "M",
            "module" : "Presentation State Shutter",
            "req" : "1C",
            "entity" : "Presentation State",
            "name" : "Shutter Presentation Value",
            "mod_tables" : [
               "table_C.11.12-1"
            ]
         },
         {
            "entity" : "Presentation State",
            "req" : "3",
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "el" : "note",
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
                  ]
               }
            ],
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "name" : "Shutter Presentation Value"
         },
         {
            "entity" : "Presentation State",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "desc" : [
               "A single gray unsigned value used to replace those parts of the image occluded by the shutter, when rendered on a monochrome display. The units are specified in P-Values, from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                        ],
                        "attrs" : {
                           "xml:id" : "para_f13a676b-7dbc-4422-a81d-db5d50311f88"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "Bitmap Display Shutter",
            "req" : "1",
            "name" : "Shutter Presentation Value",
            "mod_tables" : [
               "table_C.7.6.15-1"
            ]
         }
      ],
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Series"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Description of the Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Time",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
         "req" : "3",
         "module" : "SOP Common",
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
         ],
         "entity" : "Presentation State"
      },
      "(60xx,0010)" : {
         "req" : "1",
         "desc" : "Number of Rows in Overlay.",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Rows"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0282)" : {
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
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "figure_C.10.5-1"
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
               ]
            }
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Compound Graphic Units",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution Description"
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0010,0034)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Death Date in Alternative Calendar",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
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
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
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
         "module" : "General Study"
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence"
      },
      "(0010,0200)" : {
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0288)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "The position of the tick in the range 0.0 (start point) to 1.0 (end point).",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Tick Position",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0258)" : {
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Opacity"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0070,0060)" : {
         "name" : "Graphic Layer Sequence",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "entity" : "Presentation State",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.11.7"
                  }
               },
               "."
            ]
         ],
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "module" : "Graphic Layer",
         "req" : "1"
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
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series"
      },
      "(0028,0303)" : {
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
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
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "name" : "Language Code Sequence",
         "req" : "1",
         "desc" : "The language in which Content Description (0070,0081) within this Sequence item is written. A single Item shall be present.",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)" : {
         "name" : "Line Style Sequence",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "entity" : "Presentation State",
         "req" : "3",
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
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "M",
         "entity" : "Presentation State"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Primary identifier for an individual subject.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0250)" : {
         "req" : "1",
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Italic"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
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
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1"
      },
      "(0008,1120)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0295)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Group ID",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "entity" : "Presentation State"
      },
      "(0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0053)" : {
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
         "req" : "1C",
         "entity" : "Presentation State",
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "usage" : "M",
         "module" : "General Series",
         "req" : "1"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0261)" : {
         "name" : "Gap Length",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0062,000b)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Presentation State Relationship",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient Position",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,0086)" : {
         "req" : "3",
         "module" : "Presentation State Identification",
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this Sequence.",
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ],
         "name" : "Content Creator's Identification Code Sequence"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Presentation State",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0245)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         ],
         "name" : "Shadow Offset X"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "name" : "Strain Source",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed",
         "entity" : "Presentation State",
         "req" : "1",
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
         "module" : "SOP Common"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0010,1021)" : {
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size Code Sequence"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "usage" : "M",
         "req" : "3",
         "name" : "Home Community ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0226)" : {
         "desc" : [
            "A number that identifies the Compound Graphic described in this Item. The value shall be unique within this SOP instance.",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Compound Graphic Instance ID",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0246)" : {
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Offset Y"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0258)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "req" : "1",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
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
         "usage" : "M"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "usage" : "M",
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
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0081)" : {
         "entity" : "Presentation State",
         "module" : "Presentation State Identification",
         "desc" : "A description of the content of the SOP Instance.",
         "usage" : "M",
         "req" : "2",
         "name" : "Content Description",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0020)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Dimensions",
         "entity" : "Presentation State",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0243)" : {
         "name" : "Vertical Alignment",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C",
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
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0070,0234)[<0>](0070,0207)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Group",
         "desc" : "Name used to identify the Graphic Group, i.e., the combined graphic object.",
         "usage" : "U",
         "req" : "1",
         "name" : "Graphic Group Label",
         "mod_tables" : [
            "table_C.10-12"
         ]
      },
      "(0018,1604)" : {
         "name" : "Shutter Right Vertical Edge",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "entity" : "Presentation State",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the right edge of the rectangular shutter with respect to pixels in the image given as column.",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "module" : "Display Shutter",
         "req" : "1C"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "req" : "1C",
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
         ],
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,9004)" : {
         "req" : "3",
         "usage" : "M",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0252)" : {
         "name" : "Pattern Off Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)" : {
         "name" : "Major Ticks Sequence",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "The sequence of major ticks on the AXIS object.",
            "Two or more Items shall be present.",
            "Required if Compound Graphic Type (0070,0294) equals AXIS."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(60xx,0022)" : {
         "name" : "Overlay Description",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Presentation State",
         "desc" : "User-defined comments about the overlay.",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3"
      },
      "(0012,0071)" : {
         "req" : "3",
         "module" : "Clinical Trial Series",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0008,0013)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0020)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Dimensions",
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : {
            "list" : [
               [
                  "2",
                  null
               ]
            ],
            "title" : "Enumerated Values:",
            "type" : "variablelist"
         }
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,0015)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
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
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Body Part Examined"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "module" : "General Series",
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
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Presentation State",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
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
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0285)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Pattern Off Opacity",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0242)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "Graphic Annotation",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Horizontal Alignment"
      },
      "(0008,1060)" : {
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0010,0026)" : {
         "name" : "Source Patient Group Identification Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0284)" : {
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Pattern On Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "req" : "1",
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
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag"
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
               "type" : "variablelist",
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
                     "el" : "para",
                     "content" : [
                        "This is the font naming system used by Adobe PDF and defined in ISO/IEC 14496-22."
                     ]
                  },
                  "\n                      "
               ]
            }
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C",
         "name" : "Font Name Type",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0010,1001)" : {
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
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
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Context UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
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
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1155)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Presentation State Relationship",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0245)" : {
         "name" : "Shadow Offset X",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0254)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Dashing Style"
      },
      "(0040,a390)" : {
         "req" : "1C",
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
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence"
      },
      "(0010,0040)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0295)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Group ID",
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "A number that defines the corresponding group object in the Graphic Group Sequence (0070,0234). If the attribute is not present the object does not belong to a group."
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series",
         "req" : "2",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series"
      },
      "(0040,0280)" : {
         "name" : "Comments on the Performed Procedure Step",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Presentation State",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation"
      },
      "(0070,0234)[<0>](0070,0208)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Group",
         "desc" : "Description of the group.",
         "usage" : "U",
         "req" : "3",
         "name" : "Graphic Group Description",
         "mod_tables" : [
            "table_C.10-12"
         ]
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Instance UID of Related Series",
         "module" : "General Series",
         "req" : "1",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,005a)[<0>](0070,0100)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Displayed Area",
         "usage" : "M",
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
                     "linkend" : "sect_C.10.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Presentation Size Mode"
      },
      "(0070,005a)[<0>](0070,0053)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "The bottom right (after spatial transformation) pixel in the referenced image to be displayed, given as column\\row. Column is the horizontal (before spatial transformation) offset (X) and row is the vertical (before spatial transformation) offset (Y) relative to the origin of the pixel data before spatial transformation, which is 1\\1. See ",
            {
               "attrs" : {
                  "linkend" : "figure_C.10.4-1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Displayed Area",
         "req" : "1",
         "name" : "Displayed Area Bottom Right Hand Corner",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Graphic Annotation",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1000)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ],
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Device Serial Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0249)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Bold",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "entity" : "Presentation State"
      },
      "(0100,0420)" : {
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime"
      },
      "(0070,0060)[<0>](0070,0062)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "desc" : "An integer indicating the order in which it is recommended that the layer be rendered, if the display is capable of distinguishing. Lower numbered layers are to be rendered first.",
         "module" : "Graphic Layer",
         "req" : "1",
         "name" : "Graphic Layer Order",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0011)" : {
         "name" : "Bounding Box Bottom Right Hand Corner",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "Location of the Bottom Right Hand Corner (BRHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "req" : "1C",
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
      "(0070,0086)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Presentation State Identification",
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0018,1620)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Vertices of the Polygonal Shutter",
         "req" : "1C",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
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
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "para",
                           "attrs" : {
                              "xml:id" : "para_d59cd0c0-b975-4ac4-adee-bb16895e809c"
                           },
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
         "module" : "Display Shutter",
         "entity" : "Presentation State"
      },
      "(0040,0250)" : {
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date"
      },
      " (0010,0027) " : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0010,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "req" : "1C",
         "name" : "Patient's Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "entity" : "Presentation State",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "req" : "1",
         "name" : "Content Description",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0400,0500)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
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
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0234)[<0>](0070,0295)" : {
         "name" : "Graphic Group ID",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "entity" : "Presentation State",
         "usage" : "U",
         "module" : "Graphic Group",
         "desc" : "A unique number identifying the Graphic Group, i.e., the combined graphic object.",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0251)" : {
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Pattern On Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "desc" : "Person's mailing address"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0284)" : {
         "name" : "Pattern On Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code"
      },
      "(0008,0015)" : {
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Presentation State Relationship",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "name" : "Series Instance UID"
      },
      "(0070,0083)" : {
         "entity" : "Presentation State",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Presentation Creation Time",
         "mod_tables" : [
            "table_C.11.10-1"
         ]
      },
      "(0018,1201)" : {
         "entity" : "Equipment",
         "usage" : "M",
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
         "req" : "3",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0241)" : {
         "entity" : "Presentation State",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Text Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0234)" : {
         "name" : "Graphic Group Sequence",
         "mod_tables" : [
            "table_C.10-12"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Group",
         "usage" : "U",
         "desc" : [
            "Sequence that describes the combined graphic object.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0010,4000)" : {
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments"
      },
      "(60xx,1303)" : {
         "req" : "3",
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
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Standard Deviation"
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
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
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       },
                                       "el" : "olink"
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
                           "el" : "listitem",
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
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     }
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
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "usage" : "M",
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
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0022)" : {
         "name" : "Graphic Data",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "req" : "1C",
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(60xx,0045)" : {
         "entity" : "Presentation State",
         "req" : "3",
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
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Subtype"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series"
      },
      "(0008,0030)" : {
         "req" : "2",
         "usage" : "M",
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Strain Stock Number",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1020)" : {
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0241)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
         "req" : "1",
         "name" : "Text Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0028,2002)" : {
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
         "module" : "ICC Profile",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Color Space",
         "mod_tables" : [
            "table_C.11.15-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action Sequence"
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "Presentation State Identification",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Presentation State",
         "req" : "1C",
         "module" : "Displayed Area",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "req" : "3",
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
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0244)" : {
         "name" : "Shadow Style",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.3.13.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0279)" : {
         "name" : "Tick Label Alignment",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "The alignment of the label with respect to the tick.",
            {
               "type" : "variablelist",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0018,1610)" : {
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Location of the center of the circular shutter with respect to pixels in the image given as row and column.",
         "module" : "Display Shutter",
         "req" : "1C",
         "entity" : "Presentation State",
         "name" : "Center of Circular Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0018,1623)" : {
         "mod_tables" : [
            "table_C.7.6.15-1"
         ],
         "name" : "Shutter Overlay Group",
         "req" : "1",
         "desc" : [
            "Specifies the Group (60xx) of an Overlay stored within the Presentation State IOD that contains the bitmap data, as defined in the ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.9.2"
               },
               "el" : "xref"
            },
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.9.2"
               }
            },
            "."
         ],
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "module" : "Bitmap Display Shutter",
         "entity" : "Presentation State"
      },
      "(0040,0253)" : {
         "module" : "General Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,009d)" : {
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician Identification Sequence"
      },
      "(60xx,1500)" : {
         "name" : "Overlay Label",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Presentation State",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "module" : "Overlay Plane",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3"
      },
      "(0008,1070)" : {
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "entity" : "Series"
      },
      "(0070,0084)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "module" : "Presentation State Identification",
         "req" : "2",
         "name" : "Content Creator's Name",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study ID",
         "req" : "2",
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0258)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Shadow Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0014)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Anchor Point",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Location of a point in the image or Specified Displayed Area to which the Unformatted Text Value (0070,0006) is related, in Anchor Point Annotation Units (0070,0004), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Bounding Box Top Left Hand Corner (0070,0010) and Bounding Box Bottom Right Hand Corner (0070,0011) are not present. May be present otherwise."
         ],
         "entity" : "Presentation State"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Date the Series started.",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0250)" : {
         "module" : "Graphic Annotation",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Italic",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "module" : "General Study",
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
         "req" : "3",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0018)" : {
         "req" : "1",
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.1",
                  "xrefstyle" : "select: label"
               }
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
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID"
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0255)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Pattern",
         "entity" : "Presentation State",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                     "el" : "para",
                     "content" : [
                        "For example, 00FFH defines the dashes with an equal size."
                     ]
                  },
                  "\n                      "
               ]
            },
            "Required if Line Dashing Style (0070,0254) has a value of DASHED."
         ]
      },
      "(4ffe,0001)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "Presentation State Relationship",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "entity" : "Patient",
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
         "req" : "1",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "module" : "Patient",
         "req" : "2",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ]
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
               "type" : "variablelist",
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
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "el" : "para",
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
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
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
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1",
                                          "targetdoc" : "PS3.15"
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
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0256)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Pattern",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0285)" : {
         "name" : "Pattern Off Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "desc" : "Instance UID of Study to which the related Series belongs",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0118)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource UID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0024)" : {
         "entity" : "Presentation State",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Compound Graphic Type (0070,0294) equals RECTANGLE or ELLIPSE."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C",
         "name" : "Graphic Filled",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Modality",
            "entity" : "Series",
            "req" : "1",
            "module" : "General Series",
            "usage" : "M",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.11.9-1"
            ],
            "name" : "Modality",
            "entity" : "Series",
            "req" : "1",
            "module" : "Presentation Series",
            "usage" : "M",
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
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ]
         }
      ],
      "(0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Unique identifier of the Series.",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0022)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Data"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
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
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,2000)" : {
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "name" : "ICC Profile",
         "req" : "1",
         "usage" : "M",
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "module" : "ICC Profile",
         "entity" : "Presentation State"
      },
      "(0070,0060)[<0>](0070,0066)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the layer be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "attrs" : {
                        "xml:id" : "para_befb1458-69b2-4738-9246-1ffb5f4d350c"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Graphic Layer",
         "req" : "3",
         "name" : "Graphic Layer Recommended Display Grayscale Value",
         "mod_tables" : [
            "table_C.10-7"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Text Style Sequence",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State"
      },
      "(0040,0245)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
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
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Sequence that describes the line style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Line Style Sequence",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0295)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "Graphic Annotation",
         "desc" : [
            "A number identifying the group from the Graphic Group Sequence (0070,0234) to which this Item belongs. If this attribute is not present, this Item does not belong to a group.",
            "If Compound Graphic Instance ID (0070,0226) is present in this Item, the value of Graphic Group ID (0070,0295) shall be the same as the value of Graphic Group ID (0070,0295) of the corresponding Item in the Compound Graphic Sequence (0070,0209) with the same Compound Graphic Instance ID (0070,0226)."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Group ID"
      },
      " (0010,0027) [<0>](0010,0028)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0244)" : {
         "entity" : "Presentation State",
         "desc" : [
            "The shadow style of the line to be displayed.",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.2"
                  }
               }
            ]
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Shadow Style",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI"
      },
      "(0020,0013)" : [
         {
            "mod_tables" : [
               "table_C.11.10-1",
               "table_10-12"
            ],
            "name" : "Instance Number",
            "req" : "1",
            "desc" : "A number that identifies this SOP Instance.",
            "module" : "Presentation State Identification",
            "usage" : "M",
            "entity" : "Presentation State"
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number",
            "entity" : "Presentation State",
            "req" : "3",
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "usage" : "M"
         }
      ],
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "M",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "name" : "Type of Instances",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Type of object instances referenced.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0018,1600)" : [
         {
            "mod_tables" : [
               "table_C.7-17a"
            ],
            "name" : "Shutter Shape",
            "entity" : "Presentation State",
            "req" : "1",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
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
                     "attrs" : {
                        "linkend" : "figure_C.7-4b",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "module" : "Display Shutter"
         },
         {
            "entity" : "Presentation State",
            "req" : "1",
            "module" : "Bitmap Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
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
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "name" : "Shutter Shape"
         }
      ],
      "(0018,1602)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Left Vertical Edge",
         "entity" : "Presentation State",
         "req" : "1C",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the left edge of the rectangular shutter with respect to pixels in the image given as column.",
         "module" : "Display Shutter"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Series",
         "req" : "3",
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
         "usage" : "M",
         "module" : "General Series"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0244)" : {
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Style"
      },
      "(60xx,0040)" : {
         "name" : "Overlay Type",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Presentation State",
         "desc" : [
            "Indicates whether this overlay represents a region of interest or other graphics.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "G",
                     "Graphics"
                  ],
                  [
                     "R",
                     "ROI"
                  ]
               ]
            }
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient"
      },
      "(0070,0041)" : {
         "entity" : "Presentation State",
         "module" : "Spatial Transformation",
         "usage" : "C - Required if rotation, flipping or magnification are to be applied to referenced image(s)",
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
                     "attrs" : {
                        "xml:id" : "para_c7a32424-a3d2-41e2-a5ed-87347c8dc7cb"
                     },
                     "el" : "para",
                     "content" : [
                        "No vertical flip is specified since the same result can be achieved by a combination of a 180 degree rotation and a horizontal flip."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "name" : "Image Horizontal Flip",
         "mod_tables" : [
            "table_C.10-6"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Presentation State",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0004)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Units of measure for the axes of the text anchor point annotation.",
            "Enumerated Values for Anchor Point Annotation Units (0070,0004) are the same as for Bounding Box Annotation Units (0070,0003).",
            "Required if Anchor Point (0070,0014) is present."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C",
         "name" : "Anchor Point Annotation Units",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "M"
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
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
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0248)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Underlined"
      },
      "(0020,0011)" : {
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "A number that identifies this Series.",
         "usage" : "M",
         "req" : "2"
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "req" : "3"
      },
      "(0010,1100)" : {
         "name" : "Referenced Patient Photo Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0023)" : {
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            [
               "The shape of graphic that is to be drawn. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.10.5.1.2",
                     "xrefstyle" : "select: label"
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
         "module" : "Graphic Annotation",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Graphic Type",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0226)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "3",
         "name" : "Compound Graphic Instance ID",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Presentation State"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
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
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
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
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "req" : "1C",
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
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,1090)" : {
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer's Model Name"
      },
      "(0070,005a)[<0>](0070,0102)" : {
         "name" : "Presentation Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "entity" : "Presentation State",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b5005f7b-391d-4be0-ab15-405c0c6cfbe4"
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
                                    "This value must be specified even if the aspect ratio is 1:1."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_54875bde-8e88-4796-8e82-2ac2abc5faf5"
                                 }
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0008,1140)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Presentation State",
         "req" : "1C",
         "module" : "Graphic Annotation",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0252)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Pattern Off Color CIELab Value",
         "entity" : "Presentation State",
         "req" : "3",
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Presentation State",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0251)" : {
         "name" : "Pattern On Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "entity" : "Presentation State",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0010)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Bounding Box Top Left Hand Corner",
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Location of the Top Left Hand Corner (TLHC) of the bounding box in which Unformatted Text Value (0070,0006) is to be displayed, in Bounding Box Annotation Units (0070,0003), given as column\\row. Column is the horizontal offset and row is the vertical offset.",
            "Required if Anchor Point (0070,0014) is not present. May be present otherwise.",
            "Required if Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "entity" : "Presentation State",
         "req" : "2",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Referenced Segment Number"
      },
      "(0010,0212)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0254)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institutional Department Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "req" : "1",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0229)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "CSS Font Name"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,2203)" : {
         "req" : "2C",
         "usage" : "U",
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
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0003)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Bounding Box Annotation Units",
         "req" : "1C",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) or Bounding Box Bottom Right Hand Corner (0070,0011) is present."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)" : {
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Compound Graphic Sequence"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
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
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0070,0060)[<0>](0070,0068)" : {
         "mod_tables" : [
            "table_C.10-7"
         ],
         "name" : "Graphic Layer Description",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "desc" : "A free text description of the contents of this layer.",
         "module" : "Graphic Layer",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "req" : "1",
         "usage" : "M",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "entity" : "Presentation State"
      },
      "(0040,1012)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
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
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0247)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Color CIELab Value",
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         ]
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0287)[<2>](0070,0289)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Tick Label",
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "The label of the tick.",
         "module" : "Graphic Annotation"
      },
      "(0100,0410)" : {
         "req" : "3",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "type" : "variablelist",
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
               ]
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0251)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern On Color CIELab Value"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "name" : "DateTime"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "req" : "2",
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0070,0001)[<0>](0070,0002)" : {
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "The layer defined in the ",
            {
               "attrs" : {
                  "linkend" : "sect_C.10.7",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            " in which the graphics or text is to be rendered."
         ],
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Graphic Layer"
      },
      "(0008,009c)" : {
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "name" : "Consulting Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,1030)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source Registry Code Sequence",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0228)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                     "attrs" : {
                        "xml:id" : "para_f9bd128a-6616-4a5b-8fd9-6a7343ebd276"
                     },
                     "el" : "para",
                     "content" : [
                        "This is the font naming system used by Adobe PDF and defined in ISO/IEC 14496-22."
                     ]
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
         "name" : "Font Name Type"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0021)" : {
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Number of Graphic Points",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Number of data points in this graphic.",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(60xx,1301)" : {
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "desc" : [
            "Number of pixels in ROI area.",
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
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "3",
         "name" : "ROI Area",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(60xx,0011)" : {
         "entity" : "Presentation State",
         "module" : "Overlay Plane",
         "desc" : "Number of Columns in Overlay.",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "1",
         "name" : "Overlay Columns",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0247)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Color CIELab Value",
         "entity" : "Presentation State",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0070,0060)[<0>](0070,0002)" : {
         "name" : "Graphic Layer",
         "mod_tables" : [
            "table_C.10-7"
         ],
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
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "module" : "Graphic Layer",
         "req" : "1"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0070,0087)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3d164798-44f3-4257-89fd-277d3c965c3d"
                     },
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
         ],
         "name" : "Alternate Content Description Sequence"
      },
      "(0070,0042)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Negative values are not permitted since the Value Representation is unsigned."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c7b27490-fc1c-4738-b72f-a7e27350b392"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if rotation, flipping or magnification are to be applied to referenced image(s)",
         "module" : "Spatial Transformation",
         "mod_tables" : [
            "table_C.10-6"
         ],
         "name" : "Image Rotation"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study",
         "usage" : "M",
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
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,1048)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "req" : "3",
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
         ]
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "entity" : "Study",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0243)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
               ]
            },
            "Required if Bounding Box Top Left Hand Corner (0070,0010) is present."
         ],
         "req" : "3",
         "name" : "Vertical Alignment",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(0008,1111)" : {
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0284)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern On Opacity",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration",
         "entity" : "Presentation State",
         "req" : "3",
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
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
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
         "module" : "General Series",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0015)" : {
         "name" : "Anchor Point Visibility",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1C"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
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
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0284)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1",
         "name" : "Pattern On Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0009)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes a graphic annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "name" : "Graphic Object Sequence",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0008,1115)" : {
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Presentation State Relationship",
         "usage" : "M",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of one Series to which the Presentation applies.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Time the Series started.",
         "req" : "3",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
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
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0251)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern On Color CIELab Value",
         "req" : "1",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State"
      },
      "(0010,0216)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Stock Sequence",
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0256)" : {
         "req" : "1C",
         "module" : "Graphic Annotation",
         "desc" : [
            "A binary fill pattern. A set bit corresponds to foreground. An unset bit corresponds to background.",
            "A 128 byte value defining a 32x32 1 bit matrix. This fill pattern is replicated in tiles inside the boundaries of the graphic type.",
            "The most significant bit corresponds to the leftmost pixel in the row.",
            "The fill pattern relates to display pixels where one bit value corresponds to one display pixel.",
            "Required if Fill Mode (0070,0257) equals STIPPELED."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Pattern"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                        ",
                        {
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
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0248)" : {
         "name" : "Underlined",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "1"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
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
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0258)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Opacity",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0010,0213)" : {
         "req" : "3",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Nomenclature"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
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
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     },
                     "el" : "para",
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Overlay Origin",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0008,0106)" : {
         "entity" : "Presentation State",
         "usage" : "M",
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
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Context Group Version",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0245)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Shadow Offset X",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
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
         "req" : "1C"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "usage" : "M",
         "req" : "2"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0005)" : {
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Units of measure for the axes of the graphic annotation.",
            "Enumerated Values for Graphic Annotation Units (0070,0005) are the same as for Bounding Box Annotation Units (0070,0003)."
         ],
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Graphic Annotation Units",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0123)" : {
         "entity" : "Presentation State",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status"
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "usage" : "M",
         "module" : "Patient",
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0082)" : {
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(60xx,1302)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Mean",
         "req" : "3",
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
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "entity" : "Presentation State"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0070,0080)" : {
         "module" : "Presentation State Identification",
         "usage" : "M",
         "desc" : "A label that is used to identify this SOP Instance.",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Content Label",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
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
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "entity" : "Study"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0070,005a)[<0>](0008,1140)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "usage" : "M",
         "module" : "Displayed Area",
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
               ", to which this displayed area selection applies."
            ],
            "One or more Items shall be included in this Sequence.",
            [
               "Required if the displayed area selection in this Item does not apply to all the images and frames listed in the ",
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
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Referenced Image Sequence"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0244)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Shadow Style",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ]
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "Presentation State Identification",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0040,0251)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
                     "el" : "orderedlist",
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "entity" : "Study",
         "req" : "1C",
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
         "usage" : "U",
         "module" : "Clinical Trial Study"
      },
      "(0100,0426)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Equipment",
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
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
                           "el" : "listitem",
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
      "(0008,1052)[<0>](0008,0082)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0245)" : {
         "name" : "Shadow Offset X",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1624)" : [
         {
            "module" : "Presentation State Shutter",
            "usage" : "M",
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
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: title",
                        "linkend" : "sect_C.7.6.15"
                     }
                  },
                  " is present and the SOP Class is other than Grayscale Softcopy Presentation State Storage."
               ],
               {
                  "el" : "note",
                  "content" : [
                     "\n                  ",
                     {
                        "content" : [
                           "The requirement in this module is type 1C, which overrides the type 3 in the ",
                           {
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.11"
                              },
                              "el" : "xref"
                           },
                           " and ",
                           {
                              "el" : "xref",
                              "attrs" : {
                                 "xrefstyle" : "select: title",
                                 "linkend" : "sect_C.7.6.15"
                              }
                           },
                           "."
                        ],
                        "attrs" : {
                           "xml:id" : "para_c32bf2c4-03a3-450c-a29d-bb0017da52c9"
                        },
                        "el" : "para"
                     },
                     "\n                "
                  ]
               }
            ],
            "req" : "1C",
            "entity" : "Presentation State",
            "name" : "Shutter Presentation Color CIELab Value",
            "mod_tables" : [
               "table_C.11.12-1"
            ]
         },
         {
            "module" : "Display Shutter",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
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
            "req" : "3",
            "entity" : "Presentation State",
            "name" : "Shutter Presentation Color CIELab Value",
            "mod_tables" : [
               "table_C.7-17a"
            ]
         },
         {
            "mod_tables" : [
               "table_C.7.6.15-1"
            ],
            "name" : "Shutter Presentation Color CIELab Value",
            "req" : "3",
            "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
            "module" : "Bitmap Display Shutter",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "req" : "2C",
         "name" : "Patient Breed Description",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0028,0108)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "The minimum value of all images in this Series.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Smallest Pixel Value in Series"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0262)" : {
         "req" : "1C",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
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
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Diameter of Visibility"
      },
      "(0018,1606)" : {
         "name" : "Shutter Upper Horizontal Edge",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the upper edge of the rectangular shutter with respect to pixels in the image given as row.",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "module" : "Display Shutter",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0274)" : {
         "entity" : "Presentation State",
         "req" : "1C",
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
               "type" : "variablelist",
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
            "Required if Compound Graphic Type (0070,0294) equals RULER, AXIS or CROSSHAIR."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Tick Alignment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,21b0)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "entity" : "Study",
         "name" : "Additional Patient History",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Fill Style Sequence",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0070,0001)[<0>](0070,0008)" : {
         "entity" : "Presentation State",
         "req" : "1C",
         "desc" : [
            "Sequence that describes a text annotation.",
            "One or more Items shall be included in this Sequence.",
            "Either one or both of Text Object Sequence (0070,0008) or Graphic Object Sequence (0070,0009) are required."
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Text Object Sequence"
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1"
      },
      "(0070,0001)" : {
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "A sequence of Items each of which represents a group of annotations composed of graphics or text or both.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Graphic Annotation Sequence",
         "mod_tables" : [
            "table_C.10-5"
         ]
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "req" : "3",
         "module" : "Clinical Trial Study",
         "usage" : "U",
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
         "name" : "Clinical Trial Time Point Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0008,0014)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "M",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0247)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Shadow Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ]
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Date the Study started.",
         "req" : "2",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0273)" : {
         "name" : "Rotation Point",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "1C"
      },
      "(0070,005a)[<0>](0008,1140)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.10-4",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Displayed Area",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Presentation State"
      },
      "(0070,005a)[<0>](0070,0103)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Displayed Area",
         "desc" : [
            "Ratio of displayed pixels to source pixels, specified in one dimension.",
            "Required if Presentation Size Mode (0070,0100) is MAGNIFY.",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1d792703-1c0d-4b6e-9b1d-41d30d3663d2"
                                 },
                                 "content" : [
                                    "A value of 1.0 would imply that one pixel in the referenced image would be displayed as one pixel on the display (i.e., it would not be interpolated if the aspect ratio of the image pixels is 1:1)."
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
                                 "attrs" : {
                                    "xml:id" : "para_d6d1222c-48c5-44c7-838b-ebe21643872c"
                                 },
                                 "content" : [
                                    "A value of 2.0 would imply that one pixel in the referenced image would be displayed as 4 pixels on the display (i.e., up-sampled by a factor of 2 in each of the row and column directions)."
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
                                    "xml:id" : "para_3aa44ae0-e6bd-4a52-987d-b968dfcddb6e"
                                 },
                                 "el" : "para",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d2c687d8-cf4c-43d7-a265-377736387f90"
                                 },
                                 "content" : [
                                    "If the source pixels have an aspect ratio of other than 1:1, then they are assumed to have been interpolated to a display pixel aspect ratio of 1:1 prior to magnification."
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Presentation Pixel Magnification Ratio"
      },
      "(0008,001a)" : {
         "req" : "3",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "usage" : "M",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID"
      },
      "(0070,0060)[<0>](0070,0401)" : {
         "name" : "Graphic Layer Recommended Display CIELab Value",
         "mod_tables" : [
            "table_C.10-7"
         ],
         "entity" : "Presentation State",
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
         "usage" : "C - Required if Graphic Annotations or Overlays or Curves are to be applied to referenced image(s)",
         "module" : "Graphic Layer",
         "req" : "3"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         "module" : "Patient",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Presentation State",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "name" : "Repository Unique ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Presentation State",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "entity" : "Study",
         "req" : "3",
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
               ]
            }
         ],
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0249)" : {
         "name" : "Bold",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "1"
      },
      "(60xx,0100)" : {
         "req" : "1",
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See ",
                        {
                           "el" : "link",
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           },
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Overlay Plane",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Bits Allocated"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0018,1612)" : {
         "name" : "Radius of Circular Shutter",
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "entity" : "Presentation State",
         "module" : "Display Shutter",
         "desc" : "Required if Shutter Shape (0018,1600) is CIRCULAR. Radius of the circular shutter with respect to pixels in the image given as a number of pixels along the row direction.",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
         "req" : "1",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID"
      },
      "(0008,001b)" : {
         "entity" : "Presentation State",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient",
         "req" : "1C",
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0038,0014)" : {
         "name" : "Issuer of Admission ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "desc" : "The maximum value of all images in this Series.",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Presentation State"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0247)" : {
         "name" : "Shadow Color CIELab Value",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0229)" : {
         "name" : "CSS Font Name",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "entity" : "Presentation State",
         "desc" : "Generic font name as defined within CSS (Cascading Style Sheets). Default fontname, if the font specified in Font Name (0070,0227) is not present or can not be rendered.",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1"
      },
      "(0018,5100)" : {
         "module" : "General Series",
         "usage" : "M",
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
         "req" : "2C",
         "entity" : "Series",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0012,0010)" : {
         "entity" : "Patient",
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
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0254)" : {
         "req" : "1",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.5.1.3.13.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Dashing Style"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0246)" : {
         "name" : "Shadow Offset Y",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0242)" : {
         "req" : "3",
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Horizontal Alignment"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
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
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
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
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method"
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Clinical Trial Study",
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
         "req" : "2"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0278)" : {
         "name" : "Show Tick Label",
         "mod_tables" : [
            "table_C.10-5"
         ],
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
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C",
         "entity" : "Presentation State"
      },
      "(60xx,0102)" : {
         "module" : "Overlay Plane",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See ",
                        {
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           },
                           "el" : "link"
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Overlay Bit Position",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0006)" : {
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.12.1"
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
                              "targetptr" : "PS3.5",
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2671b17d-3bd6-48d8-8f8a-1bc0765a82e0"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Unformatted Text Value"
      },
      "(60xx,3000)" : {
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
         "usage" : "C - Required if Overlay is to be applied to referenced image(s) or the  is present",
         "module" : "Overlay Plane",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Overlay Data",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0020,0060)" : {
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Series"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0227)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Font Name",
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Font name in a standard type."
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)[<2>](0070,0227)" : {
         "name" : "Font Name",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Font name in a standard type.",
         "req" : "3",
         "entity" : "Presentation State"
      },
      "(0100,0424)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0232)[<2>](0070,0253)" : {
         "entity" : "Presentation State",
         "req" : "1",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Thickness"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "entity" : "Presentation State",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "Presentation State Identification",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ]
      },
      "(0040,0275)" : {
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Request Attributes Sequence"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Presentation State",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0400,0561)" : {
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0231)[<2>](0070,0246)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Shadow Offset Y",
         "entity" : "Presentation State",
         "req" : "1",
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
         ],
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Type of Patient ID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : [
            "The type of identifier in this item.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for Requested Procedure Code Sequence"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
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
         "name" : "Universal Entity ID Type"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0257)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Fill Mode",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)[<2>](0070,0257)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Mode",
         "entity" : "Presentation State",
         "req" : "1",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
                     "linkend" : "sect_C.10.5.1.3.14.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0253)" : {
         "req" : "1",
         "module" : "Graphic Annotation",
         "desc" : "Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282).",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Line Thickness"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Description"
      },
      "(0018,1020)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Software Versions"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
         "module" : "Patient",
         "req" : "3"
      },
      "(0070,0001)[<0>](0008,1140)" : {
         "name" : "Referenced Image Sequence",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "entity" : "Presentation State",
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
               ", to which this graphic annotation applies."
            ],
            "One or more Items shall be included in this Sequence.",
            [
               "Required if graphic annotations in this Item do not apply to all the images and frames listed in the ",
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
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "req" : "1C"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0231)" : {
         "req" : "3",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Sequence that describes the text style.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5a"
         ],
         "name" : "Text Style Sequence"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0070,005a)[<0>](0070,0101)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Presentation Pixel Spacing",
         "req" : "1C",
         "module" : "Displayed Area",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "This value may be different from Pixel Spacing (0028,0030) or Imager Pixel Spacing (0018,1164) specified in the referenced image, which are ignored, since some form of calibration may have been performed (for example by reference to an object of known size in the image)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_5aaa7c82-2a2a-4907-8795-c4f96b35d3f4"
                                 },
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
                                    "If the row and column spacing are different, then the pixel aspect ratio of the image is not 1:1."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_7b070d90-65d8-4103-9440-686e60e41212"
                                 }
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
            "Required if Presentation Size Mode (0070,0100) is TRUE SIZE, in which case the values will correspond to the physical distance between the center of each pixel on the display device.",
            "May be present if Presentation Size Mode (0070,0100) is SCALE TO FIT or MAGNIFY, in which case the values are used to compute the aspect ratio of the image pixels."
         ],
         "entity" : "Presentation State"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
         "req" : "1",
         "entity" : "Presentation State"
      },
      "(0018,1608)" : {
         "mod_tables" : [
            "table_C.7-17a"
         ],
         "name" : "Shutter Lower Horizontal Edge",
         "entity" : "Presentation State",
         "req" : "1C",
         "desc" : "Required if Shutter Shape (0018,1600) is RECTANGULAR. Location of the lower edge of the rectangular shutter with respect to pixels in the image given as row.",
         "module" : "Display Shutter",
         "usage" : "C - Required if a Display Shutter is to be applied to referenced image(s) and the  is not present"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0070,005a)" : {
         "entity" : "Presentation State",
         "req" : "1",
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
         "module" : "Displayed Area",
         "usage" : "M",
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Displayed Area Selection Sequence"
      },
      "(0070,005a)[<0>](0048,0301)" : {
         "mod_tables" : [
            "table_C.10-4"
         ],
         "name" : "Pixel Origin Interpretation",
         "req" : "1C",
         "usage" : "M",
         "module" : "Displayed Area",
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
         "entity" : "Presentation State"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0070,0001)[<0>](0070,0008)[<1>](0070,0226)" : {
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "module" : "Graphic Annotation",
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.10-5"
         ],
         "name" : "Compound Graphic Instance ID"
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0070,005a)[<0>](0070,0052)" : {
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
         "usage" : "M",
         "module" : "Displayed Area",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Displayed Area Top Left Hand Corner",
         "mod_tables" : [
            "table_C.10-4"
         ]
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0233)[<2>](0070,0285)" : {
         "entity" : "Presentation State",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0).",
         "module" : "Graphic Annotation",
         "req" : "1",
         "name" : "Pattern Off Opacity",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Presentation State",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0010,0219)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0008,0050)" : {
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "module" : "General Study",
         "req" : "2",
         "entity" : "Study"
      },
      "(0008,010f)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Presentation State",
         "name" : "Context Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure."
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0246)" : {
         "name" : "Shadow Offset Y",
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "entity" : "Presentation State",
         "module" : "Graphic Annotation",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
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
         "req" : "1"
      },
      "(0070,0001)[<0>](0070,0209)[<1>](0070,0233)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5c"
         ],
         "name" : "Fill Style Sequence",
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "desc" : [
            "Sequence that describes the fill style.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "Graphic Annotation"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "req" : "3",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "entity" : "Presentation State",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "3",
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
         ],
         "usage" : "M",
         "module" : "Patient"
      },
      "(0070,0001)[<0>](0070,0009)[<1>](0070,0232)[<2>](0070,0285)" : {
         "mod_tables" : [
            "table_C.10-5",
            "table_C.10-5b"
         ],
         "name" : "Pattern Off Opacity",
         "entity" : "Presentation State",
         "req" : "3",
         "usage" : "C - Required if Graphic Annotations are to be applied to referenced image(s)",
         "module" : "Graphic Annotation",
         "desc" : "Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."
      },
      "(0008,0016)" : {
         "entity" : "Presentation State",
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference",
         "req" : "1",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Presentation State"
      },
      "(0010,2297)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1115)[<0>](0008,1140)" : {
         "req" : "1",
         "module" : "Presentation State Relationship",
         "usage" : "M",
         "desc" : [
            "The set of images and frames to which the Presentation applies. These shall be of the Study defined by Study Instance UID (0020,000D) and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence.",
            "The referenced SOP Class shall be the same for all Images in any Item of this Referenced Series Sequence (0008,1115)."
         ],
         "entity" : "Presentation State",
         "mod_tables" : [
            "table_C.11.11-1b"
         ],
         "name" : "Referenced Image Sequence"
      },
      "(0070,0086)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.11.10-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Presentation State",
         "usage" : "M",
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
         "module" : "Presentation State Identification",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,1140)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.11.11-1b",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Presentation State",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Presentation State Relationship",
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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
