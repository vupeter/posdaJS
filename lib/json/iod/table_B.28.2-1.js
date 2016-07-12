var data = 
{
   "tags" : {
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
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
         "module" : "RT General Machine Verification",
         "name" : "Identifier Type Code",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300a,0318)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Range Shifter ID",
         "req" : "User or machine supplied identifier for Range Modulator.",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common",
         "entity" : "",
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
         "usage" : "Contains SOP Common Information"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0121)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            [
               "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
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
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Beam Limiting Device Rotation Direction",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1042)[<0>](300a,0107)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Applicator Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Applicators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0074,104a)[<0>](0008,1072)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Operator Identification Sequence",
         "req" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
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
               ]
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
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
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
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       }
                                    },
                                    "."
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
            }
         ],
         "module" : "SOP Common",
         "name" : "Deidentification Action",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "entity" : "",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Compensator Tray ID",
         "req" : "User-supplied identifier for compensator tray.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,012a)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "name" : "Table Top Lateral Position",
         "req" : [
            "Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "entity" : ""
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : "Orientation of wedge, i.e., orientation of the IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate system, in degrees.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Wedge Orientation"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1048)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "name" : "Failed Parameters Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "List of parameters that failed verification by the MPV.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.31.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "entity" : "",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "req" : "1",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0072,0028)" : {
         "name" : "Selector Value Number",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "entity" : ""
      },
      "(0400,0500)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300c,0104)" : {
         "name" : "Referenced Range Modulator Number",
         "req" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0105)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource",
         "entity" : "",
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0144)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Table Top Roll Angle"
      },
      "(0074,1046)[<0>](300a,0352)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "name" : "Patient Support ID",
         "req" : "User-specified identifier for manufacturer specific patient support devices.",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300c,0102)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Uniquely identifies lateral spreading device specified by Lateral Spreading Device Number (300A,0334) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Lateral Spreading Device Number"
      },
      "(0074,1046)[<0>](300a,0354)" : {
         "name" : "Patient Support Accessory Code",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "A Patient Support accessory identifier to be read by a device such as a bar code reader.",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
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
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,104a)[<0>](3008,0066)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "name" : "Override Reason",
         "req" : "User-defined description of reason for override of overridden parameter.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0008,0118)" : {
         "entity" : "",
         "desc" : "The unique identifier of the Mapping Resource",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource UID"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 }
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0074,1048)[<0>](0072,0026)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Attribute",
         "entity" : "",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0140)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Table Top Pitch Angle",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Modifying System"
      },
      "(0074,1042)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Sequence containing general machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "General Machine Verification Sequence"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300a,0336)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "name" : "Lateral Spreading Device ID",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "User or machine supplied identifier for Lateral Spreading Device."
      },
      "(0074,1046)[<0>](300a,0350)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TABLE",
                     "Treatment delivery system table"
                  ],
                  [
                     "CHAIR",
                     "Treatment delivery system chair"
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
                     "linkend" : "sect_C.8.8.25.6.3"
                  }
               },
               "."
            ]
         ],
         "name" : "Patient Support Type"
      },
      "(0074,1042)[<0>](300a,0180)" : {
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Patient setup data for current plan.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Patient Setup Sequence"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "name" : "Referenced Block Number",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006)."
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011e)" : {
         "req" : "Gantry angle of radiation source in degrees, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Gantry Angle",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "User-supplied identifier for block tray or Electron Insert.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Block Tray ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](300a,0330)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Number of lateral spreading devices associated with current beam.",
         "name" : "Number of Lateral Spreading Devices",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)[<2>](300c,0102)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332).",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Referenced Lateral Spreading Device Number"
      },
      "(0074,104a)[<0>](0072,0052)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Contains the Data Element Tags of the path to the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026) or to the Item(s) to be selected in Selector Sequence Pointer Items (0074,1057).",
            "This attribute shall have the same number of values as the level of nesting of Selector Attribute (0072,0026) or the selected Item(s).",
            "Required if Selector Attribute (0072,0026) is nested in one or more Sequences or is absent.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "",
         "name" : "Selector Sequence Pointer",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0074,1042)[<0>](300a,00ed)" : {
         "name" : "Number of Boli",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of boli used with current Beam.",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0020,9172)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)" : {
         "name" : "Ion Wedge Position Sequence",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Wedge positions for current control point.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification"
      },
      "(0008,0122)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
         "desc" : [
            "The name of the Mapping Resource.",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,030d)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Axial position in mm of the snout, measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators).",
         "name" : "Snout Position"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Referenced Compensator Number",
         "req" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1042)[<0>](300a,00d0)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "name" : "Number of Wedges",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of wedges associated with current Beam."
      },
      "(0074,1046)[<0>](300a,0312)" : {
         "req" : "Number of range shifters associated with current beam.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Number of Range Shifters",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0146)" : {
         "name" : "Table Top Roll Rotation Direction",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Instance Creation Time",
         "entity" : "",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : ""
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "RT General Machine Verification",
         "entity" : "",
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
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](0074,104e)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Beam control points for current ion treatment beam.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Ion Control Point Verification Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0010,0024)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "RT General Machine Verification",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,104a)[<0>](0072,0056)" : {
         "name" : "Selector Attribute Private Creator",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The coding scheme full common name",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0109)" : {
         "req" : [
            "Type of Applicator.",
            {
               "list" : [
                  [
                     "ELECTRON_SQUARE",
                     "square electron applicator"
                  ],
                  [
                     "ELECTRON_RECT",
                     "rectangular electron applicator"
                  ],
                  [
                     "ELECTRON_CIRC",
                     "circular electron applicator"
                  ],
                  [
                     "ELECTRON_SHORT",
                     "short electron applicator"
                  ],
                  [
                     "ELECTRON_OPEN",
                     "open (dummy) electron applicator"
                  ],
                  [
                     "INTRAOPERATIVE",
                     "intraoperative (custom) applicator"
                  ],
                  [
                     "STEREOTACTIC",
                     "stereotactic applicator"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Applicator Type",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Time of Last Calibration"
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300c,0100)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "name" : "Referenced Range Shifter Number",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Uniquely identifies range shifter specified by Range Shifter Number (300A,0316) within Beam referenced by Referenced Beam Number (300C,0006)."
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)" : {
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Beam Limiting Device Position Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0114)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "name" : "Nominal Beam Energy",
         "req" : "Nominal Beam Energy at control point.",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](300a,0306)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "name" : "Radiation Charge State",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Charge state of radiation."
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "RT General Machine Verification"
      },
      "(0074,1046)[<0>](300a,0356)" : {
         "name" : "Fixation Light Azimuthal Angle",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Azimuthal angle in degrees of the fixation light coordinate around the IEC BEAM LIMITING DEVICE Y-axis. Used for eye treatments. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               }
            },
            "."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300a,0382)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Start position, defining the range modulator position at which the beam is switched on.",
         "name" : "Range Modulator Gating Start Value",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0100,0424)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Contributing Equipment Sequence"
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0074,1042)[<0>](300a,00c6)" : {
         "name" : "Radiation Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Particle type of Beam.",
            {
               "list" : [
                  [
                     "PHOTON",
                     null
                  ],
                  [
                     "ELECTRON",
                     null
                  ],
                  [
                     "NEUTRON",
                     null
                  ],
                  [
                     "PROTON",
                     null
                  ],
                  [
                     "ION",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
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
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)" : {
         "name" : "Recorded Wedge Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Treatment wedges present during delivered Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1046)[<0>](3008,00f4)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Lateral spreading devices associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Lateral Spreading Device Sequence"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Range Modulator Settings for current control point.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Range Modulator Settings Sequence"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
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
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : "Person's mailing address",
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "name" : "Wedge Angle",
         "req" : "Nominal wedge angle delivered in degrees.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(300c,0002)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Referenced RT Plan Sequence",
         "req" : [
            "A reference to an RT Plan SOP Class/Instance pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)[<2>](300a,00db)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Closest distance in mm from the central axis of the beam along a wedge axis to the thin edge as projected to the machine isocentric plane. Value is positive is the wedge does not cover the central axis, negative if it does. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Wedge Thin Edge Position"
      },
      "(0074,104a)[<0>](0072,0054)" : {
         "module" : "RT General Machine Verification",
         "desc" : [
            "Identification of the creator of a group of private data elements used to encode attributes in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as Selector Sequence Pointer (0072,0052).",
            "For values of the Selector Sequence Pointer (0072,0052) that are not the Data Element Tag of a Private Attribute, the corresponding value in Selector Sequence Pointer Private Creator (0072,0054) shall be empty.",
            "Required if Selector Sequence Pointer (0072,0052) is present and one or more of the values of Selector Sequence Pointer (0072,0052) is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.17.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Private Creator"
      },
      "(0074,1048)[<0>](0072,0028)" : {
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Value Number"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0120)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Beam Limiting Device Angle",
         "req" : "Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system.",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0142)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ]
            }
         ],
         "name" : "Table Top Pitch Rotation Direction"
      },
      "(0074,1046)[<0>](3008,00f2)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Recorded Range Shifter Sequence",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Range shifters recorded with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011f)" : {
         "name" : "Gantry Rotation Direction",
         "req" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1042)[<0>](3008,00a0)" : {
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Beam Limiting Device Leaf Pairs Sequence"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)[<2>](300a,0372)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Machine specific setting attribute for the lateral spreading device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Lateral Spreading Device Setting"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "User-supplied identifier for wedge.",
         "name" : "Wedge ID",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0005)" : {
         "entity" : "",
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Specific Character Set"
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "desc" : "Person's telephone number(s)",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
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
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)" : {
         "req" : [
            "Range Shifter settings for the current control point.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Shifter Settings Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "Contains SOP Common Information",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0106)" : {
         "usage" : "Contains SOP Common Information",
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
         "module" : "SOP Common",
         "name" : "Context Group Version",
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
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)[<2>](300a,011c)" : {
         "name" : "Leaf/Jaw Positions",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N.",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,034c)" : {
         "name" : "Beam Current Modulation ID",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "User-supplied identifier for the beam current modulation pattern.",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Creator Reference",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(300c,0022)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "name" : "Referenced Fraction Group Number",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Identifier of Fraction Group within referenced RT Plan."
      },
      "(0074,1046)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Ion Machine Verification Sequence",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Sequence containing ion machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ]
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,014a)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Gantry Pitch Angle in degrees of the radiation source, i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Gantry Pitch Angle",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Context Identifier"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)[<2>](300a,0362)" : {
         "req" : [
            "Machine specific setting attribute for the range shifter. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Shifter Setting",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](300a,0302)" : {
         "req" : "Mass number of radiation.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Radiation Mass Number",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,00e0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of compensators associated with current Beam.",
         "name" : "Number of Compensators",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](3008,00f0)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Snouts associated with Beam.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Recorded Snout Sequence"
      },
      "(0074,1048)[<0>](0072,0056)" : {
         "name" : "Selector Attribute Private Creator",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.17.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300c,0104)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "name" : "Referenced Range Modulator Number"
      },
      "(0074,1048)[<0>](0072,0052)" : {
         "entity" : "",
         "desc" : [
            "Contains the Data Element Tags of the path to the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026) or to the Item(s) to be selected in Selector Sequence Pointer Items (0074,1057).",
            "This attribute shall have the same number of values as the level of nesting of Selector Attribute (0072,0026) or the selected Item(s).",
            "Required if Selector Attribute (0072,0026) is nested in one or more Sequences or is absent.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  }
               },
               "."
            ]
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer"
      },
      "(4ffe,0001)" : {
         "entity" : "",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "name" : "MAC Parameters Sequence"
      },
      "(0074,1046)[<0>](3008,00f6)" : {
         "name" : "Recorded Range Modulator Sequence",
         "req" : [
            "Range modulators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0074,104a)[<0>](0072,0026)" : {
         "name" : "Selector Attribute",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ]
      },
      "(0020,0013)" : {
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Number"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0028,0303)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](300a,00c2)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "User-defined name for Beam.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Beam Name"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,014c)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            [
               "Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.5",
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
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Gantry Pitch Rotation Direction"
      },
      "(0074,104a)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "List of parameters that were overridden by the user.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.31.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Overridden Parameters Sequence"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0128)" : {
         "name" : "Table Top Vertical Position",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Type of beam limiting device (collimator).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "X",
                     "symmetric jaw pair in IEC X direction"
                  ],
                  [
                     "Y",
                     "symmetric jaw pair in IEC Y direction"
                  ],
                  [
                     "ASYMX",
                     "asymmetric jaw pair in IEC X direction"
                  ],
                  [
                     "ASYMY",
                     "asymmetric pair in IEC Y direction"
                  ],
                  [
                     "MLCX",
                     "multileaf (multi-element) jaw pair in IEC X direction"
                  ],
                  [
                     "MLCY",
                     "multileaf (multi-element) jaw pair in IEC Y direction"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "RT Beam Limiting Device Type",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "",
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
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0108)" : {
         "req" : "User or machine supplied identifier for Applicator.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Applicator ID",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
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
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)[<2>](300c,0100)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314).",
         "name" : "Referenced Range Shifter Number",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1042)[<0>](300c,0006)" : {
         "req" : [
            "References Beam specified by Beam Number (300A,00C0) in Beam Sequence (300A,00B0) in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            " of referenced RT Plan\n                  or in Ion Beam Sequence (300A,03A2) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.25"
               }
            },
            " within the referenced RT Ion Plan."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced Beam Number",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "",
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "entity" : "",
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
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID"
      },
      "(0074,1046)[<0>](300a,0340)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Number of range modulators associated with current beam.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Number of Range Modulators"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Instance Identifier"
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300a,00f9)" : {
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Accessory Code",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
         "name" : "Certified Timestamp Type",
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
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,0346)" : {
         "req" : "User or machine supplied identifier for Range Modulator.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Modulator ID",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300a,00f9)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "usage" : "Contains SOP Common Information",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Version",
         "entity" : "",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : "Person's telephone number(s)",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,00f9)" : {
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Accessory Code",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "Contains SOP Common Information",
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
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(3008,002c)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Conditions under which treatment was verified by a verification system.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "VERIFIED",
                     "treatment verified"
                  ],
                  [
                     "VERIFIED_OVR",
                     "treatment verified with at least one out-of-range value overridden"
                  ],
                  [
                     "NOT_VERIFIED",
                     "treatment failed verification (one or more values out of range and not overridden)"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Treatment Verification Status"
      },
      "(0074,1042)[<0>](300a,00f0)" : {
         "req" : "Number of shielding blocks or Electron Inserts associated with Beam.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Number of Blocks",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,001b)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
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
         "usage" : "Contains SOP Common Information"
      },
      "(0018,9004)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
         ],
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "name" : "Number of Leaf/Jaw Pairs",
         "req" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1042)[<0>](3008,0033)" : {
         "name" : "Specified Secondary Meterset",
         "req" : "Desired machine setting of secondary Meterset. The units shall match those specified for Specified Secondary Meterset (3008,0033) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300a,0384)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Stop position, defining the range modulator position at which the beam is switched off.",
         "name" : "Range Modulator Gating Stop Value"
      },
      "(0010,0020)" : {
         "req" : "Primary identifier for the patient.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Patient ID",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Contribution Description"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Digital Signature UID"
      },
      "(0074,1046)[<0>](300a,0304)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Atomic number of radiation.",
         "name" : "Radiation Atomic Number",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "User-supplied identifier for compensator.",
         "name" : "Compensator ID",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](3008,00f0)[<1>](300a,030f)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "User or machine supplied identifier for Snout.",
         "name" : "Snout ID"
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,0348)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Type of Range Modulator.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.31.3.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Modulator Type"
      },
      "(0074,1042)[<0>](300c,00b0)" : {
         "name" : "Referenced Bolus Sequence",
         "req" : [
            "Boli associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00c0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Treatment compensators associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Compensator Sequence",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.5"
               },
               "el" : "xref"
            },
            " within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.9"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced ROI Number"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0148)" : {
         "name" : "Head Fixation Angle",
         "req" : [
            "Angle in degrees of the head fixation for eye treatments with respect to the Table Top Pitch Angle (300A,0140) coordinate system. Positive head fixation angle is the same direction as positive Table Top Pitch. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1104)" : {
         "usage" : "Contains general delivery verification information",
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
               ]
            }
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0100,0420)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](3008,003a)" : {
         "req" : "Treatment Time set in seconds.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Specified Treatment Time",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0010,0021)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "entity" : "",
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
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)" : {
         "name" : "Lateral Spreading Device Settings Sequence",
         "req" : [
            "Lateral Spreading Device settings for the current control point.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1046)[<0>](300a,0308)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "The method of beam scanning to be used during treatment.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NONE",
                     "No beam scanning is performed"
                  ],
                  [
                     "UNIFORM",
                     "The beam is scanned between control points to create a uniform lateral fluence distribution across the field"
                  ],
                  [
                     "MODULATED",
                     "The beam is scanned between control points to create a modulated lateral fluence distribution across the field"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Scan Mode"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,0123)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0053)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0117)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "entity" : "",
         "name" : "Context UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1048)[<0>](0074,1057)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Identification of the Item indices in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as the Selector Sequence Pointer (0072,0052).",
            "The value 1 identifies the first Item of the corresponding Sequence. The value 0 identifies all Items of the corresponding Sequence.",
            "Required if Selector Sequence Pointer (0072,0052) is present.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](3008,0032)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Desired machine setting of primary Meterset. The units shall match those specified by Primary Dosimeter Unit (300A,00B3) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "name" : "Specified Primary Meterset"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0182)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Identification number of the Patient Setup.",
         "name" : "Patient Setup Number"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "name" : "Wedge Number",
         "req" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0123)" : {
         "name" : "Patient Support Rotation Direction",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            [
               "Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  }
               },
               "."
            ],
            {
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1046)[<0>](3008,00f0)[<1>](300a,00f9)" : {
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Accessory Code",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(0040,a390)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "",
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
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Data Element Characteristics Sequence"
      },
      "(0074,1042)[<0>](3008,00d0)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Blocks associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Recorded Block Sequence"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)[<2>](300a,0118)" : {
         "name" : "Wedge Position",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Position of Wedge at current Control Point.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "IN",
                     null
                  ],
                  [
                     "OUT",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1048)[<0>](0072,0054)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : [
            "Identification of the creator of a group of private data elements used to encode attributes in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as Selector Sequence Pointer (0072,0052).",
            "For values of the Selector Sequence Pointer (0072,0052) that are not the Data Element Tag of a Private Attribute, the corresponding value in Selector Sequence Pointer Private Creator (0072,0054) shall be empty.",
            "Required if Selector Sequence Pointer (0072,0052) is present and one or more of the values of Selector Sequence Pointer (0072,0052) is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.2"
                  }
               },
               "."
            ]
         ],
         "module" : "RT General Machine Verification",
         "name" : "Selector Sequence Pointer Private Creator",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0074,1046)[<0>](300a,0358)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Fixation Light Polar Angle",
         "req" : [
            "Polar angle in degrees of the fixation light coordinate. Used for eye treatments. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0122)" : {
         "name" : "Patient Support Angle",
         "req" : "Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](3008,0045)" : {
         "req" : "The specified speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) in referenced RT Plan per minute.",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Meterset Rate Set",
         "desc" : null,
         "entity" : "",
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0129)" : {
         "entity" : "",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Table Top Longitudinal Position"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)" : {
         "req" : [
            "Fixation Devices used in Patient Setup.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Fixation Device Sequence",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,0192)" : {
         "name" : "Fixation Device Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Type of Fixation Device used during Patient Setup.",
            {
               "list" : [
                  [
                     "BITEBLOCK",
                     null
                  ],
                  [
                     "HEADFRAME",
                     null
                  ],
                  [
                     "MASK",
                     null
                  ],
                  [
                     "MOLD",
                     null
                  ],
                  [
                     "CAST",
                     null
                  ],
                  [
                     "HEADREST",
                     null
                  ],
                  [
                     "BREAST_BOARD",
                     null
                  ],
                  [
                     "BODY_FRAME",
                     null
                  ],
                  [
                     "VACUUM_MOLD",
                     null
                  ],
                  [
                     "WHOLE_BODY_POD",
                     null
                  ],
                  [
                     "RECTAL_BALLOON",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300c,00f0)" : {
         "name" : "Referenced Control Point Index",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112 within the Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "entity" : ""
      },
      "(0074,104a)[<0>](0074,1057)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Identification of the Item indices in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as the Selector Sequence Pointer (0072,0052).",
            "The value 1 identifies the first Item of the corresponding Sequence. The value 0 identifies all Items of the corresponding Sequence.",
            "Required if Selector Sequence Pointer (0072,0052) is present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  }
               },
               "."
            ]
         ],
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,00b2)" : {
         "req" : [
            "User-defined name identifying treatment machine to be used for beam delivery. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Treatment Machine Name",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains general delivery verification information"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0008,0014)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0074,104a)[<0>](0008,1070)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "entity" : "",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Name of operator who authorized override of overridden parameter."
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
         ]
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(0074,1042)[<0>](300a,0110)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of control points in Beam.",
         "name" : "Number of Control Points",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "module" : "RT Ion Machine Verification",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "req" : [
            "Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6)",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "X",
                     "symmetric jaw pair in IEC X direction"
                  ],
                  [
                     "Y",
                     "symmetric jaw pair in IEC Y direction"
                  ],
                  [
                     "ASYMX",
                     "asymmetric jaw pair in IEC X direction"
                  ],
                  [
                     "ASYMY",
                     "asymmetric pair in IEC Y direction"
                  ],
                  [
                     "MLCX",
                     "multileaf (multi-element) jaw pair in IEC X direction"
                  ],
                  [
                     "MLCY",
                     "multileaf (multi-element) jaw pair in IEC Y direction"
                  ]
               ]
            }
         ],
         "name" : "RT Beam Limiting Device Type"
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0008,0082))"
   ]
}
