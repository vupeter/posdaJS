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
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,64a0)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U",
         "name" : "Range of Freedom",
         "req" : "1",
         "desc" : [
            "Interval of freedom for this degree of freedom.",
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
         "entity" : "Implant Template"
      },
      "(0068,6390)" : {
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "module" : "Generic Implant Template 3D Models",
         "usage" : "U",
         "desc" : [
            "Scaling factor (mm/Surface unit)",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.3.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Surface Model Scaling Factor",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0066,0002)" : {
         "name" : "Surface Sequence",
         "req" : "1",
         "desc" : [
            "The surfaces that are described within the data.",
            "One or more Items shall be included in this sequence.",
            "There shall be Number of Surfaces (0066,0001) Items in the sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present."
      },
      "(0068,6500)" : {
         "name" : "Planning Landmark Point Sequence",
         "req" : "3",
         "desc" : [
            "Point landmarks for planning.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0068,6360)" : {
         "entity" : "Implant Template",
         "desc" : [
            "The description of the Surface Model.",
            "One or more Items shall be included in this sequence.",
            "Shall contain one Item per Item in Surface Sequence (0066,0002)."
         ],
         "name" : "Surface Model Description Sequence",
         "req" : "1",
         "module" : "Generic Implant Template 3D Models",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ]
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6330)" : {
         "entity" : "Implant Template",
         "name" : "HPGL Pen Number",
         "desc" : "Numeric ID of the pen in the HPGL document",
         "req" : "1",
         "module" : "Generic Implant Template 2D Drawings",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Implant Template",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,6347)" : {
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "entity" : "Implant Template",
         "name" : "Bounding Rectangle",
         "desc" : "HPGL coordinates of the smallest rectangle parallel to the paper axes that contains the whole drawing.",
         "req" : "1"
      },
      "(0068,6510)[<0>](0068,65d0)" : {
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "3D Line Coordinates",
         "desc" : [
            "3D Coordinates of the line.",
            "Required if 2D Line Coordinates Sequence (0068,65A0) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present, if 2D Line Coordinates Sequence (0068,65A0) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Implant Template",
         "name" : "Coding Scheme Registry",
         "req" : "1C",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)" : {
         "entity" : "Surface Mesh",
         "req" : "1",
         "name" : "Surface Mesh Primitives Sequence",
         "desc" : "Only a single item shall be included in this sequence.",
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0068,6520)[<0>](0068,6540)" : {
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "entity" : "Implant Template",
         "req" : "3",
         "name" : "Planning Landmark Description",
         "desc" : "Purpose or intended use of the landmark."
      },
      "(0068,62c0)[<0>](0068,62f2)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "req" : "1",
         "name" : "HPGL Document Scaling",
         "desc" : [
            "Conversion factor (real world mm/printed mm) See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.29.1.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0037)" : {
         "req" : "3",
         "name" : "Recommended Point Radius",
         "desc" : [
            "Specifies the radius of the vertex points defined in the Vertex Point Index List (0066,0025) with which it is recommended that the point be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0020,0013)" : {
         "entity" : "Implant Template",
         "name" : "Instance Number",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0018)" : {
         "entity" : "Surface Mesh",
         "name" : "Mean Point Distance",
         "desc" : [
            "The mean point distance of the point set.",
            "It is given by the mean of the distances to the nearest neighbor over all points. The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ],
         "req" : "3",
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ]
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001e)" : {
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "entity" : "Surface Mesh",
         "desc" : [
            "The number of vectors in the Vector Coordinate Data (0066,0021). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.3.1"
               }
            },
            "."
         ],
         "name" : "Number of Vectors",
         "req" : "1"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0023)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "name" : "Triangle Point Index List",
         "req" : "2",
         "desc" : [
            "Contains 3n point indices describing unconnected Triangles.",
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
         "entity" : "Surface Mesh"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID",
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
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Implant Template",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0068,6510)[<0>](0068,6545)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "entity" : "Implant Template",
         "name" : "Planning Landmark Identification Code Sequence",
         "req" : "2",
         "desc" : [
            "Coded Description of the real-world line that is represented by this landmark.",
            "Zero or more Items shall be included in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0068,6520)[<0>](0068,6545)" : {
         "entity" : "Implant Template",
         "name" : "Planning Landmark Identification Code Sequence",
         "desc" : [
            "Coded Description of the real-world plane that is represented by this landmark.",
            "Zero or more Items shall be included in this sequence."
         ],
         "req" : "2",
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0008,0013)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Implant Template",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6440)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the Mating Feature.",
            "Shall be unique within the sequence."
         ],
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0022,1095)" : {
         "entity" : "Implant Template",
         "name" : "Implant Name",
         "desc" : "The (product) name of the implant.",
         "req" : "1",
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,63a8)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Sequence containing a coded description of the type of implant the template reflects.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Implant Type Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0040,a390)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
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
         "req" : "1C"
      },
      "(0068,6265)[<0>](0042,0012)" : {
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "MIME Type of Encapsulated Document",
         "desc" : [
            "The type of the encapsulated document stream described using the MIME Media Type (see RFC 2046).",
            "Required if Encapsulated Document (0042,0011) is present in this Sequence item.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "application/pdf",
                     null
                  ]
               ]
            }
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0400,0561)" : {
         "entity" : "Implant Template",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3"
      },
      "(0068,6510)[<0>](0068,6540)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "entity" : "Implant Template",
         "desc" : "Purpose or intended use of this landmark.",
         "name" : "Planning Landmark Description",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Time of Last Calibration",
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
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0003)" : {
         "entity" : "Surface Mesh",
         "name" : "Surface Number",
         "desc" : "Identification number of the surface. Uniquely identifies a surface within this SOP instance. Shall start at a value of 1, and increase monotonically by 1.",
         "req" : "1",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0068,6500)[<0>](0068,6550)" : {
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "entity" : "Implant Template",
         "name" : "2D Point Coordinates Sequence",
         "desc" : [
            "2D coordinates of the point in the HPGL documents.",
            "One or more Items shall be included in this sequence.",
            "Required if 3D Point Coordinates (0068,6590) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Point Coordinates (0068,6590) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "req" : "1C"
      },
      "(0068,6222)" : {
         "entity" : "Implant Template",
         "name" : "Replaced Implant Template Sequence",
         "req" : "1C",
         "desc" : [
            "Reference to the Implant Template that is replaced by this template.",
            "Only a single Item shall be included in this sequence.",
            "Required if this Instance replaces another Instance."
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,62c0)[<0>](0068,62f0)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "name" : "View Orientation Modifier",
         "desc" : "View Orientation Modifier.",
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6490)" : {
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "entity" : "Implant Template",
         "name" : "3D Degree Of Freedom Axis",
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
         "req" : "1C"
      },
      "(0068,63b0)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "desc" : [
            "Mating feature sets used to combine the implant with other implants.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Mating Feature Sets Sequence",
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0068,6224)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,6260)[<0>](0042,0012)" : {
         "req" : "1C",
         "name" : "MIME Type of Encapsulated Document",
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
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6410)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "req" : "1",
         "name" : "Degree of Freedom ID",
         "desc" : "Numeric ID of the degree of freedom. Uniquely identifies a degree of freedom within this Sequence Item. The value shall start at 1, and increase monotonically by 1 for each Item.",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0024,0202)" : {
         "name" : "Algorithm Source",
         "req" : "3",
         "desc" : "Source of the algorithm, e.g., the name of the manufacturer, researcher, university, etc.",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present."
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0016)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "entity" : "Surface Mesh",
         "req" : "1",
         "name" : "Point Coordinates Data",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.27.2.1.1",
                  "xrefstyle" : "select: label"
               }
            }
         ]
      },
      "(0068,63ac)" : {
         "name" : "Fixation Method Code Sequence",
         "desc" : [
            "The method that will be used to fixate the implant in the body.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)" : {
         "entity" : "Implant Template",
         "name" : "2D Degree of Freedom Sequence",
         "desc" : [
            "Geometric specifications of the degrees of freedom for this HPGL Document.",
            "One or more Items shall be included in this sequence.",
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
         "req" : "1C",
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Implant Template",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0068,6222)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Implant Template"
      },
      "(0068,6222)[<0>](0008,1150)" : {
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "entity" : "Implant Template",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0068,62a5)" : {
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "desc" : "Tolerance in mm applying to all distance measurements and spatial locations in this Implant Template.",
         "name" : "Overall Template Spatial Tolerance",
         "req" : "2"
      },
      "(0066,0002)[<0>](0066,0011)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "req" : "1",
         "name" : "Surface Points Sequence",
         "desc" : [
            "The point positions representing vertices of the surface.",
            "Only a single item shall be included in this sequence."
         ],
         "entity" : "Surface Mesh"
      },
      "(0068,62c0)[<0>](0068,6320)" : {
         "name" : "HPGL Pen Sequence",
         "desc" : [
            "Labels for each pen used in the encapsulated HPGL Document.",
            "One or more Items shall be included in this sequence.",
            "Shall contain one item per pen used in the HPGL document."
         ],
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "usage" : "U"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)[<2>](0066,0029)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface Mesh",
         "name" : "Primitive Point Index List",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0068,6510)[<0>](0068,65a0)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "name" : "2D Line Coordinates Sequence",
         "req" : "1C",
         "desc" : [
            "2D coordinates of the line in the HPGL documents.",
            "One or more Items shall be included in this sequence.",
            "Required if 3D Line Coordinates (0068,65D0) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Line Coordinates (0068,65D0) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6350)" : {
         "module" : "Generic Implant Template 3D Models",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "entity" : "Implant Template",
         "name" : "Implant Template 3D Model Surface Number",
         "req" : "1",
         "desc" : "Surface Number (0066,0003) of the surface that represents the shape of the entire implant."
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Implant Template",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6510)" : {
         "req" : "3",
         "name" : "Planning Landmark Line Sequence",
         "desc" : [
            "Line landmarks for planning.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0035)" : {
         "desc" : [
            "Describes the processing method.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Surface Processing (0066,0009) is YES."
         ],
         "name" : "Surface Processing Algorithm Identification Sequence",
         "req" : "2C",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)" : {
         "desc" : [
            "Degrees of freedom in this mating feature.",
            "One or more Items are permitted in this sequence.",
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
         "name" : "Mating Feature Degree of Freedom Sequence",
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U"
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6345)" : {
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "entity" : "Implant Template",
         "desc" : "Description of the kind of information drawn with the pen.",
         "name" : "HPGL Pen Description",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "Implant Template",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,002f)" : {
         "entity" : "Surface Mesh",
         "name" : "Algorithm Family Code Sequence",
         "req" : "1",
         "desc" : [
            "The family of algorithm(s) that best describes the software algorithm used.",
            "Only a single item shall be included in this sequence."
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,64f0)" : {
         "name" : "2D Degree Of Freedom Axis",
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
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Implant Template",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0068,63a4)" : {
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "name" : "Coating Materials Code Sequence",
         "desc" : [
            "A code sequence specifying the materials the implant is coated with.",
            "One or more Items shall be included in this Sequence.",
            "Required if the implant is coated."
         ],
         "req" : "1C"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0024)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "name" : "Edge Point Index List",
         "desc" : [
            "Contains 2n point indices describing unconnected Edges.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.27.4.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "2",
         "entity" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0015)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "name" : "Number Of Surface Points",
         "desc" : [
            "Specifies the number of points in the point set. Shall be less than or equal to 65535, if there are indexes into Points Coordinates Data (0066,0016) that are limited in length. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.2.1.1"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Surface Mesh"
      },
      "(0068,6520)[<0>](0068,65e0)[<1>](0068,65f0)" : {
         "entity" : "Implant Template",
         "name" : "2D Plane Intersection",
         "desc" : [
            "2D Coordinates of the intersection of the plane with the projection plane. Coordinates are measured in Millimeters of the printing space.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.29.1.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ]
      },
      "(0068,6500)[<0>](0068,6540)" : {
         "entity" : "Implant Template",
         "req" : "3",
         "name" : "Planning Landmark Description",
         "desc" : "Purpose or intended use of the landmark.",
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0032)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "req" : "3",
         "name" : "Algorithm Parameters",
         "desc" : "The input parameters used by a manufacturer to configure the behavior of a specific software algorithm.",
         "entity" : "Surface Mesh"
      },
      "(0068,6520)" : {
         "entity" : "Implant Template",
         "name" : "Planning Landmark Plane Sequence",
         "desc" : [
            "Plane landmarks for planning.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ]
      },
      "(0068,62c0)[<0>](0068,6320)[<1>](0068,6340)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "req" : "1",
         "name" : "HPGL Pen Label",
         "desc" : "Label of the pen.",
         "entity" : "Implant Template"
      },
      "(0008,001b)" : {
         "entity" : "Implant Template",
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6230)[<0>](0008,2218)" : {
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Anatomic Region Sequence",
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)[<2>](0066,0029)" : {
         "name" : "Primitive Point Index List",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.4.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present."
      },
      "(0066,0002)[<0>](0066,0010)" : {
         "name" : "Manifold",
         "req" : "1",
         "desc" : [
            "Indicates whether the surface is describing an n-1 dimensional manifold in the underlying n-dimensional vector space.",
            {
               "type" : "variablelist",
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
               ]
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
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
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
               ]
            }
         ],
         "name" : "Certificate of Signer",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0068,6360)[<0>](0068,6380)" : {
         "req" : "1",
         "name" : "Surface Model Label",
         "desc" : "Label for this surface.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ],
         "module" : "Generic Implant Template 3D Models",
         "usage" : "U"
      },
      "(0066,0002)[<0>](0066,000d)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "req" : "1",
         "name" : "Recommended Presentation Type",
         "desc" : [
            "Specifies the presentation type in which it is recommended that the surface be rendered.",
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
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0025)" : {
         "name" : "Vertex Point Index List",
         "req" : "2",
         "desc" : [
            "Contains n point indices describing Vertices.",
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
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0036)" : {
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "entity" : "Surface Mesh",
         "desc" : "The name assigned by a manufacturer to a specific software algorithm.",
         "name" : "Algorithm Name",
         "req" : "1"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001b)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "req" : "3",
         "name" : "Axis of Rotation",
         "desc" : "A 3D location that combined with Center of Rotation (0066,001C) specifies the preferred axis of rotation of this object.",
         "entity" : "Surface Mesh"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6470)[<3>](0068,6440)" : {
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U",
         "name" : "Referenced HPGL Document ID",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the Mating Feature.",
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
            ],
            "Shall be unique within the sequence."
         ],
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,6346)" : {
         "name" : "Recommended Rotation Point",
         "desc" : "Point around which the 2D template is rotated in manual planning, in HPGL coordinates.",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "usage" : "U"
      },
      "(0018,a001)" : {
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
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "SOP Instance Status",
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3"
      },
      "(0068,6500)[<0>](0068,6530)" : {
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "name" : "Planning Landmark ID",
         "req" : "1",
         "desc" : [
            "Numeric ID of the planning landmark. Uniquely identifies a planning landmark within the SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6265)[<0>](0068,6270)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "name" : "Information Issue DateTime",
         "req" : "1",
         "desc" : "Date and Time the information was issued.",
         "entity" : "Implant Template"
      },
      "(0022,1097)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Implant Part Number",
         "desc" : "The (product) identifier of the implant.",
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,6224)" : {
         "entity" : "Implant Template",
         "name" : "Derivation Implant Template Sequence",
         "desc" : [
            "Reference to Implant Template Instance from which this Instance was directly derived.",
            "Only a single Item shall be included in this sequence.",
            "Required if Implant Type (0068,6223) is DERIVED."
         ],
         "req" : "1C",
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Retrieve URI",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "req" : "3"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0017)" : {
         "desc" : "A single standard deviation of the error for all the points' spatial positions. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "name" : "Point Position Accuracy",
         "req" : "3",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Implant Template",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Implant Template",
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
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Implant Template",
         "name" : "Certified Timestamp",
         "req" : "3",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,63f0)" : {
         "req" : "1",
         "name" : "Mating Feature ID",
         "desc" : "Numeric ID of the mating feature. Uniquely identifies a mating feature within this Sequence Item.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features"
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Implant Template"
      },
      "(0068,6510)[<0>](0068,65a0)[<1>](0068,65b0)" : {
         "desc" : [
            "Coordinates of the line in the HPGL document. Coordinates are measured in millimeters of the printing space.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.2.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "2D Line Coordinates",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0100,0426)" : {
         "entity" : "Implant Template",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,6221)" : {
         "entity" : "Implant Template",
         "name" : "Implant Template Version",
         "desc" : [
            "The version code of the implant template.",
            "If Implant Type (0068,6223) is DERIVED, this shall have the same value as the Implant Template Version (0068,6221) of the manufacturer's implant template from which this instance was derived."
         ],
         "req" : "1",
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0068,6230)" : {
         "desc" : [
            "Sequence that identifies the anatomical region the implant is to be implanted to.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Implant Target Anatomy Sequence",
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description"
      },
      "(0068,62c0)" : {
         "desc" : [
            "The 2D template representations of this implant.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "HPGL Document Sequence",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "usage" : "U"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0068,6500)[<0>](0068,6550)[<1>](0068,6440)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "name" : "Referenced HPGL Document ID",
         "req" : "1",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6210)" : {
         "req" : "1C",
         "name" : "Implant Size",
         "desc" : [
            "The size descriptor of the component.",
            "Required if the component exists in different sizes and the size number is not part of the name or identifier.",
            "May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.1.1.1"
                  },
                  "el" : "xref"
               },
               " for details."
            ]
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "1",
         "desc" : "Name of the manufacturer that produces the implant.",
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,0012)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "req" : "2",
         "name" : "Surface Points Normals Sequence",
         "desc" : [
            "The normals on the surface for each point.",
            "Zero or one item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0034)" : {
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface Mesh",
         "name" : "Facet Sequence",
         "req" : "2",
         "desc" : [
            "All Facets in this Surface. Each sequence Item describes one facet.",
            "Zero or more Items shall be included in this sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Encrypted Content",
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
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63d0)" : {
         "entity" : "Implant Template",
         "name" : "Mating Feature Set Label",
         "req" : "1",
         "desc" : "Label of the set.",
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0068,6224)[<0>](0008,1155)" : {
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0066,0001)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "req" : "1",
         "name" : "Number of Surfaces",
         "desc" : "Number of surfaces contained in the Instance. Shall be 1 or more. Shall be the same as the number of Items in Surface Sequence (0066,0002).",
         "entity" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0026)" : {
         "entity" : "Surface Mesh",
         "req" : "2",
         "name" : "Triangle Strip Sequence",
         "desc" : [
            "All Triangle Strips in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
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
         "req" : "3"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,0019)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "name" : "Maximum Point Distance",
         "desc" : "The maximum distance of one point to its nearest neighbor. The units shall be the same as the units of the coordinate system in which the point coordinates are specified.",
         "req" : "3",
         "entity" : "Surface Mesh"
      },
      "(0068,6520)[<0>](0068,6620)" : {
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "entity" : "Implant Template",
         "desc" : [
            "3D Coordinates of the plane normal.",
            "Required if 3D Plane Origin (0068,6610) is present."
         ],
         "name" : "3D Plane Normal",
         "req" : "1C"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)[<2>](0066,0029)" : {
         "name" : "Primitive Point Index List",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001c)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "entity" : "Surface Mesh",
         "req" : "1C",
         "name" : "Center of Rotation",
         "desc" : "A 3D location defining the preferred center of rotation for this point set. Required if Axis of Rotation (0066,001B) is present. May be present otherwise."
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Implant Template",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
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
         "name" : "Query/Retrieve View",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Implant Template"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
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
         ]
      },
      "(0068,6226)" : {
         "req" : "1",
         "name" : "Effective DateTime",
         "desc" : "Date and time from which this Instance is or will be valid.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,001f)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "entity" : "Surface Mesh",
         "req" : "1",
         "name" : "Vector Dimensionality",
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
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6460)" : {
         "req" : "1",
         "name" : "2D Mating Axes",
         "desc" : [
            "Direction cosines of the contact system.",
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
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U"
      },
      "(0068,62c0)[<0>](0068,6300)" : {
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "entity" : "Implant Template",
         "name" : "HPGL Document",
         "req" : "1",
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
         ]
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0030)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "desc" : [
            "The code assigned by a manufacturer to a specific software algorithm.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Algorithm Name Code Sequence",
         "req" : "3",
         "entity" : "Surface Mesh"
      },
      "(0020,9172)" : {
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,64a0)" : {
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "entity" : "Implant Template",
         "name" : "Range of Freedom",
         "req" : "1C",
         "desc" : [
            "Two floating point numbers defining a value range for this degree of freedom.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.29.1.4.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if 3D Mating Point (0068,64C0) is present."
         ]
      },
      "(0068,6225)" : {
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "Original Implant Template Sequence",
         "desc" : [
            "Reference to the Implant Template Instance with Implant Type (0068,6223) ORIGINAL from which this Instance was ultimately derived.",
            "Only a single Item shall be included in this sequence.",
            "Required if Implant Type (0068,6223) is DERIVED."
         ]
      },
      "(0066,0002)[<0>](0066,0011)[<1>](0066,001a)" : {
         "name" : "Points Bounding Box Coordinates",
         "desc" : "Two 3D locations defining the cuboid bounding box, parallel to the coordinate system axes, encompassing the point set.",
         "req" : "3",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-2"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present."
      },
      "(0066,0002)[<0>](0066,000e)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "name" : "Finite Volume",
         "req" : "1",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "entity" : "Surface Mesh"
      },
      "(0068,6510)[<0>](0068,6530)" : {
         "name" : "Planning Landmark ID",
         "desc" : "Numeric ID of the planning landmark. Uniquely identifies the planning landmark within the SOP instance. The value shall start at 1, and increase monotonically by 1 for each Item.",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0068,6520)[<0>](0068,6530)" : {
         "req" : "1",
         "name" : "Planning Landmark ID",
         "desc" : [
            "Numeric ID of the planning landmark. Uniquely identifies the planning landmark within the SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U"
      },
      "(0068,6360)[<0>](0066,002c)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Referenced Surface Number",
         "desc" : "Reference to a Surface Number (0066,0003) present in Surface Sequence (0066,0002).",
         "usage" : "U",
         "module" : "Generic Implant Template 3D Models",
         "mod_tables" : [
            "table_C.29.1.3-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
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
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,6520)[<0>](0068,65e0)" : {
         "req" : "1C",
         "name" : "2D Plane Coordinates Sequence",
         "desc" : [
            "2D coordinates of the plane's intersection with the HPGL documents.",
            "One or more Items shall be included in this sequence.",
            "Required if 3D Plane Origin (0068,6610) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Plane Origin (0068,6610) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Implant Template",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0062,000c)" : {
         "name" : "Recommended Display Grayscale Value",
         "desc" : [
            "A default single gray unsigned value in which it is recommended that the maximum pixel value in this surface be rendered on a monochrome display. The units are specified in P-Values from a minimum of 0000H (black) up to a maximum of FFFFH (white).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The maximum P-Value for this Attribute may be different from the maximum P-Value from the output of the Presentation LUT, which may be less than 16 bits in depth."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "entity" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh"
      },
      "(0068,6260)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "name" : "Information From Manufacturer Sequence",
         "req" : "3",
         "desc" : [
            "Information from Manufacturer other than described in Notification From Manufacturer Sequence (0068,6265).",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0066,0002)[<0>](0066,000b)" : {
         "entity" : "Surface Mesh",
         "name" : "Surface Processing Description",
         "desc" : "A textual description of the surface processing performed.",
         "req" : "3",
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Implant Template",
         "name" : "Signature",
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
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0068,6500)[<0>](0068,6545)" : {
         "desc" : [
            "Coded Description of the real-world point that is represented by the landmark.",
            "Zero or more Items shall be included in this sequence."
         ],
         "name" : "Planning Landmark Identification Code Sequence",
         "req" : "2",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Implant Template",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Implant Template",
         "req" : "1",
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Implant Template",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
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
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "entity" : "Implant Template"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Implant Template"
      },
      "(0068,6265)[<0>](0042,0011)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "name" : "Encapsulated Document",
         "req" : "3",
         "desc" : [
            "The complete manufacturer notification describing the template.",
            "Encapsulated Document stream, containing a document encoded according to the MIME Type."
         ],
         "entity" : "Implant Template"
      },
      "(0020,0052)" : {
         "entity" : "Implant Template",
         "name" : "Frame of Reference UID",
         "desc" : "Defines a 3D Frame of Reference for this component.",
         "req" : "1",
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0066,0002)[<0>](0066,000c)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "desc" : [
            "Specifies the opacity in which it is recommended that the surface be rendered.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.27.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Recommended Presentation Opacity",
         "req" : "1"
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0021)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "name" : "Vector Coordinate Data",
         "desc" : [
            "A data stream of coordinates encoded as floats. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.27.3.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "entity" : "Surface Mesh"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)[<2>](0068,6450)" : {
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "2D Mating Point",
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
         ]
      },
      "(0068,6500)[<0>](0068,6550)[<1>](0068,6560)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "req" : "1",
         "name" : "2D Point Coordinates",
         "desc" : [
            "Coordinates of the point in the HPGL document. Coordinates are measured in millimeters of the printing space.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.29.1.2.1.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63c0)" : {
         "name" : "Mating Feature Set ID",
         "desc" : [
            "Identification number of the set. Uniquely identifies a mating feature set within this SOP instance.",
            "The value shall start at 1, and increase monotonically by 1 for each Item."
         ],
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features"
      },
      "(0068,6223)" : {
         "name" : "Implant Type",
         "desc" : [
            "Indicates whether the Implant Template is derived from another Implant Template.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description"
      },
      "(0008,0018)" : {
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
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
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0066,0002)[<0>](0066,0004)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "name" : "Surface Comments",
         "desc" : "User-defined comments describing the surface.",
         "req" : "3"
      },
      "(0068,6225)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0008,0015)" : {
         "entity" : "Implant Template",
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
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0027)" : {
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "entity" : "Surface Mesh",
         "req" : "2",
         "name" : "Triangle Fan Sequence",
         "desc" : [
            "All Triangle Fans in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ]
      },
      "(0068,62c0)[<0>](0068,62d5)" : {
         "req" : "3",
         "name" : "HPGL Document Label",
         "desc" : "Label describing the document.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "name" : "Data Elements Signed",
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0068,62a0)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "req" : "1C",
         "name" : "Implant Regulatory Disapproval Code Sequence",
         "desc" : [
            "Sequence containing countries and regions in which the implant is not approved for usage.",
            "One or more Items shall be included in this sequence.",
            "Required if the implant has been disapproved in a country or a region."
         ],
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,64c0)" : {
         "entity" : "Implant Template",
         "name" : "3D Mating Point",
         "req" : "1C",
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
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Implant Template",
         "name" : "Certified Timestamp Type",
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1C"
      },
      "(0066,0002)[<0>](0066,0012)[<1>](0066,0020)" : {
         "entity" : "Surface Mesh",
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
         "name" : "Vector Accuracy",
         "req" : "3",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-3"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,64d0)" : {
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ],
         "entity" : "Implant Template",
         "name" : "3D Mating Axes",
         "desc" : [
            "The Axes of contact described as direction cosines in the 3D coordinate system defined by the Frame Of Reference UID.",
            "Required if 3D Mating Point (0068,64C0) is present.",
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
         "req" : "1C"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "3",
         "entity" : "Implant Template"
      },
      "(0068,6510)[<0>](0068,65a0)[<1>](0068,6440)" : {
         "req" : "1",
         "name" : "Referenced HPGL Document ID",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-3"
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U"
      },
      "(0068,62c0)[<0>](0068,6310)" : {
         "name" : "HPGL Contour Pen Number",
         "req" : "1",
         "desc" : "Numeric ID of the pen used in the encapsulated HPGL document for outlines.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "module" : "Generic Implant Template 2D Drawings",
         "usage" : "U"
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)[<2>](0066,0029)" : {
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "name" : "Primitive Point Index List",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.27.4.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "entity" : "Surface Mesh"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certificate Type",
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Implant Template"
      },
      "(0068,63a0)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "usage" : "M",
         "module" : "Generic Implant Template Description",
         "desc" : [
            "A code sequence specifying the materials the implant was built from.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Materials Code Sequence",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,62e0)" : {
         "mod_tables" : [
            "table_C.29.1.2-1"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "req" : "1",
         "name" : "View Orientation Code Sequence",
         "desc" : [
            "Coded description of the direction of view represented by this 2D template.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,62c0)[<0>](0068,62d0)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "HPGL Document ID",
         "desc" : [
            "Identification number of the HPGL Document. Uniquely identifies an HPGL Document within this SOP instance.",
            "The value shall start at 1, and increase monotonically by 1."
         ],
         "usage" : "U",
         "module" : "Generic Implant Template 2D Drawings",
         "mod_tables" : [
            "table_C.29.1.2-1"
         ]
      },
      "(0068,6260)[<0>](0042,0011)" : {
         "desc" : [
            "Encapsulated Document stream, containing a document encoded according to the MIME Type.",
            "The complete manufacturer information."
         ],
         "name" : "Encapsulated Document",
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0068,6500)[<0>](0068,6590)" : {
         "entity" : "Implant Template",
         "req" : "1C",
         "name" : "3D Point Coordinates",
         "desc" : [
            "3D Coordinates of the point.",
            "Required if 2D Point Coordinates Sequence (0068,6550) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present if 2D Point Coordinates Sequence (0068,6550) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "module" : "Generic Implant Template Planning Landmarks",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-2"
         ]
      },
      "(0066,0002)[<0>](0062,000d)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "req" : "1",
         "name" : "Recommended Display CIELab Value",
         "desc" : [
            "A default triplet value in which it is recommended that the surface be rendered on a color display. The units are specified in PCS-Values, and the value is encoded as CIELab.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.10.7.1.1"
                  }
               }
            ]
         ],
         "entity" : "Surface Mesh"
      },
      "(0066,0002)[<0>](0066,0009)" : {
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "name" : "Surface Processing",
         "desc" : [
            "Specifies whether the surface has been modified subsequent to the original generation of the surface.",
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
                     "linkend" : "sect_C.27.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "2"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Implant Template",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6400)[<2>](0068,6420)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "Degree of Freedom Type",
         "desc" : [
            "Indicates the type of the degree of freedom.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "TRANSLATION",
                     null
                  ],
                  [
                     "ROTATION",
                     null
                  ]
               ]
            },
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
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0066,0002)[<0>](0066,0035)[<1>](0066,0031)" : {
         "entity" : "Surface Mesh",
         "req" : "1",
         "name" : "Algorithm Version",
         "desc" : "The software version identifier assigned by a manufacturer to a specific software algorithm.",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_10-19"
         ]
      },
      "(0066,0002)[<0>](0066,0013)[<1>](0066,0028)" : {
         "entity" : "Surface Mesh",
         "name" : "Line Sequence",
         "desc" : [
            "All Lines in this Surface.",
            "Zero or more Items shall be included in this sequence."
         ],
         "req" : "2",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1",
            "table_C.27-4"
         ]
      },
      "(0066,0002)[<0>](0066,0038)" : {
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "module" : "Surface Mesh",
         "mod_tables" : [
            "table_C.27-1"
         ],
         "entity" : "Surface Mesh",
         "req" : "3",
         "name" : "Recommended Line Thickness",
         "desc" : [
            "Specifies the thickness of each edge or line defined in the Edge Point Index List (0066,0024) or Line Sequence (0066,0028) with which it is recommended that the line be rendered.",
            "The units shall be the same as the units of the coordinate system in which the point coordinates are specified."
         ]
      },
      "(0066,0002)[<0>](0066,000a)" : {
         "mod_tables" : [
            "table_C.27-1"
         ],
         "module" : "Surface Mesh",
         "usage" : "C - Required if Generic Implant Template 3D Models Module is present.",
         "desc" : "The Ratio of Remaining points to Original points after processing. Required if Surface Processing (0066,0009) is YES.",
         "name" : "Surface Processing Ratio",
         "req" : "2C",
         "entity" : "Surface Mesh"
      },
      "(0068,63b0)[<0>](0068,63e0)" : {
         "entity" : "Implant Template",
         "desc" : [
            "The mating features of the set.",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Mating Feature Sequence",
         "req" : "1",
         "module" : "Generic Implant Template Mating Features",
         "usage" : "U",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "SOP Class UID",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "1"
      },
      "(0068,6520)[<0>](0068,65e0)[<1>](0068,6440)" : {
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ],
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "req" : "1",
         "name" : "Referenced HPGL Document ID",
         "desc" : [
            "Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark.",
            "Shall be unique within the sequence."
         ],
         "entity" : "Implant Template"
      },
      "(0068,6265)" : {
         "entity" : "Implant Template",
         "name" : "Notification From Manufacturer Sequence",
         "req" : "1C",
         "desc" : [
            "Information from the manufacturer concerning a critical notification, recall, or discontinuation of the implant or implant template.",
            "One or more Items shall be included in this sequence.",
            "Required if such information has been issued."
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Implant Template",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0068,6225)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.29.1.1-1",
            "table_10-11"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M"
      },
      "(0068,6265)[<0>](0068,6280)" : {
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "name" : "Information Summary",
         "desc" : "Summary of the information.",
         "req" : "1",
         "entity" : "Implant Template"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Implant Template"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0068,6260)[<0>](0068,6280)" : {
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "desc" : "Summary of the information.",
         "name" : "Information Summary",
         "req" : "1"
      },
      "(0008,0005)" : {
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
         "name" : "Specific Character Set",
         "req" : "1C",
         "entity" : "Implant Template",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
         "req" : "3",
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
         "entity" : "Implant Template"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Implant Template"
      },
      "(0068,63b0)[<0>](0068,63e0)[<1>](0068,6430)" : {
         "entity" : "Implant Template",
         "desc" : [
            "Coordinates of the mating feature in the HPGL documents.",
            "One or more Items shall be included in this sequence.",
            "Required if 3D Mating Point (0068,64C0) is not present and HPGL Document Sequence (0068,62C0) is present.",
            "May be present if 3D Mating Point (0068,64C0) is present and HPGL Document Sequence (0068,62C0) is present."
         ],
         "name" : "2D Mating Feature Coordinates Sequence",
         "req" : "1C",
         "usage" : "U",
         "module" : "Generic Implant Template Mating Features",
         "mod_tables" : [
            "table_C.29.1.4-1"
         ]
      },
      "(0068,6520)[<0>](0068,6610)" : {
         "entity" : "Implant Template",
         "name" : "3D Plane Origin",
         "desc" : [
            "3D Coordinates of the plane origin.",
            "Required if 2D Plane Coordinates Sequence (0068,65E0) is not present and Implant Template 3D Model Surface Number (0068,6350) is present.",
            "May be present if 2D Plane Coordinates Sequence (0068,65E0) is present and Implant Template 3D Model Surface Number (0068,6350) is present."
         ],
         "req" : "1C",
         "usage" : "U",
         "module" : "Generic Implant Template Planning Landmarks",
         "mod_tables" : [
            "table_C.29.1.5-1",
            "table_C.29.1.5-4"
         ]
      },
      "(0068,6260)[<0>](0068,6270)" : {
         "module" : "Generic Implant Template Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.29.1.1-1"
         ],
         "entity" : "Implant Template",
         "name" : "Information Issue DateTime",
         "desc" : "Date and Time the information was issued.",
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Implant Template",
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0201)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Implant Template",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
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
                     ]
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      }
   }
}