datab = [{},{"Attribute Name":"Issuer of Patient ID","Tag":"(0010,0021)","Type":"3","Attribute Description":"Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.  Equivalent to HL7 v2 CX component 4 subcomponent 1."},{"Attribute Name":"Issuer of Patient ID Qualifiers Sequence","Tag":"(0010,0024)","Type":"3","Attribute Description":"Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Universal Entity ID","Tag":"(0040,0032)","Type":"3","Attribute Description":"Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.  Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."},{"Attribute Name":">Universal Entity ID Type","Tag":"(0040,0033)","Type":"1C","Attribute Description":"Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.  Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type).  See  for Defined Terms."},{"Attribute Name":">Identifier Type Code","Tag":"(0040,0035)","Type":"3","Attribute Description":"Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.  Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."},{"Attribute Name":">Assigning Facility Sequence","Tag":"(0040,0036)","Type":"3","Attribute Description":"The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier. Only a single Item is permitted in this Sequence.  Equivalent to HL7 v2 CX component 6 (Assigning Facility)."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Assigning Jurisdiction Code Sequence","Tag":"(0040,0039)","Type":"3","Attribute Description":"The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.  Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."},{"Attribute Name":">>Include","Tag":"Baseline  for country codes."},{"Attribute Name":">Assigning Agency or Department Code Sequence","Tag":"(0040,003A)","Type":"3","Attribute Description":"The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.  Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."},{"Attribute Name":">>Include","Tag":"No Baseline CID is defined."}];