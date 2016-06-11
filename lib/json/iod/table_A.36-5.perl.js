var data = {
   "tags" : {
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Retrieve Location UID",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "entity" : "Image",
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
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0012,0010)" : {
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient"
      },
      "(0008,9237)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ]
      },
      "(0018,9029)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Oversampling Phase",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence"
      },
      "(0008,0020)" : {
         "entity" : "Study",
         "name" : "Study Date",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "Date the Study started."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
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
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Concept Code Sequence"
      },
      "(0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "UID",
         "entity" : "Image"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Authorization Equipment Certification Number"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "3",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Smallest Image Pixel Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "entity" : "Patient",
         "name" : "Patient Identity Removed",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
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
         "entity" : "Image",
         "name" : "Date",
         "module" : "Acquisition Context",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Specimen UID"
      },
      "(0028,0011)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "name" : "Columns",
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0012,0021)" : {
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0018,9034)" : {
         "entity" : "Image",
         "name" : "Rectilinear Phase Encode Reordering",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Rectilinear phase encode reordering.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Geometry of k-Space Traversal (0018,9032) equals RECTILINEAR."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,9171)" : {
         "entity" : "Image",
         "name" : "Respiratory Signal Source",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "req" : "1C",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Respiratory Motion Compensation Technique (0018,9170) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Respiratory Motion Compensation Technique (0018,9170equals other than NONE."
         ]
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date"
      },
      "(0018,9094)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Coverage of k-Space in the ky-kz plane.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and MR Acquisition Type (0018,0023) equals 3D.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and MR Acquisition Type (0018,0023) equals 3D."
         ],
         "name" : "Coverage of k-Space",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "name" : "Contrast/Bolus Volume",
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent."
      },
      "(0018,1083)" : {
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
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "entity" : "Image",
         "name" : "Device Serial Number",
         "module" : "Device",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's serial number of the device"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "name" : "Institution Address",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,9032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
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
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence"
      },
      "(0008,0096)" : {
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0020,0052)" : {
         "entity" : "Frame of Reference",
         "name" : "Frame of Reference UID",
         "module" : "Frame of Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "req" : "1",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
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
      "(fffa,fffa)[<0>](0400,0105)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Digital Signature DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
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
         "usage" : "M",
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "entity" : "Series"
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
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
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0018,0088)" : {
         "entity" : "Image",
         "name" : "Spacing between Slices",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "3",
         "desc" : "Value of the prescribed spacing to be applied between the slices in a volume that is to be acquired. The spacing in mm is defined as the center-to-center distance of adjacent slices."
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Universal Entity ID Type"
      },
      "(0008,9207)" : {
         "req" : "1",
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
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,106c)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied.",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Channel"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Numeric Value",
         "entity" : "Series"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "name" : "Container Identifier",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
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
         "req" : "3"
      },
      "(0100,0410)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
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
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0018,9070)" : {
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "name" : "Cardiac RR Interval Specified",
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
         "req" : "1C"
      },
      "(0018,9174)" : {
         "entity" : "Image",
         "name" : "Applicable Safety Standard Agency",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1C",
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
         ]
      },
      "(0100,0420)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Image",
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "name" : "Institution Address",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0018,1086)" : {
         "entity" : "Image",
         "name" : "Skip Beats",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia."
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "MAC Algorithm",
         "entity" : "Image",
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
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Storage Media File-Set ID",
         "entity" : "Image"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Number",
         "entity" : "Series",
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "name" : "Performing Physician's Name",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0008,1062)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "Image",
         "name" : "Contrast Administration Profile Sequence",
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,1164)" : {
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "name" : "Frame Extraction Sequence",
         "entity" : "Image"
      },
      "(0028,0302)" : {
         "entity" : "Image",
         "name" : "Recognizable Visual Features",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "3",
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
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "req" : "1",
            "module" : "MR Series",
            "usage" : "M",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Segment Number"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0028,0004)" : [
         {
            "req" : "1",
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
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Image Pixel"
         },
         {
            "module" : "Enhanced MR Image",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Photometric Interpretation",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. Enumerated Values are specified in the IOD that invokes this Module. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for definition of this term."
            ],
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1"
         }
      ],
      "(0040,0251)" : {
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
      "(0008,9092)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced Series Sequence",
         "entity" : "Image"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Rows"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0040,0518)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Container Type Code Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "name" : "Dimension Organization UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "req" : "1",
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
         ]
      },
      "(0018,9008)" : {
         "entity" : "Image",
         "name" : "Echo Pulse Sequence",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0008,1010)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Station Name",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Simple Frame List",
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced Digital Signature Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         ]
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "desc" : "Unique identifier of the Series."
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Text Value"
      },
      "(0008,1062)[<0>](0040,1101)" : {
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
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Time"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
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
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "1",
            "module" : "General Series",
            "usage" : "M",
            "entity" : "Series",
            "name" : "Modality"
         },
         {
            "usage" : "M",
            "module" : "MR Series",
            "name" : "Modality",
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
            "req" : "1",
            "mod_tables" : [
               "table_C.8-101"
            ]
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Denominator Value",
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
         "req" : "1C"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(0050,0010)[<0>](0050,0018)" : {
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
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Volume",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Time of Last Calibration",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0260)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Calculated Frame List",
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction"
      },
      "(0018,9015)" : {
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Time of Flight Contrast",
         "desc" : [
            "Time of Flight contrast is created by the inflow of blood in the saturated plane.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Person Name",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1",
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
      "(0040,0560)[<0>](0008,2228)" : {
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "req" : "3",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Primary Anatomic Structure Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
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
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Segment Number"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Retrieve URI"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Thickness in mm of container component",
         "name" : "Container Component Thickness",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
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
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "UID"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
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
         ]
      },
      "(0018,9064)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "k-space Filtering",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
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
         ]
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "name" : "Acquisition Time Synchronized",
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ]
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "name" : "Instance Coercion DateTime",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "3",
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
      "(0040,0560)" : {
         "name" : "Specimen Description Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ]
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "entity" : "Image",
         "name" : "Columns",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of columns in the image"
      },
      "(0008,0016)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0020,9250)" : {
         "entity" : "Image",
         "name" : "Respiratory Trigger Type",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "req" : "1C",
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
         ]
      },
      "(0018,1064)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
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
         "name" : "Cardiac Framing Type",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0028,0101)" : [
         {
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "module" : "Image Pixel",
            "name" : "Bits Stored",
            "entity" : "Image"
         },
         {
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. For Enumerated Values See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1",
            "module" : "Enhanced MR Image",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Bits Stored"
         }
      ],
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "entity" : "Image",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "name" : "UID",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0028,0103)" : [
         {
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
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "module" : "Image Pixel",
            "name" : "Pixel Representation",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "module" : "Enhanced MR Image",
            "name" : "Pixel Representation",
            "entity" : "Image",
            "desc" : [
               "Data representation of the pixel samples. Each sample shall have the same pixel representation. For Enumerated Values See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.1.1.2"
                  }
               }
            ],
            "req" : "1",
            "mod_tables" : [
               "table_C.8-79"
            ]
         }
      ],
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient."
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "name" : "Text Value",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0018,9005)" : {
         "desc" : [
            "Name of the pulse sequence for annotation purposes. Potentially vendor-specific name.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Pulse Sequence Name"
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "entity" : "Image"
      },
      "(0018,1802)" : {
         "name" : "Time Distribution Protocol",
         "entity" : "Frame of Reference",
         "usage" : "C - Required if time synchronization was applied.",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3",
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
      "(0008,9209)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Acquisition Contrast",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,1201)" : {
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
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC Algorithm",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
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
         "req" : "1"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0040,0513)" : {
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Retrieve AE Title",
         "entity" : "Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "name" : "Accession Number",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "name" : "DateTime",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
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
         "entity" : "Series",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Birth Date"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
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
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,051a)" : {
         "desc" : "Description of the container.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Container Description"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
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
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1",
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
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Other Patient Names"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Other Patient IDs Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
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
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ]
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "name" : "Series Time",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : "Time the Series started."
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Data Elements Signed",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0018,9100)" : {
         "desc" : [
            "Nucleus that is resonant at the transmitter frequency.",
            {
               "type" : "variablelist",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Resonant Nucleus"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "name" : "Institution Name",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0082)" : {
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
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "entity" : "Series",
         "name" : "Operators' Name",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0012,0072)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0018,1084)" : {
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Rejected",
         "entity" : "Image",
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
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
                     "Spatial Multi-frame image of parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of parallel-plane 3D volume sets."
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "3",
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Dimension Organization Type"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
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
         "req" : "1C"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "entity" : "Image",
         "name" : "Digital Signature UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0028,2000)" : {
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
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
            "table_C.7-11b"
         ],
         "req" : "3"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Series Instance UID"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0012,0083)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence"
      },
      "(0018,9024)" : {
         "desc" : [
            "Saturation recovery pulse sequence.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Saturation Recovery"
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Image",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Weight"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
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
         "entity" : "Image",
         "name" : "Inter-Marker Distance",
         "module" : "Device",
         "usage" : "U"
      },
      "(0020,9221)" : {
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization Sequence",
         "entity" : "Image",
         "desc" : [
            [
               "Sequence that lists the Dimension Organization UIDs referenced by the containing SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.17.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Signature",
         "entity" : "Image",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,9250)" : {
         "name" : "Arterial Spin Labeling Contrast",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Arterial Spin Labeling contrast technique.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 3 is ASL. May be present otherwise."
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0028,0006)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1C",
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
            "entity" : "Image",
            "name" : "Planar Configuration",
            "module" : "Image Pixel",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "name" : "Planar Configuration",
            "module" : "Enhanced MR Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.1.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         }
      ],
      "(0008,9205)" : {
         "name" : "Pixel Presentation",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "req" : "1",
         "desc" : [
            "Indication of the presence or absence of color information that may be used during rendering. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.16.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for a description and Enumerated Values."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "entity" : "Image",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "req" : "1",
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
         "name" : "Referenced SOP Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M"
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
         "entity" : "Image",
         "name" : "Value Type",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Retrieve AE Title",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
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
         "usage" : "M",
         "entity" : "Series",
         "name" : "UID"
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "desc" : [
            "View Modifier.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "View Modifier Code Sequence"
      },
      "(0008,9237)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Study Instance UID",
         "entity" : "Image"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "entity" : "Image",
         "name" : "Storage Media File-Set ID",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0018,9012)" : {
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Multi-planar Excitation",
         "desc" : [
            "Technique that simultaneously excites several volumes.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
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
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "req" : "1C",
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
                     "linkend" : "sect_C.12.1.1.4.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
         "entity" : "Patient",
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Bits Allocated"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "name" : "Specimen Identifier",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Floating Point Value",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0008,1111)" : [
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series",
            "usage" : "M",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "req" : "3",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ]
         },
         {
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-101"
            ],
            "usage" : "M",
            "module" : "MR Series",
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series"
         }
      ],
      "(0020,0200)" : {
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
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "module" : "Synchronization",
         "name" : "Synchronization Frame of Reference UID",
         "entity" : "Frame of Reference"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "entity" : "Image",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "req" : "1C",
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
         "name" : "Referenced SOP Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0012,0071)" : {
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ]
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Local Namespace Entity ID",
         "entity" : "Image",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "name" : "Contrast/Bolus Stop Time",
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Time of end of administration."
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
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,0008)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Image Type",
         "entity" : "Image",
         "desc" : [
            "Image characteristics. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.1"
               },
               "el" : "xref"
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient Opaque",
         "entity" : "Image",
         "desc" : [
            "Absorption of the ingredient greater than the absorption of water (tissue).",
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Image",
         "name" : "Retrieve AE Title",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Referenced Frame Numbers",
         "entity" : "Image",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0012,0020)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ]
      },
      "(0028,2114)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Lossy Image Compression Method",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "name" : "Retrieve Location UID",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Study Instance UID"
      },
      "(0054,0500)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  }
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
         "name" : "Slice Progression Direction",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
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
         "name" : "Referenced SOP Instance MAC Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0018,9170)" : {
         "name" : "Respiratory Motion Compensation Technique",
         "entity" : "Image",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "module" : "Respiratory Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Time",
         "entity" : "Series"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "req" : "2C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Laterality",
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Numeric Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "entity" : "Image",
         "name" : "Issuer of the Specimen Identifier Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ]
      },
      "(0012,0031)" : {
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site Name",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "name" : "Contrast Flow Duration",
         "entity" : "Image",
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Encrypted Content"
      },
      "(0054,0220)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_10-25"
         ],
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image",
         "name" : "View Code Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0018,1081)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "2C",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "name" : "Low R-R Value",
         "entity" : "Image",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "module" : "Cardiac Synchronization"
      },
      "(0040,0515)" : {
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "name" : "Photometric Interpretation",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
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
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Coding Scheme Designator"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "1C",
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Digital Signature UID",
         "entity" : "Image",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0028,2112)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Lossy Image Compression Ratio",
         "entity" : "Image",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if Lossy Images Compression (0028,2110) is \"01\"."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79"
         ]
      },
      "(0008,113a)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced Waveform Sequence",
         "entity" : "Image",
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         "req" : "3"
      },
      "(fffa,fffa)" : {
         "entity" : "Image",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0018,9014)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Phase Contrast Pulse sequence is a pulse sequence in which the flowing spins are velocity encoded in phase.",
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
         "name" : "Phase Contrast",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence"
      },
      "(0018,0012)[<0>](0018,0014)" : {
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Administration Route Sequence",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0018,1082)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "2C",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "entity" : "Image",
         "name" : "High R-R Value",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Image",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the device"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
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
         "name" : "Container Component Material",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0012,0040)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
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
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "UID",
         "entity" : "Image"
      },
      "(0008,0070)" : [
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "2",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "usage" : "M",
            "entity" : "Equipment",
            "name" : "Manufacturer"
         },
         {
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer",
            "entity" : "Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1"
         }
      ],
      "(0088,0200)[<0>](0028,0002)" : {
         "entity" : "Image",
         "name" : "Samples per Pixel",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1",
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
         ]
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
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Patient Position",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Numeric Value",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person's Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0018,9085)" : {
         "entity" : "Image",
         "name" : "Cardiac Signal Source",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
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
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0020,4000)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "3",
         "desc" : "User-defined comments about the image.",
         "entity" : "Image",
         "name" : "Image Comments",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0018,9073)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
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
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,1048)" : {
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) of Record",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0020,0013)" : {
         "entity" : "Image",
         "name" : "Instance Number",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0028,1101)" : {
         "req" : "1C",
         "mod_tables" : [
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
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0028,0034)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image"
      },
      "(0010,0020)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient.",
         "name" : "Patient ID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Referenced Segment Number",
         "entity" : "Image",
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
      "(0010,0024)[<0>](0040,0032)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "name" : "Time Range",
         "entity" : "Image",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0018,1801)" : {
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied.",
         "module" : "Synchronization",
         "name" : "Time Source",
         "entity" : "Frame of Reference"
      },
      "(0010,2299)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Responsible Organization",
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(0018,0023)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Identification of spatial data encoding scheme.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "MR Acquisition Type",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC",
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
                                       }
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Storage Media File-Set UID",
         "entity" : "Image"
      },
      "(0028,0301)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Burned In Annotation",
         "entity" : "Image",
         "desc" : [
            "Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "entity" : "Image",
         "name" : "Container Component Description",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Container component text description."
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "req" : "2",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Specimen Preparation Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0018,9004)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted), may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Content Qualification",
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the container component.",
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Specimen Detailed Description",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         ]
      },
      "(0018,9018)" : {
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Echo Planar Pulse Sequence",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
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
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "entity" : "Series"
      },
      "(0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3",
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Largest Image Pixel Value"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Person Name"
      },
      "(0020,9222)[<0>](0020,9421)" : {
         "name" : "Dimension Description Label",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "3",
         "desc" : "Free text description that explains the meaning of the dimension."
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
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
         "entity" : "Image",
         "name" : "High Bit",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
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
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "entity" : "Image",
         "usage" : "M",
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
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
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
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
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
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0028,0109)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The maximum value of all images in this Series.",
         "entity" : "Series",
         "name" : "Largest Pixel Value in Series",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Data Elements Signed",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "entity" : "Image",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "name" : "Retrieve AE Title",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Value Type",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Data Elements Signed"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "entity" : "Image",
         "name" : "Study Instance UID",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study"
      },
      "(0018,9092)" : {
         "desc" : [
            "Velocity encoding directions used for acquisition.",
            "Required if Phase Contrast (0018,9014) equals YES.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "entity" : "Image",
         "name" : "Velocity Encoding Acquisition Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0008,9208)" : {
         "desc" : [
            [
               "Representation of complex data of frames in the SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.3.1.1"
                  },
                  "el" : "xref"
               },
               " for a description and Defined Terms."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-84"
         ],
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Complex Image Component"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "req" : "1C",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
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
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ]
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
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1C",
         "module" : "Multi-frame Dimension",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Functional Group Pointer"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Image",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "entity" : "Image",
         "name" : "Container Component Diameter",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Diameter in mm of container component for cylindrical or circular components."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "UID",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
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
                     ]
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
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry."
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Referenced Study Sequence",
         "entity" : "Series"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Occupation"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0028,0108)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series.",
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "2C",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Image",
         "name" : "Device Diameter Units",
         "module" : "Device",
         "usage" : "U"
      },
      "(0018,1050)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
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
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,9017)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Steady State Pulse Sequence",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
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
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person's Address"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "name" : "Distribution Type",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "type" : "variablelist",
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
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Rational Numerator Value",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "name" : "Pixel Data",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0020,9256)" : {
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
         "req" : "1C",
         "module" : "Respiratory Synchronization",
         "usage" : "C - Required if respiratory synchronization was applied.",
         "entity" : "Image",
         "name" : "Respiratory Trigger Delay Threshold"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Series Instance UID",
         "entity" : "Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0028,1102)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Image Pixel"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Text Value",
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
         "req" : "1C"
      },
      "(0028,0002)" : [
         {
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
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Samples per Pixel"
         },
         {
            "name" : "Samples per Pixel",
            "entity" : "Image",
            "usage" : "M",
            "module" : "Enhanced MR Image",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1",
            "desc" : [
               "Number of samples (planes) in this image. For Enumerated Values See ",
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
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image",
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Date of Last Calibration"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Ethnic group or race of the patient.",
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,0080)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0018,9033)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence",
         "name" : "Segmented k-Space Traversal",
         "entity" : "Image",
         "desc" : [
            "Segmented k-Space traversal. If Geometry of k-Space Traversal is rectilinear, multiple lines can be acquired at one time. If Geometry of k-Space Traversal is spiral or radial, paths can be interleaved and acquired at one time.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C"
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "name" : "Admission ID",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0018,0087)" : {
         "desc" : [
            "Nominal field strength of the MR Magnet, in Tesla.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.4.4\" (Legacy Converted). May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Magnetic Field Strength",
         "entity" : "Image"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "entity" : "Image",
         "name" : "Signature",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
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
      "(0028,2110)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Lossy Image Compression",
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
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C"
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
               ]
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Specific Character Set",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Institution Code Sequence",
         "entity" : "Series",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
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
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,002a)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Acquisition DateTime",
         "entity" : "Image",
         "desc" : [
            "The date and time that the acquisition of data started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
                     ],
                     "el" : "para"
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
         "req" : "1C"
      },
      "(0018,1803)" : {
         "usage" : "C - Required if time synchronization was applied.",
         "module" : "Synchronization",
         "name" : "NTP Source Address",
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0018,1030)" : {
         "req" : "3",
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
         "name" : "Protocol Name",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,9093)" : {
         "name" : "Number of k-Space Trajectories",
         "entity" : "Image",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Number of interleaves or shots.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0008,1200)" : {
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "entity" : "Image",
         "name" : "Retrieve Location UID",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Numeric Value",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name",
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
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Planar Configuration",
         "entity" : "Image",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,9121)" : {
         "desc" : [
            "The Raw data that was used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The items of in this sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images and spectra in different instances have been reconstructed from the same raw data."
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
            "table_C.8-83"
         ],
         "req" : "3",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Raw Data Sequence"
      },
      "(0008,9092)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced Image Evidence Sequence",
         "entity" : "Image",
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
            "One or more Items shall be included in this sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ]
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Number",
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Length",
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
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
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
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Image",
         "name" : "Data Elements Signed",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0018,9092)[<0>](0018,9090)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise.",
         "module" : "MR Pulse Sequence",
         "name" : "Velocity Encoding Direction",
         "entity" : "Image",
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
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Digital Signature UID"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Consent for Distribution Flag"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Procedure Code Sequence",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Issuer of the Container Identifier Sequence",
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "req" : "1",
            "usage" : "M",
            "module" : "General Series",
            "name" : "Referenced SOP Instance UID",
            "entity" : "Series"
         },
         {
            "entity" : "Series",
            "name" : "Referenced SOP Instance UID",
            "module" : "MR Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-101",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance."
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Value Type"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
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
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "entity" : "Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Container Component Type Code Sequence"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Signature",
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "usage" : "M",
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
         ]
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
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
                     "el" : "orderedlist",
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
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "name" : "MAC",
         "module" : "Enhanced MR Image",
         "usage" : "M",
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
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,9206)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Volumetric Properties",
         "entity" : "Image",
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.2"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-131"
         ],
         "req" : "1"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
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
         ]
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "SOP Instance UID",
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
         "req" : "1"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Universal Entity ID"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "name" : "Responsible Person Role",
         "module" : "Patient",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ]
      },
      "(0020,9222)[<0>](0020,9165)" : {
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
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Pointer",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
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
      "(0040,0520)[<0>](0050,001c)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Container Component Length",
         "entity" : "Image",
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0018,9175)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "3",
         "desc" : "Name and Version of the applicable standard.",
         "entity" : "Image",
         "name" : "Applicable Safety Standard Description",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "entity" : "Image"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
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
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,9169)" : {
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "entity" : "Image",
         "name" : "Cardiac Beat Rejection Technique",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "type" : "variablelist",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C"
      },
      "(0028,0010)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "name" : "Rows",
         "module" : "Image Pixel",
         "usage" : "M"
      },
      "(0018,1020)" : [
         {
            "module" : "General Equipment",
            "usage" : "M",
            "entity" : "Equipment",
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
            "mod_tables" : [
               "table_C.7-8"
            ],
            "req" : "3"
         },
         {
            "module" : "Enhanced General Equipment",
            "usage" : "M",
            "entity" : "Equipment",
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
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1"
         }
      ],
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
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
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Storage Media File-Set ID",
         "entity" : "Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "entity" : "Image",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "entity" : "Image",
         "name" : "Manufacturer",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Manufacturer of the container component."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0020,1040)" : {
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "module" : "Frame of Reference",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-6"
         ],
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
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID."
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "type" : "variablelist",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2203)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,1090)" : [
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "entity" : "Equipment",
            "usage" : "M",
            "module" : "General Equipment"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "entity" : "Equipment",
            "name" : "Manufacturer's Model Name",
            "module" : "Enhanced General Equipment",
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "name" : "Requested Procedure Description",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0012,0050)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study"
      },
      "(0008,1250)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
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
                                 "el" : "para",
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                 "el" : "para",
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "name" : "Related Series Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,1000)" : [
         {
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
            "req" : "3",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "usage" : "M",
            "entity" : "Equipment",
            "name" : "Device Serial Number"
         },
         {
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "name" : "Device Serial Number",
            "entity" : "Equipment"
         }
      ],
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
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
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image",
         "name" : "Institutional Department Name",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,0102)" : [
         {
            "module" : "Image Pixel",
            "usage" : "M",
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
               "table_C.7-11b"
            ]
         },
         {
            "entity" : "Image",
            "name" : "High Bit",
            "module" : "Enhanced MR Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101)."
         }
      ],
      "(0010,0024)[<0>](0040,0039)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "name" : "Multi-frame Source SOP Instance UID",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence."
      },
      "(0028,1103)" : {
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Retrieve AE Title",
         "entity" : "Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
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
         ]
      },
      "(0020,9172)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen"
      },
      "(0010,2210)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "entity" : "Series",
         "name" : "Clinical Trial Coordinating Center Name",
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
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Concept Code Sequence",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C"
      },
      "(0018,9011)" : {
         "mod_tables" : [
            "table_C.8-87"
         ],
         "req" : "1C",
         "desc" : [
            "Multiple Spin Echo category of pulse sequence used to collect different lines in k-space for a single frame.",
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
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Echo Pulse Sequence (0018,9008) equals SPIN or BOTH.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Echo Pulse sequence (0018,9008) equals SPIN or BOTH."
         ],
         "entity" : "Image",
         "name" : "Multiple Spin Echo",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1052)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0088,0200)" : {
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79"
         ],
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Icon Image Sequence"
      },
      "(0040,0556)" : {
         "desc" : "Free-text description of the image-acquisition context.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Acquisition Context Description",
         "entity" : "Image"
      },
      "(0018,0012)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : [
            "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "User-supplied identifier for the device",
         "entity" : "Image",
         "name" : "Device ID",
         "module" : "Device",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
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
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Universal Entity ID Type"
      },
      "(0018,1061)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "entity" : "Frame of Reference",
         "name" : "Trigger Source or Type",
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied."
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0028,1201)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Concept Name Code Sequence",
         "entity" : "Image"
      },
      "(0018,9172)" : {
         "desc" : [
            "Applied technique to reduce bulk or other physiology motion artifacts.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "req" : "1C",
         "module" : "Bulk Motion Synchronization",
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "entity" : "Image",
         "name" : "Bulk Motion Compensation Technique"
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
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "name" : "Institution Name",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Referring Physician's Name"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "entity" : "Series",
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "entity" : "Image",
         "name" : "Data Elements Signed",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "name" : "Green Palette Color Lookup Table Descriptor",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Bits Stored",
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ]
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Container Identifier",
         "entity" : "Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0245)" : {
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "Time on which the Performed Procedure Step started."
      },
      "(0010,0032)" : {
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Birth Time"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step Description",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0050,0010)" : {
         "module" : "Device",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Device Sequence",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Image",
         "name" : "Specimen Type Code Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0040,0280)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "name" : "Comments on the Performed Procedure Step",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0018,1008)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
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
         ]
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
         "req" : "1",
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
         "entity" : "Image",
         "name" : "Pixel Representation",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "req" : "1",
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
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "entity" : "Image",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Contribution Description"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Retrieve Location UID",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ],
         "req" : "1"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "desc" : "Further description in free form text describing the device.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "name" : "Device Description",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Date",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Specimen Short Description",
         "entity" : "Image"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "entity" : "Image",
         "name" : "Dimension Index Private Creator",
         "module" : "Multi-frame Dimension",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,9154)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Source Image Evidence Sequence",
         "entity" : "Image",
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
            "One or more Items shall be included in this sequence.",
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "1C"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "entity" : "Image",
         "name" : "Contrast Flow Rate",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present."
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Width in mm of container component."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
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
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Sex",
         "entity" : "Patient"
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
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "entity" : "Image"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Storage Media File-Set UID",
         "entity" : "Image"
      },
      "(0008,9237)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "desc" : [
            "References to Presentation State instances acquired in conjunction with this instance.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May only be used to reference Presentation States belonging to the acquired data and not to reference Presentation States generated subsequently such as during interpretation."
                     ]
                  },
                  "\n                  "
               ]
            },
            "One or more Items shall be included in this sequence.",
            "Required if Presentation State is generated during acquisition, shall not be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Referenced Presentation State Sequence",
         "module" : "Enhanced MR Image",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,1200)" : {
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Date of Last Calibration",
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
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "entity" : "Image",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "mod_tables" : [
            "table_C.8-79",
            "table_C.7-11b"
         ],
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "ICC Profile",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Time",
         "entity" : "Study"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0038,0062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "name" : "Service Episode Description",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Universal Entity ID Type",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
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
                     "el" : "para",
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
         "name" : "Certified Timestamp Type",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Address",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Frame Number"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "usage" : "C - Required if contrast media were applied.",
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Start Time",
         "entity" : "Image",
         "desc" : "Time of start of administration.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
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
         "name" : "Device Diameter",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Device"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "name" : "Type of Patient ID",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
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
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Time",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0018,0015)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Body Part Examined",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Digital Signature UID",
         "entity" : "Image"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Concentration"
      },
      "(0040,0555)" : {
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "2",
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Acquisition Context Sequence"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Acquisition Context",
         "name" : "Rational Denominator Value",
         "entity" : "Image"
      },
      "(7fe0,0010)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Pixel Data"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
         "module" : "General Series",
         "name" : "Requested Procedure ID",
         "entity" : "Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
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
      "(2050,0020)" : {
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
         "mod_tables" : [
            "table_C.8-79"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Presentation LUT Shape",
         "entity" : "Image"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0100,0424)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "entity" : "Image",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0010,1010)" : {
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Age",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "entity" : "Image",
         "name" : "Container Component ID",
         "module" : "Specimen",
         "usage" : "C - Required if Imaging Subject is a specimen"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Organization UID",
         "entity" : "Image",
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
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
         "usage" : "M",
         "entity" : "Series",
         "name" : "DateTime"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "3",
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
         ]
      },
      "(0018,106a)" : {
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied.",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Trigger",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "module" : "Enhanced Contrast/Bolus",
         "usage" : "C - Required if contrast media were applied.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "req" : "2",
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this sequence."
         ]
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Floating Point Value"
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Study Instance UID",
         "entity" : "Image",
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3"
         ]
      },
      "(0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study Description"
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0020,0012)" : {
         "desc" : [
            "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This number is not required to be unique across SOP Instances in a series. See also the description of the Referenced Raw Data Sequence (0008,9121)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83"
         ],
         "req" : "3",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Acquisition Number"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Referenced Digital Signature Sequence",
         "entity" : "Image",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
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
      "(0040,0250)" : {
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification",
         "entity" : "Image",
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
         "req" : "1"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "entity" : "Image",
         "name" : "Manufacturer",
         "module" : "Device",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer of the device"
      },
      "(0018,9025)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-87"
         ],
         "desc" : [
            "Spectrally Selected Suppression.",
            {
               "title" : "Defined Terms:",
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
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Spectrally Selected Suppression",
         "module" : "MR Pulse Sequence",
         "usage" : "C - Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
         "name" : "Universal Entity ID Type",
         "entity" : "Study"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "req" : "1C",
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
         ]
      },
      "(0008,0050)" : {
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Accession Number"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0010,0021)" : {
         "req" : "3",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0520)" : {
         "name" : "Container Component Sequence",
         "entity" : "Image",
         "usage" : "C - Required if Imaging Subject is a specimen",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Image",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Name"
      },
      "(0020,9222)" : {
         "usage" : "M",
         "module" : "Multi-frame Dimension",
         "name" : "Dimension Index Sequence",
         "entity" : "Image",
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
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
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Person's Address"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID."
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study ID",
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0010,2201)" : {
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0012,0082)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "usage" : "U"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "name" : "Study Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0012,0042)" : {
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
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient"
      },
      "(0028,0100)" : [
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
               "table_C.7-11b"
            ],
            "req" : "1",
            "module" : "Image Pixel",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Bits Allocated"
         },
         {
            "entity" : "Image",
            "name" : "Bits Allocated",
            "module" : "Enhanced MR Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-79"
            ],
            "req" : "1",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. For Enumerated Values See ",
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
      "(0018,9173)" : {
         "desc" : [
            "Signal source to measure motion.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Bulk Motion Compensation Technique (0018,9172) equals other than NONE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.18-3"
         ],
         "module" : "Bulk Motion Synchronization",
         "usage" : "C - Required if bulk motion synchronization was applied.",
         "entity" : "Image",
         "name" : "Bulk Motion Signal Source"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "entity" : "Image",
         "name" : "Functional Group Private Creator",
         "module" : "Multi-frame Dimension",
         "usage" : "M"
      },
      "(0018,9037)" : {
         "entity" : "Image",
         "name" : "Cardiac Synchronization Technique",
         "module" : "Cardiac Synchronization",
         "usage" : "C - Required if cardiac synchronization was applied.",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "req" : "1C",
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
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Institution Name"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
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
         "req" : "1",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
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
         "req" : "3",
         "module" : "Enhanced MR Image",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "name" : "Series Description",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "module" : "Enhanced MR Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
         "req" : "1"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-79",
            "table_C.8-83",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced MR Image"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient."
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