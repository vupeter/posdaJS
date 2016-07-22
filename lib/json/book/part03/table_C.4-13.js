datab = [{},{"Attribute Name":"Patient's Name","Tag":"(0010,0010)","Attribute Description":"Patient's full legal name."},{"Attribute Name":"Patient ID","Tag":"(0010,0020)","Attribute Description":"Primary identifier for the patient.  In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ."},{"Attribute Name":"Include","Tag":""},{"Attribute Name":"Patient's Birth Date","Tag":"(0010,0030)","Attribute Description":"Date of birth of the named patient"},{"Attribute Name":"Patient's Birth Date in Alternative Calendar","Tag":"(0010,0033)","Attribute Description":"Date of birth of the named patient in the Alternative Calendar (0010,0035).  No format is specified for alternative calendar dates so none should be assumed."},{"Attribute Name":"Patient's Death Date in Alternative Calendar","Tag":"(0010,0034)","Attribute Description":"Date of death of the named patient in the Alternative Calendar (0010,0035).  No format is specified for alternative calendar dates so none should be assumed."},{"Attribute Name":"Patient's Alternative Calendar","Tag":"(0010,0035)","Attribute Description":"The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034). See  for Defined Terms. Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."},{"Attribute Name":"Patient's Sex","Tag":"(0010,0040)","Attribute Description":"Sex of the named Patient  Enumerated Values:  M  male    F  female    O  other"},{"Attribute Name":"Referenced Patient Sequence","Tag":"(0008,1120)","Attribute Description":"Uniquely identifies the Patient SOP Instance. Only a single Item shall be included in this Sequence."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Admission ID","Tag":"(0038,0010)","Attribute Description":"Identification number of the visit as assigned by the healthcare provider."},{"Attribute Name":"Issuer of Admission ID Sequence","Tag":"(0038,0014)","Attribute Description":"Identifier of the Assigning Authority that issued the Admission ID. Only a single Item shall be included in this sequence."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Service Episode ID","Tag":"(0038,0060)","Attribute Description":"Identifier of the Service Episode as assigned by the healthcare provider"},{"Attribute Name":"Issuer of Service Episode ID Sequence","Tag":"(0038,0064)","Attribute Description":"Identifier of the Assigning Authority that issued the Service Episode ID. Only a single Item shall be included in this Sequence."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Service Episode Description","Tag":"(0038,0062)","Attribute Description":"Description of the type of service episode."},{"Attribute Name":"Scheduled Step Attributes Sequence","Tag":"(0040,0270)","Attribute Description":"Sequence containing attributes that are related to the scheduling of the Procedure Step. One or more Items shall be included in this Sequence."},{"Attribute Name":">Study Instance UID","Tag":"(0020,000D)","Attribute Description":"Unique identifier for the Study."},{"Attribute Name":">Referenced Study Sequence","Tag":"(0008,1110)","Attribute Description":"Uniquely identifies the Study SOP Instance associated with this Scheduled Procedure Step. Only a single Item shall be included in this Sequence. See ."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Accession Number","Tag":"(0008,0050)","Attribute Description":"A departmental IS generated number that identifies the order for the Study."},{"Attribute Name":">Issuer of Accession Number Sequence","Tag":"(0008,0051)","Attribute Description":"Identifier of the Assigning Authority that issued the Accession Number. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Placer Order Number/Imaging Service Request","Tag":"(0040,2016)","Attribute Description":"The order number assigned to the Imaging Service Request by the party placing the order."},{"Attribute Name":">Order Placer Identifier Sequence","Tag":"(0040,0026)","Attribute Description":"Identifier of the Assigning Authority that issued the Placer Order Number. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Filler Order Number/Imaging Service Request","Tag":"(0040,2017)","Attribute Description":"The order number assigned to the Imaging Service Request by the party filling the order."},{"Attribute Name":">Order Filler Identifier Sequence","Tag":"(0040,0027)","Attribute Description":"Identifier of the Assigning Authority that issued the Filler Order Number. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Requested Procedure ID","Tag":"(0040,1001)","Attribute Description":"Identifier of the related Requested Procedure."},{"Attribute Name":">Requested Procedure Description","Tag":"(0032,1060)","Attribute Description":"Institution-generated administrative description or classification of Requested Procedure."},{"Attribute Name":">Requested Procedure Code Sequence","Tag":"(0032,1064)","Attribute Description":"A sequence that conveys the Procedure Type of the requested procedure. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"No Baseline CID is defined."},{"Attribute Name":">Scheduled Procedure Step ID","Tag":"(0040,0009)","Attribute Description":"Identifier of the related Scheduled Procedure Step."},{"Attribute Name":">Scheduled Procedure Step Description","Tag":"(0040,0007)","Attribute Description":"Institution-generated description or classification of the Scheduled Procedure Step to be performed."},{"Attribute Name":">Scheduled Protocol Code Sequence","Tag":"(0040,0008)","Attribute Description":"Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"No Baseline CID is defined."},{"Attribute Name":">>Protocol Context Sequence","Tag":"(0040,0440)","Attribute Description":"Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items shall be included in this Sequence. See ."},{"Attribute Name":">>>Include","Tag":"No Baseline TID is defined."},{"Attribute Name":">>>Content Item Modifier Sequence","Tag":"(0040,0441)","Attribute Description":"Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items shall be included in this Sequence. See ."},{"Attribute Name":">>>>Include","Tag":"No Baseline TID is defined."}];