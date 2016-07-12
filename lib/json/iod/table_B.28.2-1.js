var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0008,0082))"
   ],
   "tags" : {
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0120)" : {
         "name" : "Beam Limiting Device Angle",
         "req" : "Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system.",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1042)[<0>](300a,00ed)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "req" : "Number of boli used with current Beam.",
         "name" : "Number of Boli"
      },
      "(0074,1046)[<0>](300a,0340)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Number of Range Modulators",
         "req" : "Number of range modulators associated with current beam."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,00f9)" : {
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3"
      },
      "(0074,1048)[<0>](0072,0056)" : {
         "name" : "Selector Attribute Private Creator",
         "req" : "1C",
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
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0074,1046)[<0>](3008,00f2)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Range shifters recorded with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Range Shifter Sequence"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300c,0100)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Uniquely identifies range shifter specified by Range Shifter Number (300A,0316) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Range Shifter Number"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0122)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Patient Support Angle",
         "req" : "Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system."
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Date of Last Calibration",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0018,9004)" : {
         "req" : "3",
         "name" : "Content Qualification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "RT General Machine Verification",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "name" : "Person Identification Code Sequence",
         "req" : "1"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Lateral Spreading Device Settings Sequence",
         "req" : [
            "Lateral Spreading Device settings for the current control point.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,014a)" : {
         "name" : "Gantry Pitch Angle",
         "req" : [
            "Gantry Pitch Angle in degrees of the radiation source, i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP Common Information",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Related General SOP Class UID",
         "req" : "3"
      },
      "(0074,1046)[<0>](3008,00f0)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "name" : "Accessory Code"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300c,00f0)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Referenced Control Point Index",
         "req" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112 within the Beam referenced by Referenced Beam Number (300C,0006)."
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "HL7 Instance Identifier"
      },
      "(0074,1046)[<0>](3008,00f0)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Recorded Snout Sequence",
         "req" : [
            "Snouts associated with Beam.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)[<2>](300a,00db)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Wedge Thin Edge Position",
         "req" : [
            "Closest distance in mm from the central axis of the beam along a wedge axis to the thin edge as projected to the machine isocentric plane. Value is positive is the wedge does not cover the central axis, negative if it does. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Reason for the Attribute Modification"
      },
      "(0074,1046)[<0>](300a,0330)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Number of Lateral Spreading Devices",
         "req" : "Number of lateral spreading devices associated with current beam."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "module" : "RT General Machine Verification",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "Contains general delivery verification information",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300a,0384)" : {
         "req" : "Stop position, defining the range modulator position at which the beam is switched off.",
         "name" : "Range Modulator Gating Stop Value",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0008,0013)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Instance Creation Time"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name"
      },
      "(0074,1046)[<0>](300a,0356)" : {
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
         "name" : "Fixation Light Azimuthal Angle",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "SOP Authorization DateTime"
      },
      "(0400,0561)" : {
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0074,1042)[<0>](3008,00a0)" : {
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Time of Last Calibration",
         "req" : "3"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT General Machine Verification",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Certified Timestamp"
      },
      "(0008,010f)" : {
         "entity" : "",
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
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Context Identifier"
      },
      "(0074,1048)[<0>](0074,1057)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
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
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Modulator Settings Sequence",
         "req" : [
            "Range Modulator Settings for current control point.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0100,0410)" : {
         "req" : "3",
         "name" : "SOP Instance Status",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0140)" : {
         "req" : [
            "Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Table Top Pitch Angle",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "module" : "SOP Common",
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
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
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
         "name" : "Universal Entity ID"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)[<2>](300a,011c)" : {
         "name" : "Leaf/Jaw Positions",
         "req" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N.",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0100,0426)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3"
      },
      "(0074,1042)[<0>](300a,0110)" : {
         "req" : "Number of control points in Beam.",
         "name" : "Number of Control Points",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "name" : "Signature",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0074,104a)[<0>](0074,1057)" : {
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
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
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "RT General Machine Verification",
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
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](300a,0354)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Patient Support Accessory Code",
         "req" : "A Patient Support accessory identifier to be read by a device such as a bar code reader."
      },
      "(0074,1042)[<0>](300a,0180)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Patient Setup Sequence",
         "req" : [
            "Patient setup data for current plan.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ]
      },
      "(0074,1046)[<0>](300a,0350)" : {
         "req" : [
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Patient Support Type",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced ROI Number",
         "req" : [
            "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.5",
                  "xrefstyle" : "select: title"
               }
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
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "req" : "1"
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300c,0102)" : {
         "name" : "Referenced Lateral Spreading Device Number",
         "req" : "Uniquely identifies lateral spreading device specified by Lateral Spreading Device Number (300A,0334) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](3008,0045)" : {
         "name" : "Meterset Rate Set",
         "req" : "The specified speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) in referenced RT Plan per minute.",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0108)" : {
         "name" : "Applicator ID",
         "req" : "User or machine supplied identifier for Applicator.",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1042)[<0>](300a,0107)" : {
         "req" : [
            "Applicators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Applicator Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
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
               ]
            }
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ]
      },
      "(0074,104a)[<0>](0072,0052)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
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
         "req" : "1C",
         "name" : "Selector Sequence Pointer"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0106)" : {
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Context Group Version",
         "req" : "1"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011f)" : {
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Gantry Rotation Direction",
         "req" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See ",
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
         ]
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1"
      },
      "(0008,0016)" : {
         "req" : "1",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
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
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
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
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Deidentification Action"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : ""
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Private Group Reference"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced Block Number",
         "req" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006)."
      },
      "(0074,104a)[<0>](0008,1070)" : {
         "req" : "Name of operator who authorized override of overridden parameter.",
         "name" : "Operators' Name",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "name" : "Referenced Compensator Number",
         "req" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Person's Telecom Information"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3"
      },
      "(0074,1042)[<0>](3008,00c0)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "name" : "Recorded Compensator Sequence",
         "req" : [
            "Treatment compensators associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0020,9172)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C"
      },
      "(0074,1046)[<0>](0074,104e)" : {
         "name" : "Ion Control Point Verification Sequence",
         "req" : [
            "Beam control points for current ion treatment beam.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0008,0015)" : {
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "req" : "1C"
      },
      "(0074,104a)[<0>](0072,0026)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : "",
         "name" : "Selector Attribute",
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Private Creator Reference"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "2",
         "name" : "Source of Previous Values"
      },
      "(0074,1046)[<0>](3008,00f4)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Recorded Lateral Spreading Device Sequence",
         "req" : [
            "Lateral spreading devices associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1042)[<0>](300a,00c6)" : {
         "name" : "Radiation Type",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](300a,0302)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "req" : "Mass number of radiation.",
         "name" : "Radiation Mass Number"
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300a,0336)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Lateral Spreading Device ID",
         "req" : "User or machine supplied identifier for Lateral Spreading Device."
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Encrypted Content"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0146)" : {
         "req" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.2"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "name" : "Table Top Roll Rotation Direction",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(3008,002c)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "req" : [
            "Conditions under which treatment was verified by a verification system.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "name" : "Treatment Verification Status"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)" : {
         "name" : "Ion Wedge Position Sequence",
         "req" : [
            "Wedge positions for current control point.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Institutional Department Name"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "req" : "User-supplied identifier for wedge.",
         "name" : "Wedge ID",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1046)[<0>](300a,0358)" : {
         "req" : [
            "Polar angle in degrees of the fixation light coordinate. Used for eye treatments. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Fixation Light Polar Angle",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)[<2>](300a,0372)" : {
         "name" : "Lateral Spreading Device Setting",
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
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1042)[<0>](300c,0006)" : {
         "name" : "Referenced Beam Number",
         "req" : [
            "References Beam specified by Beam Number (300A,00C0) in Beam Sequence (300A,00B0) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.14"
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
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "name" : "Software Versions",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1046)[<0>](3008,00f6)" : {
         "req" : [
            "Range modulators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Range Modulator Sequence",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,012a)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "req" : [
            "Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               }
            },
            "."
         ],
         "name" : "Table Top Lateral Position"
      },
      "(0074,104a)[<0>](0008,1072)" : {
         "req" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence.",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0148)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
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
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0144)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Table Top Roll Angle"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)[<2>](300a,0362)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "req" : [
            "Machine specific setting attribute for the range shifter. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.5",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Range Shifter Setting"
      },
      "(0008,0118)" : {
         "req" : "3",
         "name" : "Mapping Resource UID",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(300c,0022)" : {
         "req" : "Identifier of Fraction Group within referenced RT Plan.",
         "name" : "Referenced Fraction Group Number",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,0346)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "User or machine supplied identifier for Range Modulator.",
         "name" : "Range Modulator ID"
      },
      "(0008,0014)" : {
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Instance Creator UID",
         "req" : "3"
      },
      "(0010,0021)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
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
         "module" : "RT General Machine Verification",
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0074,1042)[<0>](300a,00e0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "req" : "Number of compensators associated with current Beam.",
         "name" : "Number of Compensators"
      },
      "(0074,1046)[<0>](300a,0308)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Scan Mode",
         "req" : [
            "The method of beam scanning to be used during treatment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0010,0024)" : {
         "module" : "RT General Machine Verification",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)[<2>](300c,0100)" : {
         "name" : "Referenced Range Shifter Number",
         "req" : "Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314).",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0142)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.2"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0123)" : {
         "name" : "Patient Support Rotation Direction",
         "req" : [
            [
               "Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. See ",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
               "title" : "Enumerated Values:",
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
         ]
      },
      "(0074,1042)" : {
         "req" : [
            "Sequence containing general machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "General Machine Verification Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,1048)[<0>](0072,0052)" : {
         "name" : "Selector Sequence Pointer",
         "req" : "1C",
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
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : ""
      },
      "(0074,1048)[<0>](0072,0026)" : {
         "name" : "Selector Attribute",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "MAC Algorithm"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "name" : "Operators' Name",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "Nonidentifying Private Elements"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300c,0104)" : {
         "name" : "Referenced Range Modulator Number",
         "req" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)" : {
         "req" : [
            "Fixation Devices used in Patient Setup.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Fixation Device Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,0348)" : {
         "name" : "Range Modulator Type",
         "req" : [
            "Type of Range Modulator.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.31.3.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,03ac)[<2>](300a,0118)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : [
            "Position of Wedge at current Control Point.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Wedge Position"
      },
      "(0074,1048)[<0>](0072,0028)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "1C",
         "name" : "Selector Value Number"
      },
      "(0074,1042)[<0>](300c,00b0)" : {
         "req" : [
            "Boli associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Bolus Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "name" : "Compensator Tray ID",
         "req" : "User-supplied identifier for compensator tray.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0128)" : {
         "name" : "Table Top Vertical Position",
         "req" : [
            "Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
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
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "req" : "Orientation of wedge, i.e., orientation of the IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate system, in degrees.",
         "name" : "Wedge Orientation",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0100,0424)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "SOP Authorization Comment",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,0033)" : {
         "name" : "Specified Secondary Meterset",
         "req" : "Desired machine setting of secondary Meterset. The units shall match those specified for Specified Secondary Meterset (3008,0033) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "name" : "Wedge Angle",
         "req" : "Nominal wedge angle delivered in degrees.",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "name" : "Block Tray ID",
         "req" : "User-supplied identifier for block tray or Electron Insert.",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0370)[<2>](300c,0102)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Referenced Lateral Spreading Device Number",
         "req" : "Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332)."
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0074,1042)[<0>](300a,00b2)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "User-defined name identifying treatment machine to be used for beam delivery. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Treatment Machine Name"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00d0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "req" : [
            "Blocks associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Block Sequence"
      },
      "(0008,0201)" : {
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para"
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
                     "content" : [
                        "Offset = -0200"
                     ],
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
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "req" : "User-supplied identifier for compensator.",
         "name" : "Compensator ID",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0018)" : {
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0072,0056)" : {
         "name" : "Selector Attribute Private Creator",
         "req" : "1C",
         "module" : "RT General Machine Verification",
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
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "Contains general delivery verification information"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Retrieve URI"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,0032)" : {
         "name" : "Specified Primary Meterset",
         "req" : "Desired machine setting of primary Meterset. The units shall match those specified by Primary Dosimeter Unit (300A,00B3) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0018,a001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Contributing Equipment Sequence"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,003a)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Specified Treatment Time",
         "req" : "Treatment Time set in seconds."
      },
      "(0074,1048)" : {
         "req" : [
            "List of parameters that failed verification by the MPV.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.31.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Failed Parameters Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,104a)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "List of parameters that were overridden by the user.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.31.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Overridden Parameters Sequence"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0114)" : {
         "name" : "Nominal Beam Energy",
         "req" : "Nominal Beam Energy at control point.",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0360)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Shifter Settings Sequence",
         "req" : [
            "Range Shifter settings for the current control point.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0109)" : {
         "req" : [
            "Type of Applicator.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "name" : "Applicator Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,1046)[<0>](3008,00f4)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : ""
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "req" : "Primary identifier for the patient.",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "req" : "2C",
         "name" : "Coding Scheme External ID"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
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
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "RT General Machine Verification",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "Referenced Frame Number"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Modified Attributes Sequence",
         "req" : "1"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011a)" : {
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Beam Limiting Device Position Sequence",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0123)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Context Group Identification Sequence"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
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
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
                                 "el" : "para"
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "req" : "1"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300c,0104)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "name" : "Referenced Range Modulator Number"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,014c)" : {
         "req" : [
            [
               "Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.5"
                  },
                  "el" : "xref"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Gantry Pitch Rotation Direction",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1046)[<0>](300a,0304)" : {
         "name" : "Radiation Atomic Number",
         "req" : "Atomic number of radiation.",
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,0192)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Fixation Device Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,1046)[<0>](300a,0352)" : {
         "req" : "User-specified identifier for manufacturer specific patient support devices.",
         "name" : "Patient Support ID",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines"
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "name" : "Number of Leaf/Jaw Pairs",
         "req" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws)."
      },
      "(0008,0122)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Mapping Resource Name"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](3008,00f2)[<1>](300a,0318)" : {
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Range Shifter ID",
         "req" : "User or machine supplied identifier for Range Modulator."
      },
      "(0074,1046)" : {
         "name" : "Ion Machine Verification Sequence",
         "req" : [
            "Sequence containing ion machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : ""
      },
      "(0074,104a)[<0>](0072,0054)" : {
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
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "req" : "1C"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0121)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Beam Limiting Device Rotation Direction",
         "req" : [
            [
               "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0074,1042)[<0>](300a,00c2)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "User-defined name for Beam.",
         "name" : "Beam Name"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "req" : "1",
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(0074,1042)[<0>](300a,00f0)" : {
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "name" : "Number of Blocks",
         "req" : "Number of shielding blocks or Electron Inserts associated with Beam."
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "req" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "name" : "Wedge Number",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0182)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "req" : "Identification number of the Patient Setup.",
         "name" : "Patient Setup Number"
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,00f9)" : {
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Accessory Code",
         "req" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0074,104a)[<0>](3008,0066)" : {
         "name" : "Override Reason",
         "req" : "User-defined description of reason for override of overridden parameter.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0129)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Table Top Longitudinal Position",
         "req" : [
            "Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               }
            },
            "."
         ]
      },
      "(0074,1046)[<0>](300a,0312)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Number of range shifters associated with current beam.",
         "name" : "Number of Range Shifters"
      },
      "(300c,0002)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced RT Plan Sequence",
         "req" : [
            "A reference to an RT Plan SOP Class/Instance pair.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "module" : "RT General Machine Verification",
         "desc" : null,
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Accessory Code",
         "req" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(0008,0005)" : {
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
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "req" : "1C"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,0380)[<2>](300a,0382)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Start position, defining the range modulator position at which the beam is switched on.",
         "name" : "Range Modulator Gating Start Value"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,011e)" : {
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "name" : "Gantry Angle",
         "req" : "Gantry angle of radiation source in degrees, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system."
      },
      "(0074,1046)[<0>](3008,00f0)[<1>](300a,030f)" : {
         "req" : "User or machine supplied identifier for Snout.",
         "name" : "Snout ID",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to ion machines",
         "desc" : null,
         "module" : "RT Ion Machine Verification"
      },
      "(0008,0053)" : {
         "entity" : "",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "Query/Retrieve View"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0074,1048)[<0>](0072,0054)" : {
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
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "req" : "1C"
      },
      "(0008,0117)" : {
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
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context UID",
         "req" : "3"
      },
      "(0020,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "A number that identifies this Composite object instance.",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Number"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "req" : "1"
      },
      "(0074,1042)[<0>](3008,00b0)" : {
         "req" : [
            "Treatment wedges present during delivered Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Wedge Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "module" : "RT General Machine Verification"
      },
      "(0074,1046)[<0>](300a,0306)" : {
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ],
         "desc" : null,
         "module" : "RT Ion Machine Verification",
         "usage" : "Contains delivery verification information specific to ion machines",
         "req" : "Charge state of radiation.",
         "name" : "Radiation Charge State"
      },
      "(0074,1046)[<0>](0074,104e)[<1>](300a,030d)" : {
         "usage" : "Contains delivery verification information specific to ion machines",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-3"
         ],
         "entity" : "",
         "name" : "Snout Position",
         "req" : "Axial position in mm of the snout, measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators)."
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
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
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
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
         "req" : "1C",
         "name" : "Coding Scheme Registry"
      },
      "(0074,104a)[<0>](0072,0028)" : {
         "req" : "1C",
         "name" : "Selector Value Number",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ]
      },
      "(0074,1042)[<0>](300a,00d0)" : {
         "name" : "Number of Wedges",
         "req" : "Number of wedges associated with current Beam.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : ""
      },
      "(0074,1046)[<0>](3008,00f6)[<1>](300a,034c)" : {
         "name" : "Beam Current Modulation ID",
         "req" : "User-supplied identifier for the beam current modulation pattern.",
         "module" : "RT Ion Machine Verification",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to ion machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-3"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "name" : "RT Beam Limiting Device Type",
         "req" : [
            "Type of beam limiting device (collimator).",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : "Person's telephone number(s)",
         "usage" : "Contains general delivery verification information"
      }
   }
}
