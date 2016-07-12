var data = 
{
   "tags" : {
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "name" : "UID",
         "entity" : "Series"
      },
      "(0008,0014)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "Image",
         "name" : "Instance Creator UID"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "Image"
      },
      "(0028,2002)" : [
         {
            "usage" : "M",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            "module" : "Image Pixel",
            "entity" : "Image",
            "name" : "Color Space"
         },
         {
            "usage" : "U",
            "req" : "3",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "module" : "ICC Profile",
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
            "name" : "Color Space"
         }
      ],
      "(0054,0050)" : {
         "name" : "Rotation Vector",
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "desc" : [
            "An array that contains the rotation number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Rotation Vector (0054,0050). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.5"
               }
            },
            " for specialization."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0054,0022)[<0>](0018,1183)" : {
         "module" : "NM Detector",
         "desc" : [
            "Center of focus along a row. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "name" : "X Focus Center",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "entity" : "Image",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "Image",
         "name" : "Deidentification Action Sequence"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "1C",
         "usage" : "M",
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Requested Procedure ID"
      },
      "(0054,0016)[<0>](0054,0302)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that identifies the administration route for the radiopharmaceutical.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Administration Route Code Sequence"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Referenced Instance Sequence"
      },
      "(0040,9096)[<0>](0040,9212)" : [
         {
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "usage" : "M",
            "name" : "Real World Value LUT Data",
            "entity" : "Image"
         },
         {
            "name" : "Real World Value LUT Data",
            "entity" : "Image",
            "module" : "NM Image",
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0018,1302)" : {
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "2C",
         "usage" : "M",
         "module" : "NM Image",
         "desc" : "Size of the imaged area in the direction of scanning motion, in mm. Required if Image Type (0008,0008) Value 3 contains the value WHOLE BODY.",
         "entity" : "Image",
         "name" : "Scan Length"
      },
      "(0054,0016)[<0>](0054,0306)[<1>](0054,0017)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "desc" : [
            "Post-injection residue syringe count rate in counts/sec. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.9"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Isotope",
         "entity" : "Image",
         "name" : "Residual Syringe Counts"
      },
      "(0012,0072)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "name" : "Clinical Trial Series Description"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
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
         "module" : "SOP Common"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "MAC Parameters Sequence"
      },
      "(0018,1130)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "desc" : [
            "The height of the patient table in mm. The range and values of this element are determined by the manufacturer. Should not be included if Image Type (0008,0008), Value 3, is",
            "TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO."
         ],
         "module" : "NM Image",
         "entity" : "Image",
         "name" : "Table Height"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Container Component Diameter",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(0028,0103)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
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
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Pixel Representation"
      },
      "(0008,103f)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Description Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series"
      },
      "(0008,0012)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Instance Creation Date"
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7"
         ],
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "NM Image",
         "entity" : "Image",
         "name" : "Anatomic Region Modifier Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0018,1100)" : {
         "module" : "NM Reconstruction",
         "desc" : "Diameter, in mm, of the region from within which the data was used in creating the reconstruction of the image. Data may exist outside this region and portions of the patient may exist outside this region.",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "name" : "Reconstruction Diameter",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
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
               ]
            }
         ],
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Image",
         "desc" : "Manufacturer of the container component.",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0054,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "desc" : [
            "Number of phases. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Phase Vector (0054,0030). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Number of Phases"
      },
      "(0054,0022)[<0>](0018,1142)" : {
         "desc" : "Radial distance of the detector from the center of rotation, in mm. Should not be included if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO.",
         "module" : "NM Detector",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "name" : "Radial Position",
         "entity" : "Image"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Strain Source Registry Code Sequence"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "entity" : "Series",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
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
      "(0054,0032)[<0>](0054,0033)" : {
         "desc" : "Number of frames in this phase.",
         "module" : "NM Phase",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "name" : "Number of Frames in Phase",
         "entity" : "Image"
      },
      "(0018,0026)" : {
         "desc" : "Sequence of Items that describes the intervention drugs used. One or more Items are permitted in this Sequence.",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Intervention Drug Information Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Date"
      },
      "(0008,0033)" : {
         "name" : "Content Time",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "entity" : "Image",
         "name" : "UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "Series Instance UID",
         "entity" : "Patient"
      },
      "(0010,2201)" : {
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
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "entity" : "Patient"
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "name" : "Strain Source",
         "entity" : "Patient",
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
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0023)" : {
         "name" : "Content Date",
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Image",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,0123)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Context Group Identification Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1",
            "module" : "General Image",
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
            "entity" : "Image",
            "name" : "Value Type"
         },
         {
            "name" : "Value Type",
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
            "module" : "NM Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         }
      ],
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "entity" : "Patient"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
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
         "module" : "Specimen"
      },
      "(0054,0081)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "module" : "NM Multi-frame",
         "desc" : [
            "Number of slices. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Slice Vector (0054,0080). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.8"
               }
            },
            " for specialization."
         ],
         "entity" : "Image",
         "name" : "Number of Slices"
      },
      "(60xx,1303)" : {
         "name" : "ROI Standard Deviation",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "entity" : "Study",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "desc" : "Person's mailing address"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Patient",
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
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "entity" : "Image",
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
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0008,1164)[<0>](0008,1162)" : {
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
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Calculated Frame List",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Referenced Series Sequence"
      },
      "(0010,0035)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "entity" : "Patient",
         "name" : "Patient's Alternative Calendar"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Time"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Time"
         }
      ],
      "(0040,0254)" : {
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Image",
         "name" : "Block Identifying Information Status",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "SOP Common"
      },
      "(60xx,0051)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "desc" : "Frame number of Multi-frame Image to which this overlay applies; frames are numbered from 1.",
         "module" : "Multi-frame Overlay",
         "entity" : "Image",
         "name" : "Image Frame Origin"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "module" : "Device",
         "desc" : "User-supplied identifier for the device",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device ID",
         "entity" : "Image"
      },
      "(0012,0042)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series"
      },
      "(0100,0426)" : {
         "entity" : "Image",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : [
         {
            "entity" : "Image",
            "name" : "Concept Code Sequence",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "module" : "General Image"
         },
         {
            "entity" : "Image",
            "name" : "Concept Code Sequence",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "NM Image",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ]
         }
      ],
      "(0008,1052)[<0>](0040,1104)" : {
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
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID",
         "entity" : "Image"
      },
      "(0054,0016)[<0>](0054,0300)" : {
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that identifies the radionuclide.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "name" : "Radionuclide Code Sequence",
         "entity" : "Image"
      },
      "(60xx,0015)" : {
         "mod_tables" : [
            "table_C.9-3"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Multi-frame Overlay",
         "desc" : "Number of Frames in Overlay. Required if Overlay data contains multiple frames.",
         "entity" : "Image",
         "name" : "Number of Frames in Overlay"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Image",
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
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
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
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient"
      },
      "(0054,0052)[<0>](0018,1140)" : {
         "name" : "Rotation Direction",
         "entity" : "Image",
         "module" : "NM TOMO Acquisition",
         "desc" : [
            "Direction of rotation of the detector about the patient. See Start Angle (0054,0200) for further explanation of direction.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "CW",
                     "clockwise (decreasing angle)"
                  ],
                  [
                     "CC",
                     "counter-clockwise (increasing angle)."
                  ]
               ]
            }
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,0026)[<0>](0018,0034)" : {
         "entity" : "Image",
         "name" : "Intervention Drug Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "module" : "NM Isotope",
         "desc" : "Name of intervention drug."
      },
      "(0038,0060)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "name" : "Service Episode ID"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Manufacturer's model name of the device",
         "module" : "Device"
      },
      "(0018,1086)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Number of beats skipped after a detected arrhythmia",
         "entity" : "Image",
         "name" : "Skip Beats"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "usage" : "U - See ",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "Date the Series started.",
         "module" : "General Series"
      },
      "(0040,0253)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step ID"
      },
      "(0018,1301)" : {
         "module" : "NM Image",
         "desc" : [
            "The type of scan performed. Used only if Image Type (0008,0008), Value 3, contains the value WHOLE BODY.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1PS",
                     "one pass"
                  ],
                  [
                     "2PS",
                     "two pass"
                  ],
                  [
                     "PCN",
                     "patient contour following employed"
                  ],
                  [
                     "MSP",
                     "multiple static frames collected into a whole body frame"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "3",
         "name" : "Whole Body Technique",
         "entity" : "Image"
      },
      "(0010,0213)" : {
         "name" : "Strain Nomenclature",
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
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "req" : "1C",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0018,0026)[<0>](0018,0035)" : {
         "entity" : "Image",
         "name" : "Intervention Drug Start Time",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "desc" : "Time of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032).",
         "module" : "NM Isotope"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : [
         {
            "entity" : "Image",
            "name" : "Referenced SOP Sequence",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "General Image",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ]
         },
         {
            "name" : "Referenced SOP Sequence",
            "entity" : "Image",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "module" : "NM Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         }
      ],
      "(0040,9096)[<0>](0040,08ea)" : [
         {
            "name" : "Measurement Units Code Sequence",
            "entity" : "Image",
            "desc" : [
               "Units of measurement.",
               "Only a single Item shall be included in this Sequence.",
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
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "desc" : [
               "Units of measurement.",
               "Only a single Item shall be included in this Sequence.",
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
         }
      ],
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
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
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Image",
         "name" : "Private Group Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "entity" : "Image",
         "name" : "Patient Orientation"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "3",
         "module" : "Acquisition Context",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
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
               ],
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Value Type"
      },
      "(0008,009d)" : {
         "entity" : "Study",
         "name" : "Consulting Physician Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "module" : "General Study"
      },
      "(0018,0026)[<0>](0054,0302)" : {
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that identifies the administration route for the intervention drug.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "name" : "Administration Route Code Sequence",
         "entity" : "Image"
      },
      "(0054,0021)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "desc" : [
            "Number of detectors. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.3"
               }
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Number of Detectors"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Accession Number"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "General Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "entity" : "Series"
      },
      "(0054,0022)[<0>](0054,0220)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "View Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,0008)" : [
         {
            "module" : "General Image",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ],
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Image Type",
            "entity" : "Image"
         },
         {
            "name" : "Image Type",
            "entity" : "Image",
            "module" : "NM Image",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.4.9.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization."
            ],
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ]
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Concept Name Code Sequence"
      },
      "(0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Unique identifier of the Series.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Series Instance UID"
      },
      "(60xx,0040)" : {
         "module" : "Overlay Plane",
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
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Overlay Type",
         "entity" : "Image"
      },
      "(0008,1111)" : {
         "module" : "General Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Referenced Performed Procedure Step Sequence",
         "entity" : "Series"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "entity" : "Patient",
         "name" : "XDS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
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
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series"
      },
      "(0008,3010)" : {
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Irradiation Event UID",
         "entity" : "Image"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Image",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,051a)" : {
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Description",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Image"
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0054,0022)[<0>](0054,0220)[<1>](0054,0222)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "module" : "NM Detector",
         "desc" : [
            "View Modifier. Required if needed to fully specify the View.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "View Modifier Code Sequence"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ],
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Referenced SOP Class UID"
         }
      ],
      "(0020,4000)" : {
         "name" : "Image Comments",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "User-defined comments about the image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "HL7 Structured Document Reference Sequence"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1084)" : {
         "entity" : "Image",
         "name" : "Intervals Rejected",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "desc" : "Number of heartbeats that fall outside Low R-R (0018,1081) and High R-R Value (0018,1082), and do not contribute gamma events to this R-R Interval. However, they may contribute gamma events to other R-R Intervals.",
         "module" : "NM Multi-gated Acquisition"
      },
      "(0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "entity" : "Image",
         "module" : "Image Pixel",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0054,0062)" : {
         "desc" : [
            "Sequence of Items that describe R-R intervals. Each gated interval is defined by an upper and lower range of heart beat durations. Required if the Frame Increment Pointer (0028,0009) contains the Tag for R-R Interval Vector (0054,0060).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of R-R Intervals (0054,0061). The first item corresponds to frames with value of 1 in the R-R Interval Vector (0054,0060), the second item with value 2, etc."
         ],
         "module" : "NM Multi-gated Acquisition",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "name" : "Gated Information Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Image",
         "name" : "MAC ID Number",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "name" : "Container Component Description",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Container component text description.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "General Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Size Code Sequence"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "module" : "Acquisition Context",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Person Identification Code Sequence"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image",
         "name" : "Pixel Representation"
      },
      "(0054,0032)[<0>](0054,0039)" : {
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "desc" : [
            "Description of this phase of the Dynamic image.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "FLOW",
                     null
                  ],
                  [
                     "WASHOUT",
                     null
                  ],
                  [
                     "UPTAKE",
                     null
                  ],
                  [
                     "EMPTYING",
                     null
                  ],
                  [
                     "EXCRETION",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "NM Phase",
         "entity" : "Image",
         "name" : "Phase Description"
      },
      "(0040,0518)" : {
         "name" : "Container Type Code Sequence",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0054,0072)" : {
         "desc" : [
            "Sequence of Items that describe Time Slot Information. Required if the Frame Increment Pointer (0028,0009) contains the Tag for Time Slot Vector (0054,0070).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Time Slots (0054,0071). The first item corresponds to frames with value of 1 in the Time Slot Vector (0054,0070), the second item with value 2, etc."
         ],
         "module" : "NM Multi-gated Acquisition",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "name" : "Time Slot Information Sequence",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0008,0110)" : {
         "entity" : "Image",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
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
         "req" : "1C",
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
         "module" : "Patient"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Specific Character Set"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0018,0071)" : {
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Description of how the data collection was stopped.",
            {
               "list" : [
                  [
                     "CNTS",
                     "counts"
                  ],
                  [
                     "DENS",
                     "density"
                  ],
                  [
                     "MANU",
                     "manual"
                  ],
                  [
                     "OVFL",
                     "data overflow"
                  ],
                  [
                     "TIME",
                     "time"
                  ],
                  [
                     "TRIG",
                     "physiological trigger"
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
                     "linkend" : "sect_C.8.4.9.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization."
            ]
         ],
         "module" : "NM Image",
         "entity" : "Image",
         "name" : "Acquisition Termination Condition"
      },
      "(0018,1243)" : {
         "module" : "NM Image",
         "desc" : "Maximum count rate achieved during the acquisition in counts/sec.",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Count Rate",
         "entity" : "Image"
      },
      "(0008,0032)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "The time the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Acquisition Time"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "module" : "Specimen",
         "desc" : "Thickness in mm of container component",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "entity" : "Image"
      },
      "(0028,1201)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "entity" : "Image",
         "name" : "LUT Explanation",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "module" : "VOI LUT"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "entity" : "Image"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "name" : "Study Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0020,9172)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Image",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Image"
      },
      "(0010,0040)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "name" : "Patient's Sex",
         "entity" : "Patient"
      },
      "(0054,0052)[<0>](0018,1242)" : {
         "entity" : "Image",
         "name" : "Actual Frame Duration",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "desc" : "Nominal acquisition time per angular position, in msec.",
         "module" : "NM TOMO Acquisition"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "entity" : "Image",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
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
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Institution Address"
      },
      "(0018,1801)" : {
         "module" : "Synchronization",
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Source",
         "entity" : "Frame of Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "usage" : "U - See ",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
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
         ],
         "entity" : "Image",
         "name" : "Date"
      },
      "(0028,0106)" : {
         "entity" : "Image",
         "name" : "Smallest Image Pixel Value",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "desc" : "The minimum actual pixel value encountered in this image."
      },
      "(0010,2210)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "module" : "Patient Study",
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
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0512)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
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
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Identifier"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "name" : "Inter-Marker Distance",
         "entity" : "Image",
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
         "module" : "Device",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3"
      },
      "(0054,0062)[<0>](0018,1060)" : {
         "name" : "Trigger Time",
         "entity" : "Image",
         "desc" : "Time interval measured in msec from the start of the R-wave to the beginning of the data taking.",
         "module" : "NM Multi-gated Acquisition",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0054,0032)" : {
         "name" : "Phase Information Sequence",
         "entity" : "Image",
         "module" : "NM Phase",
         "desc" : [
            "Sequence of Items that describes each dynamic phase. Required if the Frame Increment Pointer (0028,0009) contains the Tag for Phase Vector (0054,0030).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Phases (0054,0031). The first item corresponds to frames with value of 1 in Phase Vector (0054,0030), the second item with value 2, etc."
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-14"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "usage" : "U",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Clinical Trial Study"
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "entity" : "Image",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Rational Denominator Value"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "entity" : "Image",
         "name" : "Time",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image",
         "name" : "Pixel Data"
      },
      "(0040,0250)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date"
      },
      "(0028,1101)" : {
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "Image Pixel"
      },
      "(0054,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "desc" : [
            "An array that contains the spatial slice number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Slice Vector (0054,0080). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.8"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Slice Vector"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,0106)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Context Group Version",
         "entity" : "Image"
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
         "usage" : "M",
         "req" : "3",
         "name" : "Icon Image Sequence",
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(60xx,1301)" : {
         "module" : "Overlay Plane",
         "desc" : [
            "Number of pixels in ROI area.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "name" : "ROI Area",
         "entity" : "Image"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "name" : "High Bit",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "module" : "General Image"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed",
         "entity" : "Image"
      },
      "(0008,0020)" : {
         "name" : "Study Date",
         "entity" : "Study",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2"
      },
      "(0028,1051)" : {
         "name" : "Window Width",
         "entity" : "Image",
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
         "module" : "VOI LUT",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-2b"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "module" : "General Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Bits Allocated",
         "entity" : "Image"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study"
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M",
         "desc" : "Time the Study started.",
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Floating Point Value"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1"
      },
      "(0054,0016)[<0>](0054,0306)" : {
         "entity" : "Image",
         "name" : "Calibration Data Sequence",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that contains calibration data.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "entity" : "Image",
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
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
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1803)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3",
         "usage" : "C - Required if time synchronization was applied",
         "module" : "Synchronization",
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
         "entity" : "Frame of Reference",
         "name" : "NTP Source Address"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Specimen Preparation Step Content Item Sequence",
         "entity" : "Image"
      },
      "(0054,0051)" : {
         "module" : "NM Multi-frame",
         "desc" : [
            "Number of rotations. Required if Image Type (0008,0008), Value 3 is",
            "TOMO,GATED TOMO,RECON TOMO, or RECON GATED TOMO.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.4.8.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ]
         ],
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Number of Rotations",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Image",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series",
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
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,9096)" : [
         {
            "entity" : "Image",
            "name" : "Real World Value Mapping Sequence",
            "usage" : "M",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "desc" : [
               "The mapping of stored values to associated Real World values.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "name" : "Real World Value Mapping Sequence",
            "entity" : "Image",
            "desc" : [
               "The mapping of stored values to associated real world values.",
               "One or more Items are permitted in this Sequence."
            ],
            "module" : "NM Image",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "req" : "3",
            "usage" : "M"
         }
      ],
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1062)" : {
         "name" : "Nominal Interval",
         "entity" : "Image",
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Average duration of accepted beats, in msec.",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ]
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Width in mm of container component.",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0040,0556)" : {
         "desc" : "Free-text description of the image-acquisition context.",
         "module" : "Acquisition Context",
         "req" : "3",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Acquisition Context Description",
         "entity" : "Image"
      },
      "(0010,1000)" : {
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
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
         "name" : "Time of Last Calibration"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "name" : "Referenced Segment Number"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0054,0016)[<0>](0018,1073)" : {
         "module" : "NM Isotope",
         "desc" : [
            "Time of end of injection. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "name" : "Radiopharmaceutical Stop Time",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1203)" : {
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,9004)" : {
         "entity" : "Image",
         "name" : "Content Qualification",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Content Qualification Indicator",
            {
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
               ],
               "type" : "variablelist"
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
         "module" : "SOP Common"
      },
      "(0018,1088)" : {
         "entity" : "Image",
         "name" : "Heart Rate",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Average number of heart beats per minute for the collection period for these frames. This shall include all accepted beats as well as rejected beats."
      },
      "(0010,2203)" : {
         "req" : "2C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
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
         "entity" : "Study",
         "name" : "Patient's Sex Neutered"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "name" : "Numeric Value"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "req" : "3",
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Identity Removed"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "entity" : "Image",
         "name" : "Person Name",
         "usage" : "U - See ",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ]
      },
      "(0028,1102)" : {
         "module" : "Image Pixel",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(0054,0022)[<0>](0054,0200)" : {
         "name" : "Start Angle",
         "entity" : "Image",
         "module" : "NM Detector",
         "desc" : "Position of the detector about the patient for the start of the acquisition, in degrees. Zero degrees is referenced to the origin at the patient's back. Viewing from the patient's feet, angle increases in a counter-clockwise direction (detector normal rotating from the patient's back towards the patient's left side). Should not be included if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Image",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0054,0052)[<0>](0018,1130)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "desc" : "The distance in mm of the top of the patient table to the center of rotation. Table height below the center of rotation has a positive value.",
         "module" : "NM TOMO Acquisition",
         "entity" : "Image",
         "name" : "Table Height"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1081)" : {
         "entity" : "Image",
         "name" : "Low R-R Value",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "desc" : "R-R interval lower limit for beat rejection, in msec",
         "module" : "NM Multi-gated Acquisition"
      },
      "(0010,0034)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0054,0032)[<0>](0054,0211)" : {
         "entity" : "Image",
         "name" : "Number of Triggers in Phase",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "module" : "NM Phase",
         "desc" : "The number of entries in Trigger Vector (0054,0210) for this phase. Required if Trigger Vector (0054,0210) is present."
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "Specimen",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Image"
      },
      "(0010,2292)" : {
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Breed Description"
      },
      "(0054,0032)[<0>](0054,0038)" : {
         "name" : "Pause Between Frames",
         "entity" : "Image",
         "desc" : "Time paused between each frame of this phase (in msec).",
         "module" : "NM Phase",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-14"
         ]
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1063)" : {
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Nominal time per individual frame in msec.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "name" : "Frame Time",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9225)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "module" : "General Image",
            "desc" : [
               "The Slope value in relationship between stored values (SV) and the real world values.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1.2"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "entity" : "Image",
            "name" : "Real World Value Slope"
         },
         {
            "entity" : "Image",
            "name" : "Real World Value Slope",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "module" : "NM Image",
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
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ]
         }
      ],
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Image",
         "name" : "Mapping Resource UID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0054,0100)" : {
         "entity" : "Image",
         "name" : "Time Slice Vector",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "module" : "NM Multi-frame",
         "desc" : [
            "An array that contains the time slice number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slice Vector (0054,0100). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.10",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ]
      },
      "(60xx,3000)" : {
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
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "Overlay Data",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0028,0302)" : {
         "module" : "General Image",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Recognizable Visual Features",
         "entity" : "Image"
      },
      "(0050,0010)" : {
         "entity" : "Image",
         "name" : "Device Sequence",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Device"
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
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Institution Code Sequence"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Multi-frame Source SOP Instance UID",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Series"
      },
      "(60xx,0011)" : {
         "name" : "Overlay Columns",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : "Number of Columns in Overlay.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "name" : "Strain Stock Number",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0054,0016)[<0>](0018,0031)" : {
         "module" : "NM Isotope",
         "desc" : "Name of the radiopharmaceutical.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "name" : "Radiopharmaceutical",
         "entity" : "Image"
      },
      "(0028,0303)" : {
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ]
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "entity" : "Image",
         "name" : "Specimen Detailed Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "usage" : "U",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen"
      },
      "(0054,0052)[<0>](0018,1143)" : {
         "module" : "NM TOMO Acquisition",
         "desc" : "The effective angular range of the scan data in degrees. The value shall be positive.",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "1",
         "name" : "Scan Arc",
         "entity" : "Image"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
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
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "req" : "1C",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "name" : "Rational Denominator Value"
      },
      "(0018,0070)" : {
         "name" : "Counts Accumulated",
         "entity" : "Image",
         "module" : "NM Image",
         "desc" : [
            "Sum of all gamma events for all frames in the image. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.9.1.2"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "2"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "entity" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
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
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Rational Denominator Value"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
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
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "module" : "Patient",
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
         ]
      },
      "(0008,2218)" : {
         "module" : "NM Image",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7"
         ],
         "name" : "Anatomic Region Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "name" : "Specimen Localization Content Item Sequence",
         "entity" : "Image",
         "module" : "Specimen",
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
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
      "(0054,0500)" : {
         "entity" : "Image",
         "name" : "Slice Progression Direction",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "desc" : [
            "Describes the anatomical direction that slices are progressing as the slices are considered in order (as defined by Slice Vector (0054,0080)). Meaningful only for cardiac images.",
            "When View Code Sequence (0054,0220) indicates a short axis view, then the Enumerated Values are:",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "APEX_TO_BASE",
                     null
                  ],
                  [
                     "BASE_TO_APEX",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "NM Reconstruction"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0028,0030)" : {
         "entity" : "Image",
         "name" : "Pixel Spacing",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-6"
         ],
         "usage" : "M",
         "module" : "NM Image Pixel",
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing, in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_10.7.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation of the value order."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : [
         {
            "module" : "General Image",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "name" : "Date",
            "entity" : "Image"
         },
         {
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "module" : "NM Image",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M",
            "name" : "Date",
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Value Type"
      },
      "(0028,2112)" : {
         "module" : "General Image",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Lossy Image Compression Ratio",
         "entity" : "Image"
      },
      "(0054,0016)[<0>](0018,1072)" : {
         "name" : "Radiopharmaceutical Start Time",
         "entity" : "Image",
         "desc" : [
            "Time of start of injection. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ]
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Retrieve URI",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1082)" : {
         "entity" : "Image",
         "name" : "High R-R Value",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "desc" : "R-R interval upper limit for beat rejection, in msec",
         "module" : "NM Multi-gated Acquisition"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
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
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image",
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
         "module" : "General Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
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
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1"
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0012,0071)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "entity" : "Series"
      },
      "(0028,1055)" : {
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "3",
         "usage" : "U",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "module" : "VOI LUT",
         "entity" : "Image",
         "name" : "Window Center & Width Explanation"
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0054,0022)[<0>](0018,1181)" : {
         "entity" : "Image",
         "name" : "Collimator Type",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "desc" : [
            "Collimator type.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "PARA",
                     "Parallel (default)"
                  ],
                  [
                     "PINH",
                     "Pinhole"
                  ],
                  [
                     "FANB",
                     "Fan-beam"
                  ],
                  [
                     "CONE",
                     "Cone-beam"
                  ],
                  [
                     "SLNT",
                     "Slant hole"
                  ],
                  [
                     "ASTG",
                     "Astigmatic"
                  ],
                  [
                     "DIVG",
                     "Diverging"
                  ],
                  [
                     "NONE",
                     "No collimator"
                  ],
                  [
                     "UNKN",
                     "Unknown"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "NM Detector"
      },
      "(0018,5100)" : {
         "entity" : "Series",
         "name" : "Patient Position",
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "module" : "General Series"
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "name" : "Series Number",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "A number that identifies this Series."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0038,0010)" : {
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Admission ID",
         "entity" : "Study"
      },
      "(0028,0101)" : [
         {
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
            "module" : "Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "name" : "Bits Stored",
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "name" : "Bits Stored",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "desc" : "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. The value shall be the same as the value in Bits Allocated (0028,0100).",
            "module" : "NM Image Pixel"
         }
      ],
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Reason for the Requested Procedure"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Address"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
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
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0101)" : {
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
         "module" : "General Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Bits Stored",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "The type of identifier in this item.",
            {
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
               ],
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0010,0027)[<0>](0018,5100)" : {
         "module" : "Patient",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Patient Position",
         "entity" : "Patient"
      },
      "(0028,1202)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
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
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
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
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
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
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
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
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "entity" : "Image",
         "module" : "NM Image",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7",
            "table_10-8"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Image",
         "name" : "Modifying System"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "name" : "Rows",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,2293)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
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
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "entity" : "Image"
      },
      "(0054,0032)[<0>](0018,1242)" : {
         "desc" : "Nominal time of acquisition per individual frame, in msec.",
         "module" : "NM Phase",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "name" : "Actual Frame Duration",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Comments"
      },
      "(0054,0016)[<0>](0054,0306)[<1>](0018,1045)" : {
         "name" : "Syringe Counts",
         "entity" : "Image",
         "module" : "NM Isotope",
         "desc" : [
            "Pre-injection syringe count rate in counts/sec. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.8",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3"
      },
      "(0010,0027)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
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
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Referenced Frame Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
         "name" : "Date",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "module" : "Device",
         "desc" : "Manufacturer of the device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer",
         "entity" : "Image"
      },
      "(0018,0026)[<0>](0018,0027)" : {
         "name" : "Intervention Drug Stop Time",
         "entity" : "Image",
         "desc" : "Time of completion of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032).",
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ]
      },
      "(0008,1090)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Manufacturer's Model Name"
      },
      "(0054,0052)[<0>](0018,1144)" : {
         "module" : "NM TOMO Acquisition",
         "desc" : [
            "The angular scan arc step between views of the TOMO acquisition, in degrees. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.12.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "1",
         "name" : "Angular Step",
         "entity" : "Image"
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
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
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Samples per Pixel"
      },
      "(0054,0400)" : {
         "entity" : "Image",
         "name" : "Image ID",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "User or equipment generated Image identifier.",
         "module" : "NM Image"
      },
      "(0028,1203)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
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
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
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
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "name" : "Concept Code Sequence"
      },
      "(0018,1020)" : {
         "entity" : "Equipment",
         "name" : "Software Versions",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "module" : "General Equipment"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
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
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series"
      },
      "(60xx,0100)" : {
         "entity" : "Image",
         "name" : "Overlay Bits Allocated",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Overlay Plane",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     },
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
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,1000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Device Serial Number"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
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
      "(0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0020,0012)" : {
         "entity" : "Image",
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "module" : "General Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "entity" : "Image",
         "name" : "Person's Address"
      },
      "(7fe0,0010)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
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
         "entity" : "Image",
         "name" : "Pixel Data"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Device Serial Number",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "entity" : "Image"
      },
      "(0040,0245)" : {
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0008,0122)" : {
         "entity" : "Image",
         "name" : "Mapping Resource Name",
         "usage" : "M",
         "req" : "3",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.4"
                  }
               },
               "."
            ]
         ]
      },
      "(0054,0016)[<0>](0018,1071)" : {
         "entity" : "Image",
         "name" : "Radiopharmaceutical Volume",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Isotope",
         "desc" : "Volume of injection in cubic cm."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series"
      },
      "(0028,0034)" : {
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
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
         "module" : "Image Pixel"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ]
      },
      "(0028,1056)" : {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "VOI LUT Function",
         "entity" : "Image"
      },
      "(0008,2111)" : {
         "entity" : "Image",
         "name" : "Derivation Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
         "module" : "General Image"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence",
         "entity" : "Image"
      },
      "(0028,0004)" : [
         {
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
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
            "entity" : "Image",
            "name" : "Photometric Interpretation"
         },
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.7.1.1"
                  }
               },
               " for further explanation."
            ],
            "module" : "NM Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "usage" : "M",
            "name" : "Photometric Interpretation",
            "entity" : "Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Value Type"
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "entity" : "Image",
         "name" : "LUT Descriptor",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
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
         "module" : "VOI LUT"
      },
      "(0020,0013)" : [
         {
            "module" : "General Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
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
            "req" : "2",
            "usage" : "M",
            "name" : "Instance Number",
            "entity" : "Image"
         },
         {
            "name" : "Instance Number",
            "entity" : "Image",
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0010,0027)" : {
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
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "\n                  3 "
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "name" : "ICC Profile",
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,1103)" : {
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Image Pixel",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Specimen",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence",
         "entity" : "Image"
      },
      "(0054,0052)[<0>](0054,0200)" : {
         "module" : "NM TOMO Acquisition",
         "desc" : "Position of the detector about the patient for the start of this rotation, in degrees. Zero degrees is referenced to the origin at the patient's back. Viewing from the patient's feet, angle increases in a counter-clockwise direction (detector normal rotating from the patient's back towards the patient's left side).",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "name" : "Start Angle",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "entity" : "Image",
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged."
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
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Site ID"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "module" : "Acquisition Context",
         "req" : "1C",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Referenced Frame Numbers",
         "entity" : "Image"
      },
      "(0008,0105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the Mapping Resource.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "name" : "Mapping Resource"
      },
      "(0054,0016)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "module" : "NM Isotope",
         "desc" : [
            "Sequence of Items that describe isotope information.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Radiopharmaceutical Information Sequence"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "entity" : "Patient",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Protocol Context Sequence"
      },
      "(0054,0062)[<0>](0018,1064)" : {
         "entity" : "Image",
         "name" : "Cardiac Framing Type",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "module" : "NM Multi-gated Acquisition",
         "desc" : [
            "Description of type of framing performed.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.18.1.1.1"
                  }
               },
               " for description and Defined Terms."
            ]
         ]
      },
      "(0018,0015)" : {
         "name" : "Body Part Examined",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L"
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0028,0006)" : {
         "name" : "Planar Configuration",
         "entity" : "Image",
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "module" : "General Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image"
      },
      "(60xx,0010)" : {
         "name" : "Overlay Rows",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : "Number of Rows in Overlay.",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "entity" : "Image",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : [
         {
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
            "module" : "General Image",
            "entity" : "Image",
            "name" : "LUT Explanation"
         },
         {
            "entity" : "Image",
            "name" : "LUT Explanation",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "desc" : "Free form text explanation of the meaning of the transformation in this Item."
         }
      ],
      "(0040,0560)[<0>](0040,0551)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
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
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Specimen Identifier"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "name" : "Institution Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located."
      },
      "(0020,0060)" : {
         "entity" : "Series",
         "name" : "Laterality",
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0040,9096)[<0>](0040,9216)" : [
         {
            "name" : "Real World Value First Value Mapped",
            "entity" : "Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ],
                        "attrs" : {
                           "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                        },
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               },
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
            "module" : "General Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ]
         },
         {
            "entity" : "Image",
            "name" : "Real World Value First Value Mapped",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ]
                     },
                     "\n                      "
                  ]
               },
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
            "module" : "NM Image"
         }
      ],
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0022)" : {
         "name" : "Acquisition Date",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "entity" : "Image",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0028,1050)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "module" : "VOI LUT",
         "desc" : [
            "Window Center for display.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Window Center"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "name" : "UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "entity" : "Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series"
      },
      "(0054,0011)" : {
         "entity" : "Image",
         "name" : "Number of Energy Windows",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "desc" : [
            "Number of energy window groupings. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Image",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common"
      },
      "(0008,002a)" : {
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: title",
                              "linkend" : "sect_C.7.4.2"
                           }
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Acquisition DateTime",
         "entity" : "Image"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,1010)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment",
         "name" : "Station Name"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "entity" : "Patient",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0054,0410)" : {
         "entity" : "Series",
         "name" : "Patient Orientation Code Sequence",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-5"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Sequence that describes the orientation of the patient with respect to gravity. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.6.1.1"
                  }
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "NM/PET Patient Orientation"
      },
      "(0054,0052)[<0>](0054,0053)" : {
         "entity" : "Image",
         "name" : "Number of Frames in Rotation",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "module" : "NM TOMO Acquisition",
         "desc" : "Number of angular views in this rotation."
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "module" : "General Study",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0054,0501)" : {
         "desc" : [
            "The anatomical order in which the slices were acquired.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FEET_TO_HEAD",
                     "Slices closest to the patient's feet were acquired first."
                  ],
                  [
                     "HEAD_TO_FEET",
                     "Slices closest to the patient's head were acquired first."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "NM Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "name" : "Scan Progression Direction",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "entity" : "Image",
         "name" : "Photometric Interpretation",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "module" : "General Image"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "name" : "Patient's Age",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Age of the Patient."
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0006)" : {
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
         "module" : "General Image",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
         "entity" : "Image"
      },
      "(0010,0027)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0040,9096)[<0>](0040,9220)" : [
         {
            "desc" : [
               "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
               "One or more Items are permitted in this Sequence.",
               "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
            ],
            "module" : "General Image",
            "usage" : "M",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "name" : "Quantity Definition Sequence",
            "entity" : "Image"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "desc" : [
               "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
               "One or more Items are permitted in this Sequence.",
               "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
            ],
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Quantity Definition Sequence"
         }
      ],
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Home Community ID",
         "entity" : "Patient"
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0054,0070)" : {
         "name" : "Time Slot Vector",
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "desc" : [
            "An array that contains the time slot number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slot Vector (0054,0070). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.7"
               }
            },
            " for specialization."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(0040,0555)" : {
         "req" : "2",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Acquisition Context",
         "entity" : "Image",
         "name" : "Acquisition Context Sequence"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "entity" : "Patient",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Date",
         "entity" : "Series"
      },
      "(0054,0052)[<0>](0018,1131)" : {
         "entity" : "Image",
         "name" : "Table Traverse",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "desc" : "Location of the patient table (or gantry relative to the table) in mm. The range and values of this element are determined by the manufacturer.",
         "module" : "NM TOMO Acquisition"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0054,0090)" : {
         "name" : "Angular View Vector",
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "desc" : [
            "An array that contains the angular view number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Angular View Vector (0054,0090). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.9"
               }
            },
            " for specialization."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : [
         {
            "name" : "Rational Denominator Value",
            "entity" : "Image",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "module" : "General Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "entity" : "Image",
            "name" : "Rational Denominator Value",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "module" : "NM Image"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen"
      },
      "(0020,0200)" : {
         "entity" : "Frame of Reference",
         "name" : "Synchronization Frame of Reference UID",
         "usage" : "C - Required if time synchronization was applied",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ],
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
         "module" : "Synchronization"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Person Name",
         "entity" : "Image"
      },
      "(0054,0022)[<0>](0028,0032)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "desc" : [
            "The amount of offset from (0,0) applied to each pixel in the image before application of the zoom factor, specified by a numeric pair: row value (delimiter) column value (in mm). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Detector",
         "entity" : "Image",
         "name" : "Zoom Center"
      },
      "(0008,010f)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Context Identifier"
      },
      "(0018,1802)" : {
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Distribution Protocol",
         "entity" : "Frame of Reference"
      },
      "(0028,2114)" : {
         "entity" : "Image",
         "name" : "Lossy Image Compression Method",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.1"
                  }
               },
               "."
            ]
         ]
      },
      "(0054,0022)[<0>](0020,0032)" : {
         "module" : "NM Detector",
         "desc" : [
            "The x, y, and z coordinates of the upper left hand corner (center of the first voxel transmitted) of the image, in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Image Position (Patient)",
         "entity" : "Image"
      },
      "(0054,0022)[<0>](0018,1180)" : {
         "module" : "NM Detector",
         "desc" : "Label describing the collimator used (LEAP, hires, etc.)",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "name" : "Collimator/Grid Name",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "name" : "Institution Name"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0008,0060)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Modality",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "module" : "Device",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "entity" : "Image",
         "name" : "Device Length",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "desc" : [
            "Length in mm of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ]
      },
      "(0054,0032)[<0>](0054,0210)" : {
         "mod_tables" : [
            "table_C.8-14"
         ],
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "desc" : [
            "An array of trigger times when gating information is acquired simultaneously with the dynamic image data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.14.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Phase",
         "entity" : "Image",
         "name" : "Trigger Vector"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Address"
      },
      "(0040,9096)[<0>](0040,9214)" : [
         {
            "module" : "General Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value First Value Mapped (0040,9216) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ]
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ],
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "name" : "Double Float Real World Value First Value Mapped",
            "entity" : "Image"
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "NM Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value First Value Mapped (0040,9216) is absent.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ]
               }
            ],
            "entity" : "Image",
            "name" : "Double Float Real World Value First Value Mapped"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image",
         "name" : "SOP Authorization Comment"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "entity" : "Image",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0038,0014)" : {
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "entity" : "Image",
         "name" : "Time",
         "usage" : "U - See ",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ]
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Image",
         "module" : "General Image",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
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
         "module" : "General Series"
      },
      "(0054,0010)" : {
         "desc" : [
            "An array that contains the energy window number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Energy Window Vector (0054,0010). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.2"
               }
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "name" : "Energy Window Vector",
         "entity" : "Image"
      },
      "(0054,0030)" : {
         "entity" : "Image",
         "name" : "Phase Vector",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "desc" : [
            "An array that contains the phase number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Phase Vector (0054,0030). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.4"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : [
         {
            "entity" : "Image",
            "name" : "Person Name",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "module" : "General Image"
         },
         {
            "name" : "Person Name",
            "entity" : "Image",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "module" : "NM Image",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0010,1100)[<0>](0040,e025)" : {
         "entity" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0054,0052)[<0>](0018,1110)" : {
         "name" : "Distance Source to Detector",
         "entity" : "Image",
         "desc" : "Distance in mm from transmission source to the detector face. Required if Image Type (0008,0008) Value 4 is TRANSMISSION.",
         "module" : "NM TOMO Acquisition",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "2C"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient"
      },
      "(0018,1242)" : {
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Elapsed time for data acquisition in msec. Required if Image Type (0008,0008) Value 3 is:",
            "WHOLE BODY or",
            "STATIC.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.4.9.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization."
            ]
         ],
         "module" : "NM Image",
         "entity" : "Image",
         "name" : "Actual Frame Duration"
      },
      "(0054,0060)" : {
         "name" : "R-R Interval Vector",
         "entity" : "Image",
         "desc" : [
            "An array that contains the R-R interval number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for R-R Interval Vector (0054,0060). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "module" : "NM Multi-frame",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "entity" : "Image",
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
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0020,1002)" : {
         "name" : "Images in Acquisition",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "Number of images that resulted from this acquisition of data",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's serial number of the device",
         "module" : "Device",
         "entity" : "Image",
         "name" : "Device Serial Number"
      },
      "(0054,0052)" : {
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "2",
         "module" : "NM TOMO Acquisition",
         "desc" : [
            "Sequence of Items that describe TOMO rotational groups. A new rotation is defined whenever the direction of the detector motion changes, or Table Traverse (0018,1131) changes.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Rotations (0054,0051). If Rotation Vector (0054,0050) is present, the first item corresponds to frames with value of 1 in Rotation Vector (0054,0050), the second item with value 2, etc."
         ],
         "entity" : "Image",
         "name" : "Rotation Information Sequence"
      },
      "(0010,2297)" : {
         "entity" : "Patient",
         "name" : "Responsible Person",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "entity" : "Study",
         "module" : "General Study",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "2",
         "usage" : "U",
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
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study"
      },
      "(0010,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Name"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence"
      },
      "(0028,0009)" : [
         {
            "name" : "Frame Increment Pointer",
            "entity" : "Image",
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
            "module" : "Multi-frame",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-14"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "name" : "Frame Increment Pointer",
            "mod_tables" : [
               "table_C.8-7"
            ],
            "usage" : "M",
            "req" : "1",
            "module" : "NM Multi-frame",
            "desc" : [
               "Contains the Data Element Tags of one or more frame index vectors. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.4.8.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further specialization."
            ]
         }
      ],
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "name" : "Repository Unique ID",
         "entity" : "Patient"
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
               "title" : "Defined Terms:",
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
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Distribution Type",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "name" : "UID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,1131)" : {
         "module" : "NM Image",
         "desc" : [
            "Location of the patient table (or gantry relative to the table) in mm. The range and values of this element are determined by the manufacturer. Should not be included if Image Type (0008,0008), Value 3, is",
            "TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "name" : "Table Traverse",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
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
         "module" : "General Image"
      },
      "(0018,0026)[<0>](0018,0029)" : {
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that identifies the intervention drug name.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Intervention Drug Code Sequence"
      },
      "(0054,0032)[<0>](0054,0036)" : {
         "entity" : "Image",
         "name" : "Phase Delay",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "desc" : "Time paused between the last frame of the previous phase and the first frame of this phase, in msec.",
         "module" : "NM Phase"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0028,0300)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               },
               ". See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Quality Control Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Date",
         "entity" : "Image"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "usage" : "M",
            "module" : "Image Pixel",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ]
         },
         {
            "name" : "High Bit",
            "entity" : "Image",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "module" : "NM Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "req" : "1"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "entity" : "Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0054,0012)[<0>](0054,0013)" : {
         "module" : "NM Isotope",
         "desc" : [
            "Sequence of Items that describes this energy window group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Energy Window Range Sequence",
         "entity" : "Image"
      },
      "(0054,0022)[<0>](0018,1184)" : {
         "entity" : "Image",
         "name" : "Y Focus Center",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector",
         "desc" : [
            "Center of focus along a column. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.11.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0515)" : {
         "module" : "Specimen",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Alternate Container Identifier Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Image",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence"
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "name" : "Patient's Size",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Image",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0054,0016)[<0>](0018,1074)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "desc" : [
            "Total amount of radionuclide injected. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.7"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Isotope",
         "entity" : "Image",
         "name" : "Radionuclide Total Dose"
      },
      "(0054,0202)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "desc" : [
            "Describes the detector motion during acquisition.",
            {
               "list" : [
                  [
                     "STEP AND SHOOT",
                     "Interrupted motion, acquire only while stationary"
                  ],
                  [
                     "CONTINUOUS",
                     "Gantry motion and acquisition are simultaneous and continuous"
                  ],
                  [
                     "ACQ DURING STEP",
                     "Interrupted motion, acquisition is continuous"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "NM TOMO Acquisition",
         "entity" : "Image",
         "name" : "Type of Detector Motion"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier",
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Sequence"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Sequence"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : [
         {
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Floating Point Value"
         },
         {
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "module" : "NM Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "name" : "Floating Point Value",
            "entity" : "Image"
         }
      ],
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image",
         "module" : "General Image",
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
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : [
         {
            "name" : "Referenced SOP Instance UID",
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "General Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ]
         },
         {
            "name" : "Referenced SOP Instance UID",
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "NM Image",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ]
         }
      ],
      "(0028,3010)[<0>](0028,3006)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "1",
         "module" : "VOI LUT",
         "desc" : "LUT Data in this Sequence.",
         "entity" : "Image",
         "name" : "LUT Data"
      },
      "(0020,0020)" : {
         "entity" : "Image",
         "name" : "Patient Orientation",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  },
                  "el" : "xref"
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0010,1100)" : {
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "Patient",
         "module" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image",
         "name" : "DateTime"
      },
      "(0008,001b)" : {
         "entity" : "Image",
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         ]
      },
      "(0040,9096)[<0>](0040,9210)" : [
         {
            "name" : "LUT Label",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "req" : "1"
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1",
            "usage" : "M",
            "module" : "NM Image",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "entity" : "Image",
            "name" : "LUT Label"
         }
      ],
      "(2050,0020)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "entity" : "Image",
         "name" : "Presentation LUT Shape"
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "usage" : "U - See ",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0020,0052)" : {
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               }
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference",
         "name" : "Frame of Reference UID"
      },
      "(0008,1200)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Image",
         "name" : "Studies Containing Other Referenced Instances Sequence"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Referenced Segment Number"
         },
         {
            "entity" : "Image",
            "name" : "Referenced Segment Number",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "module" : "NM Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
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
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series"
      },
      "(0054,0012)[<0>](0054,0013)[<1>](0054,0015)" : {
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The upper limit of the energy window in KeV. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "NM Isotope",
         "entity" : "Image",
         "name" : "Energy Window Upper Limit"
      },
      "(0054,0022)" : {
         "desc" : [
            "Sequence of Items that describe the detectors used.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Detectors (0054,0021). The first item corresponds to frames with value of 1 in Detector Vector (0054,0020), the second item with value 2, etc."
         ],
         "module" : "NM Detector",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Detector Information Sequence",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,9215)" : {
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.3"
                  }
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Derivation Code Sequence",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : [
         {
            "name" : "DateTime",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M",
            "module" : "NM Image",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ],
            "entity" : "Image",
            "name" : "DateTime"
         }
      ],
      "(0040,9096)[<0>](0040,9213)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ],
                        "attrs" : {
                           "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                        },
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Double Float Real World Value Last Value Mapped"
         },
         {
            "entity" : "Image",
            "name" : "Double Float Real World Value Last Value Mapped",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ]
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ]
         }
      ],
      "(0008,1062)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name"
      },
      "(0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "module" : "Image Pixel",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID Type"
      },
      "(0040,9096)[<0>](0040,9224)" : [
         {
            "name" : "Real World Value Intercept",
            "entity" : "Image",
            "module" : "General Image",
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
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
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
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Real World Value Intercept"
         }
      ],
      "(0050,0010)[<0>](0050,0016)" : {
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
         "module" : "Device",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Device Diameter",
         "entity" : "Image"
      },
      "(0008,114a)" : {
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Instance Sequence",
         "entity" : "Image"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
         "entity" : "Image",
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "module" : "General Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "entity" : "Series"
      },
      "(0028,2000)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M",
            "req" : "3",
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
                        "attrs" : {
                           "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                        },
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
            "module" : "Image Pixel",
            "entity" : "Image",
            "name" : "ICC Profile"
         },
         {
            "entity" : "Image",
            "name" : "ICC Profile",
            "usage" : "U",
            "req" : "1",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "module" : "ICC Profile",
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values."
         }
      ],
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,2228)" : {
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "NM Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "entity" : "Image"
      },
      "(0018,1080)" : {
         "desc" : [
            "Heart beat duration sorting has been applied.",
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
         "module" : "NM Multi-gated Acquisition",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "name" : "Beat Rejection Flag",
         "entity" : "Image"
      },
      "(0010,0026)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0018,0026)[<0>](0018,0028)" : {
         "desc" : "Intervention drug dose, in mg.",
         "module" : "NM Isotope",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "name" : "Intervention Drug Dose",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
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
         "module" : "Specimen"
      },
      "(0054,0012)[<0>](0054,0013)[<1>](0054,0014)" : {
         "name" : "Energy Window Lower Limit",
         "entity" : "Image",
         "module" : "NM Isotope",
         "desc" : [
            "The lower limit of the energy window in KeV. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "name" : "Container Component ID",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0513)" : {
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : [
         {
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "General Image",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "entity" : "Image",
            "name" : "Rational Numerator Value"
         },
         {
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "name" : "Rational Numerator Value",
            "entity" : "Image"
         }
      ],
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : [
         {
            "name" : "Referenced Frame Number",
            "entity" : "Image",
            "module" : "General Image",
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
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
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
                        "attrs" : {
                           "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                        },
                        "el" : "para"
                     },
                     "\n              "
                  ]
               },
               "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
            ],
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Referenced Frame Number"
         }
      ],
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0018,1300)" : {
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "module" : "NM Image",
         "desc" : "The speed of the camera motion over the body in mm/sec. Required if Image Type (0008,0008) Value 3 contains the value WHOLE BODY.",
         "entity" : "Image",
         "name" : "Scan Velocity"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ]
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0054,0016)[<0>](0018,1070)" : {
         "module" : "NM Isotope",
         "desc" : "Route of injection.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "name" : "Radiopharmaceutical Route",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Person Identification Code Sequence"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient"
      },
      "(0054,0022)[<0>](0020,0037)" : {
         "desc" : [
            "The direction cosines of the first row and the first column with respect to the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "NM Detector",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "2",
         "name" : "Image Orientation (Patient)",
         "entity" : "Image"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Accession Number",
         "entity" : "Study"
      },
      "(0010,0218)" : {
         "name" : "Strain Additional Information",
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(60xx,0022)" : {
         "name" : "Overlay Description",
         "entity" : "Image",
         "module" : "Overlay Plane",
         "desc" : "User-defined comments about the overlay.",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0040,0560)" : {
         "entity" : "Image",
         "name" : "Specimen Description Sequence",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "name" : "Responsible Person Role",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0040,0560)[<0>](0040,0554)" : {
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
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen UID",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : [
         {
            "name" : "Numeric Value",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M"
         },
         {
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "NM Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "name" : "Numeric Value",
            "entity" : "Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Time"
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : [
         {
            "name" : "Measurement Units Code Sequence",
            "entity" : "Image",
            "module" : "General Image",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "name" : "Measurement Units Code Sequence",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "usage" : "M",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "module" : "NM Image"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,5020)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "module" : "NM Image",
         "desc" : "Code or description of processing functions applied to the data.",
         "entity" : "Image",
         "name" : "Processing Function"
      },
      "(0010,0212)" : {
         "entity" : "Patient",
         "name" : "Strain Description",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
            "name" : "Samples per Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
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
            "module" : "Image Pixel"
         },
         {
            "name" : "Samples per Pixel",
            "entity" : "Image",
            "desc" : "Number of samples (color planes) in this image. The value shall be 1.",
            "module" : "NM Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "usage" : "M"
         }
      ],
      "(0018,1061)" : [
         {
            "usage" : "C - Required if time synchronization was applied",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-7"
            ],
            "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
            "module" : "Synchronization",
            "entity" : "Frame of Reference",
            "name" : "Trigger Source or Type"
         },
         {
            "entity" : "Image",
            "name" : "Trigger Source or Type",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "module" : "NM Image",
            "desc" : [
               "Text indicating trigger source.",
               {
                  "type" : "variablelist",
                  "list" : [
                     [
                        "EKG",
                        null
                     ]
                  ],
                  "title" : "Defined Terms:"
               }
            ]
         }
      ],
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Image",
         "name" : "MAC ID Number"
      },
      "(0010,0021)" : {
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "entity" : "Patient"
      },
      "(0012,0063)" : {
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method",
         "entity" : "Patient"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "name" : "Institution Address"
      },
      "(0008,0070)" : {
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "2",
         "usage" : "M",
         "name" : "Manufacturer",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "name" : "Value Type",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
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
      "(0028,0109)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The maximum value of all images in this Series.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Largest Pixel Value in Series"
      },
      "(0054,0020)" : {
         "module" : "NM Multi-frame",
         "desc" : [
            "An array that contains the detector number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Detector Vector (0054,0020). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "name" : "Detector Vector",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "name" : "Spatial Locations Preserved",
         "entity" : "Image",
         "module" : "General Image",
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
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
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
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Study Instance UID",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0054,0410)[<0>](0054,0412)" : {
         "name" : "Patient Orientation Modifier Code Sequence",
         "entity" : "Series",
         "desc" : [
            [
               "Patient Orientation Modifier. Required if needed to fully specify the orientation of the patient with respect to gravity. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.4.6.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "NM/PET Patient Orientation",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-5"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
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
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Container Component Material"
      },
      "(0054,0016)[<0>](0008,3012)" : {
         "entity" : "Image",
         "name" : "Radiopharmaceutical Administration Event UID",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Unique identification of the administration of the radiopharmaceutical to the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The UID is the same Radiopharmaceutical Administration Event UID that is in the Radiopharmaceutical Radiation Dose Report."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8b65188d-4c8d-454a-8cce-736db3e4b98d"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "NM Isotope"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : [
         {
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "module" : "General Image",
            "entity" : "Image",
            "name" : "Text Value"
         },
         {
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "module" : "NM Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "name" : "Text Value",
            "entity" : "Image"
         }
      ],
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "entity" : "Image",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Operators' Name",
         "entity" : "Image"
      },
      "(0040,0280)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "entity" : "Series",
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
         "usage" : "M",
         "req" : "1C"
      },
      "(0054,0022)[<0>](0028,0031)" : {
         "desc" : [
            "The amount of magnification applied to each pixel in the image, specified by a numeric pair: row value (delimiter) column value. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.4"
               }
            },
            " for further explanation."
         ],
         "module" : "NM Detector",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "name" : "Zoom Factor",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "HL7 Instance Identifier"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "entity" : "Image",
         "name" : "Specimen Short Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "entity" : "Study",
         "module" : "General Study",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1800)" : {
         "module" : "Synchronization",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
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
               ],
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
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Acquisition Time Synchronized",
         "entity" : "Frame of Reference"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Image"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "2",
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Image",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0028,0011)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "name" : "Columns"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
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
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Digital Signature DateTime"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence"
      },
      "(0028,3010)" : {
         "name" : "VOI LUT Sequence",
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "module" : "VOI LUT",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "1C"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "Image",
         "name" : "Container Component Length",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Length in mm of container component."
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "entity" : "Patient",
         "name" : "Type of Instances",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : [
            "Type of object instances referenced.",
            {
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
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1083)" : {
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "desc" : "Number of heartbeats that fall within Low R-R Value (0018,1081) and High R-R Value (0018,1082), and were therefore accepted and contribute gamma events to this R-R Interval.",
         "module" : "NM Multi-gated Acquisition",
         "entity" : "Image",
         "name" : "Intervals Acquired"
      },
      "(0008,1040)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "name" : "Institutional Department Name"
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,0027)[<0>](0010,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "1",
         "module" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "entity" : "Patient",
         "name" : "Patient ID"
      },
      "(0010,0033)" : {
         "entity" : "Patient",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "Patient",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : [
         {
            "name" : "UID",
            "entity" : "Image",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "module" : "General Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "entity" : "Image",
            "name" : "UID",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "NM Image",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ]
         }
      ],
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "el" : "para"
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Timezone Offset From UTC"
      },
      "(0028,0301)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "name" : "Burned In Annotation"
      },
      "(0008,1070)" : {
         "entity" : "Series",
         "name" : "Operators' Name",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series."
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "entity" : "Series",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Instance UID of Related Series",
         "module" : "General Series"
      },
      "(60xx,1302)" : {
         "entity" : "Image",
         "name" : "ROI Mean",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "3",
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
         "module" : "Overlay Plane"
      },
      "(0008,001a)" : {
         "entity" : "Image",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
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
         ]
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Time"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
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
                              "targetptr" : "PS3.15",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "entity" : "Image"
      },
      "(0054,0052)[<0>](0018,1142)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "req" : "3",
         "module" : "NM TOMO Acquisition",
         "desc" : "Radial distance of the detector from the center of rotation, in mm. It shall have a single value that is an average value for this rotation, or it shall have one value per angular view.",
         "entity" : "Image",
         "name" : "Radial Position"
      },
      "(0020,1041)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "req" : "3",
         "module" : "NM Reconstruction",
         "desc" : [
            "Relative position of the image plane expressed in mm.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "name" : "Slice Location"
      },
      "(0020,1040)" : {
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "U",
         "module" : "Frame of Reference",
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
         ]
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Coercion DateTime",
         "entity" : "Image"
      },
      "(0008,0031)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Time the Series started.",
         "entity" : "Series",
         "name" : "Series Time"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
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
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "name" : "Device Description",
         "entity" : "Image",
         "module" : "Device",
         "desc" : "Further description in free form text describing the device.",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "entity" : "Series"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "entity" : "Image",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
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
         "module" : "General Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "name" : "Container Component Type Code Sequence",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "entity" : "Image",
         "name" : "Simple Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         ]
      },
      "(60xx,1500)" : {
         "entity" : "Image",
         "name" : "Overlay Label",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "desc" : "A user defined text string that may be used to label or name this overlay."
      },
      "(0054,0022)[<0>](0018,1182)" : {
         "name" : "Focal Distance",
         "entity" : "Image",
         "module" : "NM Detector",
         "desc" : [
            "Focal distance, in mm. A value of 0 means infinite distance for parallel collimation. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.1"
               }
            },
            " for further specialization."
         ],
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series"
      },
      "(0008,1115)" : {
         "entity" : "Image",
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Study",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "name" : "Storage Media File-Set ID",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient"
      },
      "(0018,0050)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "req" : "2",
         "desc" : "Nominal slice thickness, in mm.",
         "module" : "NM Reconstruction",
         "entity" : "Image",
         "name" : "Slice Thickness"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "name" : "Protocol Context Sequence"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Image",
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
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "entity" : "Image",
         "name" : "Text Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Image",
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
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0054,0022)[<0>](0018,1147)" : {
         "name" : "Field of View Shape",
         "entity" : "Image",
         "desc" : [
            "Shape of the field of view of the Nuclear Medicine detector.",
            {
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
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "module" : "NM Detector",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ]
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "module" : "General Study",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Class UID",
         "entity" : "Image"
      },
      "(0054,0016)[<0>](0054,0306)[<1>](0054,0308)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "desc" : "The Item number in the Energy Window Information Sequence to which the following calibration data relates. The Items are numbered starting from 1.",
         "module" : "NM Isotope",
         "entity" : "Image",
         "name" : "Energy Window Number"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : [
         {
            "entity" : "Image",
            "name" : "Concept Name Code Sequence",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "module" : "General Image"
         },
         {
            "module" : "NM Image",
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1",
            "usage" : "M",
            "name" : "Concept Name Code Sequence",
            "entity" : "Image"
         }
      ],
      "(0040,a390)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0054,0016)[<0>](0054,0304)" : {
         "module" : "NM Isotope",
         "desc" : [
            "Sequence that identifies the radiopharmaceutical.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "name" : "Radiopharmaceutical Code Sequence",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,1012)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
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
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Software Versions",
         "entity" : "Image"
      },
      "(0028,0008)" : {
         "name" : "Number of Frames",
         "entity" : "Image",
         "module" : "Multi-frame",
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
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-14"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image",
         "name" : "Encrypted Content"
      },
      "(0054,0012)" : {
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "module" : "NM Isotope",
         "desc" : [
            "Sequence of Items that describe the energy window groups used.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Energy Windows (0054,0011). The first item corresponds to frames with value of 1 in the Energy Window Vector (0054,0010), the second item with value 2, etc."
         ],
         "entity" : "Image",
         "name" : "Energy Window Information Sequence"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(60xx,0102)" : {
         "entity" : "Image",
         "name" : "Overlay Bit Position",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     },
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See ",
                        {
                           "el" : "link",
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           }
                        },
                        "."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Overlay Plane"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Image"
      },
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0018,1008)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "name" : "Gantry ID"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,1210)" : {
         "desc" : "A label describing the convolution kernel or algorithm used to reconstruct the data.",
         "module" : "NM Reconstruction",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "name" : "Convolution Kernel",
         "entity" : "Image"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0054,0061)" : {
         "entity" : "Image",
         "name" : "Number of R-R Intervals",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "module" : "NM Multi-frame",
         "desc" : [
            "Number of R-R intervals. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for R-R Interval Vector (0054,0060). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0054,0414)" : {
         "mod_tables" : [
            "table_C.8-5"
         ],
         "req" : "2",
         "usage" : "M",
         "desc" : [
            [
               "Describes the orientation of the patient with respect to the gantry. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.6.1.3"
                  }
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "NM/PET Patient Orientation",
         "entity" : "Series",
         "name" : "Patient Gantry Relationship Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "entity" : "Image",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "SOP Authorization DateTime"
      },
      "(0040,9096)[<0>](0040,9211)" : [
         {
            "entity" : "Image",
            "name" : "Real World Value Last Value Mapped",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ],
                        "attrs" : {
                           "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                        },
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               },
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
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1C",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               },
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
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Real World Value Last Value Mapped"
         }
      ],
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "entity" : "Image",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,2112)" : {
         "entity" : "Image",
         "name" : "Source Image Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "usage" : "M",
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
         "module" : "General Image"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "entity" : "Image",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "entity" : "Patient",
         "name" : "Patient ID"
      },
      "(0008,1062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence"
      },
      "(0018,106c)" : {
         "module" : "Synchronization",
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
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "1C",
         "usage" : "C - Required if time synchronization was applied",
         "name" : "Synchronization Channel",
         "entity" : "Frame of Reference"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "entity" : "Image",
         "name" : "Device Volume",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "usage" : "U",
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
         "module" : "Device"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "DICOM Retrieval Sequence",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "module" : "Specimen",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image"
      },
      "(0008,009c)" : {
         "name" : "Consulting Physician's Name",
         "entity" : "Study",
         "desc" : "Consulting physician(s) for this patient visit.",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
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
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID"
      },
      "(0018,106a)" : {
         "name" : "Synchronization Trigger",
         "entity" : "Frame of Reference",
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
         "module" : "Synchronization",
         "usage" : "C - Required if time synchronization was applied",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer's Model Name",
         "entity" : "Image"
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Frame Extraction"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0054,0072)[<2>](0054,0073)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "desc" : [
            "The total amount of time, in msec, that the acquisition accumulates gamma events into this frame. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.13.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "NM Multi-gated Acquisition",
         "entity" : "Image",
         "name" : "Time Slot Time"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
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
         "entity" : "Image",
         "name" : "Value Type"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0028,0100)" : [
         {
            "name" : "Bits Allocated",
            "entity" : "Image",
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "usage" : "M"
         },
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               {
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
                  ],
                  "type" : "variablelist"
               }
            ],
            "module" : "NM Image Pixel",
            "usage" : "M",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "name" : "Bits Allocated",
            "entity" : "Image"
         }
      ],
      "(0008,1052)[<0>](0040,1101)" : {
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "entity" : "Image"
      },
      "(0018,1030)" : {
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Protocol Name",
         "entity" : "Series"
      },
      "(0028,2110)" : [
         {
            "name" : "Lossy Image Compression",
            "entity" : "Image",
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
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "."
               ]
            ],
            "module" : "General Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M"
         },
         {
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
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     },
                     "el" : "xref"
                  }
               ],
               "Required if Lossy Compression has been performed on the Image. May be present otherwise."
            ],
            "module" : "NM Image",
            "usage" : "M",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "name" : "Lossy Image Compression",
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Private Creator Reference",
         "entity" : "Image"
      },
      "(0008,0117)" : {
         "entity" : "Image",
         "name" : "Context UID",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0022,0028)" : {
         "name" : "Stereo Pairs Present",
         "entity" : "Image",
         "module" : "Multi-frame",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.6.1.3"
                  }
               },
               "for further explanation."
            ],
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-14"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "name" : "Series Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "module" : "Acquisition Context",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence"
      },
      "(0054,0022)[<0>](0018,1145)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "desc" : [
            "Average center of rotation offset of Nuclear Medicine detector in mm. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Detector",
         "entity" : "Image",
         "name" : "Center of Rotation Offset"
      },
      "(0008,1140)" : {
         "entity" : "Image",
         "name" : "Referenced Image Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Image"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "usage" : "M",
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
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
                           "el" : "listitem",
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
                           "el" : "listitem",
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
      "(60xx,0050)" : {
         "entity" : "Image",
         "name" : "Overlay Origin",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "1",
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     },
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Overlay Plane"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "module" : "General Study",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1",
         "module" : "Specimen",
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
         "entity" : "Image",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "usage" : "U",
         "req" : "3",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "entity" : "Image"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series"
      },
      "(0008,009d)[<0>](0040,1101)" : {
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
      "(0010,0219)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Strain Code Sequence",
         "entity" : "Patient"
      },
      "(0054,0022)[<0>](0018,1149)" : {
         "module" : "NM Detector",
         "desc" : [
            "Dimensions of the field of view, in mm. If Field of View Shape (0018,1147) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of a circumscribed circle."
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "name" : "Field of View Dimension(s)",
         "entity" : "Image"
      },
      "(0054,0012)[<0>](0054,0018)" : {
         "entity" : "Image",
         "name" : "Energy Window Name",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "module" : "NM Isotope",
         "desc" : "A user defined name that describes this Energy Window."
      },
      "(0018,1085)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "3",
         "desc" : "Description of type of arrhythmic beat rejection criteria used.",
         "module" : "NM Multi-gated Acquisition",
         "entity" : "Image",
         "name" : "PVC Rejection"
      },
      "(0054,0071)" : {
         "name" : "Number of Time Slots",
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "desc" : [
            "Number of time slots. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slot Vector (0054,0070). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.7"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(60xx,0045)" : {
         "entity" : "Image",
         "name" : "Overlay Subtype",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "req" : "3",
         "usage" : "U",
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
         "module" : "Overlay Plane"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Image",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "name" : "Series Description",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series",
         "module" : "General Series"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Image",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0028,0051)" : {
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "One or more values that indicate which, if any, corrections have been applied to the image. Corrections are applied to all frames in the image.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "UNIF",
                     "flood corrected"
                  ],
                  [
                     "COR",
                     "center of rotation corrected"
                  ],
                  [
                     "NCO",
                     "non-circular orbit corrected"
                  ],
                  [
                     "DECY",
                     "decay corrected"
                  ],
                  [
                     "ATTN",
                     "attenuation corrected"
                  ],
                  [
                     "SCAT",
                     "scatter corrected"
                  ],
                  [
                     "DTIM",
                     "dead time corrected"
                  ],
                  [
                     "NRGY",
                     "energy corrected"
                  ],
                  [
                     "LIN",
                     "linearity corrected"
                  ],
                  [
                     "MOTN",
                     "motion corrected"
                  ],
                  [
                     "CLN",
                     "count loss normalization; Any type of normalization applied to correct for count loss in Time Slots."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "NM Image",
         "entity" : "Image",
         "name" : "Corrected Image"
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
         "module" : "Frame Extraction",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Time Range",
         "entity" : "Image"
      },
      "(0054,0062)[<0>](0054,0063)" : {
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "req" : "2",
         "desc" : [
            "Sequence of Items that describe gating criteria.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.13.1.1"
                  }
               },
               "."
            ]
         ],
         "module" : "NM Multi-gated Acquisition",
         "entity" : "Image",
         "name" : "Data Information Sequence"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "module" : "Specimen",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "name" : "Specimen Type Code Sequence",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "entity" : "Image",
         "name" : "Floating Point Value",
         "usage" : "U - See ",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,0027)[<0>](0010,0028)" : {
         "name" : "Subject Relative Position in Image",
         "entity" : "Patient",
         "module" : "Patient",
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
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image",
         "name" : "Universal Entity ID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Text Value"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0054,0022)[<0>](0018,1110)" : {
         "entity" : "Image",
         "name" : "Distance Source to Detector",
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "module" : "NM Detector",
         "desc" : "Distance in mm from transmission source to the detector face. Required if Image Type (0008,0008) Value 4 is TRANSMISSION and Value 3 is not any of TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO."
      },
      "(0018,0088)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "req" : "2",
         "desc" : "Spacing between slices, in mm, measured from center-to-center of each slice along the normal to the first image. The sign of the Spacing Between Slices (0018,0088) determines the direction of stacking. The normal is determined by the cross product of the direction cosines of the first row and first column of the first frame, such that a positive spacing indicates slices are stacked behind the first slice and a negative spacing indicates slices are stacked in front of the first slice. See Image Orientation (0020,0037) in the NM Detector module.",
         "module" : "NM Reconstruction",
         "entity" : "Image",
         "name" : "Spacing Between Slices"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "name" : "Color Space",
         "entity" : "Image",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0054,0022)[<0>](0018,1120)" : {
         "entity" : "Image",
         "name" : "Gantry/Detector Tilt",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "desc" : [
            "Angle of tilt in degrees of the detector. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "NM Detector"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0410))",
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0412))",
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0414))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
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
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0300))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0304))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.8-11 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-11 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
