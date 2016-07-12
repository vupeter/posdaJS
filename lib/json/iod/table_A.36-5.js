var data = {
   "tags" : {
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
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
         "name" : "Signature",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Time",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
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
         "name" : "Person's Telecom Information",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "name" : "Type of Instances",
         "usage" : "M",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Image",
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
         "usage" : "M",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO Retrieval Sequence",
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0012,0083)[<0>](0012,0020)" : {
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
         ],
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Multi-frame Source SOP Instance UID",
         "desc" : "SOP Instance from which the frames of this instance are extracted."
      },
      "(0018,9622)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "req" : "3",
         "desc" : [
            "Specifies if the acquisition used and stored settling phases.",
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
         "name" : "Functional Settling Phase Frames Present",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
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
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2",
         "entity" : "Series",
         "module" : "Clinical Trial Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "desc" : [
            "T1 Relaxivity of the MR Contrast/Bolus used specified in s",
            {
               "content" : [
                  "-1"
               ],
               "el" : "superscript"
            },
            "*mmol",
            {
               "content" : [
                  "-1"
               ],
               "el" : "superscript"
            },
            " specified at body temperature in human blood plasma."
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus T1 Relaxivity",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1111)" : [
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "3",
            "entity" : "Series",
            "module" : "General Series"
         },
         {
            "module" : "MR Series",
            "entity" : "Series",
            "usage" : "M",
            "name" : "Referenced Performed Procedure Step Sequence",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-101"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "usage" : "M",
         "name" : "Repository Unique ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0253)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Age",
         "desc" : "Age of the Patient."
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Primary Anatomic Structure Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9174)" : {
         "name" : "Applicable Safety Standard Agency",
         "usage" : "M",
         "desc" : [
            "Agency that established MR safety standard applicable to the acquisition of this Instance.",
            {
               "title" : "Defined Terms:",
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
               ],
               "type" : "variablelist"
            },
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
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
         "name" : "Referenced Frame Number",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set UID"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "desc" : "Thickness in mm of container component",
         "name" : "Container Component Thickness",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0012,0072)" : {
         "entity" : "Series",
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
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "1",
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
         "name" : "Frame of Reference UID",
         "usage" : "M",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0020,4000)" : {
         "name" : "Image Comments",
         "usage" : "M",
         "desc" : "User-defined comments about the image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,9004)" : [
         {
            "desc" : [
               "Content Qualification Indicator",
               {
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
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
            "name" : "Content Qualification",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-79",
               "table_C.8-83"
            ],
            "req" : "1C",
            "entity" : "Image",
            "module" : "Enhanced MR Image"
         },
         {
            "module" : "SOP Common",
            "entity" : "Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.12-1"
            ],
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
            ]
         }
      ],
      "(0008,9092)[<0>](0020,000d)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "desc" : "Instance UID of Related Series",
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Occupation",
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "usage" : "M",
         "name" : "Private Group Reference",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "usage" : "M",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
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
         "usage" : "M",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "2",
         "entity" : "Frame of Reference",
         "module" : "Frame of Reference"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Date of Last Calibration",
         "usage" : "M",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "name" : "Operators' Name"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "name" : "Pixel Representation",
         "usage" : "M",
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
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "name" : "Functional Group Pointer",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.1"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         "name" : "Value Type",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "name" : "Functional Group Private Creator",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Multi-frame Dimension"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Retrieve URL",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "A number that identifies this Series.",
         "name" : "Series Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "C - Required if Imaging Subject is a specimen",
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
      "(0010,0216)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Strain Stock Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "View Modifier Code Sequence",
         "usage" : "M",
         "desc" : [
            "View Modifier.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ]
      },
      "(0040,0518)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Type Code Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0300)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Referenced Frame Number",
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
         ]
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Context Group Version",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0010,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "name" : "Patient's Birth Time"
      },
      "(0008,1250)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence",
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
                                 "el" : "para",
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
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
         ]
      },
      "(0010,1000)" : {
         "usage" : "M",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0020)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
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
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M",
         "name" : "Attribute Modification DateTime"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Duration",
         "usage" : "C - Required if contrast media were applied.",
         "desc" : "Duration of injection in seconds. Only a single value shall be present."
      },
      "(0018,1802)" : {
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         ]
      },
      "(0040,0251)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step End Time",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source",
         "usage" : "M",
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
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0028,2110)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
            {
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
               ],
               "type" : "variablelist"
            },
            "Once this value has been set to 01 it shall not be reset.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Lossy Image Compression",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
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
         "usage" : "M",
         "name" : "Patient Breed Description",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Specimen Preparation Step Content Item Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0020,9172)" : {
         "usage" : "M",
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "2",
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
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Width",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Width in mm of container component.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0028,1202)" : {
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
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0018,0087)" : {
         "desc" : [
            "Nominal field strength of the MR Magnet, in Tesla.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Magnetic Field Strength",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Station Name"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
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
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
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
         ]
      },
      "(0028,0006)" : [
         {
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
            "name" : "Planar Configuration",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1C",
            "entity" : "Image",
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "module" : "Enhanced MR Image",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1C",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.3"
                  },
                  "el" : "xref"
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
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0201)" : {
         "usage" : "M",
         "name" : "Timezone Offset From UTC",
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "content" : [
                        "Offset = -0200"
                     ]
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device ID",
         "desc" : "User-supplied identifier for the device"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "usage" : "M"
      },
      "(0020,9250)" : {
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "req" : "1C",
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
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
               ],
               "title" : "Defined Terms:"
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Trigger Type",
         "entity" : "Image",
         "module" : "Respiratory Synchronization"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,9073)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            [
               "The time in seconds needed to run the prescribed pulse sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "name" : "Acquisition Duration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C"
      },
      "(0018,9173)" : {
         "module" : "Bulk Motion Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "name" : "Bulk Motion Signal Source",
         "desc" : [
            "Signal source to measure motion.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE."
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
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
         "usage" : "U",
         "name" : "Distribution Type"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "name" : "Container Identifier",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "el" : "olink"
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0038,0014)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Universal Entity ID"
      },
      "(0028,2000)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "usage" : "M",
         "name" : "ICC Profile",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,9121)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "name" : "Referenced Raw Data Sequence",
         "usage" : "M",
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
                        "The items of in this Sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images and spectra in different instances have been reconstructed from the same raw data."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5c04e675-4740-4a6b-8cb6-cf23f206491b"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0012,0071)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
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
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "module" : "Clinical Trial Series"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,9206)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for a description and Enumerated Values."
         ],
         "name" : "Volumetric Properties",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,9032)" : {
         "desc" : [
            "Geometry category of k-Space traversal.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Geometry of k-Space Traversal",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "entity" : "Image",
         "module" : "Device",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Inter-Marker Distance",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3"
      },
      "(0010,0030)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "name" : "Patient's Birth Date",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
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
         "name" : "Data Elements Signed",
         "usage" : "M"
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
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
         "entity" : "Patient"
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Referring Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,9171)" : {
         "entity" : "Image",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "req" : "1C",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         ],
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Signal Source"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
         "usage" : "M",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10"
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
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0088,0200)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "name" : "Icon Image Sequence",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0002)" : {
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
         "usage" : "M",
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,1030)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name",
         "usage" : "M",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0028,0109)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "entity" : "Study",
         "module" : "Patient Study",
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
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units",
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
         "module" : "Device",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
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
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,9017)" : {
         "desc" : [
            "Steady State Sequence.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Steady State Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0008,0118)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "usage" : "M",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1",
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
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "entity" : "Image",
         "module" : "Multi-frame Dimension"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0018,9005)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Name of the pulse sequence for annotation purposes. Potentially vendor-specific name.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Pulse Sequence Name",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,9034)" : {
         "entity" : "Image",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Rectilinear phase encode reordering.",
            {
               "title" : "Defined Terms:",
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
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Rectilinear Phase Encode Reordering"
      },
      "(0054,0500)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "name" : "Slice Progression Direction",
         "usage" : "M",
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.20.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "). Meaningful only for cardiac images."
            ],
            [
               "Enumerated Values are defined in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a390)" : {
         "entity" : "Image",
         "module" : "SOP Common",
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
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0117)" : {
         "name" : "Context UID",
         "usage" : "M",
         "desc" : [
            "The unique identifier of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0012,0083)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "ICC Profile",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Query/Retrieve View",
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
         ]
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0018,0015)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Body Part Examined",
         "usage" : "M",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,001a)" : {
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
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9092)" : {
         "module" : "MR Pulse Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Velocity Encoding Acquisition Sequence",
         "desc" : [
            "Velocity encoding directions used for acquisition.",
            "Required if Phase Contrast (0018,9014) equals YES.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "desc" : "Time of start of administration.",
         "name" : "Contrast/Bolus Start Time",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
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
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
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
         "usage" : "M",
         "name" : "Deidentification Action"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "name" : "Specimen Detailed Description",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0040,0560)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Specimen Description Sequence",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "C - Required if Imaging Subject is a specimen",
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
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,0030)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "usage" : "M",
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "C - Required if Imaging Subject is a specimen",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
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
         "name" : "Specimen Preparation Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Digital Signature UID",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0010,0034)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Death Date in Alternative Calendar",
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0512)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Container Identifier",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Number of columns in the image",
         "name" : "Columns",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
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
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Manufacturer",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "name" : "Date"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "name" : "Contrast/Bolus Agent Number",
         "usage" : "C - Required if contrast media were applied.",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "entity" : "Patient",
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
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
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
         "usage" : "M",
         "name" : "XDS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "name" : "Identifier Type Code",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "name" : "Breed Registration Number",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "name" : "Reason for the Attribute Modification"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,1000)" : [
         {
            "entity" : "Equipment",
            "module" : "General Equipment",
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
                        "attrs" : {
                           "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "usage" : "M",
            "name" : "Device Serial Number",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "3"
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "name" : "Device Serial Number",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances."
         }
      ],
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
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
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Bits Stored",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,010f)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Identifier",
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "name" : "Quality Control Subject",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
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
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel"
         },
         {
            "entity" : "Image",
            "module" : "Enhanced MR Image",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1",
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
            "usage" : "M",
            "name" : "Photometric Interpretation"
         }
      ],
      "(0018,1800)" : {
         "module" : "Synchronization",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.4",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "name" : "Patient Comments",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image",
         "usage" : "M",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "name" : "Referenced Instance Sequence"
      },
      "(0010,0040)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : [
            "Sex of the named patient.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Patient's Sex",
         "usage" : "M"
      },
      "(0008,0014)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "name" : "Nonidentifying Private Elements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Name",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1072)[<0>](0040,1104)" : {
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0008,113a)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Waveform Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0018,1081)" : {
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Low R-R Value",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d3b7f806-4134-47a2-bf65-131f44d9fa2a"
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
                                 "el" : "para",
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Manufacturer of the container component.",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Manufacturer"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0040)" : {
         "name" : "Clinical Trial Subject ID",
         "usage" : "U",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Request Attributes Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0028,0034)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
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
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
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
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0028,2002)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
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
         ],
         "name" : "Color Space",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "M",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1115)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0028,0103)" : [
         {
            "module" : "Image Pixel",
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Pixel Representation",
            "usage" : "M",
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
            ]
         },
         {
            "module" : "Enhanced MR Image",
            "entity" : "Image",
            "usage" : "M",
            "name" : "Pixel Representation",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation. For Enumerated Values See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ]
         }
      ],
      "(0038,0064)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0556)" : {
         "desc" : "Free-text description of the image-acquisition context.",
         "name" : "Acquisition Context Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "module" : "Patient Study",
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
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "2C"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0038,0010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0028,1201)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
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
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0008,9237)[<0>](0020,000d)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Unique identifier for the Study",
         "usage" : "M",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0212)" : {
         "name" : "Strain Description",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
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
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC",
         "usage" : "M",
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
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0018,5100)" : {
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
         "usage" : "M",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
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
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "name" : "Identifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,1048)" : {
         "usage" : "M",
         "name" : "Physician(s) of Record",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0010,0010)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "usage" : "M",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Coding Scheme Registry",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1090)" : [
         {
            "name" : "Manufacturer's Model Name",
            "usage" : "M",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "entity" : "Equipment"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
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
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0028,0011)" : {
         "name" : "Columns",
         "usage" : "M",
         "desc" : "Number of columns in the image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "name" : "Patient's Size",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Additional Patient History",
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0015)" : {
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
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast Administration Profile Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(300a,012c)" : {
         "name" : "Isocenter Position",
         "usage" : "M",
         "desc" : "Isocenter coordinates (x,y,z), in mm. Specifies the location of the machine isocenter in the patient-based coordinate system associated with the Frame of Reference. It allows transformation from the equipment-based coordinate system to the patient-based coordinate system.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0018,9169)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "name" : "Cardiac Beat Rejection Technique",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "module" : "Cardiac Synchronization"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "U",
         "name" : "Series Instance UID"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Position",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Device Diameter",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Device"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,9207)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "usage" : "M",
         "name" : "Volume Based Calculation Technique",
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1190)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,1082)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "High R-R Value",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "entity" : "Image"
      },
      "(0018,9029)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Oversampling Phase",
         "desc" : [
            "Oversampling Phase.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Pulse Sequence",
         "entity" : "Image"
      },
      "(0018,1061)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Trigger Source or Type",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "module" : "Synchronization",
         "entity" : "Frame of Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "name" : "Strain Stock Number",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Specific Character Set",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "entity" : "Series",
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "req" : "1"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "MR Series",
            "entity" : "Series"
         }
      ],
      "(0018,0023)" : {
         "desc" : [
            "Identification of spatial data encoding scheme.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "MR Acquisition Type",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0018,9085)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
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
         ],
         "name" : "Cardiac Signal Source",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "module" : "Cardiac Synchronization"
      },
      "(0018,9018)" : {
         "entity" : "Image",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
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
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Echo Planar Pulse Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "name" : "Data Elements Signed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,9172)" : {
         "module" : "Bulk Motion Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "name" : "Bulk Motion Compensation Technique",
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "name" : "Patient's Weight",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "desc" : "Primary identifier for the group of subjects.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(2050,0020)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C",
         "desc" : [
            "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
            {
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Photometric Interpretation (0028,0004) is MONOCHROME2."
         ],
         "name" : "Presentation LUT Shape",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1100)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Referenced Patient Photo Sequence",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,0123)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "name" : "Study ID",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "name" : "Text Value"
      },
      "(0008,1080)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0010,2298)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,9175)" : {
         "usage" : "M",
         "name" : "Applicable Safety Standard Description",
         "desc" : "Name and Version of the applicable standard.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Local Namespace Entity ID"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0513)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0010,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
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
         ],
         "usage" : "M",
         "name" : "Patient's Alternative Calendar"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0018,9094)" : {
         "entity" : "Image",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Coverage of k-Space in the ky-kz plane.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and MR Acquisition Type (0018,0023) equals 3D.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and MR Acquisition Type (0018,0023) equals 3D."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Coverage of k-Space"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media were applied.",
         "desc" : "Total volume administered in milliliters of diluted contrast agent."
      },
      "(0008,0008)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1",
         "desc" : [
            "Image characteristics. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.1"
               }
            },
            " and ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.13.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Image Type",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
                                 },
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
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,1320)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "name" : "B1rms",
         "usage" : "M",
         "desc" : [
            "B1+ rms value in units of micro_tesla (uT) for the acquisition producing the image. See ",
            {
               "attrs" : {
                  "linkend" : "biblio_IEC60601-2-33"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
               "el" : "note",
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
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the device",
         "module" : "Device",
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Index Private Creator",
         "usage" : "M",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ]
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "usage" : "M",
         "name" : "Deidentification Action Sequence"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "usage" : "M",
         "name" : "Digital Signature UID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
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
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "usage" : "M"
      },
      "(0008,9154)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Source Image Evidence Sequence",
         "usage" : "M",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Source Image Sequences of this Enhanced MR Image SOP Instance. See ",
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
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ]
      },
      "(0018,9024)" : {
         "module" : "MR Pulse Sequence",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Saturation Recovery",
         "desc" : [
            "Saturation recovery pulse sequence.",
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
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0018,9033)" : {
         "name" : "Segmented k-Space Traversal",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Segmented k-Space traversal. If Geometry of k-Space Traversal is rectilinear, multiple lines can be acquired at one time. If Geometry of k-Space Traversal is spiral or radial, paths can be interleaved and acquired at one time.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "module" : "MR Pulse Sequence",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         ]
      },
      "(0018,1083)" : {
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "2C",
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "name" : "Intervals Acquired",
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
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
         "name" : "Strain Code Sequence",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "usage" : "M",
         "name" : "Value Type",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Type of Patient ID",
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Date of Last Calibration",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,0110)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : [
            "An identifier for the patient.",
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
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,9092)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "name" : "Referenced Image Evidence Sequence",
         "usage" : "M",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Referenced Image Sequences of this Enhanced MR Image SOP Instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,9250)" : {
         "module" : "MR Pulse Sequence",
         "entity" : "Image",
         "name" : "Arterial Spin Labeling Contrast",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Arterial Spin Labeling contrast technique.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 3 is ASL. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ]
      },
      "(0012,0031)" : {
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Specimen Identifier",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "DICOM Media Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1"
      },
      "(0018,1803)" : {
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "NTP Source Address",
         "usage" : "C - Required if time synchronization was applied.",
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
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1052)[<0>](0040,1104)" : {
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
               ]
            }
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "module" : "General Study",
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
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "entity" : "Image",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C"
      },
      "(0018,1086)" : {
         "entity" : "Image",
         "module" : "Cardiac Synchronization",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Skip Beats",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,9205)" : {
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
         "name" : "Pixel Presentation",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,9011)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
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
         "name" : "Multiple Spin Echo",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0018)" : {
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "name" : "Color Space",
         "usage" : "M",
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
      "(0018,0012)[<0>](0018,1049)" : {
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Ingredient Concentration"
      },
      "(0010,0213)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "name" : "Strain Nomenclature",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,1110)" : {
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
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0018,0012)" : {
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "usage" : "C - Required if contrast media were applied.",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0012,0030)" : {
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "name" : "Clinical Trial Site ID"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Data Elements Signed",
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
         "entity" : "Image"
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
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
         "name" : "Patient Species Description",
         "usage" : "M"
      },
      "(0018,9092)[<0>](0018,9090)" : {
         "module" : "MR Pulse Sequence",
         "entity" : "Image",
         "name" : "Velocity Encoding Direction",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "The direction cosines of the velocity encoding vector with respect to the patient. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-87"
         ]
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         "usage" : "M"
      },
      "(0008,9208)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
         "usage" : "M",
         "name" : "Complex Image Component",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9064)" : {
         "name" : "k-space Filtering",
         "usage" : "M",
         "desc" : [
            "Describes k-space filtering applied. Shall be NONE if no k-space filter.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "usage" : "M",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
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
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "UID",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Specimen Type Code Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0020,9311)" : {
         "desc" : [
            "Dimension organization of the instance.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of equally spaced parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of equally spaced parallel-plane 3D volume sets."
                  ]
               ]
            }
         ],
         "usage" : "M",
         "name" : "Dimension Organization Type",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Multi-frame Dimension"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "name" : "Bits Allocated",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,9037)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
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
         "name" : "Cardiac Synchronization Technique",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "module" : "Cardiac Synchronization"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,0070)" : [
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "usage" : "M",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "2",
            "entity" : "Equipment",
            "module" : "General Equipment"
         },
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "name" : "Manufacturer",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0020,0013)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
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
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Container Component Type Code Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,9237)[<0>](0008,1115)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0054,0220)" : {
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "View Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0028,0101)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Stored",
            "usage" : "M",
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
            "module" : "Image Pixel",
            "entity" : "Image"
         },
         {
            "module" : "Enhanced MR Image",
            "entity" : "Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "name" : "Bits Stored",
            "usage" : "M",
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
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0031)" : {
         "usage" : "M",
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0028,0100)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Allocated",
            "usage" : "M",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "module" : "Image Pixel",
            "entity" : "Image"
         },
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ],
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
            "module" : "Enhanced MR Image",
            "entity" : "Image"
         }
      ],
      "(0008,0021)" : {
         "usage" : "M",
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0028,0106)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0018,9025)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Spectrally Selected Suppression.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FAT",
                     null
                  ],
                  [
                     "WATER",
                     null
                  ],
                  [
                     "FAT_AND_WATER",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Spectrally Selected Suppression",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Text Value",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Ingredient Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Time of Last Calibration",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0105)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource",
         "usage" : "M",
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
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "usage" : "M",
         "name" : "Time"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0028,2114)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "name" : "Lossy Image Compression Method",
         "usage" : "M",
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
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0020,9256)" : {
         "module" : "Respiratory Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Trigger Delay Threshold",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "desc" : [
            [
               "Respiratory trigger threshold in percent of the chest expansion for the frame relative to the last Respiratory-Peak. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.17.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Respiratory Motion Compensation Technique (0018,9170) equals other than NONE, REALTIME or BREATH_HOLD and if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "name" : "Value Type",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
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
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(7fe0,0010)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "usage" : "M",
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
      "(0020,9222)" : {
         "entity" : "Image",
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Dimension Index Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1"
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "name" : "Device Volume",
         "usage" : "U",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0100,0420)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0028,2112)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "usage" : "M",
         "name" : "Lossy Image Compression Ratio",
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
            ],
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "entity" : "Series"
         },
         {
            "module" : "MR Series",
            "entity" : "Series",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "usage" : "M",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "name" : "Service Episode Description",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
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
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the device"
      },
      "(0018,1801)" : {
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3",
         "desc" : "ID of equipment or system providing time reference",
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Time Source"
      },
      "(0040,0515)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Alternate Container Identifier Sequence",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence."
      },
      "(0028,0102)" : [
         {
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
            "name" : "High Bit",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel"
         },
         {
            "module" : "Enhanced MR Image",
            "entity" : "Image",
            "name" : "High Bit",
            "usage" : "M",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ]
         }
      ],
      "(0018,9100)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C",
         "desc" : [
            "Nucleus that is resonant at the transmitter frequency.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Resonant Nucleus",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "usage" : "M",
         "name" : "Study Description"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "name" : "Assigning Facility Sequence",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component ID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0008,0122)" : {
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
         "usage" : "M",
         "name" : "Mapping Resource Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "name" : "Identifier Type Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "1"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M",
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
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "usage" : "M",
         "desc" : "Name of the physician(s) administering the Series.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0018,9008)" : {
         "entity" : "Image",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Echo category of pulse sequences.",
            {
               "title" : "Enumerated Values:",
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
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Echo Pulse Sequence"
      },
      " (0010,0027) " : {
         "req" : "\n                  3 ",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Group of Patients Identification Sequence",
         "usage" : "M",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
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
         ],
         "usage" : "M",
         "name" : "High Bit",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0018,9012)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Multi-planar Excitation",
         "desc" : [
            "Technique that simultaneously excites several volumes.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Pulse Sequence",
         "entity" : "Image"
      },
      "(0008,1072)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,9237)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "usage" : "M",
         "name" : "Referenced Presentation State Sequence",
         "desc" : [
            "References to Presentation State instances acquired in conjunction with this instance.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_759f0b19-7691-4ca4-a152-677afe00fc13"
                     },
                     "content" : [
                        "May only be used to reference Presentation States belonging to the acquired data and not to reference Presentation States generated subsequently such as during interpretation."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items shall be included in this Sequence.",
            "Required if Presentation State is generated during acquisition, shall not be present otherwise."
         ]
      },
      "(0018,106c)" : {
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Channel",
         "usage" : "C - Required if time synchronization was applied.",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.3"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Local Namespace Entity ID",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0020,0012)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "3",
         "desc" : [
            "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f3113f3d-0653-4376-b5c7-62b388aa91c3"
                     },
                     "content" : [
                        "This number is not required to be unique across SOP Instances in a series. See also the description of the Referenced Raw Data Sequence (0008,9121)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Acquisition Number"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "usage" : "M",
         "name" : "MAC ID Number",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,002a)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "name" : "Acquisition DateTime",
         "usage" : "M",
         "desc" : [
            "The date and time that the acquisition of data started.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3e4dfa58-9ce2-4fc9-84eb-a2f810a716be"
                     },
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0028,0107)" : {
         "usage" : "M",
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0028,1203)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Image Pixel"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media were applied."
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "usage" : "U",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "usage" : "U",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "usage" : "M"
      },
      "(0010,2210)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M",
         "name" : "Dimension Index Pointer",
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
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0010,0026)" : {
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
         "name" : "Source Patient Group Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,9093)" : {
         "entity" : "Image",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Number of interleaves or shots.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "name" : "Number of k-Space Trajectories"
      },
      "(0008,103f)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Description Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0028,1102)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
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
         ]
      },
      "(0018,1064)" : {
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac Framing Type",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Digital Signature UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
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
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
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
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0008,009c)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Consulting Physician's Name",
         "desc" : "Consulting physician(s) for this patient visit."
      },
      "(0040,051a)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Container Description",
         "desc" : "Description of the container."
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "usage" : "M",
         "name" : "Referenced Frame Numbers",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "usage" : "M",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
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
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "name" : "Service Episode ID",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Smallest Pixel Value in Series",
         "usage" : "M",
         "desc" : "The minimum value of all images in this Series."
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "entity" : "Image",
         "module" : "Multi-frame Dimension",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "usage" : "M",
         "name" : "Dimension Organization UID",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,9014)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "name" : "Phase Contrast",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "desc" : [
            "Phase Contrast Pulse sequence is a pulse sequence in which the flowing spins are velocity encoded in phase.",
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
         "module" : "MR Pulse Sequence",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0028,0302)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0008,1052)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study"
      },
      "(0028,0301)" : {
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
         ],
         "usage" : "M",
         "name" : "Burned In Annotation",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0028,0010)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Rows",
         "usage" : "M",
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ]
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Length",
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
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "module" : "Device",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Device Description",
         "desc" : "Further description in free form text describing the device.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Certificate Type"
      },
      "(0020,0200)" : {
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
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
         "name" : "Synchronization Frame of Reference UID",
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0028,1103)" : {
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
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
         ]
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name",
         "usage" : "M",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,1084)" : {
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "name" : "Intervals Rejected",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ]
      },
      "(0008,1110)" : {
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
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
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast/Bolus Stop Time",
         "desc" : "Time of end of administration.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "usage" : "C - Required if contrast media were applied.",
         "name" : "Contrast Flow Rate"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "name" : "Source of Previous Values",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2"
      },
      "(0008,009d)" : {
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1049)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0020,000e)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ]
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Container Component Material",
         "desc" : [
            "Material of container component.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0020,0060)" : {
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
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Laterality",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
         "usage" : "M",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telecom Information",
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "usage" : "M",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "name" : "Planar Configuration",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "entity" : "Image",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "3",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "name" : "Dimension Description Label",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "name" : "Rows",
         "usage" : "M",
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
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
         ],
         "usage" : "M",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence"
      },
      "(0028,0002)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "name" : "Samples per Pixel",
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
            "module" : "Image Pixel",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "name" : "Samples per Pixel",
            "desc" : [
               "Number of samples (planes) in this image. For Enumerated Values See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.13.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "module" : "Enhanced MR Image",
            "entity" : "Image"
         }
      ],
      "(0040,0520)[<0>](0050,001d)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "name" : "Container Component Diameter",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0018,106a)" : {
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "name" : "Synchronization Trigger",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1",
         "entity" : "Frame of Reference",
         "module" : "Synchronization"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "name" : "Specimen Short Description",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "entity" : "Image",
         "module" : "SOP Common"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
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
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Ingredient Opaque",
         "usage" : "C - Required if contrast media were applied.",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.4b.1"
                  }
               },
               "."
            ]
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "Frame Extraction"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "module" : "Enhanced MR Image"
      },
      "(0018,9070)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_d7ca2bf8-8847-414d-ae35-6145b3c61f88"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac RR Interval Specified",
         "entity" : "Image",
         "module" : "Cardiac Synchronization"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Image",
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
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,9170)" : {
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "req" : "1C",
         "desc" : [
            "Applied technique to reduce respiratory motion artifacts.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Motion Compensation Technique",
         "entity" : "Image",
         "module" : "Respiratory Synchronization"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "name" : "MAC"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,0124)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0060)" : [
         {
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "usage" : "M",
            "name" : "Modality",
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
            "entity" : "Series"
         },
         {
            "module" : "MR Series",
            "entity" : "Series",
            "usage" : "M",
            "name" : "Modality",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "MR",
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
                        "linkend" : "sect_C.7.3.1.1.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-101"
            ]
         }
      ],
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0555)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "2",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Acquisition Context Sequence",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Acquisition Context"
      },
      "(0012,0010)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Description",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : "Container component text description.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "usage" : "U",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the device",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Signature",
         "usage" : "M",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0050,0010)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "1",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "name" : "Device Sequence",
         "entity" : "Image",
         "module" : "Device"
      },
      "(0028,1101)" : {
         "entity" : "Image",
         "module" : "Image Pixel",
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
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0010,0024)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Calculated Frame List",
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
         "module" : "Frame Extraction",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Time",
         "entity" : "Image",
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "module" : "Enhanced MR Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
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
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
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
         "name" : "Pixel Padding Value",
         "usage" : "M"
      },
      "(0008,9209)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "usage" : "M",
         "name" : "Acquisition Contrast",
         "desc" : [
            [
               "Indication of acquisition contrast used with frames in the SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.3.1.2"
                  },
                  "el" : "xref"
               },
               " for a description and Defined Terms."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
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
         "name" : "Patient Identity Removed",
         "usage" : "M"
      },
      "(0040,0520)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "name" : "Container Component Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "module" : "Acquisition Context",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0018,1020)" : [
         {
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
            "usage" : "M",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "3",
            "entity" : "Equipment",
            "module" : "General Equipment"
         },
         {
            "usage" : "M",
            "name" : "Software Versions",
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
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0008,9237)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "Enhanced MR Image",
         "entity" : "Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0020,9221)" : {
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization Sequence",
         "usage" : "M",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced MR Image",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "name" : "Retrieve URI",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO-RS Retrieval Sequence",
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
         ]
      },
      "(0018,9015)" : {
         "desc" : [
            "Time of Flight contrast is created by the inflow of blood in the saturated plane.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Time of Flight Contrast",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "entity" : "Image",
         "module" : "MR Pulse Sequence"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
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
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Description of the Series",
         "usage" : "M",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
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
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.36-5",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
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
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_10-25 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-79:table_10-25 after (0054,0222))",
      "no table reference (Image, ICC Profile, , M)",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
