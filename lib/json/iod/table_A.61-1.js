var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0068,62A0))",
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0068,63A0))",
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0068,63A4))",
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0068,63A8))",
      "Can't handle table_8.8-1 (in table_C.29.1.1-1 after (0068,63AC))",
      "Can't handle table_8.8-1 (in table_C.29.1.2-1 after (0068,62E0))",
      "Can't handle table_8.8-1 (in table_C.29.1.2-1 after (0068,62F0))",
      "Can't handle table_8.8-1 (in table_C.29.1.5-1 after (0068,6545))",
      "Can't handle table_8.8-1 (in table_C.29.1.5-1 after (0068,6545))",
      "Can't handle table_8.8-1 (in table_C.29.1.5-1 after (0068,6545))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.27-1:table_10-19 after (0066,002F))",
      "Can't handle table_8.8-1 (in table_C.27-1:table_10-19 after (0066,0030))"
   ],
   "tags" : {
      "(0008,001b)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6510)[<0>](0068,6530)" : {
         "name" : "Planning Landmark ID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "Numeric ID of the planning landmark. Uniquely identifies the planning landmark within the SOP instance. The value shall start at 1, and increase monotonically by 1 for each Item.",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0068,6520)[<0>](0068,6530)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "name" : "Planning Landmark ID",
         "req" : "1",
         "desc" : [
            "Numeric ID of the planning landmark. Uniquely identifies the planning landmark within the SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6520)[<0>](0068,65e0)[<1>](0068,65f0)" : {
         "name" : "2D Plane Intersection",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "2D Coordinates of the intersection of the plane with the projection plane. Coordinates are measured in Millimeters of the printing space.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ]
      },
      "(0068,6222)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "req" : "3",
         "usage" : "M"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6420)" : {
         "req" : "1",
         "name" : "Degree of Freedom Type",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Indicates the type of the degree of freedom.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "TRANSLATION",
                     null
                  ],
                  [
                     "ROTATION",
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
                     "linkend" : "sect_C.29.1.4.1.2"
                  }
               },
               "."
            ]
         ],
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "usage" : "M"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "usage" : "M"
      },
      "(0068,6500)[<0>](0068,6590)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "entity" : "Implant Template",
         "desc" : [
            "3D Coordinates of the point.",
            "Required if 2D Point Coordinates Sequence (0068,6550) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present if 2D Point Coordinates Sequence (0068,6550) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "name" : "3D Point Coordinates",
         "req" : "1C",
         "usage" : "U"
      },
      "(0068,6224)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,63b0)[<0>](0068,63e0)" : {
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "name" : "Mating Feature Sequence",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "The mating features of the set.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Private Creator Reference",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0015)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "name" : "Number Of Surface Points",
         "req" : "1",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "Specifies the number of points in the point set. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0068,6222)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)[<2>](0066,0040)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Long Primitive Point Index List",
         "desc" : [
            "A list of point indices. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.4.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Surface Mesh"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6520)[<0>](0068,6540)" : {
         "entity" : "Implant Template",
         "desc" : "Purpose or intended use of the landmark.",
         "name" : "Planning Landmark Description",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0068,6520)[<0>](0068,6545)" : {
         "desc" : [
            "Coded Description of the real-world plane that is represented by this landmark.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "name" : "Planning Landmark Identification Code Sequence",
         "req" : "2",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0030)" : {
         "name" : "Algorithm Name Code Sequence",
         "req" : "3",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,63f0)" : {
         "desc" : "Numeric ID of the mating feature. Uniquely identifies a mating feature within this Sequence Item.",
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "1",
         "name" : "Mating Feature ID",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)" : {
         "req" : "2",
         "name" : "Facet Sequence",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "All Facets in this Surface. Each sequence Item describes one facet.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "2",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Implant Template"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,000b)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh",
         "entity" : "Surface Mesh",
         "desc" : "A textual description of the surface processing performed.",
         "name" : "Surface Processing Description",
         "req" : "3",
         "usage" : "C - Required if  is present."
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0117)" : {
         "entity" : "Implant Template",
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
         "req" : "3",
         "name" : "Context UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,64a0)" : {
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "name" : "Range of Freedom",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Two floating point numbers defining a value range for this degree of freedom.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.2"
                  }
               },
               "."
            ],
            "Required if 3D Mating Point (0068,64C0) is present."
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Signature",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0020,0052)" : {
         "usage" : "M",
         "name" : "Frame of Reference UID",
         "req" : "1",
         "desc" : "Defines a 3D Frame of Reference for this component.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "3",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "req" : "1"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,64d0)" : {
         "usage" : "U",
         "name" : "3D Mating Axes",
         "req" : "1C",
         "desc" : [
            "The Axes of contact described as direction cosines in the 3D coordinate system defined by the Frame Of Reference UID.",
            "Required if 3D Mating Point (0068,64C0) is present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0008,0106)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Context Group Version",
         "req" : "1"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6450)" : {
         "req" : "1",
         "name" : "2D Mating Point",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Origin of the contact system, in HPGL coordinates.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.1"
                  }
               }
            ]
         ],
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0068,6221)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "entity" : "Implant Template",
         "desc" : [
            "The version code of the implant template.",
            "If Implant Type (0068,6223) is DERIVED, this shall have the same value as the Implant Template Version (0068,6221) of the manufacturer's implant template from which this instance was derived."
         ],
         "name" : "Implant Template Version",
         "req" : "1",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,0037)" : {
         "entity" : "Surface Mesh",
         "desc" : [
            "Specifies the radius of the vertex points defined in the Long Vertex Point Index List (0066,0043) with which it is recommended that the point be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "name" : "Recommended Point Radius",
         "req" : "3",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0068,62c0)[<0>](0068,6300)" : {
         "entity" : "Implant Template",
         "desc" : [
            "The HPGL document as a byte stream. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.29.1.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "HPGL Document",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,6440)" : {
         "req" : "1",
         "name" : "Referenced HPGL Document ID",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the Mating Feature.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Shall be unique within the sequence."
         ],
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0068,62c0)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "HPGL Document Sequence",
         "desc" : [
            "The 2D template representations of this implant.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Implant Template",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6350)" : {
         "usage" : "U",
         "name" : "Implant Template 3D Model Surface Number",
         "req" : "1",
         "desc" : "Surface Number (0066,0003) of the surface that represents the shape of the entire implant.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template 3D Models",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Implant Template",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0042)" : {
         "usage" : "C - Required if  is present.",
         "req" : "2",
         "name" : "Long Edge Point Index List",
         "desc" : [
            "A list of point indices. Contains 2n point indices describing unconnected Edges.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.27.4.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,64a0)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Interval of freedom for this degree of freedom.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Range of Freedom",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001c)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "usage" : "C - Required if  is present.",
         "name" : "Center of Rotation",
         "req" : "1C",
         "desc" : "A 3D location defining the preferred center of rotation for this point set. Required if Axis of Rotation (0066,001B) is present. May be present otherwise.",
         "entity" : "Surface Mesh"
      },
      "(0068,62c0)[<0>](0068,6320)" : {
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "HPGL Pen Sequence",
         "desc" : [
            "Labels for each pen used in the encapsulated HPGL Document.",
            "One or more Items shall be included in this Sequence.",
            "Shall contain one item per pen used in the HPGL document."
         ],
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0043)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh",
         "desc" : [
            "A list of point indices. Contains n point indices describing Vertices.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.4.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "req" : "2",
         "name" : "Long Vertex Point Index List"
      },
      "(0068,6520)[<0>](0068,6610)" : {
         "desc" : [
            "3D Coordinates of the plane origin.",
            "Required if 2D Plane Coordinates Sequence (0068,65E0) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present if 2D Plane Coordinates Sequence (0068,65E0) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "1C",
         "name" : "3D Plane Origin",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Specific Character Set",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Implant Template"
      },
      "(0068,62a5)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "name" : "Overall Template Spatial Tolerance",
         "req" : "2",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Tolerance in mm applying to all distance measurements and spatial locations in this Implant Template."
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0068,6260)[<0>](0042,0012)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "desc" : [
            "The type of the encapsulated document stream described using the MIME Media Type (see RFC 2046).",
            "Required if Encapsulated Document (0042,0011) is present in this Sequence item.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "application/pdf",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "MIME Type of Encapsulated Document",
         "req" : "1C"
      },
      "(0066,0002)[<0>](0066,000e)" : {
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Finite Volume",
         "desc" : [
            "Indicates, whether the surface represents a solid (\"waterproof\") object with an outside and an inside.",
            {
               "list" : [
                  [
                     "YES",
                     "Contains a finite volume"
                  ],
                  [
                     "NO",
                     "Does not contain a finite volume"
                  ],
                  [
                     "UNKNOWN",
                     "Might or might not contain a finite volume"
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
                     "linkend" : "sect_C.27.1.1.4"
                  }
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6440)" : {
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the Mating Feature.",
            "Shall be unique within the sequence."
         ]
      },
      "(0008,0105)" : {
         "entity" : "Implant Template",
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
         "name" : "Mapping Resource",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0068,62c0)[<0>](0068,6310)" : {
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "name" : "HPGL Contour Pen Number",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "Numeric ID of the pen used in the encapsulated HPGL document for outlines."
      },
      "(0068,6230)[<0>](0008,2218)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Anatomic Region Sequence",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0008,0300)" : {
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Context Identifier",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,64f0)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "entity" : "Implant Template",
         "desc" : [
            "Direction cosines of the axis of the degree of freedom.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.2"
                  }
               },
               "."
            ]
         ],
         "name" : "2D Degree Of Freedom Axis",
         "req" : "1",
         "usage" : "U"
      },
      "(0068,6265)[<0>](0042,0012)" : {
         "entity" : "Implant Template",
         "desc" : [
            "The type of the encapsulated document stream described using the MIME Media Type (see RFC 2046).",
            "Required if Encapsulated Document (0042,0011) is present in this Sequence item.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "application/pdf",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "MIME Type of Encapsulated Document",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,6260)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "req" : "3",
         "name" : "Information From Manufacturer Sequence",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Information from Manufacturer other than described in Notification From Manufacturer Sequence (0068,6265).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0036)" : {
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Algorithm Name",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0020)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "module" : "Surface Mesh",
         "desc" : [
            "A single standard deviation for all the vectors' coordinates. The units shall be the same as the units of the coordinate system in which the vector coordinates are specified. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "req" : "3",
         "name" : "Vector Accuracy"
      },
      "(0066,0002)[<0>](0066,0038)" : {
         "desc" : [
            "Specifies the thickness of each edge or line defined in the Long Edge Point Index List (0066,0042) or Line Sequence (0066,0028) with which it is recommended that the line be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "req" : "3",
         "name" : "Recommended Line Thickness",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh"
      },
      "(0068,63a0)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "entity" : "Implant Template",
         "desc" : [
            "A code sequence specifying the materials the implant was built from.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Materials Code Sequence",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,000c)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh",
         "entity" : "Surface Mesh",
         "desc" : [
            "Specifies the opacity in which it is recommended that the surface be rendered.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.3"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "name" : "Recommended Presentation Opacity",
         "usage" : "C - Required if  is present."
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "Implant Template"
      },
      "(0068,63b0)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Mating feature sets used to combine the implant with other implants.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "name" : "Mating Feature Sets Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features"
      },
      "(0040,a390)" : {
         "entity" : "Implant Template",
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
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0068,62a0)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Implant Regulatory Disapproval Code Sequence",
         "desc" : [
            "Sequence containing countries and regions in which the implant is not approved for usage.",
            "One or more Items shall be included in this Sequence.",
            "Required if the implant has been disapproved in a country or a region."
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,6510)[<0>](0068,65d0)" : {
         "usage" : "U",
         "name" : "3D Line Coordinates",
         "req" : "1C",
         "desc" : [
            "3D Coordinates of the line.",
            "Required if 2D Line Coordinates Sequence (0068,65A0) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present, if 2D Line Coordinates Sequence (0068,65A0) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ]
      },
      "(0068,6265)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "desc" : [
            "Information from the manufacturer concerning a critical notification, recall, or discontinuation of the implant or implant template.",
            "One or more Items shall be included in this Sequence.",
            "Required if such information has been issued."
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Notification From Manufacturer Sequence",
         "req" : "1C"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6410)" : {
         "desc" : "Numeric ID of the degree of freedom. Uniquely identifies a degree of freedom within this Sequence Item. The value shall start at 1, and increase monotonically by 1 for each Item.",
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "1",
         "name" : "Degree of Freedom ID",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features"
      },
      "(0068,6520)" : {
         "desc" : [
            "Plane landmarks for planning.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "3",
         "name" : "Planning Landmark Plane Sequence",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Implant Template",
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
         "name" : "Certified Timestamp",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "name" : "MAC ID Number",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0068,62c0)[<0>](0068,62d0)" : {
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "HPGL Document ID",
         "desc" : [
            "Identification number of the HPGL Document. Uniquely identifies an HPGL Document within this SOP instance.",
            "The value shall start at 1, and increase monotonically by 1."
         ],
         "entity" : "Implant Template"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6225)" : {
         "name" : "Original Implant Template Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Reference to the Implant Template Instance with Implant Type (0068,6223) ORIGINAL from which this Instance was ultimately derived.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Implant Type (0068,6223) is DERIVED."
         ],
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)" : {
         "desc" : [
            "All Lines in this Surface.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "name" : "Line Sequence",
         "req" : "2",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh"
      },
      "(0068,62c0)[<0>](0068,62d5)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "HPGL Document Label",
         "desc" : "Label describing the document.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)[<2>](0066,0040)" : {
         "desc" : [
            "A list of point indices. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "name" : "Long Primitive Point Index List",
         "req" : "1",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh"
      },
      "(0068,6520)[<0>](0068,65e0)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "name" : "2D Plane Coordinates Sequence",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "2D coordinates of the plane's intersection with the HPGL documents.",
            "One or more Items shall be included in this Sequence.",
            "Required if 3D Plane Origin (0068,6610) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Plane Origin (0068,6610) is present and HPGL Document Sequence (0068,62C0) is present."
         ]
      },
      "(0068,6223)" : {
         "req" : "1",
         "name" : "Implant Type",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Indicates whether the Implant Template is derived from another Implant Template.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "ORIGINAL",
                     null
                  ],
                  [
                     "DERIVED",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63d0)" : {
         "usage" : "U",
         "name" : "Mating Feature Set Label",
         "req" : "1",
         "desc" : "Label of the set.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "req" : "3"
      },
      "(0068,62c0)[<0>](0068,6346)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "entity" : "Implant Template",
         "desc" : "Point around which the 2D template is rotated in manual planning, in HPGL coordinates.",
         "name" : "Recommended Rotation Point",
         "req" : "1",
         "usage" : "U"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "title" : "Enumerated Values:"
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
         "entity" : "Implant Template"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "name" : "Manufacturer",
         "usage" : "M"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Context Group Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0011)" : {
         "usage" : "C - Required if  is present.",
         "name" : "Surface Points Sequence",
         "req" : "1",
         "desc" : [
            "The point positions representing vertices of the surface.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001f)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "usage" : "C - Required if  is present.",
         "name" : "Vector Dimensionality",
         "req" : "1",
         "desc" : [
            "The dimensionality of the underlying vector field. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.3.1"
               }
            },
            "."
         ],
         "entity" : "Surface Mesh"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "desc" : [
            "Coordinates of the mating feature in the HPGL documents.",
            "One or more Items shall be included in this Sequence.",
            "Required if 3D Mating Point (0068,64C0) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Mating Point (0068,64C0) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "name" : "2D Mating Feature Coordinates Sequence",
         "req" : "1C"
      },
      "(0068,6360)" : {
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "module" : "Generic Implant Template 3D Models",
         "entity" : "Implant Template",
         "desc" : [
            "The description of the Surface Model.",
            "One or more Items shall be included in this Sequence.",
            "Shall contain one Item per Item in Surface Sequence (0066,0002)."
         ],
         "req" : "1",
         "name" : "Surface Model Description Sequence",
         "usage" : "U"
      },
      "(0068,6360)[<0>](0068,6380)" : {
         "desc" : "Label for this surface.",
         "entity" : "Implant Template",
         "usage" : "U",
         "name" : "Surface Model Label",
         "req" : "1",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "module" : "Generic Implant Template 3D Models"
      },
      "(0066,0002)[<0>](0066,0009)" : {
         "entity" : "Surface Mesh",
         "desc" : [
            "Specifies whether the surface has been modified subsequent to the original generation of the surface.",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Surface Processing",
         "req" : "2",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "name" : "Station Name",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,9004)" : {
         "req" : "3",
         "name" : "Content Qualification",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Person's mailing address"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "req" : "1"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)" : {
         "usage" : "U",
         "req" : "3",
         "name" : "Mating Feature Degree of Freedom Sequence",
         "desc" : [
            "Degrees of freedom in this mating feature.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)[<2>](0066,0040)" : {
         "req" : "1",
         "name" : "Long Primitive Point Index List",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "A list of point indices. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0008,0015)" : {
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6500)[<0>](0068,6550)[<1>](0068,6440)" : {
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "3",
         "name" : "Software Versions"
      },
      "(0068,63a4)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "name" : "Coating Materials Code Sequence",
         "req" : "1C",
         "desc" : [
            "A code sequence specifying the materials the implant is coated with.",
            "One or more Items shall be included in this Sequence.",
            "Required if the implant is coated."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6500)[<0>](0068,6550)" : {
         "entity" : "Implant Template",
         "desc" : [
            "2D coordinates of the point in the HPGL documents.",
            "One or more Items shall be included in this Sequence.",
            "Required if 3D Point Coordinates (0068,6590) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Point Coordinates (0068,6590) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "req" : "1C",
         "name" : "2D Point Coordinates Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0066,0002)[<0>](0066,0035)" : {
         "name" : "Surface Processing Algorithm Identification Sequence",
         "req" : "2C",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "Describes the processing method.",
            "Zero or one Item shall be included in this Sequence.",
            "Required if Surface Processing (0066,0009) is YES."
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0066,0002)[<0>](0066,000a)" : {
         "entity" : "Surface Mesh",
         "desc" : "The Ratio of Remaining points to Original points after processing. Required if Surface Processing (0066,0009) is YES.",
         "name" : "Surface Processing Ratio",
         "req" : "2C",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0012)" : {
         "entity" : "Surface Mesh",
         "desc" : [
            "The normals on the surface for each point.",
            "Zero or one Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.6"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Surface Points Normals Sequence",
         "req" : "2",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Mapping Resource Name",
         "req" : "3",
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
         "entity" : "Implant Template"
      },
      "(0022,1097)" : {
         "entity" : "Implant Template",
         "desc" : "The (product) identifier of the implant.",
         "req" : "1",
         "name" : "Implant Part Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,62c0)[<0>](0068,6347)" : {
         "req" : "1",
         "name" : "Bounding Rectangle",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "HPGL coordinates of the smallest rectangle parallel to the paper axes that contains the whole drawing.",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0066,0002)[<0>](0066,0004)" : {
         "name" : "Surface Comments",
         "req" : "3",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "User-defined comments describing the surface.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "name" : "Spatial Resolution",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
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
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6340)" : {
         "usage" : "U",
         "req" : "1",
         "name" : "HPGL Pen Label",
         "desc" : "Label of the pen.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0068,6510)[<0>](0068,65a0)" : {
         "entity" : "Implant Template",
         "desc" : [
            "2D coordinates of the line in the HPGL documents.",
            "One or more Items shall be included in this Sequence.",
            "Required if 3D Line Coordinates (0068,65D0) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Line Coordinates (0068,65D0) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "req" : "1C",
         "name" : "2D Line Coordinates Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
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
               ],
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
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
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
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
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
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1",
         "name" : "Deidentification Action",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Implant Template"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "name" : "Instance Creator UID",
         "usage" : "M"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "SOP Instance UID",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "entity" : "Implant Template",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6520)[<0>](0068,6620)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "desc" : [
            "3D Coordinates of the plane normal.",
            "Required if 3D Plane Origin (0068,6610) is present."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "1C",
         "name" : "3D Plane Normal"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,64c0)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "entity" : "Implant Template",
         "desc" : [
            "Origin of the contact system.",
            "Required if 2D Mating Feature Coordinates Sequence (0068,6430) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present if 2D Mating Feature Coordinates Sequence (0068,6430) is present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.1"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "name" : "3D Mating Point",
         "req" : "1C",
         "usage" : "U"
      },
      "(0066,0002)[<0>](0066,0010)" : {
         "req" : "1",
         "name" : "Manifold",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "Indicates whether the surface is describing an n-1 dimensional manifold in the underlying n-dimensional vector space.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     "Manifold in every point"
                  ],
                  [
                     "NO",
                     "Does contain non-manifold points"
                  ],
                  [
                     "UNKNOWN",
                     "Might or might not contain non-manifold points"
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.5"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Implant Template",
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
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,0016)" : {
         "entity" : "Implant Template",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1",
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
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
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
         "entity" : "Implant Template"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
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
         "entity" : "Implant Template"
      },
      "(0068,63ac)" : {
         "entity" : "Implant Template",
         "desc" : [
            "The method that will be used to fixate the implant in the body.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Fixation Method Code Sequence",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6345)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "desc" : "Description of the kind of information drawn with the pen.",
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "3",
         "name" : "HPGL Pen Description"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0019)" : {
         "req" : "3",
         "name" : "Maximum Point Distance",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "The maximum distance of one point to its nearest neighbor. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
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
         "req" : "1",
         "name" : "Encrypted Content",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name"
      },
      "(0066,0002)[<0>](0066,000d)" : {
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Recommended Presentation Type",
         "desc" : [
            "Specifies the presentation type in which it is recommended that the surface be rendered.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0017)" : {
         "entity" : "Surface Mesh",
         "desc" : "A single standard deviation of the error for all the points' spatial positions. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "req" : "3",
         "name" : "Point Position Accuracy",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "module" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0062,000c)" : {
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Recommended Display Grayscale Value",
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the maximum pixel value in this surface be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fced2b95-4eda-46ed-9485-e77fc24e6b99"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0022,1095)" : {
         "entity" : "Implant Template",
         "desc" : "The (product) name of the implant.",
         "name" : "Implant Name",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "name" : "Identifying Private Elements",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0016)" : {
         "usage" : "C - Required if  is present.",
         "name" : "Point Coordinates Data",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.2.1.1"
               },
               "el" : "xref"
            }
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0068,6520)[<0>](0068,65e0)[<1>](0068,6440)" : {
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0018)" : {
         "usage" : "C - Required if  is present.",
         "req" : "3",
         "name" : "Mean Point Distance",
         "desc" : [
            "The mean point distance of the point set.",
            "It is given by the mean of the distances to the nearest neighbor over all points. The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Implant Template"
      },
      "(0068,6500)[<0>](0068,6540)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "name" : "Planning Landmark Description",
         "req" : "3",
         "desc" : "Purpose or intended use of the landmark.",
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,62f0)" : {
         "name" : "View Orientation Modifier",
         "req" : "3",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "View Orientation Modifier.",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,002f)" : {
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Surface Mesh",
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Algorithm Family Code Sequence",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "module" : "Surface Mesh"
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6330)" : {
         "req" : "1",
         "name" : "HPGL Pen Number",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "Numeric ID of the pen in the HPGL document",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0068,6500)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Point landmarks for planning.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Planning Landmark Point Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0068,62c0)[<0>](0068,62e0)" : {
         "name" : "View Orientation Code Sequence",
         "req" : "1",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Coded description of the direction of view represented by this 2D template.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Implant Template",
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
               "el" : "note",
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
               ]
            }
         ],
         "req" : "1",
         "name" : "Certificate of Signer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0068,6510)[<0>](0068,6540)" : {
         "req" : "3",
         "name" : "Planning Landmark Description",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : "Purpose or intended use of this landmark.",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0066,0002)[<0>](0062,000d)" : {
         "req" : "1",
         "name" : "Recommended Display CIELab Value",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : [
            "A default triplet value in which it is recommended that the surface be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.10.7.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)" : {
         "entity" : "Surface Mesh",
         "desc" : [
            "All Triangle Fans in this Surface.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Triangle Fan Sequence",
         "usage" : "C - Required if  is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0068,6500)[<0>](0068,6545)" : {
         "req" : "2",
         "name" : "Planning Landmark Identification Code Sequence",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Coded Description of the real-world point that is represented by the landmark.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)" : {
         "usage" : "C - Required if  is present.",
         "req" : "2",
         "name" : "Triangle Strip Sequence",
         "desc" : [
            "All Triangle Strips in this Surface.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Implant Template",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1",
         "name" : "Private Group Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6460)" : {
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "2D Mating Axes",
         "desc" : [
            "Direction cosines of the contact system.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "entity" : "Implant Template"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "M"
      },
      "(0068,6225)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ]
      },
      "(0008,0053)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Query/Retrieve View",
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
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6510)[<0>](0068,65a0)[<1>](0068,65b0)" : {
         "desc" : [
            "Coordinates of the line in the HPGL document. Coordinates are measured in millimeters of the printing space.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "1",
         "name" : "2D Line Coordinates",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0068,6510)[<0>](0068,65a0)[<1>](0068,6440)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "entity" : "Implant Template",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "usage" : "U"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001b)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "module" : "Surface Mesh",
         "entity" : "Surface Mesh",
         "desc" : "A 3D location that combined with Center of Rotation (0066,001C) specifies the preferred axis of rotation of this object.",
         "name" : "Axis of Rotation",
         "req" : "3",
         "usage" : "C - Required if  is present."
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6222)" : {
         "desc" : [
            "Reference to the Implant Template that is replaced by this template.",
            "Only a single Item shall be included in this Sequence.",
            "Required if this Instance replaces another Instance."
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Replaced Implant Template Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6490)" : {
         "usage" : "U",
         "name" : "3D Degree Of Freedom Axis",
         "req" : "1C",
         "desc" : [
            "Direction cosines of the axis of the degree of freedom in the Frame of Reference of the template.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if 3D Mating Point (0068,64C0) is present."
         ],
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0068,6265)[<0>](0042,0011)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "req" : "3",
         "name" : "Encapsulated Document",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "The complete manufacturer notification describing the template.",
            "Encapsulated Document stream, containing a document encoded according to the MIME Type."
         ]
      },
      "(0068,6500)[<0>](0068,6550)[<1>](0068,6560)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "desc" : [
            "Coordinates of the point in the HPGL document. Coordinates are measured in millimeters of the printing space.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "name" : "2D Point Coordinates",
         "req" : "1"
      },
      "(0068,6360)[<0>](0066,002c)" : {
         "module" : "Generic Implant Template 3D Models",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "usage" : "U",
         "name" : "Referenced Surface Number",
         "req" : "1",
         "desc" : "Reference to a Surface Number (0066,0003) present in Surface Sequence (0066,0002).",
         "entity" : "Implant Template"
      },
      "(0068,6265)[<0>](0068,6270)" : {
         "name" : "Information Issue DateTime",
         "req" : "1",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Date and Time the information was issued.",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "req" : "3",
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
         ],
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "A number that identifies this Composite object instance.",
         "req" : "3",
         "name" : "Instance Number",
         "usage" : "M"
      },
      "(0068,6510)[<0>](0068,6545)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Coded Description of the real-world line that is represented by this landmark.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Planning Landmark Identification Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001a)" : {
         "req" : "3",
         "name" : "Points Bounding Box Coordinates",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "Two 3D locations defining the cuboid bounding box, parallel to the coordinate system axes, encompassing the point set.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0066,0002)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh",
         "entity" : "Surface Mesh",
         "desc" : [
            "The surfaces that are described within the data.",
            "One or more Items shall be included in this Sequence.",
            "There shall be Number of Surfaces (0066,0001) Items in the sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.1"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "name" : "Surface Sequence",
         "usage" : "C - Required if  is present."
      },
      "(0068,6230)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "name" : "Implant Target Anatomy Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Sequence that identifies the anatomical region the implant is to be implanted to.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001e)" : {
         "usage" : "C - Required if  is present.",
         "name" : "Number of Vectors",
         "req" : "1",
         "desc" : [
            "The number of vectors in the Vector Coordinate Data (0066,0021). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Implant Template"
      },
      "(0008,0012)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0068,6390)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Scaling factor (mm/Surface unit)",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.3.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Surface Model Scaling Factor",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "module" : "Generic Implant Template 3D Models"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
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
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
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
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0068,6510)" : {
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "desc" : [
            "Line landmarks for planning.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Implant Template",
         "usage" : "U",
         "req" : "3",
         "name" : "Planning Landmark Line Sequence"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0024,0202)" : {
         "usage" : "C - Required if  is present.",
         "name" : "Algorithm Source",
         "req" : "3",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0066,0002)[<0>](0066,0013)" : {
         "name" : "Surface Mesh Primitives Sequence",
         "req" : "1",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "Only a single Item shall be included in this Sequence.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6224)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Operators' Name",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Implant Template"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "req" : "1C",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Implant Template"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0041)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "usage" : "C - Required if  is present.",
         "req" : "2",
         "name" : "Long Triangle Point Index List",
         "desc" : [
            "A list of point indices. Contains 3n point indices describing unconnected Triangles.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.4.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0003)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if  is present.",
         "name" : "Surface Number",
         "req" : "1",
         "desc" : "Identification number of the surface. Uniquely identifies a surface within this SOP instance. Shall start at a value of 1, and increase monotonically by 1.",
         "entity" : "Surface Mesh"
      },
      "(0008,0110)" : {
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "entity" : "Implant Template",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6210)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "entity" : "Implant Template",
         "desc" : [
            "The size descriptor of the component.",
            "Required if the component exists in different sizes and the size number is not part of the name or identifier.",
            "May be present otherwise.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.1.1.1"
                  }
               },
               " for details."
            ]
         ],
         "name" : "Implant Size",
         "req" : "1C",
         "usage" : "M"
      },
      "(0066,0001)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "req" : "1",
         "name" : "Number of Surfaces",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "Number of surfaces contained in the Instance. Shall be 1 or more. Shall be the same as the number of Items in Surface Sequence (0066,0002)."
      },
      "(0068,63b0)[<0>](0068,63c0)" : {
         "req" : "1",
         "name" : "Mating Feature Set ID",
         "usage" : "U",
         "entity" : "Implant Template",
         "desc" : [
            "Identification number of the set. Uniquely identifies a mating feature set within this SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
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
         "name" : "Block Identifying Information Status",
         "usage" : "M"
      },
      "(0068,6265)[<0>](0068,6280)" : {
         "entity" : "Implant Template",
         "desc" : "Summary of the information.",
         "name" : "Information Summary",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,6226)" : {
         "entity" : "Implant Template",
         "desc" : "Date and time from which this Instance is or will be valid.",
         "name" : "Effective DateTime",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0068,6260)[<0>](0068,6280)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Information Summary",
         "desc" : "Summary of the information.",
         "entity" : "Implant Template",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0021)" : {
         "usage" : "C - Required if  is present.",
         "req" : "1",
         "name" : "Vector Coordinate Data",
         "desc" : [
            "A data stream of coordinates encoded as floats. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.3.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Surface Mesh",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ]
      },
      "(0068,63a8)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "desc" : [
            "Sequence containing a coded description of the type of implant the template reflects.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Implant Type Code Sequence",
         "req" : "1"
      },
      "(0068,6500)[<0>](0068,6530)" : {
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "entity" : "Implant Template",
         "desc" : [
            "Numeric ID of the planning landmark. Uniquely identifies a planning landmark within the SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "req" : "1",
         "name" : "Planning Landmark ID",
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Modifying System",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
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
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "name" : "Certificate Type",
         "usage" : "M"
      },
      "(0068,6225)[<0>](0008,1155)" : {
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0068,6260)[<0>](0068,6270)" : {
         "desc" : "Date and Time the information was issued.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Information Issue DateTime",
         "req" : "1",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Implant Template"
      },
      "(0068,6260)[<0>](0042,0011)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "entity" : "Implant Template",
         "desc" : [
            "Encapsulated Document stream, containing a document encoded according to the MIME Type.",
            "The complete manufacturer information."
         ],
         "req" : "3",
         "name" : "Encapsulated Document",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0032)" : {
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "usage" : "C - Required if  is present.",
         "name" : "Algorithm Parameters",
         "req" : "3",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "entity" : "Surface Mesh"
      },
      "(0008,0070)" : {
         "desc" : "Name of the manufacturer that produces the implant.",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "1",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Implant Template",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)" : {
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "name" : "2D Degree of Freedom Sequence",
         "req" : "1C",
         "desc" : [
            "Geometric specifications of the degrees of freedom for this HPGL Document.",
            "One or more Items shall be included in this Sequence.",
            "Required if 2D Mating Feature Coordinates Sequence (0068,6430) is present.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.4.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0031)" : {
         "name" : "Algorithm Version",
         "req" : "1",
         "usage" : "C - Required if  is present.",
         "entity" : "Surface Mesh",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Implant Template",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "entity" : "Implant Template",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0068,62c0)[<0>](0068,62f2)" : {
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "req" : "1",
         "name" : "HPGL Document Scaling",
         "desc" : [
            "Conversion factor (real world mm/printed mm) See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.29.1.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6224)" : {
         "desc" : [
            "Reference to Implant Template Instance from which this Instance was directly derived.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Implant Type (0068,6223) is DERIVED."
         ],
         "entity" : "Implant Template",
         "usage" : "M",
         "req" : "1C",
         "name" : "Derivation Implant Template Sequence",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)[<2>](0066,0040)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh",
         "entity" : "Surface Mesh",
         "desc" : [
            "A list of point indices. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.4.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "name" : "Long Primitive Point Index List",
         "usage" : "C - Required if  is present."
      }
   }
}
