var data = 
{
   "tags" : {
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a370)[<0>](0040,2005)" : {
         "name" : "Issue Time of Imaging Service Request",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Time at which the Service Request was issued by the requester.",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a162)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,4026)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : [
            "Classes of the equipment for which the Procedure Step is scheduled.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Scheduled Station Class Code Sequence"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Context UID",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0038,0010)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Identification number of the visit as assigned by the healthcare provider",
         "name" : "Admission ID",
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0038,0502)[<0>](0012,0042)" : {
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null,
         "name" : "Clinical Trial Subject Reading ID",
         "req" : "Identifies the patient as a clinical trial or research subject for blinded evaluations.",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical"
      },
      "(0018,a001)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
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
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
         "module" : "SOP Common"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "MAC Algorithm"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a124)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,4021)[<0>](0040,e021)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4005)" : {
         "name" : "Scheduled Procedure Step Start DateTime",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : "Date and time at which the Procedure Step is scheduled to start.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : null
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "name" : "Repository Unique ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved."
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a168)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,0254)" : {
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Performed Procedure Step Description"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0034)" : {
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_df170e84-ce15-4659-8075-492d2437dca2"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1002)[<0>](0074,1008)[<1>](0074,100c)" : {
         "usage" : "Describes the progress of a UPS task",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "req" : "Name of the person, department or organization to contact for more information about the performance of the Procedure Step.",
         "name" : "Contact Display Name",
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a123)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Person Name",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0028,0303)" : {
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
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1216)[<0>](0040,4029)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Classes of the equipment that created the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Performed Station Class Code Sequence",
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1210)[<0>](0040,a123)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,a30a)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0040,4070)[<0>](0040,4074)[<1>](0040,e031)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "name" : "Home Community ID",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0010,2203)" : {
         "module" : "Patient Medical",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : [
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
            }
         ],
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0074,1210)[<0>](0040,a124)" : {
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e021)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a040)" : {
         "name" : "Value Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
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
         ]
      },
      "(0040,4034)[<0>](0040,4037)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : "Name of the human performer.",
         "name" : "Human Performer's Name",
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0040,4021)[<0>](0040,e024)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
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
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,08ea)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0038,0101)[<0>](0038,0102)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Description or title of the resource.",
         "name" : "Resource Description"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "DateTime",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         ]
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0040,4021)[<0>](0040,e024)[<1>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Repository Unique ID",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)" : {
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
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
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0074,1002)[<0>](0074,1006)" : {
         "entity" : "",
         "usage" : "Describes the progress of a UPS task",
         "desc" : null,
         "name" : "Procedure Step Progress Description",
         "req" : [
            "A textual description of progress.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "For example, it might contain \"Annealing complete\"."
                     ],
                     "attrs" : {
                        "xml:id" : "para_39e2d1bd-d560-4857-a51c-75273f24cc94"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0074,1224)" : {
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Replaced Procedure Step Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Canceled procedure step(s) that are replaced by this procedure step.",
            "Zero or more Items shall be included in the sequence."
         ]
      },
      "(0040,4025)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : [
            "Identifying names within the enterprise of the equipment for which the Procedure Step is scheduled. The names conveyed in Code Value (0008,0100) may be the same as the AE Titles, but do not have to be.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Scheduled Station Name Code Sequence"
      },
      "(0040,4070)[<0>](0040,4071)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "name" : "DICOM Storage Sequence",
         "desc" : [
            "Details for storing instances via the DICOM Storage Service.",
            "Required if STOW-RS Storage Sequence (0040,4072) or XDS Storage Sequence (0040,4074) is not present. May be present otherwise.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0074,1216)[<0>](0040,4050)" : {
         "name" : "Performed Procedure Step Start DateTime",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : "Date and Time at which the Procedure Step started.",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null
      },
      "(0040,4021)[<0>](0020,000d)" : {
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0038,0500)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "name" : "Patient State",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Description of patient state (comatose, disoriented, vision impaired, etc.)"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a120)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "DateTime",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0008,0018)" : {
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID"
      },
      "(0040,4070)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Output Destination Sequence",
         "req" : [
            "The destination to which the performer is requested to store the output objects generated",
            "Zero or more Items shall be included in this Sequence.",
            "Each item constitutes a separate storage request.",
            "The performing system might not support the requested storage protocol or not be configured for the desired destination. The performing system may, additionally or as a fallback, be configured to store output objects to a default destination or retain them locally.",
            "The actual location(s) to which instances are successfully stored is recorded in the Output Information Sequence (0040,4033).",
            "Whether to report failure of one or more of the storage requests as a failure of the work item is at the discretion of the performing system."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "WADO Retrieval Sequence",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institution Name",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
         "module" : "SOP Common"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
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
      "(0018,9004)" : {
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Filler Order Number / Imaging Service Request",
         "req" : "The order number assigned to the Service Request by the party filling the order.",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)[<2>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Repository Unique ID"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
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
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Value Type",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Accession Number",
         "req" : "An identifier of the order for the Study.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URI",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
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
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,0010)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Patient's Name",
         "req" : "Patient's full legal name.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name"
      },
      "(0040,4021)[<0>](0040,e020)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Type of object instances referenced.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "name" : "Type of Instances",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Deidentification Action",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1",
                                          "targetdoc" : "PS3.15"
                                       }
                                    },
                                    "."
                                 ],
                                 "el" : "para"
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "module" : "SOP Common"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0040,e001)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "name" : "HL7 Instance Identifier",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4036)" : {
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "Organization to which the human performer is accountable for the activities in the Procedure Step.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Human Performer's Organization"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0020,000e)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "Series Instance UID",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0010,21b0)" : {
         "req" : "Additional information about the patient's medical history",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "name" : "Additional Patient History",
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0040,4021)[<0>](0040,e022)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "module" : "SOP Common"
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "Referenced Frame Number",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
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
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0038,0100)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.2-4",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Patient Medical",
         "entity" : "",
         "usage" : "Describes the patient's medical state or history",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
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
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0038,0100)[<0>](0042,0010)" : {
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Title of the referenced document.",
         "name" : "Document Title",
         "module" : "Patient Medical"
      },
      "(0074,1216)[<0>](0074,1212)" : {
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Performed Processing Parameters Sequence",
         "req" : [
            "Parameters used to perform the procedure.",
            "Zero or more items shall be present in this Sequence"
         ],
         "mod_tables" : [
            "table_C.30.3-1"
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "Type of Instances"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         ]
      },
      "(0010,0040)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Sex of the named Patient.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Patient's Sex",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a30a)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Numeric Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1210)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : [
            "Processing parameters to be used by the performing system when carrying out the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Scheduled Processing Parameters Sequence",
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
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
         ]
      },
      "(0074,1210)[<0>](0040,a043)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1160)" : {
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
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,4018)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : [
            "Coded description of the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Scheduled Workitem Code Sequence"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0010,21c0)" : {
         "module" : "Patient Medical",
         "name" : "Pregnancy Status",
         "req" : [
            "Describes pregnancy state of patient.",
            {
               "list" : [
                  [
                     "0001",
                     "not pregnant"
                  ],
                  [
                     "0002",
                     "possibly pregnant"
                  ],
                  [
                     "0003",
                     "definitely pregnant"
                  ],
                  [
                     "0004",
                     "unknown"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.2-4"
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the patient's medical state or history"
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0040,4041)" : {
         "name" : "Input Readiness State",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Readiness state of the Input Information Sequence (0040,4021) and the referenced instances.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "INCOMPLETE",
                     "The Input Information Sequence is not yet complete and additional instance references might be added."
                  ],
                  [
                     "UNAVAILABLE",
                     "The Input Information Sequence is complete but one or more of the referenced instances might not yet be available from the referenced source(s)."
                  ],
                  [
                     "READY",
                     "The Input Information Sequence is complete and the referenced instances are available from the referenced sources."
                  ]
               ]
            },
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "If the Procedure Step does not require input information, the Input Readiness State may be READY when the Input Information Sequence is empty."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_ea2c3aa7-a740-4db1-8292-dfb90f52ca2e"
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
                                 "el" : "para",
                                 "content" : [
                                    "There is no guarantee that the referenced instances will still be available at the referenced location when retrieval is attempted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d482cc64-046d-4c5a-9aa1-ce4c9b6643d6"
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
                                 "attrs" : {
                                    "xml:id" : "para_43e64d6e-ee11-4c66-9c99-68cb98426908"
                                 },
                                 "content" : [
                                    "There is no requirement to confirm the presence of referenced media prior to setting the Input Readiness State to READY."
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
               ]
            }
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : null
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Time"
      },
      "(0040,4070)[<0>](0008,1150)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            "Required if the storage request only applies to a specific SOP Class."
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0010,0035)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
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
         "name" : "Patient's Alternative Calendar",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a168)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0021)" : {
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e025)[<2>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      "(0400,0500)" : {
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
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "Home Community ID",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,a370)[<0>](0040,1400)" : {
         "req" : "User-defined comments on the Requested Procedure.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Requested Procedure Comments",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0040,4010)" : {
         "req" : [
            "Date and time when the Scheduled Procedure Information was last modified or first created (whichever is most recent).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This attribute should be automatically updated by the worklist management system whenever any modification is made to ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.30.2",
                              "xrefstyle" : "select: title"
                           },
                           "el" : "xref"
                        },
                        " Attributes of a Unified Procedure Step."
                     ],
                     "attrs" : {
                        "xml:id" : "para_469fd37e-734d-468b-ac28-1ca5a906f7b1"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Scheduled Procedure Step Modification Date and Time",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : null
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Reason for the Requested Procedure",
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,2000)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "name" : "Medical Alerts",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Conditions to which medical staff should be alerted (e.g., contagious condition, drug allergies, etc.)"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a161)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e023)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "WADO Retrieval Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0038,0502)[<0>](0012,0010)" : {
         "module" : "Patient Medical",
         "req" : "The name of the clinical trial or research sponsor, responsible for conducting the clinical trial and for defining the Clinical Trial Protocol.",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : ""
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0040,a370)[<0>](0040,2400)" : {
         "req" : "User-defined comments on the Service Request.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Imaging Service Request Comments",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0010,1100)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null,
         "name" : "Referenced Patient Photo Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
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
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Institution-generated description or classification of the Requested Procedure.",
         "name" : "Requested Procedure Description",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "UID",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Procedure Type of the Requested Procedure.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
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
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0008,0122)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence.",
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0008,0201)" : {
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
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
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
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
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0038,0100)" : {
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : [
            "List of Documents (e.g., SR, or CDA) that contain information considered pertinent for the patient medical condition.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Pertinent Documents Sequence",
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the patient's medical state or history"
      },
      "(0040,4021)[<0>](0040,e023)[<1>](0040,e010)" : {
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
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
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ]
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0040,e001)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0010,0024)[<0>](0040,003a)" : {
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0038,0502)[<0>](0012,0020)" : {
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null,
         "req" : "Identifier for the noted protocol, used by the Clinical Trial Sponsor to uniquely identify the investigational protocol.",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "name" : "Clinical Trial Protocol ID",
         "module" : "Patient Medical"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,4035)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Human performers that are/were actually involved or responsible for performing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_ea0722aa-130c-498a-b7c2-adbc19ff5a83"
                     },
                     "content" : [
                        "Initially this list will be empty. Items may be added to the list at or after the status transition of the Procedure Step State (0074,1000) to \"IN PROGRESS\""
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Actual Human Performers Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)[<2>](0040,e031)" : {
         "name" : "Home Community ID",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "3",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Order Filler Identifier Sequence",
         "req" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common"
      },
      "(0010,21a0)" : {
         "module" : "Patient Medical",
         "name" : "Smoking Status",
         "req" : [
            "Indicates whether patient smokes.",
            {
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
                     "UNKNOWN",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.2-4"
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the patient's medical state or history"
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
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
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
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a30a)" : {
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0020,0013)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Number",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)[<2>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "2",
         "name" : "Storage Media File-Set ID"
      },
      "(0100,0420)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Relationship"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
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
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "req" : "1C",
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0074,1002)[<0>](0074,1008)[<1>](0074,100a)" : {
         "name" : "Contact URI",
         "req" : [
            "URI to communicate with performer of the procedure in progress. Any URI (telephone number, URL, etc.) is permitted.",
            {
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8d080487-6496-4a0b-a7a1-85916a3bafde"
                     },
                     "el" : "para"
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information",
         "entity" : "",
         "usage" : "Describes the progress of a UPS task",
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,4021)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Input Information Sequence",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "References to information objects needed to perform the scheduled Procedure Step.",
            [
               "Referencing unencapsulated HL7 documents is described further in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               ". See also Input Readiness State (0040,4041)."
            ],
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4033)" : {
         "req" : [
            "References to information created as part of the Procedure Step.",
            [
               "Referencing unencapsulated HL7 documents is described further in ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Output Information Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null
      },
      "(0038,0101)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : [
            [
               "Retrieval access path to resource. Includes fully specified scheme, authority, path, and query in accordance with ",
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
                        "xml:id" : "para_561ec3ce-b9d6-4e89-84b5-681fe4092bd8"
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
         "name" : "Retrieve URI",
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Software Versions",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         ]
      },
      "(0074,1216)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Details of the Procedure Step as performed.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Unified Procedure Step Performed Procedure Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,0105)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
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
         "req" : "1",
         "name" : "Mapping Resource",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0038,0502)[<0>](0012,0031)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Name of the site responsible for submitting clinical trial or research data."
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
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
         ]
      },
      "(0040,4034)[<0>](0040,4009)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : [
            "Human performer that is involved or responsible for performing the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Human Performer Code Sequence"
      },
      "(0074,1210)[<0>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0020,000d)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Study Instance UID",
         "req" : "Unique Study identification that shall be used for the created Composite SOP Instances resulting from this Unified Procedure Step.",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Date",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0074,1002)[<0>](0074,100e)" : {
         "usage" : "Describes the progress of a UPS task",
         "entity" : "",
         "desc" : null,
         "name" : "Procedure Step Discontinuation Reason Code Sequence",
         "req" : [
            "Coded Reason(s) for Discontinuing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "name" : "Context Group Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common"
      },
      "(0074,1000)" : {
         "entity" : "",
         "usage" : "Describes the progress of a UPS task",
         "desc" : null,
         "name" : "Procedure Step State",
         "req" : [
            "State of the Procedure Step.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SCHEDULED",
                     null
                  ],
                  [
                     "IN PROGRESS",
                     null
                  ],
                  [
                     "CANCELED",
                     null
                  ],
                  [
                     "COMPLETED",
                     null
                  ]
               ]
            },
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
               " for details on Unified Procedure Step states."
            ]
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "module" : "Unified Procedure Step Progress Information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Floating Point Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
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
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1204)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : "A label describing the task of the Procedure Step in text appropriate for displaying in the user selection interface.",
         "name" : "Procedure Step Label"
      },
      "(0074,1216)[<0>](0040,0280)" : {
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : "User-defined comments on the Performed Procedure Step.",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0010,0033)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bdb95ec9-5918-4428-b0b6-f9690a98b91d"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common"
      },
      "(0040,4021)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "URL specifying the location of the referenced instance(s)."
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a040)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Value Type",
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
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Date",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0074,1210)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0038,0014)" : {
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "req" : [
            "Identifier of the Assigning Authority that issued the Admission ID.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0040,4021)[<0>](0040,e024)[<1>](0040,e031)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "3",
         "name" : "Home Community ID",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0010,0020)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null,
         "name" : "Patient ID",
         "req" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e4db4051-3f71-4c78-9472-361ed65fbddf"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.30.4.1"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "name" : "Retrieve AE Title",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e021)[<2>](0008,0054)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "name" : "Retrieve AE Title",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0038,0100)[<0>](0040,a170)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "Describes the purpose for which the document reference is made. Zero or more Items shall be included in this Sequence.",
         "mod_tables" : [
            "table_C.2-4"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry"
      },
      "(0010,1002)" : {
         "req" : [
            "Identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Other Patient IDs Sequence",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Storage Media File-Set UID",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1200)" : {
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Priority of the scheduled Procedure Step",
            {
               "list" : [
                  [
                     "HIGH",
                     "used to indicate an urgent or emergent work item, equivalent to a STAT request."
                  ],
                  [
                     "MEDIUM",
                     "used to indicate a work item that has a priority less than HIGH and higher than LOW. It can be used to further stratify work items."
                  ],
                  [
                     "LOW",
                     "used to indicate a routine or non-urgent work item."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Scheduled Procedure Step Priority",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Private Group Reference"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a121)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Date",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0038,0050)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the patient's medical state or history",
         "module" : "Patient Medical",
         "name" : "Special Needs",
         "req" : "Medical and social needs (e.g., wheelchair, oxygen, translator, etc.)",
         "mod_tables" : [
            "table_C.2-4"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a122)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Time",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0074,1216)[<0>](0040,4030)" : {
         "req" : [
            "Geographic locations of the equipment that created Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Performed Station Geographic Location Code Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null
      },
      "(0074,1202)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Worklist Label",
         "req" : "A label identifying the worklist to which the Procedure Step instance belongs.",
         "mod_tables" : [
            "table_C.30.2-1"
         ]
      },
      "(0040,a370)[<0>](0040,2004)" : {
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "req" : "Date on which the Service Request was issued by the requester.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Issue Date of Imaging Service Request"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e023)[<2>](0040,e010)" : {
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
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
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     }
                  },
                  "\n"
               ]
            }
         ]
      },
      "(0074,1210)[<0>](0040,a121)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Date",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Device Serial Number",
         "module" : "SOP Common"
      },
      "(0008,001b)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
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
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1210)[<0>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ]
      },
      "(0074,1210)[<0>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0074,1210)[<0>](0040,a160)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Text Value",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0074,1216)[<0>](0040,4028)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Names within the enterprise of the equipment that performed the Procedure Step. This name may be the same as the AE Title, but does not have to be.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Performed Station Name Code Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4009)" : {
         "desc" : null,
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Human Performer Code Sequence",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "req" : [
            "Human performer that is involved or responsible for performing the Procedure Step.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1C",
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
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,a370)[<0>](0008,0090)" : {
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "req" : [
            "The physician who referred the Patient to the physician or service issuing the Service Request.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3d3d0d24-8011-4e81-b4ca-738053d8576e"
                     },
                     "content" : [
                        "This is generally the recipient of any report generated by the Service Request."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Referring Physician's Name"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e020)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Type of Instances",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0074,1002)[<0>](0074,1004)" : {
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "req" : [
            "A numerical indicator of progress expressed as percentage complete.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8ac83bba-c50c-42be-afd6-0d6b60f73662"
                     },
                     "content" : [
                        "This is primarily for status rendering (e.g., progress bar). The percentage is not necessarily an accurate indication of total time."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Procedure Step Progress",
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the progress of a UPS task"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Identifying Private Elements"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0040,4021)[<0>](0008,1199)" : {
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0040,a370)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Referenced Request Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Requested Procedures to which the Procedure Step contributes.",
            "Zero or more Items shall be included in the sequence."
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e024)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null,
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Unique identifier for the Study.",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Patient ID",
         "req" : "An identifier for the patient.",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0040,4011)" : {
         "name" : "Expected Completion DateTime",
         "req" : "Date and time at which the Procedure Step is expected to be completed.",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0302)" : {
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
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Private Creator Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "Contains SOP common information",
         "entity" : ""
      },
      "(0074,1210)[<0>](0040,a168)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0040,4070)[<0>](0040,4072)" : {
         "desc" : [
            "Details for storing instances via STOW-RS.",
            "Required if DICOM Storage Sequence (0040,4071) and XDS Storage Sequence (0040,4074) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "STOW-RS Storage Sequence",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "name" : "WADO-RS Retrieval Sequence"
      },
      "(0040,a370)[<0>](0040,1008)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Confidentiality Code",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Confidentiality Constraints on the Requested Procedure by the party filling the order.",
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0010,0024)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0008,1080)" : {
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Admitting Diagnoses Description",
         "req" : "Description of admitting diagnosis (diagnoses) for the patient.",
         "mod_tables" : [
            "table_C.30.4-1"
         ]
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Requested Procedure ID",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Identifier of the related Requested Procedure.",
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0074,1002)[<0>](0074,1008)" : {
         "name" : "Procedure Step Communications URI Sequence",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "req" : [
            "Contact Information to communicate with performers of the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "module" : "Unified Procedure Step Progress Information",
         "usage" : "Describes the progress of a UPS task",
         "entity" : "",
         "desc" : null
      },
      "(0040,a370)[<0>](0032,1033)" : {
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Institutional department where the request initiated.",
         "name" : "Requesting Service",
         "desc" : null,
         "usage" : "References the related SOPs and IEs",
         "entity" : ""
      },
      "(0010,2110)" : {
         "entity" : "",
         "usage" : "Describes the patient's medical state or history",
         "desc" : null,
         "name" : "Allergies",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "Description of prior reaction to contrast agents, or other patient allergies or adverse reactions.",
         "module" : "Patient Medical"
      },
      "(0074,1210)[<0>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence.",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : null
      },
      "(0040,4021)[<0>](0040,e023)" : {
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
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
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0040,4070)[<0>](0040,4072)[<1>](0040,4073)" : {
         "desc" : [
            "URI/URL specifying the location of the STOW-RS storage service to which instances will be stored.",
            [
               "The value shall be a fully specified URI with protocol, authority and path, in accordance with ",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.18",
                     "targetptr" : "sect_6.6",
                     "xrefstyle" : "select: labelnumber quotedtitle"
                  }
               },
               "."
            ]
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Storage URL",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Reason for the attribute modification.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0038,0502)[<0>](0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "req" : "The identifier, issued by the Clinical Trial Sponsor, of the site responsible for submitting clinical trial or research data.",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "entity" : "",
         "usage" : "Describes the patient's medical state or history",
         "desc" : null
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0040,4021)[<0>](0040,e021)[<1>](0008,0054)" : {
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "Retrieve AE Title"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "",
         "usage" : "Contains SOP common information",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "module" : "SOP Common"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Denominator Value",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a122)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0020,000d)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0040,4027)" : {
         "name" : "Scheduled Station Geographic Location Code Sequence",
         "req" : [
            "Geographic locations of the equipment for which the Procedure Step is scheduled.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : null
      },
      "(0008,010f)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         "name" : "Context Identifier",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,001a)" : {
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID"
      },
      "(0010,0035)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,4021)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Contribution DateTime",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0074,1002)[<0>](0074,1238)" : {
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "req" : "A textual description of the reason a procedure step was discontinued.",
         "name" : "Reason For Cancellation",
         "desc" : null,
         "usage" : "Describes the progress of a UPS task",
         "entity" : ""
      },
      "(0074,1224)[<0>](0008,1150)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e025)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C"
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
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
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0038,0502)[<0>](0012,0040)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "name" : "Clinical Trial Subject ID",
         "req" : "The assigned identifier for the patient as a clinical trial or research subject.",
         "mod_tables" : [
            "table_C.2-4"
         ]
      },
      "(0038,0502)" : {
         "module" : "Patient Medical",
         "req" : [
            "Sequence of identifiers for clinical trials or research in which the patient participates.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.2-4"
         ],
         "name" : "Patient Clinical Trial Participation Sequence",
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : ""
      },
      "(0074,1216)[<0>](0040,4035)[<1>](0040,4037)" : {
         "name" : "Human Performer's Name",
         "req" : "Name of the human performer.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Order Placer Identifier Sequence",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(0008,0012)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0074,1216)[<0>](0040,4051)" : {
         "req" : "Date and Time at which the Procedure Step ended.",
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Performed Procedure Step End DateTime",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : null
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data"
      },
      "(0010,0035)[<0>](0010,0021)" : {
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
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
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1210)[<0>](0040,a162)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0038,0101)" : {
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : [
            "List of resources that contain information considered pertinent for the patient medical condition.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Pertinent Resources Sequence",
         "module" : "Patient Medical"
      },
      "(0010,21d0)" : {
         "name" : "Last Menstrual Date",
         "req" : "Date of onset of last menstrual period",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "module" : "Patient Medical",
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "desc" : null
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,a160)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4021)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0040,4070)[<0>](0040,4074)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "req" : "1",
         "name" : "Repository Unique ID",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved."
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Unified Procedure Step Relationship",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0040,4034)" : {
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "req" : [
            "Human performers that are scheduled to be involved or responsible for performing the Procedure Step.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Scheduled Human Performers Sequence",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0040,4034)[<0>](0040,4036)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "Organization to which the human performer is accountable for the activities in the Procedure Step.",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Human Performer's Organization"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a163)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,4021)[<0>](0040,e025)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "entity" : "",
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
         ]
      },
      "(0074,1210)[<0>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0074,1210)[<0>](0040,a040)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "req" : "1",
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
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      },
      "(0008,1084)" : {
         "req" : [
            "Coded admitting diagnosis (diagnoses) for the patient.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "req" : "The order number assigned to the Service Request by the party placing the order.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Placer Order Number / Imaging Service Request"
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0040,e022)[<2>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : "",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set UID"
      },
      "(0040,0400)" : {
         "desc" : null,
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "User-defined comments on the scheduled Procedure Step.",
         "mod_tables" : [
            "table_C.30.2-1"
         ],
         "name" : "Comments on the Scheduled Procedure Step"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,4070)[<0>](0040,4071)[<1>](2100,0140)" : {
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "desc" : "Title of a DICOM Application Entity to which instances will be stored.",
         "name" : "Destination AE",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Scheduled Procedure Information"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0074,1216)[<0>](0040,4019)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : [
            "A sequence that conveys the type of procedure performed.",
            "Zero or more items shall be present in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.3-1"
         ],
         "name" : "Performed Workitem Code Sequence"
      },
      "(0038,0100)[<0>](0008,1155)" : {
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "usage" : "Describes the patient's medical state or history"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Unified Procedure Step Relationship"
      },
      "(0010,0030)" : {
         "module" : "Unified Procedure Step Relationship",
         "req" : "Date of birth of the named patient.",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "name" : "Patient's Birth Date",
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs"
      },
      "(0010,0035)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-18"
         ],
         "module" : "Unified Procedure Step Relationship"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ]
      },
      "(0074,1002)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "Describes the progress of a UPS task",
         "module" : "Unified Procedure Step Progress Information",
         "req" : [
            "Information about work progress for the Procedure Step.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "name" : "Progress Information Sequence"
      },
      "(0040,4021)[<0>](0040,e022)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : "",
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "2",
         "name" : "Storage Media File-Set ID"
      },
      "(0040,a370)[<0>](0032,1032)" : {
         "name" : "Requesting Physician",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Physician who requested the Service Request.",
         "module" : "Unified Procedure Step Relationship",
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common"
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "desc" : null,
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "module" : "Unified Procedure Step Relationship",
         "name" : " Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : [
            "Coded reason for requesting this procedure.",
            "Zero or more Items shall be included in the sequence."
         ]
      },
      "(0074,1224)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Unified Procedure Step Relationship",
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "Contains SOP common information",
         "entity" : "",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "module" : "SOP Common"
      },
      "(0038,0502)[<0>](0012,0021)" : {
         "desc" : null,
         "usage" : "Describes the patient's medical state or history",
         "entity" : "",
         "module" : "Patient Medical",
         "mod_tables" : [
            "table_C.2-4"
         ],
         "req" : "The name or title of the clinical trial or research protocol.",
         "name" : "Clinical Trial Protocol Name"
      },
      "(0040,4070)[<0>](0040,4074)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3c"
         ],
         "name" : "XDS Storage Sequence",
         "desc" : [
            "Details for storing instances via the IHE Provide and Register Document Set-b (ITI-41) transaction [IHE ITI-TF 2.b].",
            "Required if STOW-RS Storage Sequence (0040,4072) and DICOM Storage Sequence (0040,4071) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data"
      },
      "(0074,1216)[<0>](0074,1212)[<1>](0040,a160)" : {
         "module" : "Unified Procedure Step Performed Procedure Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-2"
         ],
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "entity" : ""
      },
      "(0074,1002)[<0>](0040,4052)" : {
         "desc" : null,
         "usage" : "Describes the progress of a UPS task",
         "entity" : "",
         "module" : "Unified Procedure Step Progress Information",
         "mod_tables" : [
            "table_C.30.1-1"
         ],
         "req" : "Date and Time at which the procedure step was discontinued.",
         "name" : "Procedure Step Cancellation DateTime"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "References the related SOPs and IEs",
         "entity" : "",
         "module" : "Unified Procedure Step Relationship",
         "name" : "DICOM Media Retrieval Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.4-1",
            "table_10-3b"
         ]
      },
      "(0074,1210)[<0>](0040,0441)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-2"
         ],
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "entity" : "",
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0074,1216)[<0>](0040,4033)[<1>](0008,1199)" : {
         "entity" : "",
         "usage" : "Describes the work performed including information about status, place, time and result data",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.30.3-1",
            "table_10-3b"
         ],
         "req" : "1",
         "module" : "Unified Procedure Step Performed Procedure Information"
      },
      "(0040,a370)[<0>](0040,1010)" : {
         "entity" : "",
         "usage" : "References the related SOPs and IEs",
         "desc" : null,
         "mod_tables" : [
            "table_C.30.4-1"
         ],
         "req" : "Names of the physicians, who are intended recipients of results.",
         "name" : "Names of Intended Recipients of Results",
         "module" : "Unified Procedure Step Relationship"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "",
         "usage" : "Contains SOP common information"
      },
      "(0040,4021)[<0>](0040,e022)" : {
         "module" : "Unified Procedure Step Scheduled Procedure Information",
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.30.2-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Describes the UPS task to be performed including information about place, time, priority and input data",
         "entity" : ""
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.30.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0008,1084))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.30.4-1 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4025))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4026))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4027))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.30.2-1 after (0040,4018))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.2-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.1-1 after (0074,100e))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4009))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4028))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4029))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4030))",
      "Can't handle table_8.8-1 (in table_C.30.3-1 after (0040,4019))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.30.3-1:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.2-4 after (0040,A170))"
   ]
}
