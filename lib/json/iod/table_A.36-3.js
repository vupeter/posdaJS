var data = {
   "tags" : {
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,9174)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "desc" : [
            "Agency that established MR safety standard applicable to the acquisition of this Instance.",
            {
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
               ],
               "title" : "Defined Terms:"
            },
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "name" : "Applicable Safety Standard Agency",
         "module" : "MR Spectroscopy"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Name",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      "(0020,4000)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "User-defined comments about the image.",
         "name" : "Image Comments",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "MR Spectroscopy",
         "module" : "Specimen",
         "name" : "DateTime",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0028,0011)" : {
         "name" : "Columns",
         "module" : "MR Spectroscopy Data",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Number of voxels in the horizontal direction in the frame.",
         "mod_tables" : [
            "table_C.8-106"
         ],
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "name" : "Strain Stock Number",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0018,9098)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Precession frequency in MHz of the nucleus being addressed for each spectral axis.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation of the ordering."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "MR Spectroscopy",
         "name" : "Transmitter Frequency",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID",
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "General Series",
         "name" : "Value Type"
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "name" : "Text Value"
      },
      "(0018,9065)" : {
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Describes time domain filtering or apodization applied. Shall be NONE if no filtering operations were applied to the time domain data.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
                     "EXPONENTIAL",
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
                     "NONE",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the ordering."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Spectroscopy",
         "name" : "Time Domain Filtering"
      },
      "(0008,9237)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier for the Study",
         "module" : "MR Spectroscopy",
         "name" : "Study Instance UID"
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,002a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Acquisition DateTime",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The date and time that the acquisition of data started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3e4dfa58-9ce2-4fc9-84eb-a2f810a716be"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0008,1115)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Signature",
         "entity" : "MR Spectroscopy",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "name" : "DateTime",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "MR Spectroscopy",
         "name" : "Signature"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,1002)" : {
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,0021)" : {
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
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1190)" : {
         "req" : "3",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Retrieve URL",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,1000)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "name" : "Device Serial Number",
            "entity" : "Equipment",
            "req" : "3",
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
            ]
         },
         {
            "name" : "Device Serial Number",
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "entity" : "Patient",
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
         "req" : "3",
         "name" : "Subject Relative Position in Image",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0010,2180)" : {
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "MR Spectroscopy",
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
         "req" : "3",
         "name" : "Certified Timestamp",
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Institution Address",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Institution Name",
         "entity" : "Series",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,9032)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Geometry category of k-Space traversal.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Geometry of k-Space Traversal",
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
      },
      "(0008,0020)" : {
         "req" : "2",
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "name" : "Study Date",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,114a)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
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
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "MR Spectroscopy",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "2",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "module" : "Specimen"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "name" : "Type of Patient ID",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,9237)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Referenced Series Sequence",
         "module" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "req" : "2",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Referenced SOP Sequence",
         "module" : "MR Spectroscopy"
      },
      "(0008,1111)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "3",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "entity" : "Series",
            "module" : "General Series",
            "name" : "Referenced Performed Procedure Step Sequence"
         },
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C",
            "entity" : "Series",
            "module" : "MR Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "mod_tables" : [
               "table_C.8-101"
            ],
            "usage" : "M"
         }
      ],
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Time",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,051a)" : {
         "name" : "Container Description",
         "module" : "Specimen",
         "desc" : "Description of the container.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "module" : "MR Spectroscopy",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "MR Spectroscopy",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0018,5100)" : {
         "req" : "2C",
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
         "name" : "Patient Position",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
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
         "entity" : "MR Spectroscopy",
         "module" : "Acquisition Context",
         "name" : "Person Name"
      },
      "(0008,009c)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Consulting Physician's Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Retrieve Location UID",
         "module" : "MR Spectroscopy",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "MR Spectroscopy"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Repository Unique ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Simple Frame List",
         "module" : "Frame Extraction",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization UID",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
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
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "MR Spectroscopy"
      },
      "(0018,9198)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "name" : "First Order Phase Correction",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Describes whether a first order (frequency dependent) phase correction was applied to the spectral data.",
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
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "module" : "Specimen",
         "name" : "Specimen Short Description",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3"
      },
      "(0020,1040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Position Reference Indicator",
         "module" : "Frame of Reference",
         "req" : "2",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               }
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "name" : "Scheduled Procedure Step ID",
         "module" : "General Series",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
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
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "module" : "Specimen"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Storage Media File-Set ID",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0010,0219)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Code Sequence",
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0010,0035)" : {
         "module" : "Patient",
         "name" : "Patient's Alternative Calendar",
         "entity" : "Patient",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "M",
         "entity" : "Frame of Reference",
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
         "req" : "1",
         "name" : "Frame of Reference UID",
         "module" : "Frame of Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "name" : "Institutional Department Name"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
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
               ]
            }
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,106c)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "req" : "1C",
         "entity" : "Frame of Reference",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "module" : "Synchronization",
         "name" : "Synchronization Channel"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0008,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "MR Spectroscopy",
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
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "module" : "General Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
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
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "MAC Algorithm",
         "module" : "MR Spectroscopy"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Width in mm of container component.",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "name" : "Container Component Width",
         "module" : "Specimen"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Manufacturer",
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Material of container component.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "3",
         "module" : "Specimen",
         "name" : "Container Component Material"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "Rational Denominator Value"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
                     "el" : "para",
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
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "MR Spectroscopy",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Operators' Name",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,9034)" : {
         "name" : "Rectilinear Phase Encode Reordering",
         "module" : "MR Spectroscopy Pulse Sequence",
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
            "Required if Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-103"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "module" : "Specimen",
         "name" : "Time",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Numerator Value"
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
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
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed",
         "module" : "MR Spectroscopy",
         "req" : "1",
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
         "entity" : "MR Spectroscopy"
      },
      "(0018,9037)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Cardiac Synchronization",
         "name" : "Cardiac Synchronization Technique"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Request Attributes Sequence",
         "module" : "General Series"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Study Instance UID",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier for the Study",
         "req" : "1"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
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
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,9094)" : {
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Coverage of k-Space",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Coverage of k-Space.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and MR Spectroscopy Acquisition Type (0018,9200) equals VOLUME.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and MR Spectroscopy Acquisition Type (0018,9200) equals VOLUME."
         ]
      },
      "(0010,1020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "MR Spectroscopy",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "MR Spectroscopy",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "MR Spectroscopy"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "name" : "Series Description",
         "entity" : "Series",
         "desc" : "Description of the Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,1090)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Manufacturer's Model Name",
            "module" : "General Equipment",
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3"
         },
         {
            "req" : "1",
            "entity" : "Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer's Model Name",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M"
         }
      ],
      " (0010,0027) [<0>](0010,0021)" : {
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
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0020,9311)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : [
            "Dimension organization of the instance.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization Type",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "module" : "Frame Extraction",
         "name" : "Time Range",
         "req" : "1C",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "module" : "Specimen",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
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
         "module" : "MR Spectroscopy",
         "name" : "Data Elements Signed"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Digital Signature UID",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "MR Spectroscopy",
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
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Description",
         "req" : "1C",
         "entity" : "Patient",
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
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy"
      },
      "(0018,9008)" : {
         "name" : "Echo Pulse Sequence",
         "module" : "MR Spectroscopy Pulse Sequence",
         "req" : "1C",
         "desc" : [
            "Echo category of pulse sequences.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-103"
         ]
      },
      "(0010,0026)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Source Patient Group Identification Sequence",
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               ")."
            ],
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
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
                           ],
                           "el" : "listitem"
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
         "module" : "SOP Common"
      },
      "(0018,9199)" : {
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Indicates if the images or spectra were created using Water Reference time domain data for phase correction.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for relation between Water Reference data and other Spectroscopic objects."
            ]
         ],
         "module" : "MR Spectroscopy",
         "name" : "Water Referenced Phase Correction"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,9207)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-107"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Volume Based Calculation Technique",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Method used for volume calculations with frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.14.5.1.3"
               }
            },
            " for a description and Defined Terms."
         ],
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "module" : "Specimen",
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
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series"
      },
      "(0018,9062)" : {
         "module" : "MR Spectroscopy",
         "name" : "De-coupling Method",
         "req" : "1C",
         "desc" : [
            "The de-coupling modulation scheme used.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "MLEV",
                     null
                  ],
                  [
                     "WALTZ",
                     null
                  ],
                  [
                     "NARROWBAND",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if De-coupling (0018,9059) equals YES."
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Position",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "module" : "Specimen",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
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
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Instance UID",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "MR Spectroscopy",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
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
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Deidentification Action"
      },
      "(0018,9093)" : {
         "desc" : [
            "Number of interleaves or shots.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Number of k-Space Trajectories",
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
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
         "entity" : "MR Spectroscopy",
         "name" : "Universal Entity ID Type",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "name" : "Dimension Organization UID",
         "module" : "Multi-frame Dimension"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "name" : "Person's Address"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "name" : "Rational Denominator Value"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "module" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "module" : "MR Spectroscopy",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "MR Spectroscopy",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,1083)" : {
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Acquired",
         "req" : "2C",
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "req" : "3"
      },
      "(0028,9002)" : {
         "mod_tables" : [
            "table_C.8-106"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Number of columns of data points in spectroscopic data.",
         "entity" : "MR Spectroscopy",
         "name" : "Data Point Columns",
         "module" : "MR Spectroscopy Data"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "module" : "Specimen",
         "name" : "Value Type"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         "name" : "Coding Scheme Registry"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Ingredient Opaque",
         "module" : "Enhanced Contrast/Bolus",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.4b.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "name" : "Spatial Resolution",
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "MR Spectroscopy",
         "name" : "Signature"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "req" : "1",
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
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "MR Spectroscopy"
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Patient's Birth Date in Alternative Calendar"
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         "name" : "Encrypted Attributes Sequence"
      },
      "(0018,9012)" : {
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Multi-planar Excitation",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Technique that simultaneously excites several volumes.",
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
         "req" : "1C"
      },
      "(0008,1120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
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
      "(0008,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Time",
         "module" : "General Series",
         "desc" : "Time the Series started.",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0555)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "2",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Acquisition Context",
         "name" : "Acquisition Context Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "module" : "Specimen"
      },
      "(0012,0021)" : {
         "name" : "Clinical Trial Protocol Name",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0028,0010)" : {
         "name" : "Rows",
         "module" : "MR Spectroscopy Data",
         "desc" : "Number of voxels in the vertical direction in the frame.",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-106"
         ]
      },
      "(0008,1010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Station Name",
         "module" : "General Equipment"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "module" : "Specimen",
         "name" : "Container Component Type Code Sequence",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "req" : "1C"
      },
      "(0018,9017)" : {
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Steady State Pulse Sequence",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Steady State Sequence.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
      },
      "(0020,0200)" : {
         "name" : "Synchronization Frame of Reference UID",
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
         "entity" : "Frame of Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied."
      },
      "(0018,0015)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Series",
         "name" : "Body Part Examined",
         "module" : "General Series"
      },
      "(0018,9085)" : {
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Cardiac Signal Source.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "name" : "Cardiac Signal Source",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier for the Study",
         "req" : "1"
      },
      "(0028,9003)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-106"
         ],
         "req" : "1",
         "desc" : [
            "Domain of represented signal in column direction.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FREQUENCY",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "MR Spectroscopy",
         "name" : "Signal Domain Columns",
         "module" : "MR Spectroscopy Data"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
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
         ],
         "req" : "1"
      },
      "(0008,0300)" : {
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "MR Spectroscopy",
         "name" : "Private Data Element Characteristics Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Institution Code Sequence"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "MR Spectroscopy",
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "MR Spectroscopy",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,1320)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "B1rms",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : [
            "B1+ rms value in units of micro_tesla (uT) for the acquisition producing the image. See ",
            {
               "attrs" : {
                  "linkend" : "biblio_IEC60601-2-33"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1164)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Frame Extraction Sequence",
         "module" : "Frame Extraction"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Numbers",
         "module" : "Acquisition Context",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(0018,9170)" : {
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "usage" : "C - Required if respiratory synchronization was applied.",
         "name" : "Respiratory Motion Compensation Technique",
         "module" : "Respiratory Synchronization",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Applied technique to reduce respiratory motion artifacts.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Person's mailing address"
      },
      "(0040,1012)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
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
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,9172)" : {
         "module" : "Bulk Motion Synchronization",
         "name" : "Bulk Motion Compensation Technique",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Applied technique to reduce bulk or other physiology motion artifacts.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "usage" : "C - Required if bulk motion synchronization was applied."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "name" : "Specimen Type Code Sequence",
         "module" : "Specimen",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(0008,010f)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Context Identifier",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0020,9250)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "req" : "1C",
         "name" : "Respiratory Trigger Type",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series"
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "module" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ]
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "req" : "1C",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
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
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "3",
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "MR Spectroscopy",
         "name" : "Retrieve Location UID",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0012,0071)" : {
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(0008,113a)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "MR Spectroscopy",
         "name" : "Referenced Waveform Sequence"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "name" : "Contrast Flow Duration",
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
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
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series"
      },
      "(0018,1803)" : {
         "name" : "NTP Source Address",
         "module" : "Synchronization",
         "req" : "3",
         "entity" : "Frame of Reference",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "MR Spectroscopy",
         "desc" : "Thickness in mm of container component",
         "req" : "3",
         "name" : "Container Component Thickness",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0008,9154)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Source Image Evidence Sequence",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Source Image Sequences of this Enhanced MR Image SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast Administration Profile Sequence",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
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
               ],
               "type" : "variablelist"
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
         "name" : "Value Type",
         "module" : "Acquisition Context",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "module" : "General Study",
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
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "module" : "MR Spectroscopy",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_07b64781-f4ca-4d53-9b0b-e3d8032bb048"
                     },
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,1030)" : {
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
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Protocol Name",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "MR Spectroscopy"
      },
      "(0038,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admission ID"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "entity" : "Series",
         "desc" : "Unique identifier of the Series.",
         "name" : "Series Instance UID",
         "module" : "General Series"
      },
      "(0010,0032)" : {
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,9033)" : {
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Segmented k-Space Traversal",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-103"
         ]
      },
      "(0010,21b0)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,9100)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Nucleus that is resonant at the transmitter frequency.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Resonant Nucleus"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "module" : "Frame Extraction",
         "name" : "Calculated Frame List",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
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
         "module" : "General Study",
         "name" : "Institution Code Sequence"
      },
      "(0040,0520)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Container Component Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "name" : "Referenced SOP Sequence"
      },
      "(0100,0424)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment"
      },
      "(0018,1086)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "Cardiac Synchronization",
         "name" : "Skip Beats"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,0087)" : {
         "module" : "MR Spectroscopy",
         "name" : "Magnetic Field Strength",
         "req" : "1C",
         "desc" : [
            "Nominal field strength of the MR Magnet, in Tesla.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M"
      },
      "(0018,9060)" : {
         "name" : "De-coupled Nucleus",
         "module" : "MR Spectroscopy",
         "desc" : [
            "Nucleus being de-coupled.",
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
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.14.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation of the ordering."
            ],
            "Required if De-coupling (0018,9059) equals YES."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "name" : "Multi-frame Source SOP Instance UID",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
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
         "usage" : "M"
      },
      "(0020,0012)" : {
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
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "name" : "Acquisition Number",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Number",
         "desc" : "A number that identifies this Series.",
         "entity" : "Series",
         "req" : "2"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "name" : "Floating Point Value"
      },
      "(0018,9298)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Number specifying the sample that coincides with the echo peak used during acquisition of the data. First sample will be numbered 1.",
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Echo Peak Position",
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "module" : "MR Spectroscopy"
      },
      "(0018,9173)" : {
         "module" : "Bulk Motion Synchronization",
         "name" : "Bulk Motion Signal Source",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Signal source to measure motion.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE."
         ],
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-3"
         ]
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1080)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "module" : "General Series",
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "MR Spectroscopy",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "module" : "Patient",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0018,1201)" : {
         "req" : "3",
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
         "name" : "Time of Last Calibration",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "3"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "module" : "MR Spectroscopy"
      },
      "(0028,9001)" : {
         "name" : "Data Point Rows",
         "module" : "MR Spectroscopy Data",
         "desc" : "Number of rows of data points in spectroscopic data.",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-106"
         ],
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "module" : "General Series",
         "req" : "3",
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
         "usage" : "M"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence"
      },
      "(0008,9208)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Representation of complex data of frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.14.5.1.4"
               }
            },
            " for a description and Defined Terms."
         ],
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Complex Image Component",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-107"
         ]
      },
      "(0018,9101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Specifies whether operations were performed to correct resonant frequency of metabolite peaks due to B0 field inhomogeneities.",
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
         "name" : "Frequency Correction",
         "module" : "MR Spectroscopy"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "name" : "Container Identifier",
         "module" : "Specimen",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "name" : "Spatial Resolution",
         "module" : "General Equipment"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Volume",
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "req" : "2",
         "entity" : "MR Spectroscopy"
      },
      "(0018,9025)" : {
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Spectrally Selected Suppression",
         "req" : "1C",
         "desc" : [
            "Spectrally Selected Suppression.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "WATER",
                     null
                  ],
                  [
                     "FAT",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise."
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "module" : "Patient",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(5600,0010)" : {
         "module" : "MR Spectroscopy Data",
         "name" : "First Order Phase Correction Angle",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "First Order Phase Correction Angle. Number of values is determined by Row*Column*Number of Frames.",
            "Required if First Order Phase Correction (0018,9198) equals YES"
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-106"
         ]
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "name" : "Date"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Storage Media File-Set ID",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0010,0034)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0038,0064)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced Digital Signature Sequence",
         "module" : "MR Spectroscopy",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,9200)" : {
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "name" : "MR Spectroscopy Acquisition Type",
         "module" : "MR Spectroscopy Pulse Sequence",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Identification of data encoding scheme.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SINGLE_VOXEL",
                     null
                  ],
                  [
                     "ROW",
                     null
                  ],
                  [
                     "PLANE",
                     null
                  ],
                  [
                     "VOLUME",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "MR Spectroscopy",
         "name" : "Retrieve AE Title",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,1008)" : {
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0040,0513)" : {
         "req" : "2",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "name" : "Issuer of the Container Identifier Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "module" : "Patient",
         "name" : "Patient ID",
         "req" : "1",
         "desc" : "Primary identifier for the group of subjects.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(0012,0031)" : {
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
         ],
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_1bb4c66e-0b5e-4f69-b0f2-4e353dc73212"
                     },
                     "content" : [
                        "The Attributes in this Sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Series",
            "req" : "1",
            "module" : "MR Series",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0020,9222)[<0>](0020,9165)" : {
         "name" : "Dimension Index Pointer",
         "module" : "Multi-frame Dimension",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.17.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M"
      },
      "(0018,9005)" : {
         "name" : "Pulse Sequence Name",
         "module" : "MR Spectroscopy Pulse Sequence",
         "desc" : [
            "Name of the pulse sequence for annotation purposes. Potentially vendor-specific name.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-103"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "name" : "Contrast/Bolus Administration Route Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0556)" : {
         "module" : "Acquisition Context",
         "name" : "Acquisition Context Description",
         "entity" : "MR Spectroscopy",
         "desc" : "Free-text description of the image-acquisition context.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "name" : "Station Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0032,1034)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
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
         ]
      },
      "(0018,0012)[<0>](0018,0013)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : [
            "T1 Relaxivity of the MR Contrast/Bolus used specified in s",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
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
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus T1 Relaxivity",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "name" : "MAC",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "module" : "MR Spectroscopy",
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "DateTime"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series",
         "req" : "2",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "3",
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
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "MR Spectroscopy",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,a390)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         ]
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study",
         "name" : "Service Episode ID"
      },
      "(0018,9175)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Name and Version of the applicable standard.",
         "module" : "MR Spectroscopy",
         "name" : "Applicable Safety Standard Description",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0060)" : [
         {
            "req" : "1",
            "entity" : "Series",
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
            "name" : "Modality",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101"
            ],
            "req" : "1",
            "entity" : "Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "MR",
                        null
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
                  " for further explanation."
               ]
            ],
            "module" : "MR Series",
            "name" : "Modality"
         }
      ],
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0010,0212)" : {
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
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "desc" : "Primary identifier for an individual subject.",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient ID"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "req" : "1",
         "module" : "Specimen",
         "name" : "Specimen Description Sequence"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1",
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
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
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
         "name" : "Distribution Type",
         "module" : "Clinical Trial Study"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "name" : "Mapping Resource Name",
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
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "entity" : "Study",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "name" : "Reason for the Requested Procedure"
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Identifying Private Elements",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0551)" : {
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
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "name" : "Specimen Identifier",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0012,0030)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0018,9052)" : {
         "desc" : [
            "Spectral width in Hz.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation of the ordering."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "name" : "Spectral Width",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "name" : "MAC",
         "module" : "MR Spectroscopy"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "module" : "Patient",
         "req" : "1",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "MR Spectroscopy",
         "name" : "Retrieve Location UID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve Location UID",
         "module" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "MR Spectroscopy",
         "name" : "Digital Signature UID",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "module" : "MR Spectroscopy"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "name" : "Date",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,9126)[<0>](0018,9104)" : {
         "desc" : "Thickness of slab in mm.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "name" : "Slab Thickness",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "req" : "2"
      },
      "(0018,9018)" : {
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Echo Planar Pulse Sequence",
         "req" : "1C",
         "desc" : [
            "Echo Planar category of pulse-sequences.",
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
         "entity" : "MR Spectroscopy",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-103"
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Volume",
         "entity" : "MR Spectroscopy",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "req" : "2",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,1110)" : {
         "req" : "3",
         "entity" : "Study",
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
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
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
         "module" : "MR Spectroscopy",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0008,1048)" : {
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
         "req" : "3",
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "MR Spectroscopy"
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0028,0120)" : {
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
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
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
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
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "name" : "Universal Entity ID"
      },
      "(0028,9108)" : {
         "name" : "Data Representation",
         "module" : "MR Spectroscopy Data",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Data representation of the data points. Each data point shall have the same representation.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "COMPLEX",
                     "Data is complex pair"
                  ],
                  [
                     "REAL",
                     "Data contains only real component"
                  ],
                  [
                     "IMAGINARY",
                     "Data contains only imaginary component"
                  ],
                  [
                     "MAGNITUDE",
                     "Magnitude data"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-106"
         ],
         "usage" : "M"
      },
      "(0038,0062)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,1020)" : [
         {
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
            "entity" : "Equipment",
            "req" : "3",
            "module" : "General Equipment",
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "entity" : "Equipment",
            "req" : "1",
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
            "name" : "Software Versions",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0012,0020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1",
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
         "entity" : "Patient"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "MR Spectroscopy",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "name" : "Series Date",
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "MR Spectroscopy"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "name" : "Study Description",
         "module" : "General Study"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  }
               },
               "."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Specimen Localization Content Item Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "MAC"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0108)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "The minimum value of all images in this Series."
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "3",
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
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0008,0106)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "entity" : "MR Spectroscopy",
         "name" : "Container Component Diameter",
         "module" : "Specimen"
      },
      "(0020,0060)" : {
         "name" : "Laterality",
         "module" : "General Series",
         "entity" : "Series",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "name" : "Signature",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0008,9209)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Indication of acquisition contrast used with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.14.5.1.5"
               },
               "el" : "xref"
            },
            " for a description and Defined Terms."
         ],
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Acquisition Contrast",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-107"
         ]
      },
      "(0018,9171)" : {
         "name" : "Respiratory Signal Source",
         "module" : "Respiratory Synchronization",
         "entity" : "MR Spectroscopy",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "usage" : "C - Required if respiratory synchronization was applied."
      },
      "(0020,0013)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : "A number that identifies this Composite object instance.",
         "req" : "3",
         "name" : "Instance Number",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "entity" : "MR Spectroscopy",
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
         "req" : "2",
         "name" : "Specimen Preparation Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "name" : "Functional Group Private Creator",
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Length in mm of container component.",
         "module" : "Specimen",
         "name" : "Container Component Length",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "module" : "Specimen",
         "name" : "Container Component ID",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "XDS Retrieval Sequence"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "MR Spectroscopy",
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,103f)" : {
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Series Description Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0020,9221)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "name" : "Dimension Organization Sequence",
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
         "req" : "1",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
         "entity" : "MR Spectroscopy",
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
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,9206)" : {
         "name" : "Volumetric Properties",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.14.5.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-107"
         ],
         "usage" : "M"
      },
      "(0018,9053)" : {
         "req" : "1C",
         "desc" : [
            "The chemical shift at the transmitter frequency in ppm.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.14.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation of the ordering."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Chemical Shift Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Person Name",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0018,1800)" : {
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ],
         "req" : "1",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "name" : "Acquisition Time Synchronized"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "entity" : "Series",
         "req" : "3",
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
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Date",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
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
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "Specimen",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "module" : "MR Spectroscopy",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,9061)" : {
         "module" : "MR Spectroscopy",
         "name" : "De-coupling Frequency",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The center frequency (Hz) for the de-coupling.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the ordering."
            ],
            "Required if De-coupling (0018,9059) equals YES."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "name" : "DICOM Retrieval Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "module" : "SOP Common",
         "name" : "Contribution Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "module" : "SOP Common",
         "name" : "Block Identifying Information Status",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "entity" : "Series",
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
         ]
      },
      "(0020,9172)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Private Group Reference",
         "req" : "1",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "MR Spectroscopy"
      },
      "(0008,114a)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "References to SOP Instances significantly related to the current SOP Instance, including water reference data.",
            "Required if Water Reference Acquisition (0018,9297) equals REFERENCED. May be present otherwise.",
            "One or more Items shall be present in this Sequence."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "module" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "entity" : "MR Spectroscopy"
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Person Name",
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID",
         "module" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "entity" : "Study",
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
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Consent for Distribution Flag",
         "module" : "Clinical Trial Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
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
         "req" : "1",
         "name" : "Data Elements Signed",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Manufacturer"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,2210)" : {
         "module" : "General Series",
         "name" : "Anatomical Orientation Type",
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
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "module" : "General Series"
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,9092)" : {
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            [
               "Full set of Composite SOP Instances referred to inside the Referenced Image Sequences of this Enhanced MR Image SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "module" : "MR Spectroscopy",
         "name" : "Referenced Image Evidence Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ]
      },
      "(0018,1081)" : {
         "req" : "2C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Low R-R Value",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0008,0051)" : {
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "name" : "Contrast/Bolus Agent Number",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "1",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,0105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         ],
         "module" : "SOP Common",
         "name" : "Mapping Resource"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "Specimen",
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         "entity" : "MR Spectroscopy",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
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
         "entity" : "MR Spectroscopy",
         "req" : "1"
      },
      "(0018,9064)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1C",
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
         ],
         "module" : "MR Spectroscopy",
         "name" : "k-space Filtering",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "req" : "3",
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
         "name" : "SOP Instance Status",
         "module" : "SOP Common"
      },
      "(0018,9126)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "name" : "Volume Localization Sequence",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "A sequence of Items that provide the position of RF excitations used to select a volume of tissue. The selected volume is described by the intersection of the sequence Items.",
            "One or more Items shall be included in this Sequence.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Volume Localization Technique (0018,9054) is other than NONE. May be present if Volume Localization Technique (0018,9054) is other than NONE."
         ]
      },
      "(0010,0213)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Strain Nomenclature",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         ]
      },
      "(0010,1010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study",
         "name" : "Patient's Age"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Time of end of administration.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Stop Time"
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "req" : "2",
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
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "name" : "Universal Entity ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3"
      },
      "(0018,1801)" : {
         "entity" : "Frame of Reference",
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "name" : "Time Source",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied."
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "MR Spectroscopy",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,9066)" : {
         "module" : "MR Spectroscopy",
         "name" : "Number of Zero Fills",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Number of zero fills added to the time domain data before FT. Shall be 0 (zero) if no zero filling performed.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.14.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation of the ordering."
            ],
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.14.1.2"
                  }
               },
               " for further explanation on Zero Fills."
            ],
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Time of start of administration.",
         "name" : "Contrast/Bolus Start Time",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance UID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier for the Study",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "req" : "1",
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
         "entity" : "MR Spectroscopy",
         "module" : "Specimen",
         "name" : "Specimen UID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "module" : "General Series",
         "name" : "Value Type",
         "req" : "1",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1100)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "Patient",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "module" : "Acquisition Context",
         "name" : "Text Value",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "MR Spectroscopy",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "name" : "Time",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0018,1802)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Frame of Reference",
         "req" : "3",
         "name" : "Time Distribution Protocol",
         "module" : "Synchronization"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0040,e011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Retrieve Location UID",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0018,106a)" : {
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "req" : "1",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Synchronization Trigger",
         "module" : "Synchronization"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
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
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "name" : "Retrieve URI",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "name" : "DateTime",
         "module" : "General Series"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Description Label",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Free text description that explains the meaning of the dimension.",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID",
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
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Retrieve AE Title",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0008,0123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
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
         "name" : "Universal Entity ID Type"
      },
      "(300a,012c)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "desc" : "Isocenter coordinates (x,y,z), in mm. Specifies the location of the machine isocenter in the patient-based coordinate system associated with the Frame of Reference. It allows transformation from the equipment-based coordinate system to the patient-based coordinate system.",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Isocenter Position"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0008,0070)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "2",
            "entity" : "Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "module" : "General Equipment",
            "name" : "Manufacturer"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer",
            "req" : "1",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "entity" : "Equipment"
         }
      ],
      "(0040,0555)[<0>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "Acquisition Context",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "module" : "MR Spectroscopy"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Acquisition Context",
         "name" : "Rational Numerator Value"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "name" : "Assigning Facility Sequence",
         "module" : "Patient"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
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
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "module" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "Patient"
      },
      "(0018,9067)" : {
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Describes baseline correction techniques. Shall be NONE if no baseline correction was performed.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "LINEAR_TILT",
                     null
                  ],
                  [
                     "LOCAL_LINEAR_FIT",
                     null
                  ],
                  [
                     "POLYNOMIAL_FIT",
                     null
                  ],
                  [
                     "SINC_DECONVOLUTN",
                     null
                  ],
                  [
                     "TIME_DOMAIN_FIT",
                     null
                  ],
                  [
                     "SPLINE",
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
         "name" : "Baseline Correction",
         "module" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Storage Media File-Set UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "entity" : "Patient",
         "req" : "1C",
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
         "name" : "WADO Retrieval Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
         "module" : "MR Spectroscopy",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "MR Spectroscopy",
         "name" : "Digital Signature UID",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "General Series",
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
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
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2a42563c-d7f6-4749-9a5a-b563109dea18"
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
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,9297)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Water Reference Acquisition",
         "req" : "3",
         "desc" : [
            "Describes the relation to Water Reference data for this instance.",
            {
               "list" : [
                  [
                     "WATER_REFERENCE",
                     null
                  ],
                  [
                     "USED_DISCARDED",
                     null
                  ],
                  [
                     "REFERENCED",
                     null
                  ],
                  [
                     "NONE",
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
                     "linkend" : "sect_C.8.14.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description of enumerated values."
            ]
         ],
         "entity" : "MR Spectroscopy"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "module" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "name" : "Date",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
      "(0008,1250)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "module" : "General Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
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
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0400,0561)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)" : {
         "req" : "3",
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
         "entity" : "MR Spectroscopy",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9237)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "name" : "Referenced Presentation State Sequence",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
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
         ],
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0020,9256)" : {
         "usage" : "C - Required if respiratory synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
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
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "name" : "Respiratory Trigger Delay Threshold",
         "module" : "Respiratory Synchronization"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
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
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Device Serial Number"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "name" : "Study ID",
         "module" : "General Study"
      },
      "(0018,1061)" : {
         "entity" : "Frame of Reference",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "req" : "3",
         "module" : "Synchronization",
         "name" : "Trigger Source or Type",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied."
      },
      "(0010,0040)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "name" : "Patient's Sex"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "req" : "3",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast Flow Rate"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0010,2298)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Person Role",
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
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "entity" : "MR Spectroscopy",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "General Series",
         "name" : "Requested Procedure Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Ethnic Group",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "MR Spectroscopy",
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
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0018,1082)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "req" : "2C",
         "name" : "High R-R Value",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0012,0063)" : {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.12.1",
                                          "xrefstyle" : "select: title"
                                       }
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "el" : "olink"
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
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Name",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
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
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "name" : "Person's Telecom Information"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : [
            "Primary identifier for the patient.",
            {
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
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           }
                        },
                        "."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2",
         "name" : "Patient ID",
         "module" : "Patient"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "name" : "Accession Number",
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "MR Spectroscopy",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "entity" : "MR Spectroscopy",
         "req" : "2",
         "name" : "Contrast/Bolus Ingredient Concentration",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,9063)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "name" : "De-coupling Chemical Shift Reference",
         "module" : "MR Spectroscopy",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The chemical shift in ppm at the de-coupling frequency.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.14.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation of the ordering."
            ],
            "Required if De-coupling (0018,9059) equals YES."
         ]
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "MR Spectroscopy",
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied."
      },
      "(0018,9070)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Cardiac RR Interval Specified",
         "module" : "Cardiac Synchronization"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "module" : "General Series",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0005)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "module" : "SOP Common",
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
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "req" : "1C",
         "name" : "Text Value",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "module" : "Patient",
         "name" : "Type of Instances",
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
         "entity" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0096)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Referring Physician Identification Sequence"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "module" : "MR Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "req" : "1",
            "entity" : "Series"
         }
      ],
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "MR Spectroscopy",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Referenced Segment Number",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Description",
         "desc" : "Container component text description.",
         "req" : "3",
         "entity" : "MR Spectroscopy"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Patient ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0012,0083)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Consent for Clinical Trial Use Sequence",
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
         "entity" : "Study",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "module" : "MR Spectroscopy"
      },
      "(0020,9222)" : {
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Dimension Index Sequence",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "name" : "Home Community ID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0008,9121)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced Raw Data Sequence",
         "req" : "3",
         "desc" : [
            "The Raw data that was used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The items of in this Sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images and spectra in different instances have been reconstructed from the same raw data."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5c04e675-4740-4a6b-8cb6-cf23f206491b"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "MR Spectroscopy",
         "name" : "Digital Signature UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
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
         "module" : "General Series"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Study"
      },
      "(0018,9004)" : [
         {
            "name" : "Content Qualification",
            "module" : "MR Spectroscopy",
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
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.13.2.1.1"
                     }
                  },
                  " for further explanation."
               ],
               "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted), may be present otherwise."
            ],
            "entity" : "MR Spectroscopy",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-102",
               "table_C.8-83"
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
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
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.13.2.1.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "MR Spectroscopy",
            "req" : "3"
         }
      ],
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1190)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "module" : "MR Spectroscopy"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
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
         "name" : "Universal Entity ID Type"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Specimen",
         "name" : "Concept Name Code Sequence"
      },
      "(0018,9073)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Acquisition Duration",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         ]
      },
      "(0100,0420)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
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
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(0008,0201)" : {
         "entity" : "MR Spectroscopy",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
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
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0250)" : {
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number"
      },
      "(0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0012,0051)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "req" : "3",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Referenced Series Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1190)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "MR Spectroscopy",
         "name" : "Retrieve URL",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
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
         "req" : "1C"
      },
      "(0040,0512)" : {
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
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "module" : "Specimen",
         "name" : "Container Identifier",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
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
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
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
         "name" : "Referenced Segment Number",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "usage" : "M",
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
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "name" : "Rational Denominator Value",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0028,0109)" : {
         "name" : "Largest Pixel Value in Series",
         "module" : "General Series",
         "req" : "3",
         "desc" : "The maximum value of all images in this Series.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "module" : "Specimen",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Code Sequence"
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
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "name" : "Cardiac Framing Type",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0018,0012)" : {
         "name" : "Contrast/Bolus Agent Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Strain Source",
         "req" : "1",
         "entity" : "Patient",
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
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "module" : "MR Spectroscopy",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "entity" : "MR Spectroscopy",
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "MR Spectroscopy",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "module" : "Specimen",
         "name" : "Specimen Detailed Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "module" : "MR Spectroscopy",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "MR Spectroscopy",
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common"
      },
      "(5600,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-106"
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : [
            "A data stream of the signal intensities that comprise the spectroscopic data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.14.4.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "MR Spectroscopy Data",
         "name" : "Spectroscopy Data"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "module" : "Acquisition Context",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0518)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "module" : "Specimen",
         "name" : "Container Type Code Sequence"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
            }
         ],
         "req" : "3",
         "name" : "Patient Identity Removed",
         "module" : "Patient"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "MR Spectroscopy",
         "name" : "Data Elements Signed",
         "entity" : "MR Spectroscopy",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0008)" : {
         "name" : "Image Type",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : [
            "Spectroscopy data characteristics. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.14.5.1.1"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
         "name" : "Private Creator Reference",
         "req" : "1",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "MR Spectroscopy",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Time"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Sequence",
         "module" : "Patient"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "Specimen",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0018,9126)[<0>](0018,9106)" : {
         "name" : "Mid Slab Position",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The x, y, and z coordinates of the mid-point of the slab in mm. See ",
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
            "table_C.8-102"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "2",
         "module" : "Patient",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0020,9222)[<0>](0020,9167)" : {
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
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "name" : "Functional Group Pointer",
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0008,114a)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "module" : "MR Spectroscopy",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0515)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "module" : "Specimen",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "MR Spectroscopy",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "3"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "MR Spectroscopy",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "MR Spectroscopy",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0028,9235)" : {
         "name" : "Signal Domain Rows",
         "module" : "MR Spectroscopy Data",
         "desc" : [
            "Domain of represented signal in row direction.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "FREQUENCY",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ]
               ]
            },
            "Required if Data Point Rows (0028,9001) has a value of more than 1."
         ],
         "req" : "1C",
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-106"
         ]
      },
      "(0008,0014)" : {
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      " (0010,0027) " : {
         "module" : "Patient",
         "name" : "Group of Patients Identification Sequence",
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
         "entity" : "Patient",
         "req" : "\n                  3 ",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0018,9011)" : {
         "mod_tables" : [
            "table_C.8-103"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL. May be present otherwise.",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Echo Pulse Sequence (0018,9008) equals SPIN or BOTH."
         ],
         "module" : "MR Spectroscopy Pulse Sequence",
         "name" : "Multiple Spin Echo"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "UID"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "name" : "Retrieve AE Title",
         "module" : "MR Spectroscopy"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
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
      "(0008,0117)" : {
         "module" : "SOP Common",
         "name" : "Context UID",
         "req" : "3",
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
         "entity" : "MR Spectroscopy",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "MR Spectroscopy"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Patient Comments",
         "module" : "Patient"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "MR Spectroscopy"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "MR Spectroscopy",
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
                              "xrefstyle" : "select: labelnumber",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "module" : "General Series",
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Breed Description",
         "module" : "Patient",
         "req" : "2C",
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
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "entity" : "MR Spectroscopy",
         "req" : "1",
         "module" : "MR Spectroscopy",
         "name" : "Series Instance UID"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "module" : "MR Spectroscopy",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0018,9169)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Cardiac Beat Rejection Technique",
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
         "req" : "1C",
         "entity" : "MR Spectroscopy"
      },
      "(0010,0026)[<0>](0010,0021)" : {
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
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "MR Spectroscopy",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "MR Spectroscopy",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,9126)[<0>](0018,9105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "name" : "Slab Orientation",
         "module" : "MR Spectroscopy",
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "The direction cosines of a normal vector perpendicular to the selection plane with respect to the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "General Series",
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
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,9059)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "module" : "MR Spectroscopy",
         "name" : "De-coupling",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "desc" : [
            "Indicates whether de-coupling was active.",
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
         ]
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1C",
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
         "module" : "Clinical Trial Subject"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
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
                  "\n                      ",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "MR Spectroscopy",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "entity" : "MR Spectroscopy",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0118)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "entity" : "MR Spectroscopy",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
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
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0008,009d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Consulting Physician Identification Sequence",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,2299)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "req" : "1",
         "entity" : "MR Spectroscopy",
         "name" : "Encrypted Content",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1084)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Rejected",
         "req" : "2C",
         "entity" : "MR Spectroscopy",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "req" : "3",
         "name" : "Study Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         "entity" : "Patient"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "entity" : "MR Spectroscopy",
         "req" : "1C",
         "name" : "Dimension Index Private Creator",
         "module" : "Multi-frame Dimension"
      },
      "(0018,9054)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102"
         ],
         "req" : "1C",
         "desc" : [
            "Name of volume localization technique used. Shall be \"NONE\" if no spatial localization was performed.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "ILOPS",
                     null
                  ],
                  [
                     "ISIS",
                     null
                  ],
                  [
                     "PRIME",
                     null
                  ],
                  [
                     "PRESS",
                     null
                  ],
                  [
                     "SLIM",
                     null
                  ],
                  [
                     "SLOOP",
                     null
                  ],
                  [
                     "STEAM",
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
         "entity" : "MR Spectroscopy",
         "module" : "MR Spectroscopy",
         "name" : "Volume Localization Technique"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "MR Spectroscopy",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "entity" : "MR Spectroscopy",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-102",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
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
      "Can't handle processing of table_C.7.6.16-1 in MR Spectroscopy:Multi-frame Functional Groups of table_A.36-3",
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
      "Can't handle table_8.8-1 (in table_C.8-102:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-102:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-102:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-102:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-102:table_C.8-83:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-102 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
