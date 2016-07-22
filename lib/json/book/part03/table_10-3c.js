datab = [{},{"Attribute Name":"Referenced SOP Class UID","Tag":"(0008,1150)","Type":"1C","Attribute Description":"Uniquely identifies the referenced SOP Class. Required if the storage request only applies to a specific SOP Class."},{"Attribute Name":"DICOM Storage Sequence","Tag":"(0040,4071)","Type":"1C","Attribute Description":"Details for storing instances via the DICOM Storage Service. Required if STOW-RS Storage Sequence (0040,4072) or XDS Storage Sequence (0040,4074) is not present. May be present otherwise. One or more Items shall be included in this sequence."},{"Attribute Name":">Destination AE","Tag":"(2100,0140)","Type":"1","Attribute Description":"Title of a DICOM Application Entity to which instances will be stored."},{"Attribute Name":"STOW-RS Storage Sequence","Tag":"(0040,4072)","Type":"1C","Attribute Description":"Details for storing instances via STOW-RS. Required if DICOM Storage Sequence (0040,4071) and XDS Storage Sequence (0040,4074) are not present. May be present otherwise. One or more Items shall be included in this Sequence."},{"Attribute Name":">Storage URL","Tag":"(0040,4073)","Type":"1","Attribute Description":"URI/URL specifying the location of the STOW-RS storage service to which instances will be stored. The value shall be a fully specified URI with protocol, authority and path, in accordance with  and ."},{"Attribute Name":"XDS Storage Sequence","Tag":"(0040,4074)","Type":"1C","Attribute Description":"Details for storing instances via the IHE Provide and Register Document Set-b (ITI-41) transaction [IHE ITI-TF 2.b]. Required if STOW-RS Storage Sequence (0040,4072) and DICOM Storage Sequence (0040,4071) are not present. May be present otherwise. One or more Items shall be included in this Sequence."},{"Attribute Name":">Repository Unique ID","Tag":"(0040,E030)","Type":"1","Attribute Description":"Uniquely identifies a Repository from which the referenced instances can be retrieved."},{"Attribute Name":">Home Community ID","Tag":"(0040,E031)","Type":"3","Attribute Description":"Uniquely identifies a Community to which requests for the referenced instances can be directed."}];