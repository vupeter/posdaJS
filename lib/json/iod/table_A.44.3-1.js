var data = 
{
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0008,1032))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.23.1-1:table_C.23.4-2 after (0072,0080))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0072,003E))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0072,000E))",
      "Can't handle table_8.8-1 (in table_C.23.3-1:table_C.23.4-2 after (0072,0080))"
   ],
   "tags" : {
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0072,0200)[<0>](0072,0704)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Pseudo-Color Type",
         "desc" : [
            "A category of pseudo-color palette choice to be applied after application of the VOI LUT. If this attribute is not present, a pseudo-color palette shall not be applied.",
            [
               "Defined Terms are the values of Content Label (0070,0080) in the list of standard color palettes defined in ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.6",
                     "targetdoc" : "PS3.6"
                  }
               },
               " Well-Known Color Palettes."
            ]
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0008,0105)" : {
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
         "name" : "Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,000c)[<0>](0008,1032)" : {
         "entity" : "Hanging Protocol",
         "req" : "2",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies a procedure to which this Hanging Protocol applies.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "name" : "Mapping Resource UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "orderedlist",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0018,1244)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Preferred Playback Sequencing",
         "desc" : [
            "Describes the preferred playback sequencing for the Image Box. Overrides any Preferred Playback Sequencing (0018,1244) value in the image objects being displayed.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE.",
            {
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n-1,\u20262,1,2,\u2026n,\u2026)"
                  ],
                  [
                     "2",
                     "Stop (1,2\u2026n)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0602)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Sort-by Category",
         "desc" : [
            [
               "Category of the sorting operation. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "ALONG_AXIS",
                     "for CT, MR, other cross-sectional image sets"
                  ],
                  [
                     "BY_ACQ_TIME",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if Selector Attribute (0072,0026) is not present."
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006c)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "name" : "Selector SH Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para",
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
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
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
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "module" : "SOP Common"
      },
      "(0072,0012)[<0>](0008,1150)" : {
         "module" : "Hanging Protocol Definition",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_10-11"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0016)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "name" : "SOP Class UID",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0310)" : {
         "desc" : [
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "VERTICAL",
                     "scroll images by row"
                  ],
                  [
                     "HORIZONTAL",
                     "scroll images by column"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1."
         ],
         "name" : "Image Box Scroll Direction",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Creator Reference",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0320)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "If this Image Box overlaps in spatial position with others, this attribute indicates the layer of this Image Box in relation to the others. The value shall be a positive integer in the range 1 to 100, where 1 = top and 100 = bottom.",
            "If this attribute is not present, then the expected behavior is not defined."
         ],
         "name" : "Image Box Overlap Priority",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0024)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "name" : "Image Set Selector Usage Flag",
         "desc" : [
            "Indicates the behavior of matching against an image object when Selector Attribute (0072,0026) is not available in the image object.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MATCH",
                     "If the attribute is not in the image object, consider the image to be a match anyway."
                  ],
                  [
                     "NO_MATCH",
                     "If the attribute is not in the image object, then do not consider the image to be a match."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0072,0200)[<0>](0072,0520)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "3D Rendering Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Describes the intended 3D rendering type. One or more values shall be present. The first value shall not be zero length. Required if the value of Reformatting Operation Type (0072,0510) is 3D_RENDERING:",
            {
               "title" : "Defined Terms for Value 1:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MIP",
                     null
                  ],
                  [
                     "SURFACE",
                     null
                  ],
                  [
                     "VOLUME",
                     null
                  ]
               ]
            },
            "Additional values may be used to identify implementation specific sub-types."
         ]
      },
      "(0008,0123)" : {
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0306)" : {
         "name" : "Image Box Tile Horizontal Dimension",
         "desc" : [
            "Positive integer defining the horizontal Image Box tile dimension; the number of columns.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0054)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute."
      },
      "(0072,0200)[<0>](0072,0600)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "2",
         "desc" : [
            "Sequence that defines sorting criteria to be applied to the result of filter and reformat operations, to define the order in which to present the images in the Image Boxes.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Sorting Operations Sequence",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0203)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : "Description of the objective of the display set defined by this sequence item.",
         "name" : "Display Set Label",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0072,0214)[<0>](0072,0216)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Display Set Number (0072,0202) of the Display Set where the geometric relationship to the Reference Display Sets (0072,0218) is graphically depicted.",
            "Required if there is a one-way interaction such that the location of the Reference Display Sets is indicated on or controlled by the Navigation Display Set.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_453d9c9e-164e-4e10-82d4-9cd83aea09b2"
                     },
                     "content" : [
                        "For example, the graphical representation may indicate either the number of slices displayed or contained in the Reference Display Set(s)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Navigation Display Set"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0004)" : {
         "desc" : "Explanation of the objective or intent of the Hanging Protocol.",
         "name" : "Hanging Protocol Description",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0316)" : {
         "name" : "Image Box Large Scroll Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Defines the type of large increment scrolling to be applied to this Image Box.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1.",
            {
               "list" : [
                  [
                     "PAGE",
                     "In a TILED image box, replace all image slots with the next N x M images in the set."
                  ],
                  [
                     "ROW_COLUMN",
                     "In a TILED image box, move each row or column of images to the next row or column, depending on Image Box Scroll Direction (0072,0310)."
                  ],
                  [
                     "IMAGE",
                     "In a TILED image box, move each image to the next slot, either horizontally or vertically, depending on Image Box Scroll Direction (0072,0310)."
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
                        "If there are multiple image boxes of different Tile Dimensions in a Display Set, then only IMAGE scrolling applies, and the value of the attribute is ignored."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2ea9e7b0-ee1b-4b7d-9d7f-b73bd66419f6"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0026)" : {
         "module" : "Hanging Protocol Display",
         "name" : "Selector Attribute",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            [
               "Data Element Tag of an Attribute from an Image IOD to be used for sorting. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for potential attributes."
            ],
            "Required if Sort-by Category (0072,0602) is not present."
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0008,0005)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Specific Character Set"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0516)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Initial view of the reformatted images.",
            "Required if the value of Reformatting Operation Type (0072,0510) is MPR or 3D_RENDERING. May be present otherwise.",
            {
               "list" : [
                  [
                     "SAGITTAL",
                     null
                  ],
                  [
                     "TRANSVERSE",
                     null
                  ],
                  [
                     "CORONAL",
                     null
                  ],
                  [
                     "OBLIQUE",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Reformatting Operation Initial View Direction",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0068)" : {
         "module" : "Hanging Protocol Display",
         "name" : "Selector LT Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0406)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            [
               "Operation to be applied between the value(s) in the Hanging Protocol Selector Attribute Value Macro (\"selector\"), and the value(s) of the attribute identified by Selector Attribute (0072,0026) (or the value implied by the Filter-by Category (0072,0402)) in each image of the Image Set. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Filter-by Category (0072,0402) is present, or if Selector Attribute (0072,0026) is present and Filter-by Attribute Presence (0072,0404) is not present.",
            {
               "list" : [
                  [
                     "RANGE_INCL",
                     "all values lie within the specified range, or are equal to the endpoints; applies only to numeric Selector Attribute (0072,0026) values; two values shall be present in the selector, the first of which is less than or equal to the second"
                  ],
                  [
                     "RANGE_EXCL",
                     "all values lie outside the specified range, and are not equal to the endpoints; applies only to numeric Selector Attribute (0072,0026) values; two values shall be present in the selector, the first of which is less than or equal to the second"
                  ],
                  [
                     "GREATER_OR_EQUAL",
                     "all values are greater than or equal to the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "LESS_OR_EQUAL",
                     "all values are less than or equal to the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "GREATER_THAN",
                     "all values are greater than the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "LESS_THAN",
                     "all values are less than the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "MEMBER_OF",
                     "one of the values in the image is present in the values of the selector; if one value is present in each, this is an \"equal to\" operator"
                  ],
                  [
                     "NOT_MEMBER_OF",
                     "none of the values in the image is present in the values of the selector; if one value is present in each, this is a \"not equal to\" operator"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Filter-by Operator",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0070)" : {
         "module" : "Hanging Protocol Display",
         "name" : "Selector UT Value",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Hanging Protocol",
         "req" : "2C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0066)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector LO Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ]
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003c)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Identifies a prior image set in abstract terms.",
            "Exactly two integer values, indicating the range of prior studies to include. Each value shall be greater than zero, where 1 indicates the most recent prior and higher values indicate successively older priors. The special value -1 shall indicate the oldest prior.",
            {
               "el" : "note",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The value pair n\\n indicates the nth prior."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_0c83b5f3-24fe-40e7-ba74-bc370414bb47"
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
                                    "The value pair -1\\-1 indicates the oldest prior."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_14514a34-ac07-4766-8489-1193f6c814df"
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
                                    "xml:id" : "para_7ba5848b-e609-493a-90f9-aa31eec2d29f"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The value pair m\\n indicates the mth through nth priors, where m is the more recent prior."
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
                                    "xml:id" : "para_e9147ba4-4ac8-44b9-a822-9bfbc0de4e4e"
                                 },
                                 "content" : [
                                    "The value pair 1\\-1 indicates all priors."
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
                                 "attrs" : {
                                    "xml:id" : "para_d24b1c56-9f70-4902-86e2-08f3462db8bd"
                                 },
                                 "content" : [
                                    "The value pair m\\-1 indicates the mth prior and all priors older than m."
                                 ],
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
            },
            "Required if Image Set Selector Category (0072,0034) is ABSTRACT_PRIOR and Abstract Prior Code Sequence (0072,003E) is not present."
         ],
         "name" : "Abstract Prior Value",
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Display Sets Sequence",
         "desc" : [
            "Sequence that describes one or more display sets used to present the Image Sets defined in the Image Sets Sequence (0072,0020).",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,000a)" : {
         "name" : "Hanging Protocol Creation DateTime",
         "desc" : "Date and time on which the Hanging Protocol was created.",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0020,0013)" : {
         "name" : "Instance Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector Code Sequence Value",
         "desc" : [
            [
               "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this Sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.4.2.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ, and Selector Attribute (0072,0026) is a code sequence."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0054)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0700)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "desc" : [
            "Patient direction of the rows and columns of the images, as intended for display. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.23.3.1.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Display Set Patient Orientation",
         "module" : "Hanging Protocol Display"
      },
      "(0072,0106)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the intended number of columns of the addressable area of the screen in pixels.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The goal is not absolute size matching."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0abcb68f-12d5-4cb8-97c0-155c65609f74"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Number of Horizontal Pixels",
         "mod_tables" : [
            "table_C.23.2-2"
         ]
      },
      "(0072,0002)" : {
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : "Short descriptor that identifies the Hanging Protocol.",
         "name" : "Hanging Protocol Name",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0008,0014)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0070)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector UT Value",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007e)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector SS Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0500)" : {
         "name" : "Blending Operation Type",
         "desc" : [
            [
               "Type of blending of superimposed and underlying images from the image set, performed before reformatting. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "COLOR",
                     "apply a pseudo-color to the superimposed image while blending"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007a)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ],
         "name" : "Selector US Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0705)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Pseudo-Color Palette Instance Reference Sequence",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Reference to a Color Palette Storage Instance to be applied after application of the VOI LUT.",
            "Only a single Item shall be included in this Sequence.",
            "The Referenced SOP Class UID (0008,1150) shall be \"1.2.840.10008.5.1.4.39.1\".",
            [
               "If the value of Pseudo-Color Type (0072,0704) is a reference to the Content Label (0070,0080) of a standard palette, the Referenced SOP Instance UID (0008,1155) shall be the corresponding Well-known SOP Instance UID defined in ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.6",
                     "targetdoc" : "PS3.6"
                  }
               },
               "."
            ],
            "Required if Pseudo-Color Type (0072,0704) is a reference to a standard palette. May be present otherwise if Pseudo-Color Type (0072,0704) is present."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Original Attributes Sequence",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0052)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Sequence Pointer",
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0104)" : {
         "name" : "Number of Vertical Pixels",
         "desc" : [
            "Positive integer indicating the intended number of rows of the addressable area of the screen in pixels.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0f1ccf49-e282-43c1-81d8-2fa8fad6299b"
                     },
                     "content" : [
                        "The goal is not absolute size matching."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "module" : "Hanging Protocol Environment",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0052)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "name" : "Selector Sequence Pointer",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0074)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD."
         ],
         "name" : "Selector FD Value",
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003a)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Units of time for Relative Time (0072,0038).",
            {
               "list" : [
                  [
                     "SECONDS",
                     null
                  ],
                  [
                     "MINUTES",
                     null
                  ],
                  [
                     "HOURS",
                     null
                  ],
                  [
                     "DAYS",
                     null
                  ],
                  [
                     "WEEKS",
                     null
                  ],
                  [
                     "MONTHS",
                     null
                  ],
                  [
                     "YEARS",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if Relative Time (0072,0038) is present."
         ],
         "name" : "Relative Time Units",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0302)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : "A monotonically increasing integer that identifies the order of image boxes for scrolling, starting from 1, incrementing by 1, unique within a Display Set Sequence Item.",
         "name" : "Image Box Number",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0020,9167)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "name" : "Functional Group Pointer",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0060)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector AT Value"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
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
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       }
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                "
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "For example:"
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
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
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0080)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "desc" : [
            [
               "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this Sequence. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.4.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ, and Selector Attribute (0072,0026) is a code sequence."
         ],
         "name" : "Selector Code Sequence Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "name" : "Signature",
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007f)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UI."
         ],
         "name" : "Selector UI Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0054)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute.",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0020,9167)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Functional Group Pointer",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
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
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0514)" : {
         "module" : "Hanging Protocol Display",
         "name" : "Reformatting Interval",
         "desc" : [
            "The desired spacing of the reformatted images in millimeters. The spacing is measured from the center-to-center of each reconstructed image.",
            "Required if value of Reformatting Operation Type (0072,0510) is SLAB or MPR. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,010c)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "desc" : [
            "Positive integer indicating the desired minimum total number of bits per color channel used to present a pixel.",
            "Required if Screen Minimum Grayscale Bit Depth (0072,010A) is not present.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "A 24-bit color system with 8 bits per color channel (red, green, blue) would have a value of 8."
                     ],
                     "attrs" : {
                        "xml:id" : "para_f8f9e111-ea5c-49d7-8249-3d33b836353a"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Screen Minimum Color Bit Depth",
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "module" : "Hanging Protocol Environment"
      },
      "(0040,a390)[<0>](0040,e010)" : {
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0064)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector IS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS. Some leniency in precision and format (including padding with spaces and leading zeros, e.g., \"001\" = \" 1 \" = \"1\") will be required."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0214)[<0>](0072,0218)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "desc" : [
            "One or more Display Set Number (0072,0202) values.",
            "If Navigation Display Set is present, shall list those Display Sets that are controlled by or indicated on the Navigation Display Set.",
            "If Navigation Display Set is absent, shall indicate that all of the Reference Display Sets cross-reference each other."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Reference Display Sets",
         "module" : "Hanging Protocol Display"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0076)" : {
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector FL Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL."
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0108)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "desc" : [
            "Exactly four dimensionless floating point values indicating the rectangular coordinate position of the screen within the overall bounding box that encompasses all the screens. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.23.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Display Environment Spatial Position",
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "module" : "Hanging Protocol Environment"
      },
      "(0072,0200)[<0>](0072,0714)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Show Patient Demographics Flag",
         "desc" : [
            "Indicates whether or not to display patient and study identification information.",
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
         "module" : "Hanging Protocol Display"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0062)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "name" : "Selector CS Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0108)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Exactly four unitless floating point values indicating the rectangular coordinate position of the image box within the overall bounding box that encompasses all the display space (across all screens). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.23.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Display Environment Spatial Position",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol"
      },
      "(0100,0410)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0060)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector AT Value",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "desc" : [
            "The name of the Mapping Resource.",
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
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0020,9167)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "name" : "Functional Group Pointer",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0078)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ],
         "name" : "Selector UL Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0018,9004)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification"
      },
      "(0028,0303)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Longitudinal Temporal Information Modified",
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
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0026)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "Data Element Tag of an Attribute from an Image IOD to use as a filter. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.1"
                  }
               },
               " for potential attributes."
            ],
            "Required if Filter-by Category (0072,0402) is not present."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Selector Attribute"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Date of Last Calibration",
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
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007e)" : {
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector SS Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence containing Image Set selection attributes and values that are used to identify one type of image or object set for the Hanging Protocol.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.1.1.3"
                  }
               },
               "."
            ]
         ],
         "name" : "Image Set Selector Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0706)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "name" : "Show Grayscale Inverted",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            [
               "Whether or not to invert the rendered luminance of the displayed values. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.4"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     "The maximum output value after the display pipeline has been applied shall be displayed with the minimum available luminance."
                  ],
                  [
                     "NO",
                     "The maximum output value after the display pipeline has been applied shall be displayed with the maximum available luminance."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
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
                                 "attrs" : {
                                    "xml:id" : "para_b609f437-190a-4c03-8e46-2e54bf49a5a2"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The YES and NO values of this Attribute correspond to the Presentation LUT Shape (2050,0020) values of INVERSE and IDENTITY, as described in ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.11.6.1.2",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    "."
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
                                    "xml:id" : "para_d0ba3666-0369-4162-807a-f4c14410e962"
                                 },
                                 "content" : [
                                    "Only applicable to display of grayscale images."
                                 ],
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0028)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Selector Value Number",
         "desc" : [
            "Positive integer identifying which value of the attribute identified by Selector Attribute (0072,0026) is to be used for filtering. The value 1 identifies the first value. The value zero identifies any value.",
            "Required if Selector Attribute (0072,0026) and Filter-by Operator (0072,0406) are present."
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "MAC Calculation Transfer Syntax UID",
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
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0330)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Cine Relative to Real-Time",
         "desc" : [
            "A positive unitless floating point numeric factor equal to playback rate divided by acquisition rate.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE and if Recommended Display Frame Rate (0008,2144) is not present.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The capture rate may change within the image object, as specified in Frame Time (0018,1063) or Frame Time Vector (0018,1065)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_efc318cc-f17c-4930-b7cd-a41cfc9ba339"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0705)[<1>](0008,1150)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0020,9238)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Functional Group Private Creator",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display"
      },
      "(0072,0214)" : {
         "name" : "Navigation Indicator Sequence",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Describes a geometric relationship between Display Sets for the purpose of static or interactive localization or navigation.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0008,001a)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
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
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence"
      },
      "(0020,9172)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006a)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector PN Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0072)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Selector DS Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. Some leniency in precision and format (including padding and scientific notation) will be required."
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0008,2144)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Recommended Display Frame Rate",
         "desc" : [
            "Recommended rate at which the frames of a multi-frame image shall be displayed, in frames/second. Shall have a value greater than zero. Overrides any Recommended Display Frame Rate (0008,2144) value in the image objects being displayed.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE and if Cine Relative to Real-Time (0072,0330) is not present."
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006c)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "name" : "Selector SH Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,000c)[<0>](0020,0060)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Laterality of the body part to which this Hanging Protocol applies.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "R",
                     "Right"
                  ],
                  [
                     "L",
                     "Left"
                  ],
                  [
                     "B",
                     "Both"
                  ],
                  [
                     "U",
                     "Unpaired"
                  ]
               ],
               "type" : "variablelist"
            },
            "Zero length means not applicable.",
            "Required if Anatomic Region Sequence (0008,2218) is present."
         ],
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "2C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0068)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "name" : "Selector LT Value",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0020,9238)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute."
      },
      "(0072,0200)[<0>](0072,0705)[<1>](0008,1155)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0072)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. Some leniency in precision and format (including padding and scientific notation) will be required."
         ],
         "name" : "Selector DS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0034)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Image Set Selector Category",
         "desc" : [
            "Category of the Time Based Image Set selector.",
            {
               "list" : [
                  [
                     "RELATIVE_TIME",
                     null
                  ],
                  [
                     "ABSTRACT_PRIOR",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0072,0200)[<0>](0072,0204)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : "Positive integer value that designates this Display Set as part of a specific presentation group. All Display Sets with the same Display Set Presentation Group (0072,0204) value shall be displayed at the same time. The value 1 shall indicate that this Display Set is part of the initial presentation group. Subsequent values incrementing by 1 shall imply successive temporal ordering of display.",
         "name" : "Display Set Presentation Group",
         "module" : "Hanging Protocol Display"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
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
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0072,0012)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies the Hanging Protocol from which this Hanging Protocol was derived, or on which it is based.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Source Hanging Protocol Sequence",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0010)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : "Group or site for which this Hanging Protocol was defined.",
         "name" : "Hanging Protocol User Group Name",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0030)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence containing time based Image Set selection categories and values that are used to identify one type of image set for the Hanging Protocol per sequence item.",
            "One or more Items shall be included in this Sequence.",
            [
               "The Image Set Selector Sequence (0072,0022) shall be applied to each sequence item to define an image set. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.1.1.2"
                  }
               },
               "."
            ]
         ],
         "name" : "Time Based Image Sets Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0702)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "VOI Type",
         "desc" : [
            "Expected value of interest transformation for display (e.g., Window Center and Window Width or VOI LUT).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "LUNG",
                     null
                  ],
                  [
                     "MEDIASTINUM",
                     null
                  ],
                  [
                     "ABDO_PELVIS",
                     null
                  ],
                  [
                     "LIVER",
                     null
                  ],
                  [
                     "SOFT_TISSUE",
                     null
                  ],
                  [
                     "BONE",
                     null
                  ],
                  [
                     "BRAIN",
                     null
                  ],
                  [
                     "POST_FOSSA",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
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
         "name" : "Contributing Equipment Sequence",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0024)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "desc" : [
            "Specifies the behavior of the Filter-by Operator (0072,0406) when Selector Attribute (0072,0026) is not available in the image or does not contain a value specified by Selector Value Number (0072,0028).",
            "If this attribute is not present in this Sequence item, MATCH shall be assumed.",
            "Shall be ignored if Filter-by Operator (0072,0406) is not present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MATCH",
                     "include the image in the filter output."
                  ],
                  [
                     "NO_MATCH",
                     "do not include the image in the filter output."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Set Selector Usage Flag",
         "module" : "Hanging Protocol Display"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0117)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context UID",
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
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0028)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Selector Value Number",
         "desc" : [
            "Positive integer identifying which value of the attribute identified by Selector Attribute (0072,0026) is to be used for sorting. The value of 1 identifies the first value. Shall not be zero.",
            "Required if Selector Attribute (0072,0026) is present."
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0028)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "name" : "Selector Value Number",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : "Positive integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be used for Image Set selection. The value 1 identifies the first value. The value zero identifies any value."
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0052)" : {
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "name" : "Selector Sequence Pointer",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0056)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Attribute Private Creator"
      },
      "(0008,0106)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Context Group Version",
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
         ]
      },
      "(0008,0015)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0208)" : {
         "req" : "2",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Partial Data Display Handling",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "If one or more Image Sets identified by Image Set Number (0072,0032) in the Display Sets Sequence (0072,0200) Items is not available, indicate whether or not to maintain the expected layout in the absence of complete Image Sets.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "MAINTAIN_LAYOUT",
                     "If one or more Image Sets is not available, maintain the layout with empty Image Boxes."
                  ],
                  [
                     "ADAPT_LAYOUT",
                     "If one or more Image Sets is not available, rearrange the layout at the discretion of the application."
                  ]
               ],
               "type" : "variablelist"
            },
            "If this attribute is zero length, then the expected behavior is not defined."
         ]
      },
      "(0100,0424)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
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
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0712)" : {
         "name" : "Show Graphic Annotation Flag",
         "desc" : [
            [
               "Indicates whether or not to display items from the Graphic Annotation Sequence (0070,0001) in an applied Presentation State, and the attributes of the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.9.2"
                  },
                  "el" : "xref"
               },
               " in the image objects or applied Presentation State."
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
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0308)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Image Box Tile Vertical Dimension",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Positive integer defining the vertical Image Box tile dimension; the number of rows.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003e)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Abstract Prior Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Identifies a prior image set using coded terminology.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Image Set Selector Category (0072,0034) is ABSTRACT_PRIOR and Abstract Prior Value (0072,003C) is not present."
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0314)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Box Small Scroll Amount",
         "desc" : [
            "Defines the positive integer number of pages, rows, columns, or images per small increment scroll, based on the values of Image Box Small Scroll Type (0072,0312) and Image Box Scroll Direction (0072,0310). The value applies to both forward and backward scrolling.",
            "Required if Image Box Small Scroll Type (0072,0312) is present with a value."
         ]
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0402)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Filter-by Category",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            [
               "Category of the filter operation. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "IMAGE_PLANE",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "Required if Selector Attribute (0072,0026) is not present."
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0064)" : {
         "module" : "Hanging Protocol Definition",
         "name" : "Selector IS Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS. Some leniency in precision and format (including padding with spaces and leading zeros, e.g., \"001\" = \" 1 \" = \"1\") will be required."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007c)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector SL Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0050)" : {
         "module" : "Hanging Protocol Definition",
         "name" : "Selector Attribute VR",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "The Value Representation of Selector Attribute (0072,0026). See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               }
            },
            " for Enumerated Values of Value Representation."
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0716)" : {
         "desc" : [
            "Indicates whether or not to display image acquisition technique information.",
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
         "name" : "Show Acquisition Techniques Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006e)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Selector ST Value",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0008)" : {
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : "Identifies the creator of the Hanging Protocol.",
         "name" : "Hanging Protocol Creator",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
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
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0040,a390)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
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
         "module" : "SOP Common"
      },
      "(0072,0014)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : "Identifies the number of prior image sets used in this Hanging Protocol.",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Number of Priors Referenced"
      },
      "(0072,0200)[<0>](0072,0400)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Sequence that defines filter criteria to be applied to the image set identified by Image Set Number (0072,0032).",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Filter Operations Sequence",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "2"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0056)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Selector Attribute Private Creator",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007f)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UI."
         ],
         "name" : "Selector UI Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0032)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Image Set Number",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "A monotonically increasing integer, starting from 1, incrementing by 1, unique within the Hanging Protocol Instance.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_459a2bd2-4f5b-4044-b4c8-e43d2038b974"
                     },
                     "el" : "para",
                     "content" : [
                        "Each item of the Display Sets Sequence (0072,0200) references one Image Set Number (0072,0032)."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0032)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Set Number",
         "desc" : [
            "Image Set Number (0072,0032) value from a Time Based Image Sets Sequence (0072,0030) Item within the Image Sets Sequence (0072,0020) Item that is selected for display by this Display Set.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Multiple Image Boxes Sequence (0072,0300) Items within a Display Sets Sequence (0072,0200) Item may be used to spread one image set over multiple image boxes with the same Display Set characteristics."
                     ],
                     "attrs" : {
                        "xml:id" : "para_b29bd8bd-75ad-4e63-b81f-229733fa2a71"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)" : {
         "desc" : [
            "Sequence that defines the image boxes for this Display Set.",
            "Only a single Item shall be included in this Sequence unless Image Box Layout Type (0072,0304) is TILED, in which case one or more Items shall be included in this Sequence."
         ],
         "name" : "Image Boxes Sequence",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0202)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Display Set Number",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : "A monotonically increasing integer, starting from 1, incrementing by 1, unique within the Hanging Protocol Instance. It shall be used to identify linked display sets in the Display Set Scrolling Group (0072,0212)."
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0404)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Operation to be applied based on the presence or absence of the attribute represented by Selector Attribute (0072,0026) in each image of the Image Set.",
            "Required if Selector Attribute (0072,0026) is present and Filter-by Operator (0072,0406) is not present.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PRESENT",
                     "Include the image if the attribute is present."
                  ],
                  [
                     "NOT_PRESENT",
                     "Include the image if the attribute is not present."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Filter-by Attribute Presence",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0718)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "name" : "Display Set Vertical Justification",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Indicates direction in which to vertically justify the image within a viewport that is not the same shape (aspect ratio) as the image.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0050)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector Attribute VR",
         "desc" : [
            "The Value Representation of Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) or Filter-by Category (0072,0402), and Filter-by Operator (0072,0406) are present."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0038)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Relative Time",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Exactly two numeric values, indicating the start and end values of a prior range of instance acquisition times relative to the date and time of a current image set. The units shall be specified in Relative Time Units (0072,003A).",
            "The value pair 0\\0 shall indicate a current image set. The value pair n\\n shall indicate \"prior from the instance acquisition time of a current image set by n units\".",
            "Required if the value of Image Set Selector Category (0072,0034) is RELATIVE_TIME.",
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
                                    "xml:id" : "para_49d89076-1816-4bbd-af73-6ad0effcd8b5"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "A value pair \"1\\7\" with Relative Time Units (0072,003A) of DAYS would indicate the range \"prior by 1 to 7 days before a current image set\"."
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
                                    "The VR of this attribute is unsigned, hence future time cannot be represented."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1fa49c4e-7bc7-4b84-b7dc-db1f0034a586"
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
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0012)[<0>](0008,1155)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0604)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : [
            "Sorting direction to be applied to the value(s) in the image set of the attribute identified by Selector Attribute (0072,0026) or Sort-by Category (0072,0602).",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "INCREASING",
                     null
                  ],
                  [
                     "DECREASING",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Sorting Direction",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,000c)[<0>](0008,0060)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Modality",
         "desc" : [
            [
               "Type of equipment that originally acquired the data used to create images or related objects to which this Hanging Protocol applies. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Anatomic Region Sequence (0008,2218) is not present. May be present otherwise."
         ]
      },
      "(0072,0200)[<0>](0072,0512)" : {
         "module" : "Hanging Protocol Display",
         "name" : "Reformatting Thickness",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "The desired thickness of the reformatted images in millimeters.",
            "Required if value of Reformatting Operation Type (0072,0510) is SLAB or MPR. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0078)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector UL Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0076)" : {
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector FL Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0026)" : {
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Selector Attribute",
         "desc" : "Data Element Tag of an Attribute from an Image or other IOD to use for Image Set selection.",
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,000c)[<0>](0040,100a)" : {
         "req" : "2",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies a reason for procedure to which this Hanging Protocol applies.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007c)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "name" : "Selector SL Value"
      },
      "(0072,0200)[<0>](0072,0710)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Show Image True Size Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Indicates whether or not to display images with the physical size of the rendered image pixel the same on the screen as specified in the image attributes, unless overridden by a Presentation State instance.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "YES",
                     "Display images at True Size."
                  ],
                  [
                     "NO",
                     "The rendered size is not specified."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0040)" : {
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Image Set Label",
         "desc" : "Description of the objective of the image set defined by this sequence item.",
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0318)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Box Large Scroll Amount",
         "desc" : [
            "Defines the positive integer number of pages, rows, columns, or images per large increment scroll, based on the values of Image Box Large Scroll Type (0072,0316) and Image Box Scroll Direction (0072,0310). The value applies to both forward and backward scrolling.",
            "Required if Image Box Large Scroll Type (0072,0316) is present with a value."
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0020,9238)" : {
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0072,010a)" : {
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "name" : "Screen Minimum Grayscale Bit Depth",
         "desc" : [
            "Positive integer indicating the desired minimum number of grayscale bits per pixel of the screen.",
            "Required if Screen Minimum Color Bit Depth (0072,010C) is not present."
         ],
         "module" : "Hanging Protocol Environment",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C"
      },
      "(0100,0420)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0006)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Hanging Protocol Level",
         "desc" : [
            "Identifies the level at which this Hanging Protocol is defined, and the intended use.",
            {
               "list" : [
                  [
                     "MANUFACTURER",
                     null
                  ],
                  [
                     "SITE",
                     null
                  ],
                  [
                     "USER_GROUP",
                     null
                  ],
                  [
                     "SINGLE_USER",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
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
         ],
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0510)" : {
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Reformatting Operation Type",
         "desc" : [
            "Reformatting operation to be applied to the Image Set.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MPR",
                     null
                  ],
                  [
                     "3D_RENDERING",
                     null
                  ],
                  [
                     "SLAB",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006a)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector PN Value",
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0056)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "name" : "Selector Attribute Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display"
      },
      "(0072,000c)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Hanging Protocol Definition Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Sequence that defines the type of imaging studies to which this Hanging Protocol applies.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0008,0013)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,010f)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : [
            "The identifier of the Context Group.",
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
         "name" : "Context Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0072,0210)" : {
         "name" : "Synchronized Scrolling Sequence",
         "desc" : [
            "Each sequence item of this attribute identifies a group of Display Sets to which synchronized scrolling is to be applied.",
            "One or more Items are permitted in this Sequence.",
            "The dimensions along which the synchronization occurs shall be those specified in the Sorting Operations Sequence (0072,0600)."
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)" : {
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Image Sets Sequence",
         "desc" : [
            "Sequence describing one or more types of Image Sets to which the Hanging Protocol applies.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.1.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0008,0053)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "req" : "1",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0066)" : {
         "name" : "Selector LO Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0304)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Box Layout Type",
         "desc" : [
            "Type of layout of the image box.",
            "All types except for TILED are single rectangles containing a single frame of image pixel data. The types are primarily distinguished by their interaction technique.",
            {
               "list" : [
                  [
                     "TILED",
                     "a scrollable array of rectangles, each containing a single frame of image pixel data."
                  ],
                  [
                     "STACK",
                     "a single rectangle containing a steppable single frame, intended for user-controlled stepping through the image set, usually via continuous device interaction (e.g., mouse scrolling) or by single stepping (mouse or button click)."
                  ],
                  [
                     "CINE",
                     "a single rectangle, intended for video type play back where the user controls are play sequence, rate of play, and direction."
                  ],
                  [
                     "PROCESSED",
                     "intended for interactive 3D visualizations that have custom interfaces."
                  ],
                  [
                     "SINGLE",
                     "a single rectangle, intended for images and objects with no defined methods of interaction."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This value may also be used for non-image objects, such as waveforms and SR documents."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_202a0ca2-69d7-49ae-ac9f-5681a969c495"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0074)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "name" : "Selector FD Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD."
         ]
      },
      "(0072,000c)[<0>](0008,2218)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies the anatomic region of interest to which this Hanging Protocol applies.",
            "One or more Items shall be included in this Sequence.",
            "Required if Modality (0008,0060) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Anatomic Region Sequence",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M"
      },
      "(0072,0210)[<0>](0072,0212)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "desc" : "Multi-valued list of two or more Display Set Number (0072,0202) values. Indicates that the images within the specified Display Sets are scrolled in parallel, to maintain the established synchronization.",
         "name" : "Display Set Scrolling Group",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,010e)" : {
         "req" : "3",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the desired maximum time in milliseconds required by the application to repaint the full screen once (i.e., recalculate all pixels and paint them to the screen).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_42868c4e-770b-4d6c-a116-23fbb46aa191"
                     },
                     "el" : "para",
                     "content" : [
                        "This is not the screen refresh time."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "name" : "Application Maximum Repaint Time"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0062)" : {
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector CS Value"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007a)" : {
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "name" : "Selector US Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ],
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0206)" : {
         "desc" : "Description of the intent of the Display Set Presentation Group (0072,0204). If present, shall have the same value in all sequence Items assigned the same value for Display Set Presentation Group (0072,0204).",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Display Set Presentation Group Description",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,000e)" : {
         "name" : "Hanging Protocol User Identification Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Sequence that provides a coded identifier for the person, group, or site for which this Hanging Protocol was defined.",
            "Zero or one Item shall be included in this Sequence.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "If a standardized naming schema becomes available, it should be used. Meanwhile, local coding schemes such as employee numbers and department numbers are likely to be used."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e3761d56-0d37-4c2e-af04-3a206b3c53b3"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "req" : "2"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006e)" : {
         "name" : "Selector ST Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "2",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0717)" : {
         "name" : "Display Set Horizontal Justification",
         "desc" : [
            "Indicates direction in which to horizontally justify the image within a viewport that is not the same shape (aspect ratio) as the image.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Typically used in mammography display applications in which images from the patient's left and right are displayed \"back to back\", rather than centered."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_47543e01-fa0f-4ef7-b2d1-2212898d057d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0312)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Defines the type of small increment scrolling to be applied to this Image Box.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1. Scrolling is not specified if zero length.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PAGE",
                     "In a TILED image box, replace all image slots with the next N x M images in the set."
                  ],
                  [
                     "ROW_COLUMN",
                     "In a TILED image box, move each row or column of images to the next row or column, depending on Image Box Scroll Direction (0072,0310)."
                  ],
                  [
                     "IMAGE",
                     "In a TILED image box, move each image to the next slot, either horizontally or vertically, depending on Image Box Scroll Direction (0072,0310)."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "If there are multiple image boxes of different Tile Dimensions in a Display Set, then only IMAGE scrolling applies, and the value of this attribute is ignored."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398cf7fb-137b-48e8-9e2d-555b055ff1b6"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Box Small Scroll Type",
         "entity" : "Hanging Protocol",
         "req" : "2C",
         "usage" : "M"
      }
   }
}
