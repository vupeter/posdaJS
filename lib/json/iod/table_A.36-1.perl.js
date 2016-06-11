var data = {
   "tags" : {
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "usage" : "U",
         "name" : "Study Instance UID"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0028,0006)" : [
         {
            "module" : "Image Pixel",
            "req" : "1C",
            "entity" : "Image",
            "usage" : "M",
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            ]
         },
         {
            "req" : "1C",
            "module" : "Enhanced MR Image",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.3"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.1.1.2"
                  }
               },
               " for further explanation."
            ],
            "name" : "Planar Configuration",
            "usage" : "M",
            "entity" : "Image"
         }
      ],
      "(0008,1040)" : {
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Storage Media File-Set UID",
         "usage" : "M"
      },
      "(0008,0020)" : {
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Stop Time",
         "desc" : "Time of end of administration.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3"
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Frame Extraction",
         "req" : "1"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "module" : "Frame Extraction",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
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
      "(0040,1012)" : {
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "usage" : "U",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "name" : "Signature",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "entity" : "Image"
      },
      "(0018,106a)" : {
         "module" : "Synchronization",
         "req" : "1",
         "entity" : "Frame of Reference",
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Trigger",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer of the container component.",
         "usage" : "U",
         "name" : "Manufacturer"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "Specimen",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1"
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
         "usage" : "M",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0010,2292)" : {
         "req" : "2C",
         "module" : "Patient",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Breed Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "name" : "Series Date",
         "usage" : "M",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "3"
      },
      "(0008,9121)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "The Raw data that was used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The items of in this sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images and spectra in different instances have been reconstructed from the same raw data."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced Raw Data Sequence",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Thickness in mm of container component",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0020,0200)" : {
         "module" : "Synchronization",
         "req" : "1",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Frame of Reference UID",
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "module" : "General Series",
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
         "usage" : "M",
         "name" : "Person Name"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certificate of Signer",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "name" : "Signature",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0028,0034)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "req" : "1C",
         "module" : "Image Pixel"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Date of Last Calibration",
         "entity" : "Image"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
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
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "req" : "1C",
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
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "usage" : "U",
         "name" : "Container Component Width",
         "desc" : "Width in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
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
         "name" : "Date",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M"
      },
      "(0040,0555)" : {
         "module" : "Acquisition Context",
         "req" : "2",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Acquisition Context Sequence",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,1010)" : {
         "req" : "3",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "name" : "Station Name",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M"
      },
      "(0020,9222)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Dimension Index Sequence",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "req" : "1"
      },
      "(0018,9094)" : {
         "module" : "MR Pulse Sequence",
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Coverage of k-Space",
         "desc" : [
            "Coverage of k-Space in the ky-kz plane.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FULL",
                     null
                  ],
                  [
                     "CYLINDRICAL",
                     null
                  ],
                  [
                     "ELLIPSOIDAL",
                     null
                  ],
                  [
                     "WEIGHTED",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and MR Acquisition Type (0018,0023) equals 3D.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and MR Acquisition Type (0018,0023) equals 3D."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
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
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
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
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "usage" : "M",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
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
         "req" : "3"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "usage" : "M",
         "name" : "Functional Group Pointer",
         "req" : "1C",
         "module" : "Multi-frame Dimension"
      },
      "(0008,1111)" : [
         {
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "req" : "3",
            "module" : "General Series"
         },
         {
            "module" : "MR Series",
            "req" : "1C",
            "usage" : "M",
            "name" : "Referenced Performed Procedure Step Sequence",
            "mod_tables" : [
               "table_C.8-101"
            ],
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "entity" : "Series"
         }
      ],
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "entity" : "Image",
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
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
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
         "name" : "Measurement Units Code Sequence",
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Step Content Item Sequence",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0018,9011)" : {
         "module" : "MR Pulse Sequence",
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Multiple Spin Echo",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Multiple Spin Echo category of pulse sequence used to collect different lines in k-space for a single frame.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Echo Pulse Sequence (0018,9008) equals SPIN or BOTH.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Echo Pulse sequence (0018,9008) equals SPIN or BOTH."
         ],
         "entity" : "Image"
      },
      "(0040,0251)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step End Time",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "req" : "2",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this sequence.",
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
         "name" : "Specimen Preparation Sequence",
         "usage" : "U"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Description",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study"
      },
      "(0028,1103)" : [
         {
            "name" : "Blue Palette Color Lookup Table Descriptor",
            "usage" : "M",
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
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1C"
         },
         {
            "req" : "1",
            "module" : "Supplemental Palette Color Lookup Table",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7.6.19-1"
            ],
            "desc" : [
               "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "name" : "Blue Palette Color Lookup Table Descriptor"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "req" : "1",
         "module" : "General Series",
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
         "name" : "Value Type",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "entity" : "Study",
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
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,9206)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "Volumetric Properties",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "Image",
         "desc" : "Length in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Length",
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "req" : "1C",
         "module" : "General Series",
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
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,9034)" : {
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Rectilinear phase encode reordering.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "CENTRIC",
                     null
                  ],
                  [
                     "SEGMENTED",
                     null
                  ],
                  [
                     "REVERSE_LINEAR",
                     null
                  ],
                  [
                     "REVERSE_CENTRIC",
                     null
                  ]
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Rectilinear Phase Encode Reordering",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
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
         ],
         "usage" : "M",
         "name" : "Reason for the Attribute Modification"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "entity" : "Image"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient"
      },
      "(0018,9092)" : {
         "desc" : [
            "Velocity encoding directions used for acquisition.",
            "Required if Phase Contrast (0018,9014) equals YES.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Velocity Encoding Acquisition Sequence",
         "entity" : "Image",
         "req" : "1C",
         "module" : "MR Pulse Sequence"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
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
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Referenced Frame Numbers",
         "usage" : "M",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "name" : "Container Component Material",
         "usage" : "U",
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
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "name" : "Bits Allocated",
         "entity" : "Image"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0040,0518)" : {
         "req" : "2",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Type Code Sequence"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1"
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
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0018,9093)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Number of interleaves or shots.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Number of k-Space Trajectories",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "req" : "1C",
         "module" : "MR Pulse Sequence"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Specimen Short Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "usage" : "M",
         "name" : "Content Item Modifier Sequence"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "name" : "Specimen UID",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "name" : "Series Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "Columns",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "req" : "1",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Identifier",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
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
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Study",
         "req" : "3"
      },
      "(0010,4000)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M",
         "name" : "Patient Comments",
         "entity" : "Patient"
      },
      "(0028,0303)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
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
               "content" : [
                  "\n                    ",
                  {
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
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "entity" : "Study",
         "req" : "2C",
         "module" : "Patient Study"
      },
      "(0040,0515)" : {
         "module" : "Specimen",
         "req" : "3",
         "name" : "Alternate Container Identifier Sequence",
         "usage" : "U",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "module" : "Device",
         "req" : "3",
         "name" : "Inter-Marker Distance",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
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
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "usage" : "M",
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : "Free text description that explains the meaning of the dimension.",
         "usage" : "M",
         "name" : "Dimension Description Label",
         "entity" : "Image",
         "req" : "3",
         "module" : "Multi-frame Dimension"
      },
      "(0008,9205)" : {
         "desc" : [
            "Indication of the presence or absence of color information that may be used during rendering. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.1"
               }
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "name" : "Pixel Presentation",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "name" : "Study Instance UID",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
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
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0020,4000)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : "User-defined comments about the image.",
         "usage" : "M",
         "name" : "Image Comments"
      },
      "(0008,0081)" : {
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0008,1250)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "el" : "para"
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
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0018,9070)" : {
         "req" : "1C",
         "module" : "Cardiac Synchronization",
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Heart Rate (0018,1088) is not used in this Module, since its value can be derived as 1/ Cardiac RR Interval Specified (0018,9070)."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "name" : "Cardiac RR Interval Specified",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "General Study"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0018,9173)" : {
         "req" : "1C",
         "module" : "Bulk Motion Synchronization",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "desc" : [
            "Signal source to measure motion.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "JOINT",
                     "joint motion detection"
                  ],
                  [
                     "NAVIGATOR",
                     "MR navigator and organ edge detection"
                  ],
                  [
                     "MR_PHASE",
                     "phase (of center k-space line)"
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE."
         ],
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "name" : "Bulk Motion Signal Source"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "name" : "Source of Previous Values",
         "usage" : "M"
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
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "2",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image"
      },
      "(0028,1203)" : [
         {
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
            "name" : "Blue Palette Color Lookup Table Data",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1C",
            "module" : "Image Pixel"
         },
         {
            "module" : "Supplemental Palette Color Lookup Table",
            "req" : "1",
            "name" : "Blue Palette Color Lookup Table Data",
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "desc" : [
               "Blue Palette Color Lookup Table Data. See ",
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
               "table_C.7.6.19-1"
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "usage" : "M",
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3"
      },
      "(0028,0011)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Image Pixel"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "name" : "Software Versions",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "req" : "1C",
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
         "usage" : "M",
         "name" : "UID",
         "entity" : "Series"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
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
         ]
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
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
         "module" : "General Series",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
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
         "module" : "Patient",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "entity" : "Image",
         "name" : "DateTime",
         "usage" : "U",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,0014)" : {
         "usage" : "M",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
         "req" : "1C",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Pixel Padding Value",
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,9170)" : {
         "entity" : "Image",
         "name" : "Respiratory Motion Compensation Technique",
         "usage" : "C - Required if respiratory synchronization was applied.",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "module" : "Respiratory Synchronization",
         "req" : "1C"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "req" : "2",
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "entity" : "Series"
         },
         {
            "module" : "MR Series",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class."
         }
      ],
      "(0400,0500)" : {
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.4.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Image",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "content" : [
                  "\n                    ",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Person Name",
         "usage" : "M",
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
      "(0008,0015)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Specific Character Set",
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
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "usage" : "M",
         "name" : "Bits Stored",
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
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Container Component Type Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(7fe0,0010)" : {
         "req" : "1C",
         "module" : "Image Pixel",
         "entity" : "Image",
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
         ],
         "usage" : "M",
         "name" : "Pixel Data"
      },
      "(0008,1070)" : {
         "entity" : "Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(0010,2298)" : {
         "req" : "1C",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person Role"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
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
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "module" : "Clinical Trial Study",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "Certificate Type",
         "usage" : "M",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "X509_1993_SIG",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Accession Number",
         "req" : "3",
         "module" : "General Series"
      },
      "(0018,1081)" : {
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Low R-R Value",
         "entity" : "Image",
         "req" : "2C",
         "module" : "Cardiac Synchronization"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
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
         "usage" : "M",
         "name" : "Samples per Pixel",
         "entity" : "Image"
      },
      "(0028,2112)" : {
         "mod_tables" : [
            "table_C.8-79"
         ],
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "May be multivalued if successive lossy compression steps have been applied.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Lossy Images Compression (0028,2110) is \"01\"."
         ],
         "name" : "Lossy Image Compression Ratio",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
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
         "module" : "Multi-frame Dimension",
         "req" : "1"
      },
      "(0018,0012)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "1",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0020,9221)" : {
         "entity" : "Image",
         "name" : "Dimension Organization Sequence",
         "usage" : "M",
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
         "module" : "Multi-frame Dimension",
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast Flow Duration",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
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
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "entity" : "Image",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "usage" : "U",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "2"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0050,0010)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Device Sequence",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "module" : "Device"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Image",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "module" : "Multi-frame Dimension",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0100,0424)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "entity" : "Image"
      },
      "(0008,0110)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0018,1084)" : {
         "req" : "2C",
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Intervals Rejected",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0038,0014)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0028,0010)" : {
         "usage" : "M",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "module" : "Image Pixel",
         "req" : "1"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0008,0090)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "entity" : "Study",
         "req" : "2",
         "module" : "General Study"
      },
      "(0018,1801)" : {
         "req" : "3",
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : "ID of equipment or system providing time reference",
         "name" : "Time Source",
         "usage" : "C - Required if time synchronization was applied."
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC ID Number",
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast Administration Profile Sequence",
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "Image"
      },
      "(0018,0087)" : {
         "usage" : "M",
         "name" : "Magnetic Field Strength",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "Nominal field strength of the MR Magnet, in Tesla.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Further description in free form text describing the device.",
         "usage" : "U",
         "name" : "Device Description"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "entity" : "Image"
      },
      "(0088,0200)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-79"
         ],
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0018,0088)" : {
         "usage" : "M",
         "name" : "Spacing between Slices",
         "desc" : "Value of the prescribed spacing to be applied between the slices in a volume that is to be acquired. The spacing in mm is defined as the center-to-center distance of adjacent slices.",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "req" : "1"
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "name" : "Study Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Calculated Frame List",
         "entity" : "Image"
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Value Type",
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "req" : "3",
         "module" : "General Study"
      },
      "(0018,1201)" : {
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
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
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "usage" : "M"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
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
         "req" : "2"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
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
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0028,0101)" : [
         {
            "req" : "1",
            "module" : "Image Pixel",
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
            "usage" : "M",
            "name" : "Bits Stored",
            "entity" : "Image"
         },
         {
            "name" : "Bits Stored",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. For Enumerated Values See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.1.1.2"
                  }
               },
               "."
            ],
            "entity" : "Image",
            "module" : "Enhanced MR Image",
            "req" : "1"
         }
      ],
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "M"
      },
      "(0018,9025)" : {
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Spectrally Selected Suppression.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FAT",
                     null
                  ],
                  [
                     "WATERFAT_AND_WATER",
                     null
                  ],
                  [
                     "SILICON_GEL",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Spectrally Selected Suppression",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image"
      },
      "(0040,0245)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Image"
      },
      "(0028,1102)" : [
         {
            "module" : "Image Pixel",
            "req" : "1C",
            "usage" : "M",
            "name" : "Green Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "name" : "Green Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7.6.19-1"
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
            "module" : "Supplemental Palette Color Lookup Table",
            "req" : "1"
         }
      ],
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0028,0100)" : [
         {
            "usage" : "M",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1"
         },
         {
            "usage" : "M",
            "name" : "Bits Allocated",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. For Enumerated Values See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.1.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "mod_tables" : [
               "table_C.8-79"
            ],
            "entity" : "Image",
            "module" : "Enhanced MR Image",
            "req" : "1"
         }
      ],
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
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
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "req" : "1C",
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
         ],
         "name" : "UID",
         "usage" : "M"
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
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
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
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Samples per Pixel",
            "req" : "1",
            "module" : "Image Pixel"
         },
         {
            "module" : "Enhanced MR Image",
            "req" : "1",
            "name" : "Samples per Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "desc" : [
               "Number of samples (planes) in this image. For Enumerated Values See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "entity" : "Image"
         }
      ],
      "(0008,1052)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "High Bit",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "table_C.8-79",
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Text Value",
         "usage" : "U",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0018,9037)" : {
         "module" : "Cardiac Synchronization",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac Synchronization Technique",
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
         "module" : "Acquisition Context",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "title" : "Defined Terms:",
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
         ],
         "usage" : "M",
         "name" : "Value Type",
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Largest Pixel Value in Series",
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
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
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "req" : "1",
         "module" : "Clinical Trial Study"
      },
      "(0020,0060)" : {
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Laterality",
         "entity" : "Series",
         "req" : "2C",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,0021)" : {
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
         "entity" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "module" : "Specimen",
         "req" : "1C",
         "name" : "UID",
         "usage" : "U",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "req" : "1C",
         "module" : "Enhanced MR Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "usage" : "M"
      },
      "(0054,0500)" : {
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.20.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "). Meaningful only for cardiac images."
            ],
            [
               "Enumerated Values are defined in ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.20.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "usage" : "M",
         "name" : "Slice Progression Direction",
         "entity" : "Image",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "usage" : "M",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "usage" : "C - Required if contrast media were applied.",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "usage" : "M"
      },
      "(0018,1200)" : {
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
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
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Date of Last Calibration"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0018,9171)" : {
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Respiratory Motion Compensation Technique (0018,9170) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Respiratory Motion Compensation Technique (0018,9170equals other than NONE."
         ],
         "name" : "Respiratory Signal Source",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "entity" : "Image"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study"
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0028,0102)" : [
         {
            "req" : "1",
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "name" : "High Bit",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "entity" : "Image",
            "module" : "Enhanced MR Image",
            "req" : "1"
         }
      ],
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Time of start of administration.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Start Time",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Container Component Diameter",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0513)" : {
         "module" : "Specimen",
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0010,0030)" : {
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "module" : "Patient"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0020,0011)" : {
         "module" : "General Series",
         "req" : "2",
         "usage" : "M",
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "A number that identifies this Series.",
         "entity" : "Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C"
      },
      "(0018,9175)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : "Name and Version of the applicable standard.",
         "name" : "Applicable Safety Standard Description",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0008,113a)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Waveform Sequence",
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Device Diameter",
         "req" : "3",
         "module" : "Device"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "module" : "General Series",
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
         "name" : "Referenced SOP Sequence",
         "usage" : "M"
      },
      "(0018,9024)" : {
         "entity" : "Image",
         "name" : "Saturation Recovery",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Saturation recovery pulse sequence.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "module" : "MR Pulse Sequence",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started."
      },
      "(0028,2000)" : [
         {
            "req" : "3",
            "module" : "Image Pixel",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "usage" : "M",
            "name" : "ICC Profile"
         },
         {
            "module" : "ICC Profile",
            "req" : "1",
            "name" : "ICC Profile",
            "usage" : "U",
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "req" : "1C",
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
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "entity" : "Series"
      },
      "(0018,1061)" : {
         "module" : "Synchronization",
         "req" : "3",
         "entity" : "Frame of Reference",
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Trigger Source or Type",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ]
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
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
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0016)" : {
         "req" : "1",
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
         "usage" : "M",
         "name" : "SOP Class UID",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Requested Procedure ID",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "Series",
         "usage" : "M",
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
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series"
      },
      "(0028,1202)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
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
            "name" : "Green Palette Color Lookup Table Data",
            "usage" : "M",
            "req" : "1C",
            "module" : "Image Pixel"
         },
         {
            "desc" : [
               "Green Palette Color Lookup Table Data. See ",
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
               "table_C.7.6.19-1"
            ],
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "name" : "Green Palette Color Lookup Table Data",
            "entity" : "Image",
            "req" : "1",
            "module" : "Supplemental Palette Color Lookup Table"
         }
      ],
      "(0008,0096)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0520)" : {
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Container Component Sequence"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person Name",
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
         "req" : "1C"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Data Elements Signed",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0010,2202)" : {
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Patient Species Code Sequence"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "module" : "SOP Common",
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
         "usage" : "M",
         "entity" : "Image"
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0010,2160)" : {
         "req" : "3",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Ethnic Group",
         "entity" : "Patient"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "name" : "Other Patient Names",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,1090)" : [
         {
            "req" : "3",
            "module" : "General Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "usage" : "M",
            "entity" : "Equipment",
            "req" : "1",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image.",
         "usage" : "M",
         "name" : "Rows",
         "entity" : "Image"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "req" : "2",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,9237)[<0>](0008,1115)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "entity" : "Image"
      },
      "(0020,1040)" : {
         "module" : "Frame of Reference",
         "req" : "2",
         "name" : "Position Reference Indicator",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ],
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
         "entity" : "Frame of Reference"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,9085)" : {
         "module" : "Cardiac Synchronization",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac Signal Source",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Cardiac Signal Source.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "U",
         "name" : "DateTime",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0018,1803)" : {
         "entity" : "Frame of Reference",
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
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "NTP Source Address",
         "req" : "3",
         "module" : "Synchronization"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode."
      },
      "(0018,1800)" : {
         "module" : "Synchronization",
         "req" : "1",
         "entity" : "Frame of Reference",
         "usage" : "C - Required if time synchronization was applied.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,103e)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series",
         "name" : "Series Description",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Opaque",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.4b.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0018,9174)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "Agency that established MR safety standard applicable to the acquisition of this Instance.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "IEC",
                     null
                  ],
                  [
                     "FDA",
                     null
                  ],
                  [
                     "MHW",
                     null
                  ]
               ]
            },
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Applicable Safety Standard Agency",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,9005)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Name of the pulse sequence for annotation purposes. Potentially vendor-specific name.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Pulse Sequence Name",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "MR Pulse Sequence"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "usage" : "M",
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
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "name" : "Series Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0018,5100)" : {
         "entity" : "Series",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Patient Position",
         "usage" : "M",
         "req" : "2C",
         "module" : "General Series"
      },
      "(0008,1052)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "req" : "1C",
         "module" : "Clinical Trial Study",
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
         "name" : "Distribution Type",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "module" : "Clinical Trial Study"
      },
      "(0018,9250)" : {
         "entity" : "Image",
         "name" : "Arterial Spin Labeling Contrast",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Arterial Spin Labeling contrast technique.",
            {
               "list" : [
                  [
                     "CONTINUOUS",
                     "a single long low powered RF pulse"
                  ],
                  [
                     "PSEUDOCONTINUOUS",
                     "multiple short low powered RF pulses"
                  ],
                  [
                     "PULSED",
                     "a single short high powered RF pulse"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 3 is ASL. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "module" : "MR Pulse Sequence",
         "req" : "1C"
      },
      "(0040,0560)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "usage" : "U",
         "name" : "Specimen Description Sequence",
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "entity" : "Image",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0010,2294)" : {
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "entity" : "Image",
         "name" : "Device ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "User-supplied identifier for the device",
         "module" : "Device",
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "desc" : [
            "View Modifier.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "View Modifier Code Sequence",
         "entity" : "Image"
      },
      "(0008,9154)" : {
         "req" : "1C",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Source Image Sequences of this Enhanced MR Image SOP Instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "usage" : "M",
         "name" : "Source Image Evidence Sequence"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "name" : "Signature",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "name" : "Certified Timestamp",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0020,000d)" : {
         "entity" : "Image",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,1120)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,1000)" : {
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "module" : "Patient",
         "req" : "3"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0018,9014)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Phase Contrast Pulse sequence is a pulse sequence in which the flowing spins are velocity encoded in phase.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Phase Contrast",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "MR Pulse Sequence"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "usage" : "M",
         "name" : "Series Instance UID"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "req" : "1",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Contrast/Bolus Administration Route Sequence",
         "usage" : "C - Required if contrast media were applied."
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "entity" : "Image"
      },
      "(0028,0302)" : {
         "entity" : "Image",
         "name" : "Recognizable Visual Features",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.8-79"
         ],
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
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
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "req" : "1",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,0060)" : [
         {
            "entity" : "Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  }
               },
               " for Defined Terms."
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "name" : "Modality",
            "req" : "1",
            "module" : "General Series"
         },
         {
            "entity" : "Series",
            "name" : "Modality",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "list" : [
                     [
                        "MR",
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
                        "linkend" : "sect_C.7.3.1.1.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "module" : "MR Series",
            "req" : "1"
         }
      ],
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "module" : "Patient"
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
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "1C"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0018,1008)" : {
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Gantry ID"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "name" : "MAC",
         "usage" : "M",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
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
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "name" : "SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "name" : "Container Identifier",
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "name" : "Patient's Size",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
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
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(0008,1050)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Performing Physician's Name",
         "usage" : "M",
         "desc" : "Name of the physician(s) administering the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0020,0010)" : {
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "name" : "Study ID",
         "entity" : "Study"
      },
      "(0018,9169)" : {
         "entity" : "Image",
         "name" : "Cardiac Beat Rejection Technique",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "module" : "Cardiac Synchronization",
         "req" : "1C"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0018,9008)" : {
         "module" : "MR Pulse Sequence",
         "req" : "1C",
         "name" : "Echo Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Echo category of pulse sequences.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SPIN",
                     null
                  ],
                  [
                     "GRADIENT",
                     null
                  ],
                  [
                     "BOTH",
                     null
                  ]
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "entity" : "Image"
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "module" : "General Series"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Agent Number",
         "req" : "1",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "DateTime",
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
         "req" : "1C"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "module" : "Clinical Trial Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
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
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "module" : "Enhanced MR Image"
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
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
      "(0008,1049)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0028,0301)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Burned In Annotation",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "desc" : [
            "Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NO",
                     null
                  ]
               ]
            },
            "This means that images that contain this Module shall not contain such burned in annotations.",
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted), may be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "name" : "Specimen Detailed Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "module" : "Acquisition Context",
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image"
      },
      "(0018,0023)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Identification of spatial data encoding scheme.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "1D",
                     null
                  ],
                  [
                     "2D",
                     null
                  ],
                  [
                     "3D",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "MR Acquisition Type",
         "entity" : "Image",
         "req" : "1C",
         "module" : "MR Pulse Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "1",
         "module" : "Patient"
      },
      "(0028,0107)" : {
         "req" : "3",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Clinical Trial Subject"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C"
      },
      "(0020,0052)" : {
         "module" : "Frame of Reference",
         "req" : "1",
         "name" : "Frame of Reference UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Image",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
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
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "entity" : "Image",
         "name" : "Dimension Index Private Creator",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "module" : "Multi-frame Dimension",
         "req" : "1C"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
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
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "module" : "Frame Extraction",
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Date",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Physician(s) of Record",
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
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "U"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0038,0010)" : {
         "req" : "3",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admission ID",
         "entity" : "Study"
      },
      "(0028,0103)" : [
         {
            "usage" : "M",
            "name" : "Pixel Representation",
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
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1"
         },
         {
            "module" : "Enhanced MR Image",
            "req" : "1",
            "entity" : "Image",
            "name" : "Pixel Representation",
            "usage" : "M",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation. For Enumerated Values See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            "mod_tables" : [
               "table_C.8-79"
            ]
         }
      ],
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "entity" : "Study"
      },
      "(0040,0260)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence"
      },
      "(0018,9015)" : {
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "entity" : "Image",
         "desc" : [
            "Time of Flight contrast is created by the inflow of blood in the saturated plane.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Time of Flight Contrast"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0028,0004)" : [
         {
            "req" : "1",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Photometric Interpretation"
         },
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data. Enumerated Values are specified in the IOD that invokes this Module. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.2"
                  }
               },
               " for definition of this term."
            ],
            "mod_tables" : [
               "table_C.8-79"
            ],
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "entity" : "Image",
            "req" : "1",
            "module" : "Enhanced MR Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
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
         "usage" : "M",
         "name" : "Time",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,9004)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Content Qualification",
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
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted), may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Planar Configuration",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "entity" : "Image"
      },
      "(0028,0106)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "3"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's model name of the device",
         "module" : "Device",
         "req" : "3"
      },
      "(0100,0410)" : {
         "req" : "3",
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
         "name" : "SOP Instance Status",
         "usage" : "M",
         "entity" : "Image"
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
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "usage" : "M",
         "name" : "Retrieve URI"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "U",
         "name" : "Time",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0018,9100)" : {
         "name" : "Resonant Nucleus",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "Nucleus that is resonant at the transmitter frequency.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "1H",
                     null
                  ],
                  [
                     "3HE",
                     null
                  ],
                  [
                     "7LI",
                     null
                  ],
                  [
                     "13C",
                     null
                  ],
                  [
                     "19F",
                     null
                  ],
                  [
                     "23NA",
                     null
                  ],
                  [
                     "31P",
                     null
                  ],
                  [
                     "129XE",
                     null
                  ]
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1C"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0556)" : {
         "entity" : "Image",
         "desc" : "Free-text description of the image-acquisition context.",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Description",
         "usage" : "M",
         "req" : "3",
         "module" : "Acquisition Context"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Floating Point Value",
         "usage" : "U",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "usage" : "M",
         "name" : "Value Type",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "req" : "1",
         "name" : "Multi-frame Source SOP Instance UID",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "entity" : "Image"
      },
      "(0018,9064)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "k-space Filtering",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "Describes k-space filtering applied. Shall be NONE if no k-space filter.",
            {
               "list" : [
                  [
                     "COSINE",
                     null
                  ],
                  [
                     "COSINE_SQUARED",
                     null
                  ],
                  [
                     "FERMI",
                     null
                  ],
                  [
                     "GAUSSIAN",
                     null
                  ],
                  [
                     "HAMMING",
                     null
                  ],
                  [
                     "HANNING",
                     null
                  ],
                  [
                     "LORENTZIAN",
                     null
                  ],
                  [
                     "LRNTZ_GSS_TRNSFM",
                     null
                  ],
                  [
                     "RIESZ",
                     null
                  ],
                  [
                     "TUKEY",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,1082)" : {
         "entity" : "Image",
         "name" : "High R-R Value",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "req" : "2C"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
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
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "1"
      },
      "(0054,0220)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "usage" : "M",
         "name" : "View Code Sequence",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "entity" : "Image"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "module" : "Clinical Trial Subject"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
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
               "el" : "note",
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution DateTime",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "usage" : "U"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "entity" : "Series",
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
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0018,1050)" : {
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M"
      },
      "(0018,9017)" : {
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "desc" : [
            "Steady State Sequence.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FREE_PRECESSION",
                     null
                  ],
                  [
                     "TRANSVERSE",
                     null
                  ],
                  [
                     "TIME_REVERSED",
                     null
                  ],
                  [
                     "LONGITUDINAL",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Steady State Pulse Sequence",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,9033)" : {
         "entity" : "Image",
         "name" : "Segmented k-Space Traversal",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Segmented k-Space traversal. If Geometry of k-Space Traversal is rectilinear, multiple lines can be acquired at one time. If Geometry of k-Space Traversal is spiral or radial, paths can be interleaved and acquired at one time.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SINGLE",
                     "successive single echo coverage"
                  ],
                  [
                     "PARTIAL",
                     "segmented coverage"
                  ],
                  [
                     "FULL",
                     "single shot full coverage"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Pulse Sequence",
         "req" : "1C"
      },
      "(0018,9172)" : {
         "req" : "1C",
         "module" : "Bulk Motion Synchronization",
         "desc" : [
            "Applied technique to reduce bulk or other physiology motion artifacts.",
            {
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "REALTIME",
                     "image acquisition shorter than motion cycle"
                  ],
                  [
                     "GATING",
                     "prospective gating"
                  ],
                  [
                     "TRACKING",
                     "prospective through and/or in-plane motion tracking"
                  ],
                  [
                     "RETROSPECTIVE",
                     "retrospective gating"
                  ],
                  [
                     "CORRECTION",
                     "retrospective image correction"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "name" : "Bulk Motion Compensation Technique",
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "name" : "Value Type",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0008,9237)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "References to Presentation State instances acquired in conjunction with this instance.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May only be used to reference Presentation States belonging to the acquired data and not to reference Presentation States generated subsequently such as during interpretation."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items shall be included in this sequence.",
            "Required if Presentation State is generated during acquisition, shall not be present otherwise."
         ],
         "usage" : "M",
         "name" : "Referenced Presentation State Sequence",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
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
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0028,1101)" : [
         {
            "req" : "1C",
            "module" : "Image Pixel",
            "mod_tables" : [
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
            ],
            "name" : "Red Palette Color Lookup Table Descriptor",
            "usage" : "M",
            "entity" : "Image"
         },
         {
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "name" : "Red Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7.6.19-1"
            ],
            "desc" : [
               "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
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
            "module" : "Supplemental Palette Color Lookup Table",
            "req" : "1"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Rational Numerator Value"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
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
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
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
         "entity" : "Patient"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,051a)" : {
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Description of the container.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Description",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
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
         "req" : "1"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Container Component Description",
         "desc" : "Container component text description.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
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
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series"
      },
      "(0008,0201)" : {
         "entity" : "Image",
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
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
                           "el" : "listitem",
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
                     "content" : [
                        "For example:"
                     ],
                     "el" : "para"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Name",
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient"
      },
      "(0028,1201)" : [
         {
            "module" : "Image Pixel",
            "req" : "1C",
            "entity" : "Image",
            "usage" : "M",
            "name" : "Red Palette Color Lookup Table Data",
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
         {
            "req" : "1",
            "module" : "Supplemental Palette Color Lookup Table",
            "desc" : [
               "Red Palette Color Lookup Table Data. See ",
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
               "table_C.7.6.19-1"
            ],
            "usage" : "C - Required if Pixel Presentation (0008,9205) in the Enhanced MR Image Module equals COLOR or MIXED.",
            "name" : "Red Palette Color Lookup Table Data",
            "entity" : "Image"
         }
      ],
      "(0028,2114)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Lossy Image Compression Method",
         "usage" : "M",
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
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "mod_tables" : [
            "table_C.8-79"
         ]
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "req" : "1",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         "usage" : "U",
         "name" : "Value Type"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "module" : "Multi-frame Dimension",
         "req" : "1",
         "name" : "Dimension Index Pointer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series"
      },
      "(0018,9092)[<0>](0018,9090)" : {
         "req" : "1",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "The direction cosines of the velocity encoding vector with respect to the patient. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Velocity Encoding Direction",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0008,9208)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "desc" : [
            [
               "Representation of complex data of frames in the SOP Instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.3.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for a description and Defined Terms."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "name" : "Complex Image Component",
         "usage" : "M",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Issuer of the Container Identifier Sequence",
         "entity" : "Image",
         "req" : "2",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "module" : "Specimen",
         "req" : "3",
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "req" : "3"
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "entity" : "Series",
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
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0060)" : {
         "name" : "Service Episode ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "UID",
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
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0018,9012)" : {
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "desc" : [
            "Technique that simultaneously excites several volumes.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Multi-planar Excitation",
         "entity" : "Image"
      },
      "(0012,0071)" : {
         "req" : "3",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
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
         "name" : "Clinical Trial Series ID",
         "usage" : "U"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "name" : "Photometric Interpretation",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,0013)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient.",
         "usage" : "M",
         "name" : "Patient ID",
         "req" : "2",
         "module" : "Patient"
      },
      "(0018,9018)" : {
         "entity" : "Image",
         "name" : "Echo Planar Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Echo Planar category of Pulse Sequences.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Pulse Sequence",
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "req" : "2",
         "entity" : "Image",
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Total volume administered in milliliters of diluted contrast agent."
      },
      "(0018,106c)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Channel",
         "entity" : "Frame of Reference",
         "req" : "1C",
         "module" : "Synchronization"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "req" : "2C"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "req" : "3"
      },
      "(0018,1000)" : [
         {
            "req" : "3",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "content" : [
                     "\n                    ",
                     {
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
            "usage" : "M",
            "name" : "Device Serial Number",
            "entity" : "Equipment"
         },
         {
            "module" : "Enhanced General Equipment",
            "req" : "1",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances."
         }
      ],
      "(0012,0042)" : {
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U"
      },
      "(0020,0012)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This number is not required to be unique across SOP Instances in a series. See also the description of the Referenced Raw Data Sequence (0008,9121)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1"
      },
      "(0018,1086)" : {
         "req" : "3",
         "module" : "Cardiac Synchronization",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Skip Beats",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "entity" : "Image",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "req" : "1C",
         "module" : "General Series",
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
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Signature",
         "usage" : "M",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1C"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "Enhanced MR Image",
         "req" : "1",
         "name" : "Signature",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image"
      },
      "(0018,1020)" : [
         {
            "module" : "General Equipment",
            "req" : "3",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Software Versions",
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
            "mod_tables" : [
               "table_C.7-8"
            ]
         },
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Software Versions",
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
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "req" : "1"
         }
      ],
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Image",
         "name" : "Series Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0008,0050)" : {
         "req" : "2",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "entity" : "Image",
         "module" : "Multi-frame Dimension",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "usage" : "U"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0020,9250)" : {
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Trigger Type",
         "entity" : "Image"
      },
      "(0040,0275)" : {
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0018,1802)" : {
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Time Distribution Protocol",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "req" : "3"
      },
      "(0008,002a)" : {
         "desc" : [
            "The date and time that the acquisition of data started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "name" : "Acquisition DateTime",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0018,9032)" : {
         "module" : "MR Pulse Sequence",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Geometry of k-Space Traversal",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Geometry category of k-Space traversal.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "RECTILINEAR",
                     null
                  ],
                  [
                     "RADIAL",
                     null
                  ],
                  [
                     "SPIRAL",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image"
      },
      "(0012,0082)" : {
         "req" : "3",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0020,9256)" : {
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "desc" : [
            [
               "Respiratory trigger threshold in percent of the chest expansion for the frame relative to the last Respiratory-Peak. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.17.1"
                  }
               },
               " for further explanation."
            ],
            "Required if Respiratory Motion Compensation Technique (0018,9170) equals other than NONE, REALTIME or BREATH_HOLD and if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Trigger Delay Threshold",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "entity" : "Image"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "module" : "General Series",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "req" : "1",
            "module" : "MR Series",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "usage" : "M"
         }
      ],
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series"
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
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0012,0081)" : {
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U"
      },
      "(0010,0040)" : {
         "req" : "2",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         ],
         "usage" : "M",
         "name" : "Patient's Sex"
      },
      "(0008,9207)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "desc" : [
            "Method used for volume calculations with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.3"
               },
               "el" : "xref"
            },
            " for a description and Defined Terms."
         ],
         "name" : "Volume Based Calculation Technique",
         "usage" : "M"
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Instance Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-18"
         ],
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
         "usage" : "U",
         "name" : "Device Diameter Units",
         "req" : "2C",
         "module" : "Device"
      },
      "(0040,0250)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
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
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "usage" : "U",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "usage" : "U",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0018,0015)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16"
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Body Part Examined",
         "entity" : "Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "Image",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "req" : "2",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Image",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
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
         "name" : "Encrypted Content",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Image"
      },
      "(0018,9073)" : {
         "req" : "1C",
         "module" : "Enhanced MR Image",
         "desc" : [
            [
               "The time in seconds needed to run the prescribed pulse sequence. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "usage" : "M",
         "name" : "Acquisition Duration",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "req" : "3",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "Volume of device in ml. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            ".."
         ],
         "name" : "Device Volume",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "entity" : "Image",
         "usage" : "U",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer of the device",
         "module" : "Device",
         "req" : "3"
      },
      "(0008,9092)" : {
         "req" : "1C",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Referenced Image Sequences of this Enhanced MR Image SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "usage" : "M",
         "name" : "Referenced Image Evidence Sequence",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0018,1064)" : {
         "req" : "1C",
         "module" : "Cardiac Synchronization",
         "desc" : [
            [
               "Description of type of framing performed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.18.1.1.1"
                  }
               },
               " for description and Defined Terms."
            ],
            "Required if type of framing is not time forward from trigger, may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "name" : "Cardiac Framing Type",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "module" : "General Series",
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
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0012,0050)" : {
         "req" : "2",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0028,2110)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Lossy Image Compression",
         "mod_tables" : [
            "table_C.8-79"
         ],
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ]
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
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
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast Flow Rate",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "entity" : "Image",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0010,1030)" : {
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "entity" : "Image"
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
         "name" : "Protocol Name",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Numeric Value",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0012,0063)" : {
         "entity" : "Patient",
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "De-identification Method",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Series Description Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0008,0053)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "U",
         "name" : "Rational Denominator Value",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "name" : "Person Name",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0018,1083)" : {
         "module" : "Cardiac Synchronization",
         "req" : "2C",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Intervals Acquired",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(2050,0020)" : {
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Presentation LUT Shape",
         "usage" : "M",
         "desc" : [
            "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Required if Photometric Interpretation (0028,0004) is MONOCHROME2."
         ],
         "mod_tables" : [
            "table_C.8-79"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "entity" : "Series"
      },
      "(0008,0070)" : [
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "req" : "2"
         },
         {
            "entity" : "Equipment",
            "name" : "Manufacturer",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "module" : "Enhanced General Equipment",
            "req" : "1"
         }
      ],
      "(0088,0200)[<0>](0028,0106)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "entity" : "Image",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "entity" : "Series"
      },
      "(0018,9029)" : {
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Oversampling Phase",
         "desc" : [
            "Oversampling Phase.",
            {
               "list" : [
                  [
                     "2D",
                     "phase direction"
                  ],
                  [
                     "3D",
                     "out of plane direction"
                  ],
                  [
                     "2D_3D",
                     "both"
                  ],
                  [
                     "NONE",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "module" : "MR Pulse Sequence",
         "req" : "1C"
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
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0512)" : {
         "entity" : "Image",
         "name" : "Container Identifier",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "entity" : "Image",
         "usage" : "U",
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
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
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
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "U",
         "name" : "Time",
         "entity" : "Image"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0012,0030)" : {
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "req" : "2",
         "module" : "Clinical Trial Subject"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "module" : "Device",
         "req" : "3",
         "entity" : "Image",
         "name" : "Device Length",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "Length in mm of device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "req" : "1C",
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
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
         ],
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "name" : "Value Type",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
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
         "usage" : "M",
         "name" : "MAC",
         "entity" : "Image",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creation Date",
         "usage" : "M",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "req" : "3",
         "module" : "Specimen",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Specimen Type Code Sequence",
         "usage" : "U"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "entity" : "Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "Enhanced MR Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "module" : "Enhanced MR Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
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
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,2299)" : {
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "usage" : "M"
      },
      "(0040,0280)" : {
         "req" : "3",
         "module" : "General Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
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
      "(0020,9311)" : {
         "req" : "3",
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Dimension organization of the instance.",
            {
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of parallel-plane 3D volume sets."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M",
         "name" : "Dimension Organization Type",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "entity" : "Series"
      },
      "(0008,0008)" : {
         "req" : "1",
         "module" : "Enhanced MR Image",
         "desc" : [
            "Image characteristics. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.16.1",
                  "xrefstyle" : "select: label"
               }
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.13.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-79"
         ],
         "usage" : "M",
         "name" : "Image Type",
         "entity" : "Image"
      },
      "(0008,9209)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "desc" : [
            [
               "Indication of acquisition contrast used with frames in the SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.3.1.2"
                  }
               },
               " for a description and Defined Terms."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Acquisition Contrast",
         "req" : "1C",
         "module" : "Enhanced MR Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Image",
         "usage" : "M",
         "name" : "MAC Algorithm",
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
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "req" : "1"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M",
         "req" : "1",
         "module" : "Enhanced MR Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
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
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen"
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
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.36-1",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
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
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_10-25 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_10-25 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}