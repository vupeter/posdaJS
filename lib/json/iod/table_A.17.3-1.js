var data = {
   "tags" : {
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "2C",
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
         "entity" : "Study",
         "usage" : "U"
      },
      "(0028,1102)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "1C",
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1111)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
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
         "usage" : "M"
      },
      "(3002,0011)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : [
            "Physical distance (in mm) between the center of each image pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.2.3"
               },
               "el" : "xref"
            },
            " and ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Image Plane Pixel Spacing"
      },
      "(0008,0031)" : {
         "usage" : "M",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3"
      },
      "(0028,3000)" : {
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "name" : "Modality LUT Sequence",
         "req" : "1C",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(3002,0030)[<0>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "1C",
         "desc" : "Identifies corresponding image frame in multi-frame image. Required if there is more than one item in Exposure Sequence (3002,0030), and image is a multi-frame image.",
         "name" : "Referenced Frame Number",
         "entity" : "Image"
      },
      "(0008,002a)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Acquisition DateTime",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the Synchronization Module in Acquisition Time Synchronized (0018,1800)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "name" : "Patient Orientation"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "entity" : "Study"
      },
      "(0012,0040)" : {
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "name" : "Clinical Trial Subject ID",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1101)" : {
         "usage" : "M",
         "entity" : "Image",
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
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0008,1062)" : {
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0028,0034)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image",
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
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "usage" : "M"
      },
      "(300c,0006)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Beam Number",
         "desc" : "Uniquely identifies the corresponding N-segment treatment beam specified by Beam Number (300A,00C0) within Beam Sequence in RT Beams Module within the RT Plan referenced in Referenced RT Plan Sequence (300C,0002).",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "req" : "3",
         "usage" : "M"
      },
      "(7fe0,0010)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Pixel Data",
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
         ]
      },
      "(0012,0083)" : {
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
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
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0432)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Applicator Aperture Shape",
         "desc" : [
            "Aperture shape of the applicator.",
            {
               "list" : [
                  [
                     "SYM_SQUARE",
                     "A square-shaped aperture symmetrical to the central axis."
                  ],
                  [
                     "SYM_RECTANGLE",
                     "A rectangular-shaped aperture symmetrical to the central axis."
                  ],
                  [
                     "SYM_CIRCULAR",
                     "A circular-shaped aperture symmetrical to the central axis."
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,1020)" : {
         "usage" : "M",
         "entity" : "Equipment",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "usage" : "M",
         "entity" : "Series",
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
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0008,0018)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0020,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Patient Orientation",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "usage" : "M"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study ID",
         "desc" : "User or equipment generated Study identifier."
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "name" : "High Bit",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID",
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
         "usage" : "M"
      },
      "(0028,0120)" : {
         "name" : "Pixel Padding Value",
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient."
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
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
         ],
         "name" : "Certificate Type"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
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
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,2112)" : {
         "name" : "Lossy Image Compression Ratio",
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
                                    "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
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
                                    "For historical reasons, the lossy compression ratio may also be described in Derivation Description (0008,2111)."
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0080)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located."
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "req" : "1C"
      },
      "(3002,0010)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "RT Image Orientation",
         "desc" : "The direction cosines of the first row and the first column with respect to the IEC X-RAY IMAGE RECEPTOR coordinate system. Required if RT Image Plane (3002,000C) is NON_NORMAL. May be present otherwise.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "req" : "1C",
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,0424)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "General Accessory Number",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-38",
            "table_10-11"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0010,2297)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Time Range"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
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
         ],
         "name" : "Certified Timestamp Type"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "entity" : "Image",
         "name" : "Samples per Pixel",
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
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,0100)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "desc" : "Physical thickness of block (in mm) parallel to radiation beam axis.",
         "name" : "Block Thickness",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1",
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "desc" : "Name of the patient's referring physician",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,0009)" : {
         "entity" : "Image",
         "name" : "Frame Increment Pointer",
         "desc" : [
            "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.6.1.2"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "module" : "Multi-frame",
         "usage" : "C - Required if pixel data is multi-frame data."
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0008,0064)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2",
         "name" : "Conversion Type",
         "desc" : [
            "Describes the kind of image conversion.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DV",
                     "Digitized Video"
                  ],
                  [
                     "DI",
                     "Digital Interface"
                  ],
                  [
                     "DF",
                     "Digitized Film"
                  ],
                  [
                     "WSD",
                     "Workstation"
                  ]
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0012,0064)" : {
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(0020,4000)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "User-defined comments about the image",
         "name" : "Image Comments",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(300e,0008)" : {
         "usage" : "U",
         "entity" : "Image",
         "name" : "Reviewer Name",
         "desc" : "Name of person who reviewed object. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "req" : "2C",
         "module" : "Approval",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(0010,2299)" : {
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(3002,000c)" : {
         "entity" : "Image",
         "name" : "RT Image Plane",
         "desc" : [
            "Describes whether or not image plane is normal to beam axis.",
            {
               "list" : [
                  [
                     "NORMAL",
                     "image plane normal to beam axis"
                  ],
                  [
                     "NON_NORMAL",
                     "image plane non-normal to beam axis"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(3002,0026)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : [
            "Distance from radiation machine source to image plane (in mm) along radiation beam axis. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.2.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "RT Image SID",
         "usage" : "M"
      },
      "(300a,0120)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Treatment machine beam limiting device (collimator) angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees).",
         "name" : "Beam Limiting Device Angle",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0028,1056)" : {
         "name" : "VOI LUT Function",
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
               ]
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1140)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Image Sequence",
         "entity" : "Image"
      },
      "(0008,001b)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1041)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Pixel Intensity Relationship Sign",
         "desc" : [
            "The sign of the relationship between the Pixel sample values stored in Pixel Data (7FE0,0010) and the X-Ray beam intensity.",
            "Required if Pixel Intensity Relationship (0028,1040) is present.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1",
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
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0028,3000)[<0>](0028,3003)" : {
         "entity" : "Image",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "name" : "LUT Explanation",
         "req" : "3",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00f5)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "name" : "Block Tray ID",
         "desc" : "User-supplied identifier for block tray.",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Rows",
         "desc" : "Number of rows in the image.",
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "name" : "Calculated Frame List",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00f6)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2",
         "desc" : "Radiation Source to attachment edge of block tray assembly (mm).",
         "name" : "Source to Block Tray Distance",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "entity" : "Image",
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
               "list" : [
                  [
                     "MONO",
                     "1 signal"
                  ],
                  [
                     "STEREO",
                     "2 simultaneously acquired (left and right) signals"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Channel Mode",
         "req" : "1",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M"
      },
      "(300c,0009)" : {
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number (300C,0006) at which image acquisition ends.",
         "name" : "End Cumulative Meterset Weight",
         "usage" : "M"
      },
      "(0040,0245)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M"
      },
      "(0040,0254)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "entity" : "Image",
         "name" : "Channel Identification Code",
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "req" : "1",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ]
      },
      "(3002,0003)" : {
         "usage" : "M",
         "name" : "RT Image Name",
         "desc" : "User-defined name for RT Image.",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3"
      },
      "(0018,1050)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "entity" : "Equipment"
      },
      "(3002,0030)[<0>](300a,0420)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of General Accessories associated with the beam producing this image.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "General Accessory Sequence",
         "entity" : "Image"
      },
      "(0028,1203)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
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
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(300a,014a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               }
            },
            "."
         ],
         "name" : "Gantry Pitch Angle",
         "usage" : "M"
      },
      "(0008,0005)" : {
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
         "name" : "Specific Character Set",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(300a,0129)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "name" : "Table Top Longitudinal Position",
         "desc" : "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm).",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,00b6)[<1>](300a,00be)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Leaf Position Boundaries",
         "desc" : "Boundaries (in mm) of beam limiting device (collimator) leaves (elements) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), i.e., X-axis for MLCY, Y-axis for MLCX. Contains N+1 values, where N is the Number of Leaf/Jaw Pairs (300A,00BC), starting from Leaf (Element) Pair 1. Required if RT Beam Limiting Device Type (300A,00B8) is MLCX or MLCY. May be present otherwise.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M"
      },
      "(3002,0030)[<0>](0018,9330)" : {
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "X-Ray Tube Current in mA. An average in the case of fluoroscopy (continuous radiation mode).",
         "name" : "X-Ray Tube Current in mA",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0435)" : {
         "entity" : "Image",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in Y-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "name" : "Applicator Opening Y",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(3002,0030)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "name" : "Exposure Sequence",
         "desc" : [
            "Sequence of Exposure parameter sets, corresponding to exposures used in generating the image.",
            [
               "One or more items are permitted in this sequence. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.2.4"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0020,0052)" : {
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "1",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,00b6)[<1>](300a,00bc)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "name" : "Number of Leaf/Jaw Pairs",
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "entity" : "Image",
         "desc" : "Machine-readable identifier for this accessory",
         "name" : "Accessory Code",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f4)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence of blocks associated with Beam. Required if Number of Blocks (300A,00F0) is non-zero.",
            "Zero or more items shall be included in this sequence."
         ],
         "name" : "Block Sequence",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "usage" : "M"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0028,0102)" : [
         {
            "usage" : "M",
            "entity" : "Image",
            "name" : "High Bit",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "module" : "RT Image",
            "req" : "1",
            "desc" : [
               "Most significant bit for each pixel sample. Each sample shall have the same high bit. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.2.6.5"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ],
            "name" : "High Bit",
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "usage" : "M"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
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
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "req" : "1C",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "name" : "Distribution Type",
         "entity" : "Study"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "usage" : "U",
         "name" : "Device Volume",
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
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U"
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
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Simple Frame List",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "2",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "name" : "Manufacturer",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "entity" : "Image",
         "name" : "Encrypted Attributes Sequence",
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
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "req" : "3",
         "name" : "Performed Procedure Step ID",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Date of Last Calibration",
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
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "name" : "Referenced Study Sequence",
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
         "entity" : "Study"
      },
      "(0010,1010)" : {
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "name" : "Patient's Age",
         "usage" : "U"
      },
      "(0028,1051)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "entity" : "Image",
         "name" : "Window Width",
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
         ]
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "name" : "Study Description",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,3010)[<0>](0028,3006)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "entity" : "Image",
         "name" : "LUT Data",
         "desc" : "LUT Data in this Sequence."
      },
      "(0010,1001)" : {
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0028,3010)" : {
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "name" : "VOI LUT Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "usage" : "U"
      },
      "(003a,0300)[<0>](003a,0208)" : {
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Channel Source Sequence",
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "req" : "1",
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,0422)" : {
         "name" : "General Accessory Description",
         "desc" : "User supplied description of General Accessory.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "name" : "Scheduled Procedure Step Description"
      },
      "(0008,0060)" : {
         "desc" : [
            "Type of equipment that originally acquired the data.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "RTIMAGE",
                     "RT Image"
                  ],
                  [
                     "RTDOSE",
                     "RT Dose"
                  ],
                  [
                     "RTSTRUCT",
                     "RT Structure Set"
                  ],
                  [
                     "RTPLAN",
                     "RT Plan"
                  ],
                  [
                     "RTRECORD",
                     "RT Treatment Record"
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Modality",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0028,1040)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "name" : "Pixel Intensity Relationship",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer"
      },
      "(0400,0561)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Original Attributes Sequence",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0020,0013)" : [
         {
            "usage" : "M",
            "name" : "Instance Number",
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
            "entity" : "Image",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "req" : "2"
         },
         {
            "usage" : "M",
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "entity" : "Image",
            "module" : "SOP Common",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "req" : "3"
         }
      ],
      "(0008,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "2",
         "name" : "Study Date",
         "desc" : "Date the Study started.",
         "entity" : "Study"
      },
      "(3002,0030)[<0>](3002,0034)" : {
         "entity" : "Image",
         "name" : "Diaphragm Position",
         "desc" : "Positions of diaphragm jaw pairs (in mm) in IEC BEAM LIMITING DEVICE coordinate axis in the IEC order X1, X2, Y1, Y2.",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0028,0103)" : [
         {
            "req" : "1",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image",
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
            "usage" : "M"
         },
         {
            "name" : "Pixel Representation",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.2.6.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ],
            "entity" : "Image",
            "module" : "RT Image",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0008,3010)" : {
         "entity" : "Image",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Irradiation Event UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "entity" : "Image",
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
         "name" : "Photometric Interpretation",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "1",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "name" : "Reason for the Attribute Modification",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
         "name" : "Certified Timestamp",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,0032)" : {
         "entity" : "Image",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "name" : "Acquisition Time",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0144)" : {
         "entity" : "Image",
         "name" : "Table Top Roll Angle",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system (degrees). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0129)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm).",
         "name" : "Table Top Longitudinal Position",
         "entity" : "Image",
         "usage" : "M"
      },
      "(3002,0030)[<0>](0018,1151)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "2C",
         "desc" : "Imaging device X-Ray Tube Current (mA). Required if Value 3 of Image Type (0008,0008) is SIMULATOR or RADIOGRAPH. May be present otherwise.",
         "name" : "X-Ray Tube Current",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Retrieve URI",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0018,1048)" : {
         "name" : "Contrast/Bolus Ingredient",
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
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "usage" : "C - Required if contrast media was used in this image."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0018,1008)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(0028,0107)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00e1)" : {
         "usage" : "M",
         "req" : "2",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "User-supplied identifier for material used to manufacture Block.",
         "name" : "Material ID"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
         "name" : "Query/Retrieve View",
         "entity" : "Image",
         "usage" : "M"
      },
      "(3002,0020)" : {
         "name" : "Radiation Machine Name",
         "desc" : "User-defined name identifying radiation machine used in acquiring or computing image (i.e., name of conventional simulator, electron accelerator, X-Ray device, or machine modeled when calculating DRR).",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "name" : "Time of Last Calibration",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f0)" : {
         "usage" : "M",
         "name" : "Number of Blocks",
         "desc" : "Number of shielding blocks associated with Beam.",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "usage" : "U",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "req" : "3"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
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
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "desc" : "Unique identifier of the series.",
         "name" : "Series Instance UID",
         "req" : "1",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study"
      },
      "(0018,1065)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "req" : "1C",
         "name" : "Frame Time Vector",
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
         "entity" : "Image"
      },
      "(0020,0012)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "name" : "Acquisition Number"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "req" : "1",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "name" : "Multi-frame Source SOP Instance UID",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "name" : "Additional Drug Sequence",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(3002,0024)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "Source to patient surface distance (in mm) of radiation machine used in acquiring or computing image.",
         "name" : "Radiation Machine SSD",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M"
      },
      "(0010,2180)" : {
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "name" : "Occupation",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0021)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Quality Control Subject",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "entity" : "Patient"
      },
      "(3002,0030)[<0>](300a,0128)" : {
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "Table Top Vertical position in IEC TABLE TOP coordinate system (mm).",
         "name" : "Table Top Vertical Position",
         "usage" : "M"
      },
      "(3002,000a)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2C",
         "name" : "Reported Values Origin",
         "desc" : [
            "Describes the origin of the parameter values reported in the image. Required if Value 3 of Image Type (0008,0008) is SIMULATOR or PORTAL.",
            {
               "list" : [
                  [
                     "OPERATOR",
                     "manually entered by operator"
                  ],
                  [
                     "PLAN",
                     "planned parameter values"
                  ],
                  [
                     "ACTUAL",
                     "electronically recorded"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image"
      },
      "(0010,1021)" : {
         "usage" : "U",
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0028,0004)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "entity" : "Image",
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
            "name" : "Photometric Interpretation",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.2.6.2"
                  }
               },
               " for specialization."
            ],
            "name" : "Photometric Interpretation",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "module" : "RT Image"
         }
      ],
      "(0008,0033)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "2C",
         "name" : "Content Time",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "entity" : "Series",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "desc" : "A number that identifies this series.",
         "name" : "Series Number",
         "entity" : "Series"
      },
      "(0008,0008)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "req" : "3",
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
            ],
            "name" : "Image Type",
            "entity" : "Image"
         },
         {
            "name" : "Image Type",
            "desc" : [
               [
                  "Image identification characteristics (see ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.2"
                     }
                  },
                  ")."
               ],
               {
                  "list" : [
                     [
                        "DRR",
                        "digitally reconstructed radiograph"
                     ],
                     [
                        "PORTAL",
                        "digital portal image or portal film image"
                     ],
                     [
                        "SIMULATOR",
                        "conventional simulator image"
                     ],
                     [
                        "RADIOGRAPH",
                        "radiographic image"
                     ],
                     [
                        "BLANK",
                        "image pixels set to background value"
                     ],
                     [
                        "FLUENCE",
                        "fluence map"
                     ]
                  ],
                  "type" : "variablelist",
                  "title" : "Defined Terms for Value 3:"
               }
            ],
            "entity" : "Image",
            "module" : "RT Image",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0012,0030)" : {
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Site ID",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0028,2110)" : {
         "name" : "Lossy Image Compression",
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
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(300c,0022)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "name" : "Referenced Fraction Group Number",
         "desc" : "Identifier of Fraction Group within RT Plan referenced in Referenced RT Plan Sequence (300C,0002).",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U"
      },
      "(0008,1048)" : {
         "usage" : "M",
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
         "req" : "3"
      },
      "(3002,0004)" : {
         "usage" : "M",
         "desc" : "User-defined description of RT Image.",
         "name" : "RT Image Description",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0008,0201)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
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
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
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
                     "el" : "orderedlist"
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "name" : "Timezone Offset From UTC",
         "usage" : "M"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00b6)[<1>](300a,00b8)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : [
            "Type of beam limiting device (collimator).",
            {
               "list" : [
                  [
                     "X",
                     "symmetric jaw pair in IEC X direction"
                  ],
                  [
                     "Y",
                     "symmetric jaw pair in IEC Y direction"
                  ],
                  [
                     "ASYMX",
                     "asymmetric jaw pair in IEC X direction"
                  ],
                  [
                     "ASYMY",
                     "asymmetric pair in IEC Y direction"
                  ],
                  [
                     "MLCX",
                     "multileaf (multi-element) jaw pair in IEC X direction"
                  ],
                  [
                     "MLCY",
                     "multileaf (multi-element) jaw pair in IEC Y direction"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "RT Beam Limiting Device Type"
      },
      "(0008,1120)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0018,0014)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Contrast/Bolus Administration Route Sequence"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "RT Series",
         "entity" : "Series",
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
         "usage" : "M"
      },
      "(0028,0101)" : [
         {
            "usage" : "M",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "name" : "Bits Stored",
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
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.2.6.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization."
            ],
            "name" : "Bits Stored",
            "entity" : "Image",
            "module" : "RT Image",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "req" : "1"
         }
      ],
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,1063)" : {
         "req" : "1C",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "name" : "Frame Time",
         "desc" : [
            "Nominal time (in msec) per individual frame. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.5.1.1"
               },
               "el" : "xref"
            },
            " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time."
         ],
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(0018,1046)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "entity" : "Image",
         "name" : "Contrast Flow Rate",
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,9096)" : {
         "entity" : "Image",
         "name" : "Real World Value Mapping Sequence",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(3002,0030)[<0>](3002,0050)[<1>](3002,0052)" : {
         "usage" : "M",
         "name" : "Fluence Mode ID",
         "desc" : [
            "Identifier for the specific fluence-shaping mode.",
            "Required if Fluence Mode (3002,0051) has value NON_STANDARD."
         ],
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1C"
      },
      "(300a,0124)" : {
         "entity" : "Image",
         "desc" : "Distance (positive) from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis (mm).",
         "name" : "Table Top Eccentric Axis Distance",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1101)" : {
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
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0028,2114)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
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
                     "content" : [
                        "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Lossy Image Compression Method"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "usage" : "M",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0018,0012)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "C - Required if contrast media was used in this image."
      },
      "(0008,0014)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,1055)" : {
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "req" : "3",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "name" : "Window Center & Width Explanation",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M"
      },
      "(3002,0030)[<0>](0018,0060)" : {
         "req" : "2C",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "Peak kilo voltage output (kV) of X-Ray generator used to acquire image. Required if Value 3 of Image Type (0008,0008) is PORTAL, SIMULATOR or RADIOGRAPH.",
         "name" : "KVP",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Image",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9216)" : {
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
         "name" : "Real World Value First Value Mapped",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
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
         "usage" : "M"
      },
      "(0018,1047)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "name" : "Contrast Flow Duration",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "entity" : "Image",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the device",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "usage" : "U"
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "name" : "Patient Comments",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1041)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3"
      },
      "(3002,0030)[<0>](300a,0107)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "name" : "Applicator Sequence",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "usage" : "U",
         "entity" : "Study",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0028,0106)" : {
         "usage" : "M",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "3"
      },
      "(0040,0251)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "name" : "Related General SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
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
         "name" : "Signature",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0018,1043)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "desc" : "Time of end of contrast injection",
         "name" : "Contrast/Bolus Stop Time",
         "usage" : "C - Required if contrast media was used in this image."
      },
      "(0012,0020)" : {
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Coding Scheme Responsible Organization",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "req" : "3",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
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
         ],
         "name" : "Device Length",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
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
         "name" : "Device Diameter"
      },
      "(3002,0030)[<0>](300a,00b6)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "name" : "Beam Limiting Device Sequence",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions for given exposure.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0028,2000)" : {
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "ICC Profile",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
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
         "usage" : "M"
      },
      "(0018,1000)" : {
         "usage" : "M",
         "entity" : "Equipment",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0100,0424)" : {
         "entity" : "Image",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Value Type",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(300a,00b3)" : {
         "desc" : [
            "Measurement unit of machine dosimeter.",
            {
               "list" : [
                  [
                     "MU",
                     "Monitor Unit"
                  ],
                  [
                     "MINUTE",
                     "minute"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Primary Dosimeter Unit",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0018,1042)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "name" : "Contrast/Bolus Start Time",
         "desc" : "Time of start of injection"
      },
      "(003a,0300)" : {
         "req" : "2C",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.5.1.3"
                  }
               },
               "."
            ],
            "Zero or more items may be included in this sequence.",
            "Required if the Transfer Syntax used to encode the multi-frame image contains multiplexed (interleaved) audio channels, such as is possible with MPEG2."
         ],
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Reason for Requested Procedure Code Sequence",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series"
      },
      "(0028,1201)" : {
         "usage" : "M",
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
         "entity" : "Image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(3002,0030)[<0>](300a,0120)" : {
         "name" : "Beam Limiting Device Angle",
         "desc" : "Treatment machine beam limiting device (collimator) angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees).",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0028,0302)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
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
         "name" : "Recognizable Visual Features"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(2050,0020)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "name" : "Presentation LUT Shape",
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
      "(0012,0010)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Sponsor Name",
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
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0028,1052)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "entity" : "Image",
         "name" : "Rescale Intercept",
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "usage" : "U"
      },
      "(0008,2144)" : {
         "req" : "3",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "name" : "Recommended Display Frame Rate",
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,0421)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "name" : "General Accessory ID",
         "desc" : "User or machine supplied identifier for General Accessory."
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Image",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,0100)" : [
         {
            "usage" : "M",
            "entity" : "Image",
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
            ],
            "name" : "Bits Allocated",
            "req" : "1",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "req" : "1",
            "module" : "RT Image",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "entity" : "Image",
            "name" : "Bits Allocated",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.2.6.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ]
         }
      ],
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Patient Identity Removed",
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
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "entity" : "Image",
         "name" : "Real World Value Slope",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,0013)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "name" : "LUT Descriptor",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "req" : "1",
         "usage" : "U"
      },
      "(3002,0029)" : {
         "entity" : "Image",
         "desc" : "Fraction Number of fraction during which image was acquired, within Fraction Group referenced by Referenced Fraction Group Number (300C,0022) within RT Plan referenced in Referenced RT Plan Sequence (300C,0002).",
         "name" : "Fraction Number",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(3002,0002)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1",
         "name" : "RT Image Label",
         "desc" : "User-defined label for RT Image.",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Image",
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
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(3002,0012)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "RT Image Position",
         "desc" : [
            "The x and y coordinates (in mm) of the upper left hand corner of the image, in the IEC X-RAY IMAGE RECEPTOR coordinate system. This is the center of the first pixel transmitted. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.2.7"
               }
            },
            "."
         ],
         "req" : "2",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0010,2293)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "2C",
         "name" : "Patient Breed Code Sequence",
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
         "entity" : "Patient"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00fa)" : {
         "desc" : [
            "Indicates presence or otherwise of geometrical divergence",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PRESENT",
                     "block edges are shaped for beam divergence"
                  ],
                  [
                     "ABSENT",
                     "block edges are not shaped for beam divergence"
                  ]
               ]
            }
         ],
         "name" : "Block Divergence",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
               ]
            }
         ],
         "name" : "Spatial Locations Preserved",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "name" : "Patient ID",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0023)" : {
         "req" : "2C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "name" : "Content Date",
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
         "usage" : "M"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3"
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "name" : "LUT Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1053)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "entity" : "Image",
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "name" : "Rescale Slope"
      },
      "(300a,012a)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "Table Top Lateral position in IEC TABLE TOP coordinate system (mm).",
         "name" : "Table Top Lateral Position",
         "entity" : "Image"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Image",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0008,9215)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "name" : "Derivation Code Sequence",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0008,0051)" : {
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0010,1002)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,0015)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "name" : "Instance Coercion DateTime",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(3002,0030)[<0>](3002,0050)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "name" : "Primary Fluence Mode Sequence",
         "desc" : [
            "Sequence defining whether the primary fluence of the treatment beam uses a non-standard fluence-shaping.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00fc)" : {
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "Identification Number of the Block. The value of Block Number (300A,00FC) shall be unique within the Beam in which it is created.",
         "name" : "Block Number",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "req" : "1"
      },
      "(0008,0022)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Acquisition Date",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "usage" : "M"
      },
      "(3002,0028)" : {
         "usage" : "M",
         "desc" : "Source to reference object distance (in mm), as used for magnification calculation of RADIOGRAPH and SIMULATOR images.",
         "name" : "Source to Reference Object Distance",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
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
                           "content" : [
                              "\n                          ",
                              {
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate of Signer",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         "entity" : "Image",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0433)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1C",
         "name" : "Applicator Opening",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system. In case of square-shaped applicator contains the length of the sides of the square. In case of circular-shaped applicators, contains the diameter of the circular aperture.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_SQUARE or SYM_CIRCULAR."
         ],
         "entity" : "Image"
      },
      "(0018,5100)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1C",
         "desc" : [
            "Patient position descriptor relative to the patient support device.",
            "Required if Isocenter Position (300A,012C) is present. May be present otherwise.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.12.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The orientation of the patient relative to the patient support device is denoted in the same manner as in the RT Patient Setup module. It defines the relation of the patient-based DICOM coordinate system identified by the frame of reference module of the RT Image to the IEC coordinate system and together with Isocenter Position (300A,012C) allows the RT Image to be placed into the patient frame of reference. It also allows a system using an RT Image to verify that the patient is setup in a similar position relative to the patient support device."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Patient Position",
         "entity" : "Image"
      },
      "(0020,1002)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Images in Acquisition",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "name" : "Type of Patient ID",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,2292)" : {
         "usage" : "M",
         "name" : "Patient Breed Description",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "2C"
      },
      "(300e,0004)" : {
         "usage" : "U",
         "req" : "2C",
         "module" : "Approval",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "entity" : "Image",
         "desc" : "Date on which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "name" : "Review Date"
      },
      "(0008,1164)" : {
         "name" : "Frame Extraction Sequence",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Content Item Modifier Sequence",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0122)" : {
         "usage" : "M",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees).",
         "name" : "Patient Support Angle",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3"
      },
      "(0008,2111)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Derivation Description",
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
         "usage" : "M"
      },
      "(0010,1030)" : {
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight",
         "usage" : "U"
      },
      "(0028,1054)" : {
         "usage" : "U",
         "entity" : "Image",
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
         "name" : "Rescale Type",
         "req" : "1C",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ]
      },
      "(3002,0040)[<0>](3002,0042)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "The Meterset corresponding with a fluence map cell value of 1.0 expressed in units specified by Primary Dosimeter Units (300A,00B3). This is the Meterset value used for treatment, not the Meterset used to expose the film as defined by Meterset Exposure (3002,0032).",
         "name" : "Fluence Data Scale",
         "entity" : "Image",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0028,0008)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "module" : "Multi-frame",
         "entity" : "Image",
         "name" : "Number of Frames",
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "C - Required if pixel data is multi-frame data."
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "req" : "1"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0431)" : {
         "usage" : "M",
         "name" : "Applicator Geometry Sequence",
         "desc" : [
            "Describes the applicator aperture geometry.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3"
      },
      "(3002,0030)[<0>](300a,014a)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Gantry Pitch Angle",
         "entity" : "Image",
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "MAC Parameters Sequence"
      },
      "(3002,0030)[<0>](300a,00b6)[<1>](300a,00ba)" : {
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "Radiation source to beam limiting device (collimator) distance (mm).",
         "name" : "Source to Beam Limiting Device Distance",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00f8)" : {
         "entity" : "Image",
         "desc" : [
            "Type of block.",
            {
               "list" : [
                  [
                     "SHIELDING",
                     "blocking material is inside contour"
                  ],
                  [
                     "APERTURE",
                     "blocking material is outside contour"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Block Type",
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(0010,2202)" : {
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0018,1244)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "name" : "Preferred Playback Sequencing",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "name" : "Bits Allocated",
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00fe)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Block Name",
         "desc" : "User-defined name for block.",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "name" : "Planar Configuration",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C"
      },
      "(0028,0300)" : {
         "usage" : "M",
         "name" : "Quality Control Image",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0020,1040)" : {
         "req" : "2",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
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
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "usage" : "U",
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
         "name" : "Device Diameter Units",
         "entity" : "Image",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "2C"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "entity" : "Image",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,012a)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Table Top Lateral position in IEC TABLE TOP coordinate system (mm).",
         "name" : "Table Top Lateral Position",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M"
      },
      "(0012,0060)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
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
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(300e,0002)" : {
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Approval status at the time the SOP Instance was created.",
            {
               "list" : [
                  [
                     "APPROVED",
                     "Reviewer recorded that object met an implied criterion"
                  ],
                  [
                     "UNAPPROVED",
                     "No review of object has been recorded"
                  ],
                  [
                     "REJECTED",
                     "Reviewer recorded that object failed to meet an implied criterion"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Approval Status",
         "req" : "1",
         "module" : "Approval",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(0008,0030)" : {
         "usage" : "M",
         "desc" : "Time the Study started.",
         "name" : "Study Time",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "2"
      },
      "(0018,1066)" : {
         "name" : "Frame Delay",
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "req" : "3",
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0028,0303)" : {
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "req" : "3",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "name" : "LUT Explanation",
         "entity" : "Image"
      },
      "(0018,1067)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "req" : "3",
         "name" : "Image Trigger Delay",
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "entity" : "Image"
      },
      "(3002,000d)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "Position in (x,y,z) coordinates of origin of IEC X-RAY IMAGE RECEPTOR System in the IEC GANTRY coordinate system (mm). See Note 2.",
         "name" : "X-Ray Image Receptor Translation",
         "entity" : "Image"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "LUT Label",
         "desc" : "Label that is used to identify the transformation of this Item."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "name" : "Value Type",
         "req" : "1",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(3002,0030)[<0>](3002,0050)[<1>](3002,0051)" : {
         "entity" : "Image",
         "name" : "Fluence Mode",
         "desc" : [
            "Describes whether the fluence shaping is the standard mode for the beam or an alternate.",
            {
               "list" : [
                  [
                     "STANDARD",
                     "Uses standard fluence-shaping"
                  ],
                  [
                     "NON_STANDARD",
                     "Uses a non-standard fluence-shaping mode"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
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
      "(0018,1044)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "name" : "Contrast/Bolus Total Dose",
         "entity" : "Image"
      },
      "(0018,0040)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "req" : "3",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image",
         "desc" : "Number of frames per second.",
         "name" : "Cine Rate"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,2112)" : {
         "entity" : "Image",
         "name" : "Source Image Sequence",
         "desc" : [
            "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "usage" : "U",
         "entity" : "Study",
         "name" : "Consent for Distribution Flag",
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
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
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
         "name" : "Pixel Data",
         "entity" : "Image",
         "usage" : "M"
      },
      "(300a,011e)" : {
         "entity" : "Image",
         "name" : "Gantry Angle",
         "desc" : "Treatment machine gantry angle, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees).",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0010,0010)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "name" : "Additional Patient History",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(3002,0030)[<0>](0018,1150)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "2C",
         "name" : "Exposure Time",
         "desc" : "Time of X-Ray exposure (msec). Required if Value 3 of Image Type (0008,0008) is SIMULATOR or RADIOGRAPH. May be present otherwise.",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0012,0021)" : {
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
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(3002,000e)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "name" : "X-Ray Image Receptor Angle",
         "desc" : [
            "X-Ray Image Receptor Angle i.e., orientation of IEC X-RAY IMAGE RECEPTOR coordinate system with respect to IEC GANTRY coordinate system (degrees). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.2.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0010,2294)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient"
      },
      "(0012,0031)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         "name" : "Clinical Trial Site Name",
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M"
      },
      "(0028,3000)[<0>](0028,3004)" : {
         "name" : "Modality LUT Type",
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
         "entity" : "Image",
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0250)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the device",
         "name" : "Manufacturer's Model Name"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0109)" : {
         "usage" : "M",
         "name" : "Applicator Type",
         "desc" : [
            "Type of Applicator.",
            {
               "list" : [
                  [
                     "ELECTRON_SQUARE",
                     "square electron applicator"
                  ],
                  [
                     "ELECTRON_RECT",
                     "rectangular electron applicator"
                  ],
                  [
                     "ELECTRON_CIRC",
                     "circular electron applicator"
                  ],
                  [
                     "ELECTRON_SHORT",
                     "short electron applicator"
                  ],
                  [
                     "ELECTRON_OPEN",
                     "open (dummy) electron applicator"
                  ],
                  [
                     "PHOTON_SQUARE",
                     "square photon applicator"
                  ],
                  [
                     "PHOTON_RECT",
                     "rectangular photon applicator"
                  ],
                  [
                     "PHOTON_CIRC",
                     "circular photon applicator"
                  ],
                  [
                     "INTRAOPERATIVE",
                     "intraoperative (custom) applicator"
                  ],
                  [
                     "STEREOTACTIC",
                     "stereotactic applicator (deprecated)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1",
         "name" : "Value Type",
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
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0018,0072)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "req" : "3",
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "name" : "Effective Duration",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0108)" : {
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : "User or machine supplied identifier for Applicator.",
         "name" : "Applicator ID",
         "usage" : "M"
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3",
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
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(300a,0125)" : {
         "name" : "Table Top Eccentric Angle",
         "desc" : "Table Top (non-isocentric) angle, i.e., orientation of IEC TABLE TOP ECCENTRIC coordinate system with respect to IEC PATIENT SUPPORT system (degrees).",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "usage" : "M"
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "name" : "Real World Value Intercept",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,3000)[<0>](0028,3002)" : {
         "usage" : "U",
         "entity" : "Image",
         "name" : "LUT Descriptor",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT"
      },
      "(0008,103e)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "name" : "Series Description",
         "desc" : "Description of the series.",
         "entity" : "Series",
         "usage" : "M"
      },
      "(300c,0008)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Start Cumulative Meterset Weight",
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number (300C,0006) at which image acquisition starts.",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0018,1049)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "usage" : "C - Required if contrast media was used in this image."
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "usage" : "M",
         "name" : "Real World Value LUT Data",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,0104)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Block Number of Points",
         "desc" : "Number of (x,y) pairs defining the block edge.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
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
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,0106)" : {
         "entity" : "Image",
         "name" : "Block Data",
         "desc" : "A data stream of (x,y) pairs that comprise the block edge. The number of pairs shall be equal to Block Number of Points (300A,0104), and the vertices shall be interpreted as a closed polygon. Coordinates are projected onto the machine isocentric plane in the IEC BEAM LIMITING DEVICE coordinate system (mm).",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Image",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(300a,0128)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "name" : "Table Top Vertical Position",
         "desc" : "Table Top Vertical position in IEC TABLE TOP coordinate system (mm).",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Encrypted Content",
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
         "usage" : "M"
      },
      "(0028,1202)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
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
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,0423)" : {
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "name" : "General Accessory Type",
         "desc" : [
            "Specifies the type of accessory.",
            {
               "list" : [
                  [
                     "GRATICULE",
                     "Accessory tray with a radio-opaque grid"
                  ],
                  [
                     "IMAGE_DETECTOR",
                     "Image acquisition device positioned in the beam line"
                  ],
                  [
                     "RETICLE",
                     "Accessory tray with radio-transparent markers or grid"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,0010)" : {
         "usage" : "M",
         "name" : "Rows",
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "req" : "1C"
      },
      "(3002,0030)[<0>](300a,011e)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "name" : "Gantry Angle",
         "desc" : "Treatment machine gantry angle, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees)."
      },
      "(0050,0010)" : {
         "entity" : "Image",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Device Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0088,0200)" : {
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Icon Image Sequence",
         "entity" : "Image",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
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
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,0140)" : {
         "usage" : "M",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.2"
               }
            },
            "."
         ],
         "name" : "Table Top Pitch Angle",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3"
      },
      "(3002,0040)" : {
         "name" : "Fluence Map Sequence",
         "desc" : [
            "A Sequence of data describing the fluence map attributes for a radiotherapy beam.",
            "Only a single item shall be included in this sequence.",
            "Required if the third value of Image Type (0008,0008) is FLUENCE."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "req" : "3",
         "name" : "Study Instance UID",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,0002)" : [
         {
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "name" : "Samples per Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "name" : "Samples per Pixel",
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.2.6.1"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-38"
            ],
            "module" : "RT Image",
            "usage" : "M"
         }
      ],
      "(0008,1060)" : {
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "name" : "Name of Physician(s) Reading Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "usage" : "U",
         "entity" : "Image",
         "desc" : "User-supplied identifier for the device",
         "name" : "Device ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device"
      },
      "(300a,012c)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Isocenter coordinates (x,y,z), in mm. Specifies the location of the machine isocenter in the patient-based coordinate system associated with the Frame of Reference. It allows transformation from the equipment-based IEC coordinate system to the patient-based coordinate system.",
         "name" : "Isocenter Position",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0434)" : {
         "req" : "1C",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in X-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "name" : "Applicator Opening X",
         "usage" : "M"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "req" : "2"
      },
      "(0010,1020)" : {
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U"
      },
      "(3002,0030)[<0>](300a,0420)[<1>](300a,0425)" : {
         "name" : "Source to General Accessory Distance",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(3002,0030)[<0>](3002,0032)" : {
         "entity" : "Image",
         "name" : "Meterset Exposure",
         "desc" : "Treatment machine Meterset duration over which image has been acquired, specified in Monitor units (MU) or minutes as defined by Primary Dosimeter Unit (300A,00B3). Required if Value 3 of Image Type (0008,0008) is PORTAL.",
         "req" : "2C",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,010a)" : {
         "entity" : "Image",
         "desc" : "User-defined description for Applicator.",
         "name" : "Applicator Description",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "name" : "Patient ID",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(3002,0030)[<0>](300a,0107)[<1>](300a,0436)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "entity" : "Image",
         "name" : " Source to Applicator Mounting Position Distance",
         "desc" : "Radiation source to applicator mounting position distance (in mm) for current applicator."
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "name" : "Device Description",
         "desc" : "Further description in free form text describing the device.",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "ICC Profile",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Real World Value Last Value Mapped",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
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
         ]
      },
      "(3002,0030)[<0>](0018,9328)" : {
         "usage" : "M",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3",
         "desc" : "Duration of X-Ray exposure in msec.",
         "name" : "Exposure Time in ms",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
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
         "name" : "Data Elements Signed",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M"
      },
      "(300a,0144)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "3",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system (degrees). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Table Top Roll Angle",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0028,0011)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0018,0010)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "entity" : "Image",
         "desc" : "Contrast or bolus agent",
         "name" : "Contrast/Bolus Agent",
         "req" : "2",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0038,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
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
         "entity" : "Image",
         "usage" : "M"
      },
      "(0100,0420)" : {
         "entity" : "Image",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,0301)" : {
         "entity" : "Image",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "name" : "Burned In Annotation",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name",
         "entity" : "Image"
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient's Sex",
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
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
         "name" : "De-identification Method",
         "entity" : "Patient"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "usage" : "M",
         "entity" : "Image",
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
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(300a,0122)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Patient Support Angle",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees).",
         "req" : "3",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0018,1242)" : {
         "desc" : "Elapsed time of data acquisition in msec per each frame.",
         "name" : "Actual Frame Duration",
         "entity" : "Image",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "req" : "3",
         "usage" : "C - Required if multi-frame image is a cine image."
      },
      "(0100,0410)" : {
         "usage" : "M",
         "entity" : "Image",
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "SOP Instance Status",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
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
         ],
         "name" : "Inter-Marker Distance",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "req" : "3",
         "name" : "Accession Number",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series"
      },
      "(3002,0030)[<0>](300a,00f4)[<1>](300a,00fb)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "entity" : "Image",
         "desc" : [
            "Indicates on which side of the Block Tray the block is mounted.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PATIENT_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the patient."
                  ],
                  [
                     "SOURCE_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the radiation source."
                  ]
               ]
            }
         ],
         "name" : "Block Mounting Position"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number"
      },
      "(300e,0005)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "module" : "Approval",
         "req" : "2C",
         "desc" : "Time at which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "name" : "Review Time",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "usage" : "M",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "name" : "Bits Stored",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
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
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,0006)" : {
         "req" : "1C",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
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
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,2143)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "entity" : "Image",
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed.",
         "name" : "Stop Trim"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
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
         "name" : "Digital Signature DateTime"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value"
      },
      "(0008,0050)" : {
         "usage" : "M",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0012,0042)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
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
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference"
      },
      "(0088,0200)[<0>](0028,0034)" : {
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0021)" : {
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
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(3002,0040)[<0>](3002,0041)" : {
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Source of fluence data.",
            {
               "list" : [
                  [
                     "CALCULATED",
                     "Calculated by a workstation"
                  ],
                  [
                     "MEASURED",
                     "Measured by exposure to a film or detector."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Fluence Data Source",
         "req" : "1",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,2142)" : {
         "usage" : "C - Required if multi-frame image is a cine image.",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "req" : "3",
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "name" : "Start Trim",
         "entity" : "Image"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "req" : "3",
         "usage" : "U"
      },
      "(0028,1103)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
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
         "usage" : "M"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
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
      "(0008,2112)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Image"
      },
      "(300a,0140)" : {
         "entity" : "Image",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Table Top Pitch Angle",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(3002,0030)[<0>](300a,00b6)[<1>](300a,011c)" : {
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image",
         "req" : "1",
         "desc" : "Positions of beam limiting device (collimator) leaf or jaw (element) pairs (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY). Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC), in IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N.",
         "name" : "Leaf/Jaw Positions",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0012,0071)" : {
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
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series"
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0020,9172)" : {
         "entity" : "Image",
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,114a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0018,1040)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "entity" : "Image",
         "name" : "Contrast/Bolus Route",
         "desc" : "Administration route of contrast agent",
         "req" : "3",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0010,0032)" : {
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Image",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0016)" : {
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Requested Procedure ID",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M"
      },
      "(300c,0002)" : {
         "usage" : "M",
         "desc" : [
            "Sequence of one Class/Instance pair describing RT Plan associated with image.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Referenced RT Plan Sequence",
         "entity" : "Image",
         "module" : "RT Image",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "req" : "3"
      },
      "(0008,1090)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "name" : "Manufacturer's Model Name",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
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
         "name" : "MAC Algorithm",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(3002,0022)" : {
         "usage" : "M",
         "entity" : "Image",
         "name" : "Radiation Machine SAD",
         "desc" : "Radiation source to Gantry rotation axis distance of radiation machine used in acquiring or computing image (mm).",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-38"
         ],
         "module" : "RT Image"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced Study Sequence",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         ]
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0010,2298)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
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
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0028,1050)" : {
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
         "name" : "Window Center",
         "entity" : "Image",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "1C",
         "usage" : "U"
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
      "Can't handle table_8.8-1 (in table_C.8-37 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,08EA))",
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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}