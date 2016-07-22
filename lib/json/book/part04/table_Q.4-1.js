datab = [{},{"Description / Module":"Patient"},{"Description / Module":"Patient's Name","Tag":"(0010,0010)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":"Patient ID","Tag":"(0010,0020)","Matching Key Type":"R","Return Key Type":"1","Remark / Matching Type":"Shall be present in the Request Identifier. Shall be retrieved with Single Value Matching.  Since only one response is expected, this is a unique key."},{"Description / Module":"Issuer of Patient ID","Tag":"(0010,0021)","Matching Key Type":"R","Return Key Type":"2","Remark / Matching Type":"Shall be retrieved with Single Value Matching. In situations where there are multiple issuers, this key constrains matching of Patient ID (0010,0020) to a domain in which the Patient ID (0010,0020) is unique."},{"Description / Module":"Patient's Birth Date","Tag":"(0010,0030)","Matching Key Type":"-","Return Key Type":"2","Remark / Matching Type":""},{"Description / Module":"Patient's Sex","Tag":"(0010,0040)","Matching Key Type":"-","Return Key Type":"2","Remark / Matching Type":""},{"Description / Module":"All other Attributes of the","Tag":"","Matching Key Type":"-","Return Key Type":"3","Remark / Matching Type":""},{"Description / Module":"All other Attributes of the","Tag":"","Matching Key Type":"-","Return Key Type":"3","Remark / Matching Type":""},{"Description / Module":"Structured Information (SR Document Content Module)"},{"Description / Module":"Observation DateTime","Tag":"(0040,A032)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":"Value Type","Tag":"(0040,A040)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":"See ."},{"Description / Module":"Concept Name Code Sequence","Tag":"(0040,A043)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":"See ."},{"Description / Module":">Code Value","Tag":"(0008,0100)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">Coding Scheme Designator","Tag":"(0008,0102)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">Coding Scheme Version","Tag":"(0008,0103)","Matching Key Type":"-","Return Key Type":"1C","Remark / Matching Type":"Required if the value of Coding Scheme Designator (0008,0102) is not sufficient to identify the Code Value (0008,0100) unambiguously."},{"Description / Module":">Code Meaning","Tag":"(0008,0104)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">All other Attributes of the Concept Name Code Sequence","Tag":"","Matching Key Type":"","Return Key Type":"","Remark / Matching Type":""},{"Description / Module":"Content Sequence","Tag":"(0040,A730)","Matching Key Type":"-","Return Key Type":"2","Remark / Matching Type":"See ."},{"Description / Module":">All Attributes of the Content Sequence","Tag":"","Matching Key Type":"-","Return Key Type":"-","Remark / Matching Type":"Content Items as provided by the SCP. Requirements on Content Item Attribute Types shall be in accordance with the definitions in the SR Document Content Module."},{"Description / Module":"HL7 Structured Document Reference Sequence","Tag":"(0040,A390)","Matching Key Type":"-","Return Key Type":"1C","Remark / Matching Type":""},{"Description / Module":">Referenced SOP Class UID","Tag":"(0008,1150)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">Referenced SOP Instance UID","Tag":"(0008,1155)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">HL7 Instance Identifier","Tag":"(0040,E001)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">Retrieve URI","Tag":"(0040,E010)","Matching Key Type":"-","Return Key Type":"3","Remark / Matching Type":""},{"Description / Module":"Structured Information (Common Instance Reference Module)"},{"Description / Module":"Studies Containing Other Referenced Instances Sequence","Tag":"(0008,1200)","Matching Key Type":"-","Return Key Type":"1C","Remark / Matching Type":"Required if Content Sequence (0040,A390) includes Content Items that reference SOP Instances that use the Patient/Study/Series/Instance information model."},{"Description / Module":">Referenced Series Sequence","Tag":"(0008,1115)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">>Series Instance UID","Tag":"(0020,000E)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">>Referenced Instance Sequence","Tag":"(0008,114A)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">>>Referenced SOP Class UID","Tag":"(0008,1150)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""},{"Description / Module":">>>Referenced SOP Instance UID","Tag":"(0008,1155)","Matching Key Type":"-","Return Key Type":"1","Remark / Matching Type":""}];