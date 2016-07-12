var data = {
   "tags" : {
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Reason for the Requested Procedure",
         "req" : "3",
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series"
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "entity" : "Series"
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
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
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1064)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac Framing Type",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0008,0012)" : {
         "entity" : "Image",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_85131baf-ebaa-41ca-b044-07c75698df97"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Person Name",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image"
      },
      "(0018,1086)" : {
         "name" : "Skip Beats",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "entity" : "Image",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "usage" : "U",
         "req" : "1C",
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
         "name" : "UID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "usage" : "M",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Agent Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "1",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0012,0030)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "req" : "1",
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
                                 "el" : "para",
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Digital Signature UID"
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
         "usage" : "U",
         "req" : "3",
         "name" : "Device Volume",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ]
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
         "req" : "3",
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0556)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Free-text description of the image-acquisition context.",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Description"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Breed Registration Number"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "req" : "1",
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         },
         {
            "name" : "Referenced SOP Instance UID",
            "module" : "XA/XRF Series",
            "mod_tables" : [
               "table_C.8.19.1-1",
               "table_10-11"
            ],
            "entity" : "Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Station Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institution Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,0002)" : [
         {
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
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
            "usage" : "M",
            "req" : "1"
         },
         {
            "name" : "Samples per Pixel",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "module" : "Enhanced XA/XRF Image",
            "entity" : "Image",
            "desc" : "Number of samples (color planes) in this image shall have a value of 1.",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Study",
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
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Study Description",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
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
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Comments",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "User-defined additional information about the patient."
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component ID",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version."
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Functional Group Private Creator",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ]
      },
      "(0020,0200)" : {
         "name" : "Synchronization Frame of Reference UID",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0018,9427)" : {
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals IMG_INTENSIFIER.",
         "req" : "1",
         "desc" : [
            "Shape of the active area used for acquiring this image.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_42b3f213-d339-42c7-9710-a14c198c8a28"
                     },
                     "content" : [
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.4-1"
         ],
         "module" : "X-Ray Image Intensifier",
         "name" : "Intensifier Active Shape"
      },
      "(0028,0106)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "name" : "Functional Group Pointer",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "entity" : "Image",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is referenced by the Dimension Index Pointer (0020,9165).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Index Pointer (0020,9165) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Institution Code Sequence"
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Largest Pixel Value in Series",
         "usage" : "M",
         "req" : "3",
         "desc" : "The maximum value of all images in this Series.",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Person Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,1490)" : {
         "name" : "Tomo Type",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "desc" : [
            "Type of tomography.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,0036)[<0>](0018,003a)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : "Further description in free form text describing the therapy or other intervention.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "name" : "Intervention Description"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "XDS Retrieval Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Ethnic Group",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient."
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Frame Number",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,2202)" : {
         "req" : "1C",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Code Sequence"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
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
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "desc" : "Width in mm of container component.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Container Component Width",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Time",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0028,0302)" : {
         "name" : "Recognizable Visual Features",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1080)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(fffa,fffa)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0018,7041)" : {
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "name" : "Grid Spacing Material",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "The spacing material used in the grid."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Rational Denominator Value"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Study Instance UID"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "entity" : "Study",
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
         "req" : "1C",
         "usage" : "U",
         "name" : "Distribution Type",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0008,0070)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "name" : "Manufacturer",
            "req" : "2",
            "usage" : "M",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment"
         },
         {
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0040,0555)[<0>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0260)" : {
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1164)" : {
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "name" : "WADO Retrieval Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1250)" : {
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
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "el" : "para",
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 }
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
         "usage" : "M",
         "req" : "3",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Code describing the purpose of the reference to the SOP Instances.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Description",
         "req" : "3",
         "usage" : "U",
         "desc" : "Container component text description.",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "req" : "1",
         "usage" : "M",
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,0012)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Agent Sequence",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "1",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Type Code Sequence"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Numbers",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Type Code Sequence",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Type of Instances",
         "req" : "1",
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "name" : "DICOM Media Retrieval Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,6100)[<0>](0028,9454)" : {
         "name" : "Mask Selection Mode",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "Specifies the method of selection of the mask operations of this item.",
            {
               "list" : [
                  [
                     "SYSTEM",
                     null
                  ],
                  [
                     "USER",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0560)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Specimen Description Sequence",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "entity" : "Image",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,9428)" : {
         "name" : "Intensifier Active Dimension(s)",
         "module" : "X-Ray Image Intensifier",
         "mod_tables" : [
            "table_C.8.19.4-1"
         ],
         "desc" : [
            "Dimensions in mm of the active area used for acquiring this image.",
            "If Intensifier Active Shape (0018,9427) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of the circle circumscribing the hexagon.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a46bddb9-877c-4a54-abe1-b628dc6e9975"
                     },
                     "el" : "para",
                     "content" : [
                        "This may be different from the Field of View Dimension(s) in Float (0018,9461), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals IMG_INTENSIFIER.",
         "req" : "1"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Diameter",
         "usage" : "U",
         "req" : "3",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "req" : "3",
         "name" : "Contribution Description",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0018,1491)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Form of tomography:",
            {
               "list" : [
                  [
                     "MOTION",
                     null
                  ],
                  [
                     "TOMOSYNTHESIS",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "name" : "Tomo Class"
      },
      "(0018,1801)" : {
         "name" : "Time Source",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "desc" : "ID of equipment or system providing time reference",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0040,0520)[<0>](0050,001a)" : {
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
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Container Component Material",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Institutional Department Name",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,106c)" : {
         "entity" : "Frame of Reference",
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
         "req" : "1C",
         "usage" : "U",
         "name" : "Synchronization Channel",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0028,0006)" : {
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Planar Configuration",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,9410)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0018,1084)" : {
         "name" : "Intervals Rejected",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "entity" : "Image",
         "req" : "2C",
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Universal Entity ID"
      },
      "(0008,9458)[<0>](0008,2142)" : {
         "entity" : "Image",
         "desc" : "The Frame Number of the first frame of the set of frames to be displayed in this Item.",
         "usage" : "U",
         "req" : "1",
         "name" : "Start Trim",
         "module" : "XA/XRF Multi-frame Presentation",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ]
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started."
      },
      "(0010,1100)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Referenced Patient Photo Sequence"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Manufacturer's model name of the container component.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Series Instance UID",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "Patient"
      },
      "(0010,0032)" : {
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Image"
      },
      "(0008,9458)[<0>](0008,2143)" : {
         "req" : "1",
         "usage" : "U",
         "desc" : "The Frame Number of the last frame of the set of frames to be displayed in this Item.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "module" : "XA/XRF Multi-frame Presentation",
         "name" : "Stop Trim"
      },
      "(0008,0105)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Home Community ID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "usage" : "M",
         "req" : "3",
         "name" : "Accession Number",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,9458)[<0>](0028,1090)" : {
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "module" : "XA/XRF Multi-frame Presentation",
         "name" : "Recommended Viewing Mode",
         "usage" : "U",
         "req" : "2",
         "desc" : [
            "Specifies the recommended viewing protocol(s).",
            [
               "When this attribute is present with a value, this value shall override the value of Recommended Viewing Mode (0028,1090) specified in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.10"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SUB",
                     "subtraction with mask images"
                  ],
                  [
                     "NAT",
                     "native viewing of image as stored"
                  ]
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7bbe0e5b-5227-4c89-8c42-9bb601d70354"
                     },
                     "el" : "para",
                     "content" : [
                        "If an implementation does not recognize the Defined Term for Recommended Viewing Mode (0028,1090), reverting to native display mode is recommended."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference"
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
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0018,0036)[<0>](0018,0029)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the interventional drug.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "name" : "Intervention Drug Code Sequence"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Date",
         "usage" : "M",
         "req" : "2",
         "desc" : "Date the Study started.",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0216)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Stock Sequence"
      },
      "(0018,1156)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "3",
         "desc" : [
            "Type of rectification used in the X-Ray generator.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Image",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "name" : "Rectification Type"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,9458)" : {
         "name" : "Frame Display Sequence",
         "module" : "XA/XRF Multi-frame Presentation",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "desc" : [
            "Sequence that specifies the display frame rate of a selected set of frames. The Items are ordered in increasing frame number. The range of the frames may not overlap and the ranges shall be adjacent.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0020,0052)" : {
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
         "entity" : "Frame of Reference",
         "req" : "1",
         "usage" : "U",
         "name" : "Frame of Reference UID",
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0018,7020)" : {
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Detector Element Physical Size",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "desc" : [
            "Physical dimensions of each detector element that comprises the detector matrix, in mm.",
            "Expressed as row dimension followed by column.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0018,7052)" : {
         "module" : "X-Ray Filtration",
         "mod_tables" : [
            "table_C.8-35a"
         ],
         "name" : "Filter Thickness Minimum",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "The minimum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1081)" : {
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "2C",
         "name" : "Low R-R Value",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "req" : "1",
         "usage" : "M",
         "desc" : "Number of columns in the image",
         "entity" : "Image"
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "name" : "Study Time",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "usage" : "M",
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0028,6100)[<0>](0028,6190)" : {
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask",
         "name" : "Mask Operation Explanation",
         "usage" : "U",
         "req" : "3",
         "desc" : "Free form explanation of this particular mask operation.",
         "entity" : "Image"
      },
      "(0010,0219)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Code Sequence"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Institution Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "entity" : "Study",
         "usage" : "U",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0028,1090)" : {
         "name" : "Recommended Viewing Mode",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "Specifies the recommended viewing protocol(s).",
            {
               "list" : [
                  [
                     "SUB",
                     "For subtraction with mask images."
                  ],
                  [
                     "NAT",
                     "Native viewing of image as sent."
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
         "entity" : "Image",
         "req" : "2",
         "usage" : "U"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,9410)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "The multiplicity of planes used simultaneously during the acquisition. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.19.2.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Planes in Acquisition"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "req" : "2",
         "usage" : "M",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Image"
      },
      "(0018,9085)" : {
         "name" : "Cardiac Signal Source",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Cardiac Signal Source.",
            {
               "type" : "variablelist",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0018,1006)" : {
         "entity" : "Image",
         "desc" : "Identifier of the grid",
         "req" : "3",
         "usage" : "U",
         "name" : "Grid ID",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen"
      },
      "(0028,1201)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0018,7040)" : {
         "name" : "Grid Absorbing Material",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "desc" : "The X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
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
      "(0018,a001)" : {
         "req" : "3",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1190)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "name" : "Contrast/Bolus Volume",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "entity" : "Image",
         "req" : "2",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage."
      },
      "(0008,9092)" : {
         "name" : "Referenced Image Evidence Sequence",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Referenced Image Sequences of this SOP Instance. See ",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Time"
      },
      "(0400,0561)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0026)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0018,7008)" : {
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "entity" : "Image",
         "desc" : "Text description of operating mode of detector (implementation specific).",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "name" : "Detector Mode"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "entity" : "Image",
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
         "usage" : "U",
         "name" : "Value Type",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "desc" : "Primary identifier for an individual subject.",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0018,7010)" : {
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was calibrated.",
         "entity" : "Image",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "name" : "Exposures on Detector Since Last Calibration",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Unique identifier of the Series.",
         "usage" : "M",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "High Bit",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
         "entity" : "Image"
      },
      "(0054,0410)[<0>](0054,0412)" : {
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Patient Orientation Modifier Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Patient Orientation Modifier.",
            "Required if needed to fully specify the orientation of the patient with respect to gravity.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1480)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Time in seconds the source has taken to rotate the Tomo Angle during X-Ray acquisition.",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition",
         "name" : "Tomo Time"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Image",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0018,1244)" : {
         "module" : "XA/XRF Multi-frame Presentation",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "name" : "Preferred Playback Sequencing",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Describes the preferred playback sequencing for a multi-frame image.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n -1,\u20262,1,2,\u2026n,\u2026)"
                  ]
               ]
            }
         ]
      },
      "(0008,0050)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Accession Number"
      },
      "(0018,7012)" : {
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time in Seconds since an exposure was last made on this detector prior to the acquisition of this image.",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Detector Time Since Last Exposure"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "usage" : "M",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "ICC Profile"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID",
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
         "entity" : "Patient"
      },
      "(0010,2292)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description"
      },
      "(0028,0301)" : {
         "entity" : "Image",
         "desc" : [
            "Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "list" : [
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Burned In Annotation",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ]
      },
      "(0028,0101)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "name" : "Bits Stored",
            "usage" : "M",
            "req" : "1",
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
         {
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored.",
               {
                  "list" : [
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
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.19.2.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ],
            "req" : "1",
            "usage" : "M",
            "name" : "Bits Stored",
            "module" : "Enhanced XA/XRF Image",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ]
         }
      ],
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "req" : "3",
         "usage" : "M"
      },
      "(0018,9328)" : {
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
         "name" : "Exposure Time in ms",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            [
               "Duration of X-Ray exposure in milliseconds. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.7.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Exposure in mAs (0018,9332) is not present. May be present otherwise."
         ]
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1110)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Study"
      },
      "(0018,0036)[<0>](0018,0038)" : {
         "desc" : [
            "Temporal relation of SOP Instance to intervention",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Image",
         "req" : "2",
         "usage" : "U",
         "name" : "Intervention Status",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0018,9073)" : {
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "name" : "Acquisition Duration",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The time in seconds needed for the complete acquisition.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation"
            ]
         ]
      },
      "(0018,9429)" : {
         "name" : "Physical Detector Size",
         "mod_tables" : [
            "table_C.8.19.5-1"
         ],
         "module" : "X-Ray Detector",
         "desc" : "Dimensions of the physical detector measured in mm as a row size followed by a column size.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR."
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "name" : "Patient Position",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
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
         "usage" : "M"
      },
      "(0018,6000)" : {
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "entity" : "Image",
         "desc" : [
            "Detector sensitivity in manufacturer specific units.",
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
                                    "xml:id" : "para_0936da47-cfae-4167-a653-765f69cfd218"
                                 },
                                 "content" : [
                                    "This value is intended to provide a single location where manufacturer specific information can be found for annotation on a display or film, that has meaning to a knowledgeable observer."
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
                                    "This value is manufacturer-specific. DICOM specifies standard Attributes in ",
                                    {
                                       "attrs" : {
                                          "linkend" : "table_10-23",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    " 'Exposure Index Macro', which are recommended."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_31cfc173-5434-4f4d-a128-dc4aa6aeb079"
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
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Sensitivity"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0018,9420)" : {
         "name" : "X-Ray Receptor Type",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
         "entity" : "Image",
         "desc" : [
            "Identifies with type of X-Ray receptor is used.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IMG_INTENSIFIER",
                     null
                  ],
                  [
                     "DIGITAL_DETECTOR",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Identifying Private Elements",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0103)" : [
         {
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Pixel Representation",
            "req" : "1",
            "usage" : "M",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ]
         },
         {
            "module" : "Enhanced XA/XRF Image",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "name" : "Pixel Representation",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Data representation of the pixel samples.",
               "Shall have the value:",
               "0000H = Unsigned Integer."
            ]
         }
      ],
      "(0020,9222)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization UID",
         "req" : "1C",
         "usage" : "U",
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
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0103)" : {
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
         "usage" : "M",
         "req" : "1",
         "name" : "Pixel Representation",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ]
      },
      "(0020,9221)" : {
         "entity" : "Image",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  }
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Dimension Organization Sequence",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "usage" : "U",
         "req" : "2",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.3"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence"
      },
      "(0008,1111)" : [
         {
            "usage" : "M",
            "req" : "3",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "entity" : "Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
            "name" : "Referenced Performed Procedure Step Sequence"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "entity" : "Series",
            "module" : "XA/XRF Series",
            "mod_tables" : [
               "table_C.8.19.1-1"
            ],
            "name" : "Referenced Performed Procedure Step Sequence"
         }
      ],
      "(0040,0555)[<0>](0040,a168)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0028,1101)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "M",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
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
         "module" : "General Series",
         "name" : "Rational Denominator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3"
         ],
         "name" : "Referenced Series Sequence"
      },
      "(0040,a390)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,7028)" : {
         "name" : "Detector Active Origin",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR."
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0034)" : {
         "name" : "Patient's Death Date in Alternative Calendar",
         "module" : "Patient",
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
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "3",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Duration"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0018,7026)" : {
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
                     "attrs" : {
                        "xml:id" : "para_a751e372-85ed-439c-bc34-7e5509e1268c"
                     },
                     "content" : [
                        "This may be different from the Field of View Dimensions (0018,1149), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "name" : "Detector Active Dimension(s)",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ]
      },
      "(0028,2000)" : {
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
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
         "entity" : "Image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "ICC Profile"
      },
      "(0018,9070)" : {
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d7ca2bf8-8847-414d-ae35-6145b3c61f88"
                     },
                     "el" : "para",
                     "content" : [
                        "Heart Rate (0018,1088) is not used in this Module, since its value can be derived as 1/ Cardiac RR Interval Specified (0018,9070)."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "1C",
         "name" : "Cardiac RR Interval Specified",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL"
      },
      "(0018,9473)" : {
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
         "name" : "Acquired Image Area Dose Product",
         "req" : "2",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "desc" : [
            "X-Ray dose, measured in dGy*cm*cm, to which the patient was exposed for the acquisition of this image only.",
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
                                    "xml:id" : "para_18703bdf-413a-4f30-a412-dd40ae21ebd9"
                                 },
                                 "content" : [
                                    "The sum of the Image Area Dose Product of all images of a Series or a Study may not result in the actual area dose product to which the patient was exposed."
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
                                    "xml:id" : "para_b811b291-7eda-478f-b56f-642e73b9c45c"
                                 },
                                 "content" : [
                                    "This may be an estimated value based on assumptions about the patient's body size and habitus."
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0018,106a)" : {
         "name" : "Synchronization Trigger",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "entity" : "Frame of Reference",
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
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "req" : "3",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "3",
         "name" : "Contrast Administration Profile Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "req" : "2C",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         ],
         "entity" : "Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0010,0213)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Nomenclature"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "name" : "Repository Unique ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0040)" : {
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "2"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,1154)" : {
         "desc" : "Average width of X-Ray pulse in msec.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "name" : "Average Pulse Width",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ]
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Source"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,9410)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-3"
         ],
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
         "usage" : "M",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0018,7006)" : {
         "name" : "Detector Description",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "desc" : "Free text description of detector.",
         "entity" : "Image",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3"
      },
      "(0018,1800)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "name" : "Acquisition Time Synchronized",
         "usage" : "U",
         "req" : "1",
         "entity" : "Frame of Reference",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "Y",
                     null
                  ],
                  [
                     "N",
                     null
                  ]
               ]
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
         ]
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "name" : "Contrast/Bolus Ingredient Opaque",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.4b.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage."
      },
      "(0088,0200)" : {
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Icon Image Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0018,1803)" : {
         "entity" : "Frame of Reference",
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
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "NTP Source Address",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0018,1470)" : {
         "module" : "X-Ray Tomography Acquisition",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "name" : "Tomo Angle",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Angle span in degrees of rotation of X-Ray Source during X-Ray acquisition."
      },
      "(0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1411)" : {
         "desc" : [
            "Measure of the detector response to radiation in the relevant image region of an image acquired with a digital x-ray imaging system as defined in IEC 62494-1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_fed62ca5-6e4b-41de-8d9c-09631af0e579"
                                 },
                                 "content" : [
                                    "A string rather than binary Value Representation is used for this Attribute, in order to allow the sender to control the precision of the value as suggested in the report of AAPM Task Group 116."
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
                                 "el" : "para",
                                 "content" : [
                                    "This index value is scaled as defined by IEC 62494-1."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_43f525df-4811-46e0-9074-796cd064a8ea"
                                 }
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
         "entity" : "Image",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "name" : "Exposure Index",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b",
            "table_10-23"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0008,9458)[<0>](0008,9460)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "A flag indicating that the range of frames in this item may be skipped.",
            {
               "list" : [
                  [
                     "DISPLAY",
                     null
                  ],
                  [
                     "SKIP",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "module" : "XA/XRF Multi-frame Presentation",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "name" : "Skip Frame Range Flag"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Text Value"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
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
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Text Value"
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,2294)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : "User-supplied identifier for the device",
         "entity" : "Image",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device ID"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context UID",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Image"
      },
      "(0028,6100)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Defines a sequence that describes mask subtraction operations for a Multi-frame Image.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask",
         "name" : "Mask Subtraction Sequence"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient Names",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0008,0123)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen UID",
         "usage" : "U",
         "req" : "1",
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
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "name" : "Device Diameter",
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Unit diameter of device. See ",
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
      "(0008,1049)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
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
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "name" : "Local Namespace Entity ID"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Equipment",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.2",
                     "xrefstyle" : "select: label"
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value"
      },
      "(0054,0414)" : {
         "entity" : "Image",
         "desc" : [
            [
               "Sequence that describes the orientation of the patient with respect to the head of the table. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.6.1.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence.",
            "Required if Positioner Type (0018,1508) equals CARM and C-arm Positioner Tabletop Relationship (0018,9474) equals YES. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "name" : "Patient Gantry Relationship Code Sequence",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ]
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID"
      },
      "(0018,1083)" : {
         "entity" : "Image",
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "2C",
         "name" : "Intervals Acquired",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "req" : "3",
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
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID"
      },
      "(0054,0410)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Patient Orientation Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Sequence that describes the orientation of the patient with respect to gravity.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.11.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if Positioner Type (0018,1508) equals CARM and C-arm Positioner Tabletop Relationship (0018,9474) equals YES. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
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
         "name" : "Universal Entity ID Type"
      },
      "(0028,0004)" : [
         {
            "name" : "Photometric Interpretation",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "req" : "1",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "module" : "Enhanced XA/XRF Image",
            "name" : "Photometric Interpretation",
            "usage" : "M",
            "req" : "1",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               {
                  "title" : "Enumerated Values:",
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
                  ]
               }
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0562)" : {
         "usage" : "U",
         "req" : "2",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Issuer of the Specimen Identifier Sequence"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,7042)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : "The thickness in mm of the X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "name" : "Grid Thickness"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10"
                  },
                  "el" : "olink"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0032,1034)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "entity" : "Image",
         "req" : "2",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Thickness",
         "usage" : "U",
         "req" : "3",
         "desc" : "Thickness in mm of container component",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "entity" : "Study"
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
         "req" : "3",
         "usage" : "M",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0012,0042)" : {
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
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Description of the type of service episode."
      },
      "(0012,0062)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Patient"
      },
      "(0040,051a)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Description of the container.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Description"
      },
      "(0008,0106)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.5"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Context Group Version"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,0036)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence describing interventional therapies or procedures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Intervention Sequence",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0018,1190)" : {
         "desc" : "Nominal focal spot size in mm used to acquire this image.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "name" : "Focal Spot(s)",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition"
      },
      "(0028,2110)" : {
         "name" : "Lossy Image Compression",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Image"
      },
      "(0040,0513)" : {
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,9410)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-3"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the device",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
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
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment"
      },
      "(0020,0011)" : [
         {
            "name" : "Series Number",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
            "entity" : "Series",
            "desc" : "A number that identifies this Series.",
            "usage" : "M",
            "req" : "2"
         },
         {
            "name" : "Series Number",
            "mod_tables" : [
               "table_C.8.19.1-1"
            ],
            "module" : "XA/XRF Series",
            "entity" : "Series",
            "desc" : "A number that identifies this Series.",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0018,1413)" : {
         "entity" : "Image",
         "desc" : "A scaled representation of the difference of the Exposure Index compared to the Target Exposure Index as defined in IEC 62494-1 and the report of AAPM TG 116.",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "name" : "Deviation Index",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b",
            "table_10-23"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0008)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Image identification characteristics.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.19.2.1.1"
                  }
               },
               " for specialization."
            ]
         ],
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Image Type"
      },
      "(0018,1802)" : {
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Distribution Protocol",
         "req" : "3",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1"
      },
      "(0028,1202)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "req" : "3",
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0008,9410)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
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
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0018,1155)" : {
         "name" : "Radiation Setting",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "desc" : [
            "Identify the general level of X-Ray dose exposure.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SC",
                     "low dose exposure generally corresponding to fluoroscopic settings (e.g., preparation for diagnostic quality image acquisition)"
                  ],
                  [
                     "GR",
                     "high dose for diagnostic quality image acquisition (also called digital spot or cine)"
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise."
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "entity" : "Image",
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
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            " specified at body temperature in human blood plasma."
         ],
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "3",
         "name" : "Contrast/Bolus T1 Relaxivity",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,9410)" : {
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Referenced Other Plane Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The images of the corresponding plane for a Biplane acquisition device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Planes in Acquisition (0018,9410) is BIPLANE."
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "req" : "1C",
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
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Image"
      },
      "(0018,1412)" : {
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "desc" : "The target value used to calculate Deviation Index (0018,1413) as defined in IEC 62494-1.",
         "entity" : "Image",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b",
            "table_10-23"
         ],
         "name" : "Target Exposure Index"
      },
      "(0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "usage" : "M",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0028,0100)" : [
         {
            "req" : "1",
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
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "name" : "Bits Allocated"
         },
         {
            "req" : "1",
            "usage" : "M",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "8",
                        null
                     ],
                     [
                        "16",
                        null
                     ]
                  ]
               }
            ],
            "entity" : "Image",
            "module" : "Enhanced XA/XRF Image",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "name" : "Bits Allocated"
         }
      ],
      "(0020,9222)[<0>](0020,9165)" : {
         "entity" : "Image",
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
         "usage" : "U",
         "req" : "1",
         "name" : "Dimension Index Pointer",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Person Role",
         "usage" : "M",
         "req" : "1C",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "General Series",
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0018,7004)" : {
         "entity" : "Image",
         "desc" : [
            "The type of detector used to acquire this image.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "2",
         "name" : "Detector Type",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ]
      },
      "(0040,0512)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1190)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve URL"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0028,1102)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0018,702a)" : {
         "entity" : "Image",
         "desc" : "Name of the manufacturer of the detector component of the acquisition system",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "name" : "Detector Manufacturer Name",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ]
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.15.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Color Space",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0018,1460)" : {
         "desc" : "Distance in mm between the table surface and the sharp image plane.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1",
         "name" : "Tomo Layer Height",
         "mod_tables" : [
            "table_C.8-32"
         ],
         "module" : "X-Ray Tomography Acquisition"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "usage" : "U",
         "req" : "2C",
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
         "entity" : "Image",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Image"
      },
      "(0018,9330)" : {
         "name" : "X-Ray Tube Current in mA",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
         "entity" : "Image",
         "desc" : [
            "Average of the nominal X-Ray tube currents in milliamperes for all frames.",
            "Required if Exposure in mAs (0018,9332) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise."
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "req" : "1C",
         "usage" : "M",
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
         "name" : "UID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "3",
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
                     ],
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
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0010,0035)" : {
         "name" : "Patient's Alternative Calendar",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "name" : "Manufacturer",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Manufacturer of the device"
      },
      "(0028,6100)[<0>](0028,6102)" : {
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask",
         "name" : "Applicable Frame Range",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            [
               "Each pair of numbers in this multi-valued attribute specify a beginning and ending frame number inclusive of a range where this particular mask operation is valid. Discontinuous ranges are represented by multiple pairs of numbers. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. If this Attribute is missing in this particular sequence item, then the mask operation is applicable throughout the entire Multi-frame Image, subject to certain limits as described in ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Mask Operation (0028,6101) equals REV_TID. May be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0008,9458)[<0>](0028,9411)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Edge enhancement filter percentage that is recommended by the pixel data creator as filter presetting for display purposes. The value of 100 corresponds to the maximum filter strength that can be applied by a specific application displaying the image.",
         "module" : "XA/XRF Multi-frame Presentation",
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "name" : "Display Filter Percentage"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Step Content Item Sequence"
      },
      "(0040,0251)" : {
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0018,9037)" : {
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "1C",
         "name" : "Cardiac Synchronization Technique",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0018,7056)" : {
         "desc" : "The minimum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Filter Beam Path Length Minimum",
         "module" : "X-Ray Filtration",
         "mod_tables" : [
            "table_C.8-35a"
         ]
      },
      "(0018,9426)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "2",
         "desc" : [
            "Distance in mm between the receptor plane and the detector housing. The direction of the distance is positive from receptor plane to X-Ray source.",
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
                                    "A negative value is allowed in the case of an image intensifier the receptor plane can be a virtual plane located outside the detector housing depending the magnification factor of the intensifier. A negative value is not applicable for the digital detector."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d2eda390-8fee-4332-91eb-913e30a993ca"
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
                                    "xml:id" : "para_eb4e7002-1ec9-4914-8975-93e3b15df6c2"
                                 },
                                 "content" : [
                                    "Used to calculate the pixel size of the plane in the patient when markers are used, and they are placed on the detector housing."
                                 ],
                                 "el" : "para"
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
         "entity" : "Image",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "name" : "Distance Receptor Plane to Detector Housing"
      },
      " (0010,0027) " : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Group of Patients Identification Sequence",
         "usage" : "M",
         "req" : "\n                  3 ",
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
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Image",
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
         "usage" : "M",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Institution Address"
      },
      "(0008,0110)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "name" : "Study Instance UID",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Unique identifier of the Study containing the referenced Instances."
      },
      "(2050,0020)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies a predefined identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2"
                  ],
                  [
                     "INVERSE",
                     "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
                  ]
               ]
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Presentation LUT Shape",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0018,702b)" : {
         "desc" : "Model name of the detector component of the acquisition system",
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "name" : "Detector Manufacturer's Model Name",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ]
      },
      "(0008,0005)" : {
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,5100)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Series",
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Patient Position"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence"
      },
      "(0018,0036)[<0>](0018,0027)" : {
         "entity" : "Image",
         "desc" : "Time of completion of administration of the intervention drug.",
         "req" : "3",
         "usage" : "U",
         "name" : "Intervention Drug Stop Time",
         "module" : "Intervention",
         "mod_tables" : [
            "table_C.7-19"
         ]
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Text Value"
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "name" : "Simple Frame List",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
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
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Bits Stored",
         "req" : "1",
         "usage" : "M",
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
         ]
      },
      "(0020,0060)" : {
         "name" : "Laterality",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "usage" : "M",
         "req" : "2C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "req" : "3",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve Location UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0012,0051)" : {
         "entity" : "Study",
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
         "usage" : "U",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0018,9170)" : {
         "usage" : "C - Required if respiratory synchronization was applied.",
         "req" : "1C",
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
         "entity" : "Image",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Motion Compensation Technique"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "name" : "Local Namespace Entity ID"
      },
      "(0012,0031)" : {
         "usage" : "U",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0518)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Type Code Sequence"
      },
      "(0018,1162)" : {
         "desc" : [
            "Physical diameter of the maximum active area X-Ray intensifier in mm.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute does not specify the field of view. The attribute Field of View Dimension(s) in Float (0018,9461) is intended for this value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fb075dd8-722b-497a-970a-3e942fac1fa7"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals IMG_INTENSIFIER.",
         "name" : "Intensifier Size",
         "module" : "X-Ray Image Intensifier",
         "mod_tables" : [
            "table_C.8.19.4-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "MAC",
         "usage" : "M",
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "req" : "1",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
         "req" : "1",
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
         ]
      },
      "(0018,9332)" : {
         "desc" : [
            "The exposure expressed in milliampereseconds, for example calculated from Exposure Time and X-Ray Tube Current.",
            "Required if either Exposure Time in ms (0018,9328) or X-Ray Tube Current in mA (0018,9330) are not present. May be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "1C",
         "name" : "Exposure in mAs",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,9154)" : {
         "entity" : "Image",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Source Image Sequences of this SOP Instance. See ",
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Source Image Evidence Sequence",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0050,0010)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Sequence"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization UID"
      },
      "(0018,1030)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
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
         "name" : "Protocol Name"
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "entity" : "Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "General Series",
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence"
      },
      "(0018,700a)" : {
         "name" : "Detector ID",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "desc" : "The ID or serial number of the detector used to acquire this image.",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR."
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Floating Point Value"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "req" : "1",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Photometric Interpretation"
      },
      "(0028,0300)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Quality Control Image",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            "If this Attribute is absent, then the image may or may not be a quality control or phantom image."
         ],
         "entity" : "Image"
      },
      "(0010,9431)" : {
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Examined Body Thickness",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Body thickness in mm at examination location perpendicular to the table top for this series.",
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
                                    "This is intended for estimation of the thickness of the patient at the tabletop, not for precise calculation of the size of the object in the X-Ray beam (see Calculated Anatomy Thickness (0018,9452) attribute)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_76e74037-75e3-4dec-b353-a1068421b36d"
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
                                    "For example, used to estimate the value range of the Distance Object to Table Top (0018,9403) attribute."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_ea49ce7d-a4af-48fd-910a-406ec3be3d36"
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
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0008,1090)" : [
         {
            "name" : "Manufacturer's Model Name",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3",
            "usage" : "M"
         },
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "usage" : "M",
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
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number"
      },
      "(0028,0034)" : {
         "req" : "1C",
         "usage" : "M",
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
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Pixel Aspect Ratio"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history."
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Person's Telephone Numbers"
      },
      "(0018,9430)" : {
         "mod_tables" : [
            "table_C.8.19.5-1"
         ],
         "module" : "X-Ray Detector",
         "name" : "Position of Isocenter Projection",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "1C",
         "desc" : [
            "Position of the Isocenter projection on the detector plane measured in fractional physical detector elements as a distance along the column direction followed by a distance along the row direction from the center of the TLHC detector element of a rectangle circumscribing the physical detector area.",
            "Required if Isocenter Reference System Sequence (0018,9462) is present."
         ],
         "entity" : "Image"
      },
      "(0018,7058)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "The maximum length (in mm) of the X-Ray beam path in the Filter Material that is not blocked by collimation. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
         "module" : "X-Ray Filtration",
         "mod_tables" : [
            "table_C.8-35a"
         ],
         "name" : "Filter Beam Path Length Maximum"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "entity" : "Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "usage" : "M",
         "req" : "3",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0018,700c)" : {
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "entity" : "Image",
         "desc" : "The date on which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "name" : "Date of Last Detector Calibration"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
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
         ]
      },
      "(0018,9474)" : {
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "entity" : "Image",
         "desc" : [
            "Describes for C-arm positioner type systems if positioner and tabletop has the same geometrical reference system.",
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
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The value NO is intended for mobile systems where there is no table fixed to the system"
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_48c4bb90-f336-4e97-aa64-337d53b9324a"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if Positioner Type (0018,1508) equals CARM."
         ],
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "name" : "C-arm Positioner Tabletop Relationship"
      },
      "(0028,6100)[<0>](0028,6120)" : {
         "entity" : "Image",
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
         "req" : "2C",
         "usage" : "U",
         "name" : "TID Offset",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "module" : "Mask"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name"
      },
      "(0018,7011)" : {
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "desc" : "Total number of X-Ray exposures that have been made on the detector used to acquire this image as identified in Detector ID (0018,700A) since it was manufactured.",
         "entity" : "Image",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "name" : "Exposures on Detector Since Manufactured"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "req" : "1C",
         "usage" : "M",
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
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID"
      },
      "(0010,2210)" : {
         "name" : "Anatomical Orientation Type",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "name" : "Dimension Description Label",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "name" : "Specimen Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "usage" : "U",
         "req" : "1"
      },
      "(0018,1082)" : {
         "entity" : "Image",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "High R-R Value",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "req" : "3",
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient"
      },
      "(0018,7054)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "The maximum thickness in mm of the X-Ray absorbing material used in the filters. May be multi-valued, with values corresponding to the respective values in Filter Material (0018,7050).",
         "mod_tables" : [
            "table_C.8-35a"
         ],
         "module" : "X-Ray Filtration",
         "name" : "Filter Thickness Maximum"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference"
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ]
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0008,1070)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Operators' Name"
      },
      "(0028,6100)[<0>](0028,6114)" : {
         "name" : "Mask Sub-pixel Shift",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "entity" : "Image",
         "desc" : [
            [
               "A pair of floating point numbers specifying the fractional vertical [adjacent row spacing] and horizontal [adjacent column spacing] pixel shift applied to the mask before subtracting it from the contrast frame. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.10.1.2",
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
                        "When the Frame Pixel Shift Functional Group is present the values of the Mask Pixel Shift attribute of that Functional Group prevails over the values specified in this module."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_ba00d9b2-ccac-4347-a36b-df304811ee58"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1191)" : {
         "name" : "Anode Target Material",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "3"
      },
      "(0010,0020)" : {
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
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
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "M",
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
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0020,9222)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Sequence",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "name" : "Private Group Reference",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0020,0012)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Acquisition Number"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
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
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0018,9424)" : {
         "entity" : "Image",
         "desc" : "User defined description of the protocol used to acquire this image.",
         "usage" : "M",
         "req" : "3",
         "name" : "Acquisition Protocol Description",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0028,6100)[<0>](0028,9416)" : {
         "name" : "Subtraction Item ID",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "desc" : [
            "Identification of the Subtraction Item used to associate a certain Mask Sub-Pixel Shift (0028,6114) in the Frame Pixel Shift Functional Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.14.1"
                  }
               },
               "."
            ],
            "Required if SOP Class UID (0008,0016) equals \"1.2.840.10008.5.1.4.1.1.12.1.1\" or \"1.2.840.10008.5.1.4.1.1.12.2.1\". May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0018,7048)" : {
         "name" : "Grid Period",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid",
         "desc" : [
            "Period in mSec of reciprocation cycle.",
            "Only meaningful if a value of Grid (0018,1166) is RECIPROCATING."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1020)" : [
         {
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Software Versions",
            "req" : "3",
            "usage" : "M",
            "entity" : "Equipment",
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
            ]
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "name" : "Software Versions",
            "usage" : "M",
            "req" : "1",
            "entity" : "Equipment",
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
            ]
         }
      ],
      "(0028,6100)[<0>](0028,6112)" : {
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Contrast Frame Averaging",
         "req" : "3",
         "usage" : "U",
         "desc" : "Specifies the number of contrast frames to average together before performing the mask operation. If the Attribute is missing, no averaging is performed.",
         "entity" : "Image"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,0090)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "entity" : "Study"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "entity" : "Image",
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
         "usage" : "U"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0018,701a)" : {
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "name" : "Detector Binning",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "desc" : "Number of active detectors used to generate a single pixel. Specified as number of row detectors per pixel then column.",
         "entity" : "Image"
      },
      "(0012,0020)" : {
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
         "req" : "1",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "req" : "1",
            "usage" : "M",
            "name" : "High Bit",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "name" : "High Bit",
            "module" : "Enhanced XA/XRF Image",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0018,0060)" : {
         "name" : "KVP",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "module" : "XA/XRF Acquisition",
         "entity" : "Image",
         "desc" : "Average of the peak kilo voltage outputs of the X-Ray generator used for all frames.",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise."
      },
      "(0028,0011)" : {
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Columns",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,1061)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Trigger Source or Type"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0028,0108)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "The minimum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(0020,1040)" : {
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "2",
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Series",
            "req" : "1",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "name" : "Referenced SOP Class UID",
            "module" : "XA/XRF Series",
            "mod_tables" : [
               "table_C.8.19.1-1",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Series",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0020,0013)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Number"
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "req" : "2",
         "entity" : "Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,7000)" : {
         "desc" : [
            "Whether or not the detector is operating within normal tolerances during this image acquisition.",
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
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6c5ebe11-778a-40a1-864a-36d3cf8598c8"
                     },
                     "content" : [
                        "This flag is intended to indicate whether or not there may have been some compromise of the diagnostic quality of the image due to some condition such as over-temperature, etc."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "name" : "Detector Conditions Nominal Flag",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "entity" : "Image",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0008,0124)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Mapping Resource Identification Sequence"
      },
      "(0008,0053)" : {
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Query/Retrieve View"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
                     ],
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,9457)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identification of the plane used to acquire this image.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MONOPLANE",
                     null
                  ],
                  [
                     "PLANE A",
                     null
                  ],
                  [
                     "PLANE B",
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
                                    "xml:id" : "para_53dd8f59-93c7-46f6-a141-c48acf32e902"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "MONOPLANE may only be used for a single plane system"
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
                                    "xml:id" : "para_9a5d6d20-19eb-4edf-977b-7388e5c6f560"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "PLANE A and PLANE B must be used for two plane systems, independent if the acquisition is single plane or biplane."
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
                                    "The value has to be in accordance with the value of Planes in Acquisition (0018,9410). If this value is SINGLE PLANE all three Defined Term are applicable."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1fb1d999-39ac-4acc-ac11-d40e744e70b9"
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
            "Required if Planes in Acquisition (0018,9410) is not equal to UNDEFINED."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Plane Identification"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0020,9256)" : {
         "usage" : "C - Required if respiratory synchronization was applied.",
         "req" : "1C",
         "entity" : "Image",
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
         ],
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Trigger Delay Threshold"
      },
      "(0008,9458)[<0>](0028,9478)" : {
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "module" : "XA/XRF Multi-frame Presentation",
         "name" : "Mask Visibility Percentage",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            [
               "The percentage of visibility of the mask frame during a subtracted display. A value of 0 corresponds to subtracted display, a value of 100 corresponds to un-subtracted display (native). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.19.7.1"
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
                        "The value of 100 is equivalent to Recommended Viewing Mode (0028,1090) having a value of NAT."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_08dbf217-226f-43a3-9edf-b23e10f20706"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if Recommended Viewing Mode (0028,1090) equals SUB."
         ],
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
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
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
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
         "req" : "1",
         "usage" : "M"
      },
      "(0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "desc" : [
            "Non-image Composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9458)[<0>](0008,9459)" : {
         "mod_tables" : [
            "table_C.8.19.7-1"
         ],
         "module" : "XA/XRF Multi-frame Presentation",
         "name" : "Recommended Display Frame Rate in Float",
         "req" : "1",
         "usage" : "U",
         "desc" : "Recommended rate at which the frames of this Item should be displayed in frames/second.",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0028,1103)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
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
         ]
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Series Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Time the Series started."
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
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
         "usage" : "M"
      },
      "(0018,9423)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Acquisition Protocol Name",
         "usage" : "M",
         "req" : "3",
         "desc" : "User defined name of the protocol used to acquire this image.",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Patient"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "req" : "2",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "entity" : "Image"
      },
      "(0018,7024)" : {
         "desc" : [
            "Shape of the active area.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This may be different from the Field of View Shape (0018,1147), and should not be assumed to describe the stored image."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2036c76a-84bc-4d95-b280-e8192289ded7"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "name" : "Detector Active Shape",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Time",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "req" : "3",
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
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0008,0060)" : [
         {
            "usage" : "M",
            "req" : "1",
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
            "module" : "General Series",
            "name" : "Modality"
         },
         {
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "list" : [
                     [
                        "XA",
                        null
                     ],
                     [
                        "RF",
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
                        "linkend" : "sect_C.7.3.1.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Series",
            "usage" : "M",
            "req" : "1",
            "name" : "Modality",
            "module" : "XA/XRF Series",
            "mod_tables" : [
               "table_C.8.19.1-1"
            ]
         }
      ],
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced XA/XRF Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0018,0022)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies any acquisition technique that was used during the acquisition of the image.",
            {
               "list" : [
                  [
                     "TOMO",
                     "Tomography"
                  ],
                  [
                     "CHASE",
                     "Bolus Chasing"
                  ],
                  [
                     "STEP",
                     "Stepping"
                  ],
                  [
                     "ROTA",
                     "Rotation"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Scan Options",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0253)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step ID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "name" : "Universal Entity ID"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "entity" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
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
         ],
         "req" : "1C",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0018,115a)" : {
         "desc" : [
            "Specifies X-Ray radiation mode.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CONTINUOUS",
                     null
                  ],
                  [
                     "PULSED",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "1",
         "name" : "Radiation Mode",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0028,2002)" : {
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Color Space",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,0036)[<0>](0018,0035)" : {
         "name" : "Intervention Drug Start Time",
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "entity" : "Image",
         "desc" : "Time of administration of the interventional drug.",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1508)" : {
         "name" : "Positioner Type",
         "module" : "XA/XRF Acquisition",
         "mod_tables" : [
            "table_C.8.19.3-1"
         ],
         "desc" : [
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CARM",
                     null
                  ],
                  [
                     "COLUMN",
                     null
                  ]
               ]
            },
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
                                 "attrs" : {
                                    "xml:id" : "para_f0fbc721-303f-4227-a2d7-d71551f3c027"
                                 },
                                 "content" : [
                                    "The term CARM can apply to any positioner with 2 degrees of freedom of rotation of the X-Ray beam about the Imaging Subject."
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
                                    "The term COLUMN can apply to any positioner with 1 degree of freedom of rotation of the X-Ray beam about the Imaging Subject."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d4f57e72-49f3-4e50-898e-440ab2f586fc"
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
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 equals ORIGINAL. May be present otherwise.",
         "req" : "1"
      },
      "(0008,1010)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(0018,704c)" : {
         "desc" : "Focal distance in mm of a FOCUSED grid.",
         "entity" : "Image",
         "usage" : "U",
         "req" : "3",
         "name" : "Grid Focal Distance",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "module" : "X-Ray Grid"
      },
      "(0008,0122)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "usage" : "U",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "entity" : "Image",
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
         "req" : "3",
         "usage" : "U",
         "name" : "Device Length",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
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
         "entity" : "Image"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,9171)" : {
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "name" : "Respiratory Signal Source",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "req" : "1C",
         "entity" : "Image",
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
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "usage" : "M",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
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
         ]
      },
      "(0012,0064)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "req" : "3",
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0028,0107)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "usage" : "M",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "name" : "Device Description",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Further description in free form text describing the device.",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1201)" : {
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
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "req" : "1C",
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
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0020,9250)" : {
         "name" : "Respiratory Trigger Type",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "entity" : "Image",
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
         "req" : "1C",
         "usage" : "C - Required if respiratory synchronization was applied."
      },
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name of the physician(s) administering the Series.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,103e)" : {
         "desc" : "Description of the Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0018,7001)" : {
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Detector Temperature",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Detector temperature during exposure in degrees Celsius."
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "name" : "Calculated Frame List",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telecom Information"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,1000)" : [
         {
            "usage" : "M",
            "req" : "3",
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
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "name" : "Device Serial Number"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "name" : "Device Serial Number",
            "usage" : "M",
            "req" : "1",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "entity" : "Equipment"
         }
      ],
      "(0008,1164)[<0>](0008,1167)" : {
         "name" : "Multi-frame Source SOP Instance UID",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Time Range",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction"
      },
      "(0018,1160)" : {
         "module" : "X-Ray Filtration",
         "mod_tables" : [
            "table_C.8-35a"
         ],
         "name" : "Filter Type",
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Type of filter(s) inserted into the X-Ray beam (e.g., wedges).",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            },
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "name" : "Contrast/Bolus Start Time",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Time of start of administration.",
         "entity" : "Image",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "3"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's model name of the device",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "entity" : "Image",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Inter-Marker Distance",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Subject Relative Position in Image",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
         ]
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "req" : "3",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast Flow Rate"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "The coding scheme full common name",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series",
         "name" : "UID"
      },
      "(0010,0200)" : {
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
         "usage" : "M",
         "req" : "3",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0002)" : {
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
         "entity" : "Image",
         "usage" : "M",
         "req" : "1",
         "name" : "Samples per Pixel",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Image",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,2114)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
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
         ],
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Lossy Image Compression Method"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced XA/XRF Image",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0515)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence."
      },
      "(0028,2112)" : {
         "name" : "Lossy Image Compression Ratio",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "entity" : "Image",
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
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
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
         "req" : "1",
         "usage" : "M",
         "name" : "Strain Stock Number",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
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
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "req" : "3",
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
         ],
         "entity" : "Patient"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0018,0015)" : {
         "name" : "Body Part Examined",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L",
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
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Image"
      },
      "(0018,0036)[<0>](0054,0302)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the Administration Route.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-19"
         ],
         "module" : "Intervention",
         "name" : "Administration Route Code Sequence"
      },
      "(0008,1062)[<0>](0040,1101)" : {
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
         ],
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "name" : "Specimen Localization Content Item Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "usage" : "C - Required if contrast media was applied and the system is able to register contrast usage.",
         "req" : "3",
         "desc" : "Time of end of administration.",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Stop Time"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            {
               "title" : "Enumerated Values:",
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
               ]
            },
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
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "el" : "para",
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
                           ],
                           "el" : "listitem"
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
                                 "el" : "para",
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
               ]
            }
         ],
         "entity" : "Image"
      },
      "(0008,009c)" : {
         "entity" : "Study",
         "desc" : "Consulting physician(s) for this patient visit.",
         "req" : "3",
         "usage" : "M",
         "name" : "Consulting Physician's Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,002a)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Acquisition DateTime",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_08c90ba7-61c6-4cf9-94c7-a9076c248f35"
                     },
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "sect_C.7.4.2",
                              "xrefstyle" : "select: title"
                           }
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "req" : "1",
         "usage" : "M",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1495)" : {
         "desc" : [
            "The number of source images used to construct this tomosynthetic image. Only meaningful if Tomo Class (0018,1491) is TOMOSYNTHESIS. These may be listed in Source Image Sequence (0008,2112) of the ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.7.6.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Number of Tomosynthesis Source Images",
         "module" : "X-Ray Tomography Acquisition",
         "mod_tables" : [
            "table_C.8-32"
         ]
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Identifier Type Code",
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
         "entity" : "Patient"
      },
      "(0018,9004)" : [
         {
            "name" : "Content Qualification",
            "mod_tables" : [
               "table_C.8.19.2-1"
            ],
            "module" : "Enhanced XA/XRF Image",
            "entity" : "Image",
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
                     "attrs" : {
                        "linkend" : "sect_C.8.13.2.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "name" : "Content Qualification",
            "req" : "3",
            "usage" : "M",
            "entity" : "Image",
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
      "(0018,7044)" : {
         "desc" : "The pitch in mm of the X-Ray absorbing material used in the grid.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Grid Pitch",
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0020,4000)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "User-defined comments about the image.",
         "entity" : "Image",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1"
         ],
         "name" : "Image Comments"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "module" : "General Series",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0033)" : {
         "entity" : "Patient",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
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
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve URI",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
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
         "name" : "Concept Code Sequence"
      },
      "(0040,0520)" : {
         "name" : "Container Component Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "Image",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "usage" : "U",
         "name" : "Specimen Detailed Description",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,7005)" : {
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Detector Configuration"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1"
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
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         "req" : "3",
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Length in mm of container component.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0028,6100)[<0>](0028,6110)" : {
         "desc" : "Specifies the frame numbers of the pixel data used to generate this mask. Frames in a Multi-frame Image are specified by sequentially increasing number values beginning with 1. Required if Mask Operation (0028,6101) is AVG_SUB.",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Mask Frame Numbers",
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
               "type" : "variablelist",
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
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
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
         ]
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M"
      },
      "(0020,9311)" : {
         "name" : "Dimension Organization Type",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "entity" : "Image",
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
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Private Creator",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "entity" : "Image"
      },
      "(0018,7050)" : {
         "name" : "Filter Material",
         "module" : "X-Ray Filtration",
         "mod_tables" : [
            "table_C.8-35a"
         ],
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
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "req" : "1",
         "usage" : "U",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(0018,7022)" : {
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "module" : "X-Ray Detector",
         "name" : "Detector Element Spacing",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR.",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_7c26ba93-41a1-420b-8b9f-77c9ccf7b22d"
                     },
                     "el" : "para",
                     "content" : [
                        "This may not be the same as the Imager Pixel Spacing (0018,1164), and should not be assumed to describe the stored image."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image"
      },
      "(0018,9169)" : {
         "entity" : "Image",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "1C",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "name" : "Cardiac Beat Rejection Technique",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
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
         "name" : "Universal Entity ID Type"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
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
         ]
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
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
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Person's Telecom Information"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
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
                     "linkend" : "sect_10.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Value Type"
      },
      "(0028,0010)" : {
         "entity" : "Image",
         "desc" : "Number of rows in the image.",
         "req" : "1",
         "usage" : "M",
         "name" : "Rows",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a8c76dec-9c64-427d-9278-7ac6f369d5a7"
                     },
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Date the Series started.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0100,0426)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "name" : "Green Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "entity" : "Image",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,700e)" : {
         "name" : "Time of Last Detector Calibration",
         "module" : "X-Ray Detector",
         "mod_tables" : [
            "table_C.8.19.5-1",
            "table_C.8-71b"
         ],
         "entity" : "Image",
         "desc" : "The time at which the detector used to acquire this image as identified in Detector ID (0018,700A) was last calibrated.",
         "req" : "3",
         "usage" : "C - Required if X-Ray Receptor Type (0018,9420) is present and equals DIGITAL_DETECTOR."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series",
         "name" : "Referenced SOP Sequence"
      },
      "(0012,0071)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
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
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
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
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Enhanced XA/XRF Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Retrieve AE Title"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
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
         "entity" : "Series"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0555)" : {
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Acquisition Context Sequence",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,009d)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Consulting Physician Identification Sequence"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,6100)[<0>](0028,6101)" : {
         "module" : "Mask",
         "mod_tables" : [
            "table_C.7-16"
         ],
         "name" : "Mask Operation",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Defined Term identifying the type of mask operation to be performed. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.10.1"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "2C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
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
         "usage" : "M"
      },
      "(0018,7046)" : {
         "req" : "3",
         "usage" : "U",
         "desc" : "Ratio of the vertical spacing and horizontal spacing of the X-Ray absorbing material used in the grid. Specified by a pair of integer values where the first value is the vertical size, and the second value is the horizontal size.",
         "entity" : "Image",
         "module" : "X-Ray Grid",
         "mod_tables" : [
            "table_C.8-36b"
         ],
         "name" : "Grid Aspect Ratio"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Concept Name Code Sequence"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "el" : "note",
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(0028,1203)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Study"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer",
         "usage" : "U",
         "req" : "3",
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "req" : "1C",
         "usage" : "M",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8.19.2-1",
            "table_C.7-11b"
         ],
         "module" : "Enhanced XA/XRF Image",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(7fe0,0010)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "req" : "1C",
         "usage" : "M",
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
         ],
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "name" : "Value Type",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Series",
         "req" : "1",
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
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0036))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.7-19 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.48-1",
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
      "Can't handle table_8.8-1 (in table_C.8.19.2-1 after (0054,0410))",
      "Can't handle table_8.8-1 (in table_C.8.19.2-1 after (0054,0412))",
      "Can't handle table_8.8-1 (in table_C.8.19.2-1 after (0054,0414))",
      "Can't handle table_8.8-1 (in table_C.8.19.2-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.19.2-1:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8.19.2-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
