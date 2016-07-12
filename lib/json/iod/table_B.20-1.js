var data = 
{
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2020,00a2)" : {
         "module" : "Printer Configuration",
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "req" : [
            "Indicates whether the printer will decimate or crop image pixels if the image rows or columns is greater than the available printable pixels in an Image Box.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.13.5"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Enumerated Values when the printer does not support Requested Decimate/Crop Behavior (2020,0040):",
               "type" : "variablelist",
               "list" : [
                  [
                     "DECIMATE",
                     "image will be decimated to fit."
                  ],
                  [
                     "CROP",
                     "image will be cropped to fit."
                  ],
                  [
                     "FAIL",
                     "N-SET of the Image Box will fail."
                  ]
               ]
            },
            {
               "title" : "Enumerated Values when the printer supports Requested Decimate/Crop Behavior (2020,0040):",
               "list" : [
                  [
                     "DEF DECIMATE",
                     "image will be decimated to fit."
                  ],
                  [
                     "DEF CROP",
                     "image will be cropped to fit."
                  ],
                  [
                     "DEF FAIL",
                     "N-SET of the Image Box will fail."
                  ]
               ],
               "type" : "variablelist"
            },
            "This value indicates the printer default if the SCU does not create or set Requested Decimate/Crop Behavior for the Image Box."
         ],
         "name" : "Decimate/Crop Result"
      },
      "(0008,0070)" : {
         "desc" : null,
         "mod_tables" : [
            "table_C.13-9"
         ],
         "req" : "Manufacturer of the printer.",
         "entity" : "",
         "usage" : "Contains information about the printer",
         "module" : "Printer",
         "name" : "Manufacturer"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2000,00a2)" : {
         "name" : "Media Installed Sequence",
         "module" : "Printer Configuration",
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "req" : [
            "A sequence that specifies the combinations of Medium Type and Film Size IDs available in the printer at this time and the Min and Max Densities supported by these media.",
            "The Item Number with the value of 1 is the printer default. There is no significance to other item numbers.",
            "One item for each Medium Type and Film Size ID installed shall be included."
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Institution Name"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "req" : "1C",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.2"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "MAC Parameters Sequence"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "entity" : "",
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
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry"
      },
      "(2000,001e)[<0>](2010,00a9)" : {
         "name" : "Other Smoothing Types Available",
         "module" : "Printer Configuration",
         "usage" : "Contains Printer Configuration Information",
         "req" : [
            "Other smoothing types available in the printer. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.13.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "desc" : null
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "entity" : "",
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
               "el" : "note",
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
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0018,9004)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
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
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
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
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Instance Coercion DateTime"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "MAC ID Number"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
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
                           ]
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
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
                                 },
                                 "el" : "para"
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
         "entity" : ""
      },
      "(2000,001e)[<0>](2010,00a6)" : {
         "name" : "Default Magnification Type",
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "req" : [
            "Printer's default magnification type. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.13.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Defined Terms."
         ],
         "module" : "Printer Configuration"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Date of Last Calibration"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](0028,0010)" : {
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "req" : "Number of printable rows in an Image Box.",
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "entity" : "",
         "name" : "Rows"
      },
      "(2110,0020)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-9"
         ],
         "usage" : "Contains information about the printer",
         "req" : [
            "Additional information about Printer Status (2110,0010).",
            {
               "title" : "Defined Terms if Printer Status (2110,0010) is NORMAL:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.13.9.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms when the Printer Status is equal to WARNING or FAILURE."
            ]
         ],
         "module" : "Printer",
         "name" : "Printer Status Info"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "entity" : "",
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0106)" : {
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "name" : "Context Group Version"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.3"
               }
            },
            "."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Referenced Segment Number"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3",
         "name" : "Certified Timestamp"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2010,0040)" : {
         "name" : "Film Orientation",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "req" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.13.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "entity" : "",
         "usage" : "Contains Printer Configuration Information",
         "module" : "Printer Configuration"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Context UID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institution Code Sequence"
      },
      "(2000,001e)[<0>](0008,115a)" : {
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "req" : "The Meta-SOP Class and a list of optional SOP Classes supported. It shall contain one Meta SOP Class UID and 0-n optional SOP Class UIDs.",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration",
         "name" : "SOP Classes Supported"
      },
      "(0008,001a)" : {
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID"
      },
      "(2000,001e)[<0>](2000,00a8)" : {
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ],
         "req" : [
            "A sequence that specifies the Image Display Formats supported, rows and columns in Image Boxes for each format, pixel spacing, and whether Requested Image Size is supported as a function of Film Orientation, Film Size ID, and Printer Resolution ID.",
            "One item for each display format, film orientation, film size, and printer resolution combination shall be included."
         ],
         "usage" : "Contains Printer Configuration Information",
         "module" : "Printer Configuration",
         "name" : "Supported Image Display Formats Sequence"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Coding Scheme Version"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2010,0050)" : {
         "name" : "Film Size ID",
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               }
            }
         ],
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(2000,001e)[<0>](2000,00a4)[<1>](2010,0050)" : {
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "req" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               },
               "el" : "xref"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration",
         "name" : "Film Size ID"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "",
         "name" : "Spatial Resolution"
      },
      "(0008,0118)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "MAC ID Number"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2010,0376)" : {
         "name" : "Printer Pixel Spacing",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "req" : [
            "Physical distance on the printed film between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing in mm. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               },
               "el" : "xref"
            },
            " for further explanation of the value order."
         ],
         "usage" : "Contains Printer Configuration Information",
         "entity" : "",
         "desc" : null,
         "module" : "Printer Configuration"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2010,0054)" : {
         "module" : "Printer Configuration",
         "req" : [
            "The printer's default resolution identification. Defined Terms are the same as Requested Resolution ID (2020,0050). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.13.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "name" : "Default Printer Resolution ID"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
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
               ],
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
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
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "Manufacturer's serial number of the printer.",
         "usage" : "Contains information about the printer",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-9"
         ],
         "desc" : null,
         "module" : "Printer"
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "entity" : "",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID"
      },
      "(0008,1090)" : {
         "module" : "Printer",
         "usage" : "Contains information about the printer",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-9"
         ],
         "req" : "Manufacturer's model number of the printer.",
         "name" : "Manufacturer Model Name"
      },
      "(0008,0110)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Encrypted Content"
      },
      "(2000,001e)[<0>](2010,00a8)" : {
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "req" : [
            "Printer's default smoothing type. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               }
            },
            "."
         ],
         "desc" : null,
         "entity" : "",
         "module" : "Printer Configuration",
         "name" : "Default Smoothing Type"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2010,0010)" : {
         "name" : "Image Display Format",
         "usage" : "Contains Printer Configuration Information",
         "req" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               },
               "el" : "xref"
            }
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "module" : "Printer Configuration"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence"
      },
      "(2000,001e)[<0>](2000,00a4)[<1>](2010,0130)" : {
         "name" : "Max Density",
         "module" : "Printer Configuration",
         "usage" : "Contains Printer Configuration Information",
         "req" : "Maximum density that can be printed, expressed in hundredths of OD.",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ]
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
      "(0008,0124)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Mapping Resource Identification Sequence"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2020,00a0)" : {
         "module" : "Printer Configuration",
         "entity" : "",
         "usage" : "Contains Printer Configuration Information",
         "req" : [
            "Indicates whether the printer supports Requested Image Size (2020,0030) for this display format and film orientation and size combination.",
            {
               "list" : [
                  [
                     "NO",
                     "not supported"
                  ],
                  [
                     "YES",
                     "supported"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "name" : "Requested Image Size Flag"
      },
      "(2000,001e)[<0>](2000,00a4)[<1>](2000,0030)" : {
         "name" : "Medium Type",
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "desc" : null,
         "req" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.13.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "usage" : "Contains Printer Configuration Information"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Reason for the Attribute Modification"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "entity" : "",
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
         "module" : "SOP Common"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "entity" : "",
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
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2010,0154)" : {
         "name" : "Maximum Collated Films",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ],
         "usage" : "Contains Printer Configuration Information",
         "entity" : "",
         "req" : "The maximum number of films that can be collated for an N-ACTION of the Film Session. The value shall be 0 if N-ACTION of the Film Session is not supported.",
         "module" : "Printer Configuration"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "1",
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
         "usage" : "Contains SOP Common Information",
         "name" : "Signature"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2000,00a4)" : {
         "name" : "Other Media Available Sequence",
         "module" : "Printer Configuration",
         "req" : [
            "A sequence that specifies combinations of Medium Type and Film Size ID for which the printer will accept an N-CREATE of a Film Box, but are not physically installed in the printer at this time. It also specifies the Min and Max Densities supported by these media. User intervention may be required to instal these media in the printer.",
            "One item for each Medium Type and Film Size ID available, but not installed shall be included."
         ],
         "usage" : "Contains Printer Configuration Information",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(2000,001e)[<0>](2010,00a7)" : {
         "name" : "Other Magnification Types Available",
         "entity" : "",
         "req" : [
            "Other magnification types available in the printer. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               },
               "el" : "xref"
            },
            " for Defined Terms."
         ],
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "module" : "Printer Configuration"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](0028,0011)" : {
         "name" : "Columns",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "entity" : "",
         "req" : "Number of printable columns in an Image Box",
         "usage" : "Contains Printer Configuration Information",
         "module" : "Printer Configuration"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence"
      },
      "(2000,001e)[<0>](2000,00a4)[<1>](2010,0120)" : {
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "usage" : "Contains Printer Configuration Information",
         "req" : "Minimum density that can be printed, expressed in hundredths of OD.",
         "entity" : "",
         "desc" : null,
         "name" : "Min Density"
      },
      "(2000,001e)[<0>](2000,00a2)[<1>](2010,0130)" : {
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "req" : "Maximum density that can be printed, expressed in hundredths of OD.",
         "entity" : "",
         "usage" : "Contains Printer Configuration Information",
         "name" : "Max Density"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Instance Creation Time"
      },
      "(0018,1020)" : {
         "module" : "Printer",
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.13-9"
         ],
         "usage" : "Contains information about the printer",
         "req" : "Manufacturer's designation of software version of the printer.",
         "name" : "Software Versions"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2000,00a0)" : {
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "req" : "The maximum number of bits for each pixel that can be stored in printer memory.",
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "entity" : "",
         "name" : "Memory Bit Depth"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime"
      },
      "(2000,001e)[<0>](2000,00a1)" : {
         "name" : "Printing Bit Depth",
         "module" : "Printer Configuration",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "desc" : null,
         "req" : "The number of bits used by the print engine for internal LUT calculation and printing of each pixel.",
         "usage" : "Contains Printer Configuration Information"
      },
      "(2000,001e)[<0>](2000,0061)" : {
         "name" : "Maximum Memory Allocation",
         "entity" : "",
         "req" : "Maximum number of kilobytes of memory that can be allocated for a Film Session. The value shall be 0 if Memory Allocation (2000,0060) is not supported.",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ],
         "usage" : "Contains Printer Configuration Information",
         "module" : "Printer Configuration"
      },
      "(0020,0013)" : {
         "name" : "Instance Number",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "entity" : "",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2000,001e)[<0>](2000,00a2)[<1>](0020,0019)" : {
         "req" : "A number that labels this item. Each item in the sequence shall have a unique number.",
         "entity" : "",
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration",
         "name" : "Item Number"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "name" : "Digital Signatures Sequence"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Operators' Name"
      },
      "(2000,001e)[<0>](2000,00a2)[<1>](2010,0050)" : {
         "name" : "Film Size ID",
         "module" : "Printer Configuration",
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.3"
               }
            }
         ],
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "desc" : null
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Timezone Offset From UTC"
      },
      "(2110,0010)" : {
         "name" : "Printer Status",
         "module" : "Printer",
         "req" : [
            "Printer device status.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     null
                  ],
                  [
                     "WARNING",
                     null
                  ],
                  [
                     "FAILURE",
                     null
                  ]
               ]
            }
         ],
         "desc" : null,
         "usage" : "Contains information about the printer",
         "mod_tables" : [
            "table_C.13-9"
         ],
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "name" : "Private Group Reference",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0008,0122)" : {
         "name" : "Mapping Resource Name",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2110,0030)" : {
         "name" : "Printer Name",
         "module" : "Printer",
         "usage" : "Contains information about the printer",
         "desc" : null,
         "req" : "User defined name identifying the printer.",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-9"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "",
         "name" : "Manufacturer's Model Name"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common"
      },
      "(2000,001e)[<0>](2010,0152)" : {
         "name" : "Configuration Information Description",
         "module" : "Printer Configuration",
         "usage" : "Contains Printer Configuration Information",
         "desc" : null,
         "req" : "A free form text description of Configuration Information (2010,0150) supported by the printer.",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ]
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "SOP Instance Status"
      },
      "(2000,001e)[<0>](2000,00a8)[<1>](2010,0052)" : {
         "name" : "Printer Resolution ID",
         "usage" : "Contains Printer Configuration Information",
         "req" : [
            "Printer Resolution identification. Defined Terms are the same as Requested Resolution ID (2020,0050). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.13.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "desc" : null,
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration"
      },
      "(0018,1200)" : {
         "module" : "Printer",
         "usage" : "Contains information about the printer",
         "desc" : null,
         "req" : "Date when the printer was last calibrated.",
         "mod_tables" : [
            "table_C.13-9"
         ],
         "entity" : "",
         "name" : "Date Of Last Calibration"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0018,1201)" : {
         "req" : "Time when the printer was last calibrated.",
         "usage" : "Contains information about the printer",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-9"
         ],
         "entity" : "",
         "module" : "Printer",
         "name" : "Time Of Last Calibration"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
         ]
      },
      "(2000,001e)[<0>](2000,00a2)[<1>](2010,0120)" : {
         "entity" : "",
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "desc" : null,
         "req" : "Minimum density that can be printed, expressed in hundredths of OD.",
         "module" : "Printer Configuration",
         "name" : "Min Density"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "entity" : "",
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
                           "el" : "listitem",
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
                           ]
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address"
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "name" : "SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "usage" : "Contains SOP Common Information",
         "req" : "1C"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "",
         "name" : "Instance Creator UID"
      },
      "(2000,001e)[<0>](2000,00a2)[<1>](2000,0030)" : {
         "module" : "Printer Configuration",
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.13.1"
               }
            }
         ],
         "desc" : null,
         "usage" : "Contains Printer Configuration Information",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "entity" : "",
         "name" : "Medium Type"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Instance Creation Date"
      },
      "(2000,001e)" : {
         "name" : "Printer Configuration Sequence",
         "desc" : null,
         "req" : [
            "Contains printer configuration information for a single Application Entity title. See Print Management Service Class Structure in ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ". The sequence shall contain one item for each physical printer/Meta SOP Class combination supported by the Application Entity title."
         ],
         "usage" : "Contains Printer Configuration Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-13"
         ],
         "module" : "Printer Configuration"
      }
   }
}
