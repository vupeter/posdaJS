datab = [{},{"Attribute Name":"Instance Number","Tag":"(0020,0013)","Type":"1","Attribute Description":"A number that identifies this SOP Instance. The value shall be unique within a series."},{"Attribute Name":"Content Date","Tag":"(0008,0023)","Type":"2","Attribute Description":"The date the document content creation was started."},{"Attribute Name":"Content Time","Tag":"(0008,0033)","Type":"2","Attribute Description":"The time the document content creation was started."},{"Attribute Name":"Acquisition DateTime","Tag":"(0008,002A)","Type":"2","Attribute Description":"The date and time that the original generation of the data in the document started."},{"Attribute Name":"Image Laterality","Tag":"(0020,0062)","Type":"3","Attribute Description":"Laterality of the (possibly paired) body part that is the subject of the encapsulated document.  Enumerated Values:  R  right    L  left    U  unpaired    B  both left and right"},{"Attribute Name":"Burned In Annotation","Tag":"(0028,0301)","Type":"1","Attribute Description":"Indicates whether or not the encapsulated document contains sufficient burned in annotation to identify the patient and date the data was acquired.  Enumerated Values:  YES      NO      Identification of patient and date as text in an encapsulated document (e.g., in an XML attribute or element) is equivalent to \"burned in annotation\". A de-identified document may use the value NO."},{"Attribute Name":"Recognizable Visual Features","Tag":"(0028,0302)","Type":"3","Attribute Description":"Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.  Enumerated Values:  YES      NO      If this Attribute is absent, then the image may or may not contain recognizable visual features."},{"Attribute Name":"Source Instance Sequence","Tag":"(0042,0013)","Type":"1C","Attribute Description":"A sequence that identifies the set of Instances that were used to derive the encapsulated document. One or more Items shall be included in this Sequence. Required if derived from one or more DICOM Instances. May be present otherwise."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Document Title","Tag":"(0042,0010)","Type":"2","Attribute Description":"The title of the document.  In the case of a PDF encapsulated document, this may be the value of the \"Title\" entry in the \"Document Information Directory\" as encoded in the PDF data."},{"Attribute Name":"Concept Name Code Sequence","Tag":"(0040,A043)","Type":"2","Attribute Description":"A coded representation of the document title. Zero or one Item shall be included in this Sequence."},{"Attribute Name":">Include","Tag":"Baseline ."},{"Attribute Name":"Document Class Code Sequence","Tag":"(0040,E008)","Type":"3","Attribute Description":"Additional classifications of the document, beyond the title represented in Concept Name Code Sequence. Equivalent to HL7 v2.x TXA-2. One or more Items are permitted in this Sequence."},{"Attribute Name":">Include","Tag":"No Baseline CID is defined."},{"Attribute Name":"Verification Flag","Tag":"(0040,A493)","Type":"3","Attribute Description":"Indicates whether the Encapsulated Document is Verified.  Enumerated Values:  UNVERIFIED  Not attested by a legally accountable person.    VERIFIED  Attested to (signed) by a Verifying Observer or Legal Authenticator named in the document, who is accountable for its content."},{"Attribute Name":"HL7 Instance Identifier","Tag":"(0040,E001)","Type":"1C","Attribute Description":"Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier). Required if encapsulated document is a CDA document."},{"Attribute Name":"MIME Type of Encapsulated Document","Tag":"(0042,0012)","Type":"1","Attribute Description":"The type of the encapsulated document stream described using the MIME Media Type (see RFC 2046)."},{"Attribute Name":"List of MIME Types","Tag":"(0042,0014)","Type":"1C","Attribute Description":"MIME Types of subcomponents of the encapsulated document. Required if the encapsulated document incorporates subcomponents with MIME types different than the primary MIME Type of the encapsulated document.  An Encapsulated CDA that includes an embedded JPEG image and an embedded PDF would list \"image/jpeg\\application/pdf\"."},{"Attribute Name":"Encapsulated Document","Tag":"(0042,0011)","Type":"1","Attribute Description":"Encapsulated Document stream,containing a document encoded according to the MIME Type."}];