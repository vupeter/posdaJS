datab = [{},{"Attribute Name":"Type of Instances","Tag":"(0040,E020)","Type":"1","Attribute Description":"Type of object instances referenced.  Defined Terms:  DICOM      CDA"},{"Attribute Name":"Study Instance UID","Tag":"(0020,000D)","Type":"1C","Attribute Description":"Unique identifier for the Study. Required if Type of Instances (0040,E020) is DICOM"},{"Attribute Name":"Series Instance UID","Tag":"(0020,000E)","Type":"1C","Attribute Description":"Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s). Required if Type of Instances (0040,E020) is DICOM"},{"Attribute Name":"Referenced SOP Sequence","Tag":"(0008,1199)","Type":"1","Attribute Description":"References to object instances. One or more Items shall be included in this Sequence"},{"Attribute Name":">Referenced SOP Class UID","Tag":"(0008,1150)","Type":"1","Attribute Description":"Uniquely identifies the referenced SOP Class."},{"Attribute Name":">Referenced SOP Instance UID","Tag":"(0008,1155)","Type":"1","Attribute Description":"Uniquely identifies the referenced SOP Instance."},{"Attribute Name":">HL7 Instance Identifier","Tag":"(0040,E001)","Type":"1C","Attribute Description":"Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier). Required if Type of Instances (0040,E020) is CDA."},{"Attribute Name":">Referenced Frame Number","Tag":"(0008,1160)","Type":"1C","Attribute Description":"Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.  This Attribute may be multi-valued.  Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."},{"Attribute Name":">Referenced Segment Number","Tag":"(0062,000B)","Type":"1C","Attribute Description":"Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."},{"Attribute Name":"DICOM Retrieval Sequence","Tag":"(0040,E021)","Type":"1C","Attribute Description":"Details for retrieving instances via the DICOM Retrieve Service. Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise. This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199). One or more Items shall be included in this Sequence."},{"Attribute Name":">Retrieve AE Title","Tag":"(0008,0054)","Type":"1","Attribute Description":"Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."},{"Attribute Name":"DICOM Media Retrieval Sequence","Tag":"(0040,E022)","Type":"1C","Attribute Description":"Details for retrieving instances from Media. Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise. This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199). One or more Items shall be included in this Sequence."},{"Attribute Name":">Storage Media File-Set ID","Tag":"(0088,0130)","Type":"2","Attribute Description":"The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."},{"Attribute Name":">Storage Media File-Set UID","Tag":"(0088,0140)","Type":"1","Attribute Description":"Uniquely identifies the Storage Media on which the referenced instance(s) reside."},{"Attribute Name":"WADO Retrieval Sequence","Tag":"(0040,E023)","Type":"1C","Attribute Description":"Details for retrieving instances available via WADO-URI.  This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024).  Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise. One or more Items shall be included in this Sequence."},{"Attribute Name":">Retrieve URI","Tag":"(0040,E010)","Type":"1","Attribute Description":"URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with .  The VR of this attribute has changed from UT to UR."},{"Attribute Name":"XDS Retrieval Sequence","Tag":"(0040,E024)","Type":"1C","Attribute Description":"Details for retrieving instances using WADO-WS or IHE XDS transactions.  Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025).  Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise. This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199). One or more Items shall be included in this Sequence."},{"Attribute Name":">Repository Unique ID","Tag":"(0040,E030)","Type":"1","Attribute Description":"Uniquely identifies a Repository from which the referenced instances can be retrieved."},{"Attribute Name":">Home Community ID","Tag":"(0040,E031)","Type":"3","Attribute Description":"Uniquely identifies a Community to which requests for the referenced instances can be directed."},{"Attribute Name":"WADO-RS Retrieval Sequence","Tag":"(0040,E025)","Type":"1C","Attribute Description":"Details for retrieving instances via WADO-RS.  Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024).  Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise. One or more Items shall be included in this Sequence."},{"Attribute Name":">Retrieve URL","Tag":"(0008,1190)","Type":"1","Attribute Description":"URL specifying the location of the referenced instance(s)."}];