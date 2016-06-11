var data = {
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
      "Can't handle table_8.8-1 (in table_C.8-41 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient Comments",
         "entity" : "Patient"
      },
      "(0010,2297)" : {
         "usage" : "M",
         "name" : "Responsible Person",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0050)" : {
         "desc" : [
            [
               "Sequence of (x,y,z) triplets defining a contour in the patient based coordinate system described in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " (mm). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.6.3"
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
                        "Contour Data may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Contour Data",
         "entity" : "Dose",
         "req" : "1"
      },
      "(60xx,0100)" : {
         "usage" : "U",
         "name" : "Overlay Bits Allocated",
         "entity" : "Dose",
         "req" : "1",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See PS3.3-2004."
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
         "module" : "Overlay Plane"
      },
      "(3006,0018)[<0>](0008,1155)" : {
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "De-identification Method",
         "entity" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(3004,0040)" : {
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : [
            "Coordinates (x, y, z) of common DVH normalization point in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " (mm)."
         ],
         "module" : "RT DVH",
         "usage" : "U",
         "req" : "3",
         "name" : "DVH Normalization Point",
         "entity" : "Dose"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Columns",
         "entity" : "Dose",
         "req" : "1"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,000a)[<2>](300c,000c)" : {
         "entity" : "Dose",
         "name" : "Referenced Brachy Application Setup Number",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Dose",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : "Uniquely identifies Brachy Application Setup specified by Brachy Application Setup Number (300A,0234) in Brachy Application Setup Sequence (300A,0230) of RT Brachy Application Setups Module within RT Plan referenced in Referenced RT Plan Sequence (300C,0002)."
      },
      "(0008,1120)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(60xx,0050)" : {
         "req" : "1",
         "name" : "Overlay Origin",
         "entity" : "Dose",
         "usage" : "U",
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
         ],
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study"
      },
      "(0008,0016)" : {
         "entity" : "Dose",
         "name" : "SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,1041)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Slice Location",
         "entity" : "Dose",
         "req" : "3",
         "desc" : [
            "Relative position of the image plane expressed in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-10"
         ],
         "module" : "Image Plane"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Admission ID",
         "entity" : "Study"
      },
      "(0008,1048)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "module" : "General Study"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "name" : "Study Date",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started."
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced Instance Sequence",
         "usage" : "U"
      },
      "(3006,0010)[<0>](0020,0052)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Uniquely identifies Frame of Reference within Structure Set.",
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "Frame of Reference UID",
         "entity" : "Dose"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
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
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0028,1102)" : {
         "module" : "Image Pixel",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Dose",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0088,0200)" : {
         "module" : "General Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "name" : "Icon Image Sequence",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(60xx,0102)" : {
         "req" : "1",
         "name" : "Overlay Bit Position",
         "entity" : "Dose",
         "usage" : "U",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
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
         ]
      },
      "(0088,0200)[<0>](0028,1102)" : {
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C"
      },
      "(3006,0039)[<0>](3006,002a)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "3",
         "entity" : "Dose",
         "name" : "ROI Display Color",
         "desc" : "RGB triplet color representation for ROI, specified using the range 0-255.",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0028,1202)" : {
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
      "(0008,1070)" : {
         "module" : "RT Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "name" : "Operators' Name",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "usage" : "M"
      },
      "(3004,0050)[<0>](3004,0001)" : {
         "module" : "RT DVH",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : [
            "Type of DVH.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DIFFERENTIAL",
                     "differential dose-volume histogram"
                  ],
                  [
                     "CUMULATIVE",
                     "cumulative dose-volume histogram"
                  ],
                  [
                     "NATURAL",
                     "natural dose volume histogram"
                  ]
               ]
            }
         ],
         "req" : "1",
         "name" : "DVH Type",
         "entity" : "Dose",
         "usage" : "U"
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Dose",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(3004,0008)" : {
         "desc" : [
            "Coordinates (x, y, z) of normalization point in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.3.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose",
         "usage" : "M",
         "name" : "Normalization Point",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "entity" : "Patient",
         "req" : "2C",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Gantry ID",
         "entity" : "Equipment"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0045)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Contour Offset Vector",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            "Vector (x,y,z) in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " that is normal to plane of Contour Data (3006,0050), describing direction and magnitude of the offset (in mm) of each point of the central plane of a contour slab from the corresponding original point of Contour Data (3006,0050). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "ROI Contour"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "name" : "Instance Creation Date",
         "entity" : "Dose",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "module" : "RT Series"
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
                     "el" : "para"
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
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
         "req" : "1",
         "entity" : "Series",
         "name" : "Value Type",
         "usage" : "M"
      },
      "(3006,0020)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Structure Set ROI Sequence",
         "desc" : [
            "ROIs for current Structure Set.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set"
      },
      "(0028,0101)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "module" : "Image Pixel",
            "usage" : "C - Required if dose data contains grid-based doses.",
            "req" : "1",
            "name" : "Bits Stored",
            "entity" : "Dose"
         },
         {
            "req" : "1C",
            "entity" : "Dose",
            "name" : "Bits Stored",
            "usage" : "M",
            "module" : "RT Dose",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.3.4.4"
                  }
               },
               " for specialization. Required if Pixel Data (7FE0,0010) is present."
            ],
            "mod_tables" : [
               "table_C.8-39"
            ]
         }
      ],
      "(60xx,0022)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "User-defined comments about the overlay.",
         "module" : "Overlay Plane",
         "usage" : "U",
         "entity" : "Dose",
         "name" : "Overlay Description",
         "req" : "3"
      },
      "(0028,1054)" : {
         "mod_tables" : [
            "table_C.11-1b"
         ],
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
         "module" : "Modality LUT",
         "usage" : "U",
         "name" : "Rescale Type",
         "entity" : "Dose",
         "req" : "1C"
      },
      "(0020,0052)" : {
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "req" : "1",
         "usage" : "M",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ],
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
         ]
      },
      "(3004,0010)[<0>](3004,0012)" : {
         "module" : "RT Dose ROI",
         "mod_tables" : [
            "table_C.8-43"
         ],
         "desc" : [
            "Dose value for ROI, in units defined by Dose Units (3004,0002). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.7.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "name" : "Dose Value",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
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
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Accession Number",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "name" : "Retrieve URI",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0250)" : {
         "desc" : "Date on which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(0018,1200)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "DateTime",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "req" : "3",
         "entity" : "Dose",
         "name" : "Date of Last Calibration",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "RT Series"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
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
         "module" : "General Study"
      },
      "(3006,0010)[<0>](3006,0012)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "Sequence of Studies containing series to be referenced.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.5.4"
                  }
               },
               "."
            ]
         ],
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "3",
         "entity" : "Dose",
         "name" : "RT Referenced Study Sequence"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Dose",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "M"
      },
      "(0038,0060)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "req" : "1",
         "name" : "Value Type",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0028,0302)" : {
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Recognizable Visual Features",
         "req" : "3"
      },
      "(0020,1002)" : {
         "desc" : "Number of images that resulted from this acquisition of data",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Images in Acquisition",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1",
         "name" : "Samples per Pixel",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "module" : "General Image"
      },
      "(0008,0013)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Instance Creation Time",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0062,000b)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "entity" : "Dose",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3"
         ],
         "module" : "Structure Set"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "entity" : "Dose",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "entity" : "Series"
      },
      "(60xx,0040)" : {
         "desc" : [
            "Indicates whether this overlay represents a region of interest or other graphics.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "usage" : "U",
         "req" : "1",
         "name" : "Overlay Type",
         "entity" : "Dose"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0044)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            "Thickness of slab (in mm) represented by contour, where Contour Data (3006,0050) defines a plane in the center of the slab, offset by the Contour Offset Vector (3006,0045) if it is present. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.6.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "ROI Contour",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Contour Slab Thickness",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "entity" : "Study",
         "req" : "2C",
         "usage" : "U",
         "module" : "Patient Study",
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
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
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
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(3004,0005)" : {
         "module" : "RT Dose",
         "desc" : [
            "The use of transformation in the calculation of the combined dose.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NONE",
                     "No transformation. Calculated on the original image set"
                  ],
                  [
                     "RIGID",
                     [
                        "Only Rigid transform used (see definition in ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "sect_C.20.2.1.2",
                              "xrefstyle" : "select: label"
                           }
                        },
                        ")"
                     ]
                  ],
                  [
                     "NON_RIGID",
                     "Any other transform used"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "req" : "3",
         "name" : "Spatial Transform of Dose",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(0008,1115)" : {
         "req" : "1C",
         "name" : "Referenced Series Sequence",
         "entity" : "Dose",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Dose",
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Dose",
         "name" : "Referenced Series Sequence",
         "req" : "1"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,000a)" : {
         "req" : "1C",
         "name" : "Referenced Brachy Application Setup Sequence",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "RT Dose",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : "Sequence of Brachy Application Setups in current Fraction Group contributing to dose. Required if Dose Summation Type (3004,000A) is BRACHY or BRACHY_SESSION. One or more items shall be included in this sequence."
      },
      "(0010,1020)" : {
         "req" : "3",
         "name" : "Patient's Size",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "RT Series",
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
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U"
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "2",
         "entity" : "Equipment",
         "name" : "Manufacturer"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0004)[<2>](300c,00f2)[<3>](300c,00f4)" : {
         "usage" : "M",
         "name" : "Referenced Start Control Point Index",
         "entity" : "Dose",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : "Identifies Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006). This is the first of the two Control Points from which the Dose contribution to the Control Point can be calculated.",
         "module" : "RT Dose"
      },
      "(0018,1020)" : {
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
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Software Versions",
         "entity" : "Equipment"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,0096)" : {
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(3004,0002)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Dose Units",
         "entity" : "Dose",
         "desc" : [
            "Units used to describe dose.",
            {
               "list" : [
                  [
                     "GY",
                     "Gray"
                  ],
                  [
                     "RELATIVE",
                     "dose relative to implicit reference value"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose"
      },
      "(3006,0018)" : {
         "module" : "Structure Set",
         "desc" : [
            "The Structure Set that has been used to derive the current Structure Set.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "req" : "3",
         "entity" : "Dose",
         "name" : "Predecessor Structure Set Sequence",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0008,0031)" : {
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Time"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1160)" : {
         "entity" : "Dose",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "ROI Contour",
         "mod_tables" : [
            "table_C.8-42",
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
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(3004,000e)" : {
         "usage" : "M",
         "name" : "Dose Grid Scaling",
         "entity" : "Dose",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "Scaling factor that when multiplied by the dose grid data found in Pixel Data (7FE0,0010) attribute of the Image Pixel Module, yields grid doses in the dose units as specified by Dose Units (3004,0002).",
            "Required if Pixel Data (7FE0,0010) is present."
         ],
         "module" : "RT Dose"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Dose",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(3004,0050)[<0>](3004,0060)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "DVH Referenced ROI Sequence",
         "usage" : "U",
         "module" : "RT DVH",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : [
            "Sequence of referenced ROIs used to calculate DVH.",
            "One or more items shall be included in this sequence."
         ]
      },
      "(0020,9172)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common"
      },
      "(3004,0050)[<0>](3004,0074)" : {
         "module" : "RT DVH",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : "Mean calculated dose to ROI(s) described by DVH Referenced ROI Sequence (3004,0060).",
         "req" : "3",
         "name" : "DVH Mean Dose",
         "entity" : "Dose",
         "usage" : "U"
      },
      "(0028,0011)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Columns",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,0032)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "The time the acquisition of data that resulted in this image started",
         "req" : "3",
         "name" : "Acquisition Time",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0062)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient Identity Removed",
         "entity" : "Patient"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "module" : "General Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Name",
         "entity" : "Patient",
         "req" : "2"
      },
      "(0028,3000)[<0>](0028,3003)" : {
         "module" : "Modality LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "req" : "3",
         "entity" : "Dose",
         "name" : "LUT Explanation",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "entity" : "Dose",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series"
      },
      "(60xx,0051)" : {
         "module" : "Multi-frame Overlay",
         "desc" : "Frame number of Multi-frame Image to which this overlay applies; frames are numbered from 1.",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "name" : "Image Frame Origin",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "req" : "1C"
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M"
      },
      "(0028,0103)" : [
         {
            "module" : "Image Pixel",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "name" : "Pixel Representation",
            "entity" : "Dose",
            "usage" : "C - Required if dose data contains grid-based doses."
         },
         {
            "module" : "RT Dose",
            "mod_tables" : [
               "table_C.8-39"
            ],
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.3.4.6"
                  },
                  "el" : "xref"
               },
               " for specialization. Required Pixel Data (7FE0,0010) is present."
            ],
            "entity" : "Dose",
            "name" : "Pixel Representation",
            "req" : "1C",
            "usage" : "M"
         }
      ],
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient"
      },
      "(0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M"
      },
      "(0008,0060)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Modality",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "Type of equipment that originally acquired the data.",
            {
               "title" : "Enumerated Values:",
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
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.1.1"
                  }
               },
               "."
            ]
         ],
         "module" : "RT Series"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "name" : "Data Elements Signed",
         "entity" : "Dose",
         "usage" : "M",
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
         ]
      },
      "(3006,0020)[<0>](3006,002c)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "ROI Volume",
         "entity" : "Dose",
         "req" : "3",
         "desc" : "Volume of ROI (cubic centimeters).",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set"
      },
      "(0008,0080)" : {
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located."
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Referenced Frame Number",
         "usage" : "C - Required if dose data contains grid-based doses.",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0008,103f)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
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
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
                  ]
               ],
               "type" : "variablelist"
            },
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
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ],
                                 "el" : "para"
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
         "req" : "3",
         "entity" : "Dose",
         "name" : "Spatial Locations Preserved",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(3004,0014)" : {
         "desc" : [
            "Specifies a list of patient heterogeneity characteristics used for calculating dose. This Attribute shall be multi-valued if beams used to compute the dose have differing correction techniques.",
            {
               "list" : [
                  [
                     "IMAGE",
                     "image data"
                  ],
                  [
                     "ROI_OVERRIDE",
                     "one or more ROI densities override image or water values where they exist"
                  ],
                  [
                     "WATER",
                     "entire volume treated as water equivalent"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose",
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Tissue Heterogeneity Correction"
      },
      "(0010,0200)" : {
         "module" : "Patient",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "usage" : "M"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0020,4000)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "User-defined comments about the image",
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Image Comments",
         "entity" : "Dose",
         "req" : "3"
      },
      "(3004,0050)[<0>](3004,0060)[<1>](3004,0062)" : {
         "name" : "DVH ROI Contribution Type",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "U",
         "module" : "RT DVH",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : [
            [
               "Specifies whether volume within ROI is included or excluded in DVH. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.4.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "INCLUDED",
                     null
                  ],
                  [
                     "EXCLUDED",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0020,000d)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(60xx,1500)" : {
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "Overlay Label",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "U"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,2298)" : {
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0100,0410)" : {
         "req" : "3",
         "name" : "SOP Instance Status",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "name" : "Occupation",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,3010)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "name" : "Irradiation Event UID",
         "entity" : "Dose",
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Institutional Department Name",
         "entity" : "Equipment"
      },
      "(0008,9215)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "name" : "Derivation Code Sequence",
         "entity" : "Dose",
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3004,0050)[<0>](3004,0070)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "DVH Minimum Dose",
         "entity" : "Dose",
         "desc" : "Minimum calculated dose to ROI(s) described by DVH Referenced ROI Sequence (3004,0060).",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "RT Series",
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
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,2111)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Derivation Description",
         "entity" : "Dose",
         "req" : "3",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)" : {
         "desc" : [
            "Sequence of items describing images in a given series used in defining the Structure Set (typically CT or MR images).",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "entity" : "Dose",
         "name" : "Contour Image Sequence",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "RT Series"
      },
      "(0028,2000)" : {
         "name" : "ICC Profile",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "Image Pixel",
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "entity" : "Dose",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Dose",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,0107)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "Image Pixel"
      },
      "(0040,0280)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series"
      },
      "(3006,0020)[<0>](3006,0026)" : {
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "User-defined name for ROI.",
         "entity" : "Dose",
         "name" : "ROI Name",
         "req" : "2",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1150)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "ROI Contour"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "name" : "Rows",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image."
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(3006,0006)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "entity" : "Dose",
         "name" : "Structure Set Description",
         "req" : "3",
         "desc" : "User-defined description for Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Bits Stored",
         "entity" : "Dose",
         "req" : "1",
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
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "entity" : "Dose"
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0028,3000)[<0>](0028,3006)" : {
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "LUT Data"
      },
      "(60xx,1303)" : {
         "usage" : "U",
         "entity" : "Dose",
         "name" : "ROI Standard Deviation",
         "req" : "3",
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
         ],
         "module" : "Overlay Plane"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "LUT Explanation",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : "Free form text explanation of the meaning of the transformation in this Item."
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced SOP Instance UID",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ]
      },
      "(0010,2160)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,0022)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Acquisition Date",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "The date the acquisition of data that resulted in this image started",
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,0102)" : [
         {
            "req" : "1",
            "name" : "High Bit",
            "entity" : "Dose",
            "usage" : "C - Required if dose data contains grid-based doses.",
            "module" : "Image Pixel",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-39"
            ],
            "desc" : [
               "Most significant bit for each pixel sample. Each sample shall have the same high bit. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.3.4.5"
                  },
                  "el" : "xref"
               },
               " for specialization. Required if Pixel Data (7FE0,0010) is present."
            ],
            "module" : "RT Dose",
            "usage" : "M",
            "req" : "1C",
            "name" : "High Bit",
            "entity" : "Dose"
         }
      ],
      "(3006,0010)[<0>](3006,0012)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0042)" : {
         "desc" : [
            [
               "Geometric type of contour. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "POINT",
                     "single point"
                  ],
                  [
                     "OPEN_PLANAR",
                     "open contour containing coplanar points"
                  ],
                  [
                     "OPEN_NONPLANAR",
                     "open contour containing non-coplanar points"
                  ],
                  [
                     "CLOSED_PLANAR",
                     "closed contour (polygon) containing coplanar points"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Contour Geometric Type",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Real World Value First Value Mapped",
         "entity" : "Dose",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image"
      },
      "(0028,1101)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "entity" : "Dose",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "RT Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "name" : "Real World Value LUT Data",
         "entity" : "Dose"
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Scheduled Procedure Step ID",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(0028,2114)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Lossy Image Compression Method",
         "entity" : "Dose",
         "req" : "3",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "For historical reasons, the lossy compression method may also be described in Derivation Description (0008,2111)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0010,0040)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient's Sex",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1",
         "entity" : "Dose",
         "name" : "Multi-frame Source SOP Instance UID",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0012,0083)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "module" : "Clinical Trial Study",
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
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "entity" : "Dose",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0038,0062)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0012,0083)[<0>](0012,0085)" : {
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "req" : "1",
         "usage" : "U"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
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
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "req" : "3",
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Dose",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-41",
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
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Dose"
      },
      "(0020,000e)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Unique identifier of the series.",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "entity" : "Dose",
         "req" : "1C",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction"
      },
      "(0008,002a)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Acquisition DateTime",
         "entity" : "Dose",
         "req" : "3"
      },
      "(60xx,0045)" : {
         "name" : "Overlay Subtype",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "U",
         "module" : "Overlay Plane",
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
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Modifying System",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1",
         "name" : "Type of Patient ID",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3006,0002)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "Structure Set Label",
         "entity" : "Dose",
         "desc" : "User-defined label for Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "module" : "SOP Common",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0028,0006)" : {
         "mod_tables" : [
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
         "module" : "Image Pixel",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Planar Configuration"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0012,0020)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
         "req" : "1",
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
         "module" : "Clinical Trial Subject"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0048)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Contour Number",
         "entity" : "Dose",
         "req" : "3",
         "desc" : "Identification number of the contour. The value of Contour Number (3006,0048) shall be unique within the Contour Sequence (3006,0040) in which it is defined. No semantics or ordering shall be inferred from this attribute.",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour"
      },
      "(0008,0015)" : {
         "req" : "3",
         "entity" : "Dose",
         "name" : "Instance Coercion DateTime",
         "usage" : "M",
         "module" : "SOP Common",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "entity" : "Study"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Date",
         "entity" : "Series",
         "usage" : "M"
      },
      "(3004,0050)[<0>](3004,0058)" : {
         "req" : "1",
         "name" : "DVH Data",
         "entity" : "Dose",
         "usage" : "U",
         "module" : "RT DVH",
         "desc" : [
            "A data stream describing the dose bin widths Dnand associated volumes Vnin DVH Volume Units (3004,0054) in the order D1V1, D2V2, \u2026 DnVn.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "DVH Data arrays may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-40"
         ]
      },
      "(3006,0020)[<0>](3006,0038)" : {
         "req" : "3",
         "name" : "ROI Generation Description",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "desc" : "User-defined description of technique used to generate ROI.",
         "mod_tables" : [
            "table_C.8-41"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
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
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "name" : "Study ID",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "RT Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(3006,0020)[<0>](3006,0024)" : {
         "req" : "1",
         "name" : "Referenced Frame of Reference UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "desc" : "Uniquely identifies Frame of Reference in which ROI is defined, specified by Frame of Reference UID (0020,0052) in Referenced Frame of Reference Sequence (3006,0010).",
         "mod_tables" : [
            "table_C.8-41"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
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
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Dose",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "entity" : "Dose",
         "name" : "Series Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry."
      },
      "(0040,0245)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "RT Series"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Study Description",
         "entity" : "Study"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0070,0404)" : {
         "name" : "Referenced Spatial Registration Sequence",
         "entity" : "Dose",
         "req" : "2C",
         "usage" : "M",
         "module" : "RT Dose",
         "desc" : [
            "A reference to a Spatial Registration SOP Instance or a Deformable Spatial Registration SOP Instance, which defines the transformation used to transform the dose.",
            "Required, if Spatial Transform of Dose (3004,0005) is provided and has a value of RIGID or NON_RIGID.",
            "Zero or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.3.5"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.8-39"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Certificate of Signer",
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
                           "content" : [
                              "\n                          ",
                              {
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
         "module" : "SOP Common"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "desc" : "Label that is used to identify the transformation of this Item.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "LUT Label",
         "entity" : "Dose",
         "req" : "1"
      },
      "(3006,0009)" : {
         "desc" : "Time at which Structure Set was last modified.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "2",
         "name" : "Structure Set Time",
         "entity" : "Dose"
      },
      "(0070,0404)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Dose",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-39",
            "table_10-11"
         ]
      },
      "(0012,0051)" : {
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "entity" : "Study",
         "req" : "3",
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
         "module" : "Clinical Trial Study"
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
            "table_C.7-8"
         ],
         "req" : "1C",
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "module" : "RT Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0022)" : {
         "desc" : "Uniquely identifies Fraction Group specified by Fraction Group Number (300A,0071) in Fraction Group Sequence of RT Fraction Scheme Module within RT Plan referenced in Referenced RT Plan Sequence (300C,0002).",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced Fraction Group Number",
         "entity" : "Dose"
      },
      "(0008,1164)" : {
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Frame Extraction Sequence",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(60xx,0015)" : {
         "module" : "Multi-frame Overlay",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "desc" : "Number of Frames in Overlay. Required if Overlay data contains multiple frames.",
         "name" : "Number of Frames in Overlay",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "U"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)" : {
         "module" : "General Image",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "name" : "Real World Value Mapping Sequence",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
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
         "req" : "1",
         "entity" : "Dose",
         "name" : "Modified Attributes Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
         "entity" : "Dose"
      },
      "(0020,0032)" : {
         "desc" : [
            "The x, y, and z coordinates of the upper left hand corner (center of the first voxel transmitted) of the image, in mm. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-10"
         ],
         "module" : "Image Plane",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Image Position (Patient)",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-39",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Dose"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Dose",
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "usage" : "M"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0046)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "Number of Contour Points",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "Number of points (triplets) in Contour Data (3006,0050).",
         "module" : "ROI Contour"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Dose"
      },
      "(60xx,0011)" : {
         "entity" : "Dose",
         "name" : "Overlay Columns",
         "req" : "1",
         "usage" : "U",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "Number of Columns in Overlay."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "UID"
      },
      "(0028,1103)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Dose",
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
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "name" : "Specific Character Set",
         "entity" : "Dose"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "name" : "High Bit",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5"
               }
            },
            " for further explanation."
         ]
      },
      "(300c,0060)[<0>](0008,1150)" : {
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-40",
            "table_10-11"
         ],
         "module" : "RT DVH"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "RT Series",
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
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "entity" : "Dose"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Other Patient IDs Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "name" : "Pixel Data",
         "entity" : "Dose",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
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
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Encrypted Content",
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
         "module" : "SOP Common"
      },
      "(3004,0050)[<0>](3004,0056)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Dose",
         "name" : "DVH Number of Bins",
         "desc" : "Number of bins n used to store DVH Data (3004,0058).",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0004)" : {
         "entity" : "Dose",
         "name" : "Referenced Beam Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Dose",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "Sequence of Beams in current Fraction Group contributing to dose. Required if Dose Summation Type (3004,000A) is BEAM, BEAM_SESSION or CONTROL_POINT.",
            "One or more items shall be included in this sequence."
         ]
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "name" : "Clinical Trial Series Description",
         "req" : "3",
         "usage" : "U"
      },
      "(0018,0050)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "2",
         "entity" : "Dose",
         "name" : "Slice Thickness",
         "desc" : "Nominal slice thickness, in mm.",
         "mod_tables" : [
            "table_C.7-10"
         ],
         "module" : "Image Plane"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(3004,0006)" : {
         "entity" : "Dose",
         "name" : "Dose Comment",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Dose",
         "desc" : "User-defined comments for dose data.",
         "mod_tables" : [
            "table_C.8-39"
         ]
      },
      "(0008,001b)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Dose",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Dose",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(2050,0020)" : {
         "entity" : "Dose",
         "name" : "Presentation LUT Shape",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
      "(0028,1203)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Data",
         "entity" : "Dose",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(3004,0050)[<0>](3004,0004)" : {
         "module" : "RT DVH",
         "desc" : [
            "Type of dose.",
            {
               "list" : [
                  [
                     "PHYSICAL",
                     "physical dose"
                  ],
                  [
                     "EFFECTIVE",
                     "physical dose after correction for biological effect using user-defined modeling technique"
                  ],
                  [
                     "ERROR",
                     "difference between desired and planned dose"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-40"
         ],
         "req" : "1",
         "entity" : "Dose",
         "name" : "Dose Type",
         "usage" : "U"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,114a)" : {
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series"
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
         "usage" : "U",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Modality LUT Type"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "entity" : "Dose",
         "name" : "Software Versions",
         "usage" : "M"
      },
      "(0028,0008)" : {
         "usage" : "C - Required if dose data contains grid-based doses and pixel data is multi-frame data.",
         "name" : "Number of Frames",
         "entity" : "Dose",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-14"
         ],
         "module" : "Multi-frame"
      },
      "(0010,21b0)" : {
         "usage" : "U",
         "name" : "Additional Patient History",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "RT Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0070,0404)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-39",
            "table_10-11"
         ],
         "module" : "RT Dose"
      },
      "(60xx,3000)" : {
         "usage" : "U",
         "entity" : "Dose",
         "name" : "Overlay Data",
         "req" : "1",
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
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Overlay Plane"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)" : {
         "desc" : [
            "Sequence describing series of images within the referenced study that are used in defining the Structure Set.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "RT Referenced Series Sequence",
         "entity" : "Dose"
      },
      "(0010,0024)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,1201)" : {
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Dose",
         "req" : "1C"
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose"
      },
      "(0010,1010)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(3004,0042)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "DVH Normalization Dose Value",
         "entity" : "Dose",
         "desc" : "Dose Value at DVH Normalization Point (3004,0040) used as reference for individual DVHs when Dose Units (3004,0002) is RELATIVE.",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(7fe0,0010)" : {
         "entity" : "Dose",
         "name" : "Pixel Data",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
      "(0028,3000)[<0>](0028,3002)" : {
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the Modality LUT Sequence (0028,3000) is sent."
         ],
         "module" : "Modality LUT",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "LUT Descriptor"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Digital Signatures Sequence"
      },
      "(0028,0100)" : [
         {
            "req" : "1",
            "entity" : "Dose",
            "name" : "Bits Allocated",
            "usage" : "C - Required if dose data contains grid-based doses.",
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1C",
            "entity" : "Dose",
            "name" : "Bits Allocated",
            "usage" : "M",
            "module" : "RT Dose",
            "mod_tables" : [
               "table_C.8-39"
            ],
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.3.4.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization. Required Pixel Data (7FE0,0010) is present."
            ]
         }
      ],
      "(300c,0002)" : {
         "module" : "RT Dose",
         "desc" : [
            "Sequence describing RT Plan associated with dose. Required if Dose Summation Type (3004,000A) is PLAN, MULTI_PLAN, FRACTION, BEAM, BRACHY, FRACTION_SESSION, BEAM_SESSION, BRACHY_SESSION or CONTROL_POINT.",
            "Only a single item shall be included in this sequence, unless Dose Summation Type (3004,000A) is MULTI_PLAN, in which case two or more items shall be included in this sequence. See Note 1."
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "req" : "1C",
         "name" : "Referenced RT Plan Sequence",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "req" : "1"
      },
      "(0020,0037)" : {
         "entity" : "Dose",
         "name" : "Image Orientation (Patient)",
         "req" : "1",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "Image Plane",
         "desc" : [
            "The direction cosines of the first row and the first column with respect to the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-10"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0020,0011)" : {
         "module" : "RT Series",
         "desc" : "A number that identifies this series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "entity" : "Series",
         "name" : "Series Number",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
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
         "module" : "General Study"
      },
      "(0028,0002)" : [
         {
            "name" : "Samples per Pixel",
            "entity" : "Dose",
            "req" : "1",
            "usage" : "C - Required if dose data contains grid-based doses.",
            "module" : "Image Pixel",
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
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "req" : "1C",
            "name" : "Samples per Pixel",
            "entity" : "Dose",
            "mod_tables" : [
               "table_C.8-39"
            ],
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.3.4.1"
                  }
               },
               " for specialization. Required if Pixel Data (7FE0,0010) is present."
            ],
            "module" : "RT Dose"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "name" : "Value Type",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
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
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3"
      },
      "(0012,0050)" : {
         "req" : "2",
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         ]
      },
      "(0040,0253)" : {
         "req" : "3",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
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
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
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
      "(0010,2201)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "name" : "Patient Species Description",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "req" : "1C",
         "name" : "Simple Frame List",
         "entity" : "Dose",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Dose",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Reason for the Attribute Modification",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "name" : "Study Instance UID",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C"
      },
      "(0008,2112)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Source Image Sequence",
         "entity" : "Dose",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "module" : "General Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3004,0010)[<0>](3004,0002)" : {
         "mod_tables" : [
            "table_C.8-43"
         ],
         "desc" : [
            "Units used for ROI Dose.",
            {
               "list" : [
                  [
                     "GY",
                     "Gray"
                  ],
                  [
                     "RELATIVE",
                     "dose relative to implicit reference value"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Dose ROI",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "entity" : "Dose",
         "name" : "Dose Units",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "name" : "Accession Number",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "RT Series"
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
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Denominator Value"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Real World Value Slope",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "module" : "RT Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "DateTime",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "UID",
         "entity" : "Series",
         "req" : "1C"
      },
      "(3006,0039)" : {
         "desc" : [
            "Sequence of Contour Sequences defining ROIs.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "ROI Contour Sequence",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
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
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Dose",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "Series Instance UID",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "ICC Profile",
         "req" : "3",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(0028,0300)" : {
         "name" : "Quality Control Image",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the Device Module. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(3004,0050)[<0>](3004,0060)[<1>](3006,0084)" : {
         "name" : "Referenced ROI Number",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "U",
         "module" : "RT DVH",
         "desc" : "Uniquely identifies ROI used to calculate DVH specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set referenced by referenced RT Plan in Referenced RT Plan Sequence (300C,0002) in RT Dose Module.",
         "mod_tables" : [
            "table_C.8-40"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Time of Last Calibration"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Time",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Planar Configuration",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0028,0034)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1",
         "name" : "Bits Allocated",
         "entity" : "Dose"
      },
      "(0010,2294)" : {
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C"
      },
      "(0010,0021)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Manufacturer"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "module" : "Patient",
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M"
      },
      "(60xx,1302)" : {
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "usage" : "U",
         "name" : "ROI Mean",
         "entity" : "Dose",
         "req" : "3"
      },
      "(3004,0010)" : {
         "mod_tables" : [
            "table_C.8-43"
         ],
         "desc" : [
            "Sequence specifying dose levels for isodose curves or dose points described in the ROI module.",
            "One or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.7.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Dose ROI",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "entity" : "Dose",
         "name" : "RT Dose ROI Sequence",
         "req" : "1"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient ID",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient.",
         "module" : "Patient"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0028,0010)" : {
         "module" : "Image Pixel",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Rows",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
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
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3006,0010)" : {
         "desc" : [
            "Sequence describing Frames of Reference in which the ROIs are defined. One or more items are permitted in this sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.5.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "3",
         "name" : "Referenced Frame of Reference Sequence",
         "entity" : "Dose"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0062,000b)" : {
         "module" : "ROI Contour",
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Dose",
         "req" : "1C",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "req" : "1",
         "entity" : "Dose",
         "name" : "Pixel Representation",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0028,1201)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "module" : "Image Pixel",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Dose",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9211)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Dose",
         "name" : "Real World Value Last Value Mapped",
         "req" : "1",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
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
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Real World Value Intercept",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(3006,0020)[<0>](3006,0036)" : {
         "module" : "Structure Set",
         "desc" : [
            "Type of algorithm used to generate ROI.",
            {
               "list" : [
                  [
                     "AUTOMATIC",
                     "calculated ROI"
                  ],
                  [
                     "SEMIAUTOMATIC",
                     "ROI calculated with user assistance"
                  ],
                  [
                     "MANUAL",
                     "user-entered ROI"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "req" : "2",
         "entity" : "Dose",
         "name" : "ROI Generation Algorithm",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0012,0031)" : {
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "entity" : "Patient",
         "req" : "2",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "entity" : "Study"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "usage" : "M"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,1040)" : {
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
         "usage" : "M",
         "req" : "2",
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "1C",
         "name" : "Patient Orientation",
         "entity" : "Dose"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "usage" : "U"
      },
      "(300c,0060)[<0>](0008,1155)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-40",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT DVH"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1155)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "ROI Contour"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,0030)" : {
         "mod_tables" : [
            "table_C.7-10"
         ],
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               }
            },
            " for further explanation."
         ],
         "module" : "Image Plane",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Pixel Spacing",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "req" : "1C"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0049)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "List of Contour Number (3006,0048) defining lower-numbered contour(s) to which the current contour is connected.",
         "module" : "ROI Contour",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "3",
         "name" : "Attached Contours",
         "entity" : "Dose"
      },
      "(0020,0013)" : [
         {
            "usage" : "C - Required if dose data contains grid-based doses.",
            "req" : "2",
            "name" : "Instance Number",
            "entity" : "Dose",
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
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image"
         },
         {
            "mod_tables" : [
               "table_C.8-39"
            ],
            "desc" : "A number that identifies this object instance.",
            "module" : "RT Dose",
            "usage" : "M",
            "req" : "3",
            "name" : "Instance Number",
            "entity" : "Dose"
         },
         {
            "desc" : "A number that identifies this object instance.",
            "mod_tables" : [
               "table_C.8-41"
            ],
            "module" : "Structure Set",
            "usage" : "C - Required if dose data contains dose points or isodose curves",
            "entity" : "Dose",
            "name" : "Instance Number",
            "req" : "3"
         },
         {
            "name" : "Instance Number",
            "entity" : "Dose",
            "req" : "3",
            "usage" : "M",
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Instance Creator UID"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "module" : "RT Dose",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-39",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(3004,0004)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Dose Type",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "Type of dose.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PHYSICAL",
                     "physical dose"
                  ],
                  [
                     "EFFECTIVE",
                     "physical dose after correction for biological effect using user-defined modeling technique"
                  ],
                  [
                     "ERROR",
                     "difference between desired and planned dose"
                  ]
               ]
            }
         ],
         "module" : "RT Dose"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0028,0106)" : {
         "module" : "Image Pixel",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)" : {
         "module" : "ROI Contour",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            "Sequence of images containing the contour.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Contour Image Sequence",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "entity" : "Dose",
         "name" : "Source of Previous Values",
         "usage" : "M"
      },
      "(0028,3000)" : {
         "module" : "Modality LUT",
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "desc" : [
            "Defines a sequence of Modality LUTs.",
            "Only a single Item shall be included in this sequence.",
            "Shall not be present if Rescale Intercept (0028,1052) is present."
         ],
         "entity" : "Dose",
         "name" : "Modality LUT Sequence",
         "req" : "1C",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
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
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Dose",
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0090)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "req" : "2"
      },
      "(0008,0201)" : {
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "entity" : "Dose",
         "usage" : "M",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
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
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
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
                     "el" : "para"
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
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Coding Scheme UID",
         "usage" : "M"
      },
      "(3004,0050)[<0>](3004,0072)" : {
         "desc" : "Maximum calculated dose to ROI(s) described by DVH Referenced ROI Sequence (3004,0060).",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH",
         "usage" : "U",
         "name" : "DVH Maximum Dose",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "module" : "Clinical Trial Subject"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "usage" : "M"
      },
      "(0008,1140)" : {
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Image Sequence",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(3006,0020)[<0>](3006,0022)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Identification number of the ROI. The value of ROI Number (3006,0022) shall be unique within the Structure Set in which it is created.",
         "module" : "Structure Set",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "ROI Number",
         "entity" : "Dose"
      },
      "(0028,0301)" : {
         "req" : "3",
         "name" : "Burned In Annotation",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses.",
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
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0040,0251)" : {
         "module" : "RT Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,2299)" : {
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "entity" : "Patient",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(3006,0039)[<0>](3006,0040)" : {
         "entity" : "Dose",
         "name" : "Contour Sequence",
         "req" : "3",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "ROI Contour",
         "desc" : "Sequence of Contours defining ROI. One or more items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-42"
         ]
      },
      "(0008,0021)" : {
         "req" : "3",
         "name" : "Series Date",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Date the Series started."
      },
      "(3006,0018)[<0>](0008,1150)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Structure Set"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Photometric Interpretation",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "req" : "2",
         "name" : "Study Time",
         "entity" : "Study",
         "usage" : "M"
      },
      "(3004,0050)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "DVH Sequence",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : [
            "Sequence of DVHs.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT DVH"
      },
      "(3006,0039)[<0>](3006,0084)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "req" : "1",
         "name" : "Referenced ROI Number",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "Uniquely identifies the referenced ROI described in the Structure Set ROI Sequence (3006,0020).",
         "module" : "ROI Contour"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C"
      },
      "(0008,1090)" : {
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0100,0424)" : {
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Calculated Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
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
         "module" : "Frame Extraction"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0032)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "module" : "Patient"
      },
      "(0008,1111)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Referenced Performed Procedure Step Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "usage" : "M"
      },
      "(3006,0008)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Structure Set Date",
         "entity" : "Dose",
         "req" : "2",
         "desc" : "Date at which Structure Set was last modified.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0008,1140)[<0>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "entity" : "Dose",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0028,0009)" : {
         "req" : "1",
         "name" : "Frame Increment Pointer",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses and pixel data is multi-frame data.",
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
         ],
         "mod_tables" : [
            "table_C.7-14"
         ]
      },
      "(60xx,1301)" : {
         "req" : "3",
         "entity" : "Dose",
         "name" : "ROI Area",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](0020,000e)" : {
         "module" : "Structure Set",
         "desc" : "Unique identifier for the series containing the images.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "entity" : "Dose",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0012,0042)" : {
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID",
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
         ]
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0004)[<2>](300c,00f2)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Referenced Control Point Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence defining the Control Points in current Beam contributing to dose.",
            "Required if Dose Summation Type (3004,000A) is CONTROL_POINT.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0028,2112)" : {
         "entity" : "Dose",
         "name" : "Lossy Image Compression Ratio",
         "req" : "3",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0004)[<2>](300c,0006)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Referenced Beam Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : "Uniquely identifies Beam specified by Beam Number (300A,00C0) in Beam Sequence of RT Beams Module within RT Plan referenced in Referenced RT Plan Sequence (300C,0002).",
         "module" : "RT Dose"
      },
      "(0008,0023)" : {
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ],
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
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "2C",
         "name" : "Content Date",
         "entity" : "Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "req" : "1"
      },
      "(3006,0004)" : {
         "entity" : "Dose",
         "name" : "Structure Set Name",
         "req" : "3",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "desc" : "User-defined name for Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,103e)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Series Description",
         "entity" : "Series",
         "desc" : "Description of the series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series"
      },
      "(0400,0561)" : {
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(3004,0050)[<0>](3004,0054)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "DVH Volume Units",
         "entity" : "Dose",
         "desc" : [
            "Volume axis units.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CM3",
                     "cubic centimeters"
                  ],
                  [
                     "PERCENT",
                     "percent"
                  ],
                  [
                     "PER_U",
                     [
                        "volume per u with u(dose)=dose",
                        {
                           "el" : "superscript",
                           "content" : [
                              "-3/2"
                           ]
                        },
                        ". See ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.8.8.4.3",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ]
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH"
      },
      "(0010,0024)[<0>](0040,0035)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC ID Number",
         "entity" : "Dose",
         "req" : "1"
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "req" : "3"
      },
      "(0040,a390)" : {
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Dose",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(3004,000c)" : {
         "module" : "RT Dose",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "An array that contains the dose image plane offsets (in mm) of the dose image frames in a multi-frame dose. Required if multi-frame pixel data are present and Frame Increment Pointer (0028,0009) points to Grid Frame Offset Vector (3004,000C). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.3.2"
               }
            },
            "."
         ],
         "req" : "1C",
         "name" : "Grid Frame Offset Vector",
         "entity" : "Dose",
         "usage" : "M"
      },
      "(3004,000a)" : {
         "desc" : [
            "Type of dose summation.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PLAN",
                     "dose calculated for entire delivery of all fraction groups of RT Plan"
                  ],
                  [
                     "MULTI_PLAN",
                     "dose calculated for entire delivery of 2 or more RT Plans"
                  ],
                  [
                     "FRACTION",
                     "dose calculated for entire delivery of a single Fraction Group within RT Plan"
                  ],
                  [
                     "BEAM",
                     "dose calculated for entire delivery of one or more Beams within RT Plan"
                  ],
                  [
                     "BRACHY",
                     "dose calculated for entire delivery of one or more Brachy Application Setups within RT Plan"
                  ],
                  [
                     "FRACTION_SESSION",
                     "dose calculated for a single session (\"fraction\") of a single Fraction Group within RT Plan"
                  ],
                  [
                     "BEAM_SESSION",
                     "dose calculated for a single session (\"fraction\") of one or more Beams within RT Plan"
                  ],
                  [
                     "BRACHY_SESSION",
                     "dose calculated for a single session (\"fraction\") of one or more Brachy Application Setups within RT Plan"
                  ],
                  [
                     "CONTROL_POINT",
                     "dose calculated for one or more Control Points within a Beam for a single fraction"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-39"
         ],
         "module" : "RT Dose",
         "usage" : "M",
         "entity" : "Dose",
         "name" : "Dose Summation Type",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(3006,0020)[<0>](0008,9215)" : {
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "name" : "Derivation Code Sequence",
         "entity" : "Dose",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "A coded description of how this ROI was derived.",
            "One or more items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.5.3"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Structure Set"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Green Palette Color Lookup Table Data",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "req" : "1C"
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
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "entity" : "Patient"
      },
      "(3004,0050)[<0>](3004,0052)" : {
         "module" : "RT DVH",
         "mod_tables" : [
            "table_C.8-40"
         ],
         "desc" : "Scaling factor that when multiplied by the dose bin widths found in DVH Data (3004,0058), yields dose bin widths in the dose units as specified by Dose Units (3004,0002).",
         "name" : "DVH Dose Scaling",
         "entity" : "Dose",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Pixel Aspect Ratio",
         "entity" : "Dose",
         "req" : "1C"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image"
      },
      "(0008,0033)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "entity" : "Dose",
         "name" : "Content Time",
         "req" : "2C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "entity" : "Dose",
         "usage" : "M",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Dose",
         "req" : "3"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description",
         "req" : "3"
      },
      "(3004,0010)[<0>](3006,0084)" : {
         "name" : "Referenced ROI Number",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "RT Dose ROI",
         "mod_tables" : [
            "table_C.8-43"
         ],
         "desc" : [
            "Uniquely identifies the referenced ROI within the current RT Dose. See Note 1 and ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.7.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](0008,1155)" : {
         "module" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Dose",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "module" : "Patient"
      },
      "(0028,1052)" : {
         "desc" : [
            "The value b in relationship between stored values (SV) and the output units specified in Rescale Type (0028,1054).",
            "Output units = m*SV + b.",
            "Required if Modality LUT Sequence (0028,3000) is not present. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "usage" : "U",
         "entity" : "Dose",
         "name" : "Rescale Intercept",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "Patient"
      },
      "(0028,0004)" : [
         {
            "usage" : "C - Required if dose data contains grid-based doses.",
            "req" : "1",
            "entity" : "Dose",
            "name" : "Photometric Interpretation",
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
            "module" : "Image Pixel"
         },
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.3.4.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization. Required if Pixel Data (7FE0,0010) is present."
            ],
            "mod_tables" : [
               "table_C.8-39"
            ],
            "module" : "RT Dose",
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "entity" : "Dose",
            "req" : "1C"
         }
      ],
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "name" : "Blue Palette Color Lookup Table Data",
         "entity" : "Dose",
         "req" : "1C"
      },
      "(0038,0014)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,0008)" : {
         "module" : "General Image",
         "desc" : [
            "Image identification characteristics. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Defined Terms and further explanation."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "entity" : "Dose",
         "name" : "Image Type",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(3006,0020)[<0>](3006,0028)" : {
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "User-defined description for ROI.",
         "name" : "ROI Description",
         "entity" : "Dose",
         "req" : "3",
         "usage" : "C - Required if dose data contains dose points or isodose curves"
      },
      "(0028,2110)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
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
                     "linkend" : "sect_C.7.6.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "entity" : "Dose",
         "name" : "Lossy Image Compression"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "module" : "RT Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference"
      },
      "(60xx,0010)" : {
         "name" : "Overlay Rows",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "U",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "Number of Rows in Overlay."
      },
      "(300c,0002)[<0>](300c,0020)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Referenced Fraction Group Sequence",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "Sequence of one Fraction Group containing beams or brachy application setups contributing to dose. Required if Dose Summation Type (3004,000A) is FRACTION, BEAM, BRACHY, FRACTION_SESSION, BEAM_SESSION, BRACHY_SESSION or CONTROL_POINT.",
            "Only a single item shall be included in this sequence. See Note 1."
         ],
         "module" : "RT Dose"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Dose",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,1053)" : {
         "desc" : [
            "m in the equation specified by Rescale Intercept (0028,1052).",
            "Required if Rescale Intercept is present."
         ],
         "mod_tables" : [
            "table_C.11-1b"
         ],
         "module" : "Modality LUT",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Dose",
         "name" : "Rescale Slope"
      },
      "(300c,0060)" : {
         "desc" : [
            "Sequence of one class/instance pair describing Structure Set containing structures that are used to calculate Dose-Volume Histograms (DVHs).",
            [
               "Only a single item shall be included in this sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.4.1"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-40"
         ],
         "module" : "RT DVH",
         "usage" : "U",
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced Structure Set Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1021)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Patient Study"
      },
      "(300c,0002)[<0>](300c,0020)[<1>](300c,0004)[<2>](300c,00f2)[<3>](300c,00f6)" : {
         "req" : "1",
         "entity" : "Dose",
         "name" : "Referenced Stop Control Point Index",
         "usage" : "M",
         "module" : "RT Dose",
         "mod_tables" : [
            "table_C.8-39"
         ],
         "desc" : [
            "Identifies Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006). This is the second of the two Control Points from which the Dose contribution to the Control Point can be calculated.",
            "The Control Point Index (300A,0112) referenced by Referenced",
            "Stop Control Point Index (300C,00F6) shall be the Control Point Index (300A,0112) immediately following the Control Point Index (300A,0112) referenced by Referenced Start Control Point Index (300C,00F4) within the Referenced Beam Number (300C,0006)."
         ]
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains grid-based doses."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Dose",
         "usage" : "C - Required if dose data contains dose points or isodose curves",
         "module" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(3004,0050)[<0>](3004,0002)" : {
         "name" : "Dose Units",
         "entity" : "Dose",
         "req" : "1",
         "usage" : "U",
         "module" : "RT DVH",
         "desc" : [
            "Dose axis units.",
            {
               "list" : [
                  [
                     "GY",
                     "Gray"
                  ],
                  [
                     "RELATIVE",
                     "dose relative to reference value specified in DVH Normalization Dose Value (3004,0042)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-40"
         ]
      },
      "(0020,0012)" : {
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "3",
         "name" : "Acquisition Number",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "module" : "General Image"
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Distribution Type",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series"
      },
      "(0008,1200)" : {
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1C",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Dose"
      },
      "(0020,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image",
         "usage" : "C - Required if dose data contains grid-based doses.",
         "req" : "2C",
         "name" : "Patient Orientation",
         "entity" : "Dose"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "name" : "Coding Scheme Name",
         "entity" : "Dose",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Dose",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference"
      }
   }
}