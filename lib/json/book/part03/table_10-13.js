datab = [{},{"Attribute Name":"Contributing SOP Instances Reference Sequence","Tag":"(0020,9529)","Type":"1C","Attribute Description":"A sequence that identifies the contributing SOP Instances. Required if this SOP Instance is created from other DICOM SOP Instances.  The attribute is absent in the case where the sources used to create this SOP Instance are not SOP Instances, e.g., a volume that was directly generated by an acquisition system.  One or more Items shall be included in this Sequence."},{"Attribute Name":">Study Instance UID","Tag":"(0020,000D)","Type":"1","Attribute Description":"Unique identifier for the Study of the Contributing SOP Instances."},{"Attribute Name":">Referenced Series Sequence","Tag":"(0008,1115)","Type":"1","Attribute Description":"Sequence of Items each of which includes the Attributes of one Series. One or more Items shall be included in this Sequence."},{"Attribute Name":">>Series Instance UID","Tag":"(0020,000E)","Type":"1","Attribute Description":"Unique identifier of the Series containing the referenced Instances."},{"Attribute Name":">>Series Number","Tag":"(0020,0011)","Type":"2","Attribute Description":"A number that identifies this Series."},{"Attribute Name":">>Referenced Instance Sequence","Tag":"(0008,114A)","Type":"1","Attribute Description":"Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>Include","Tag":""},{"Attribute Name":">>>Instance Number","Tag":"(0020,0013)","Type":"2","Attribute Description":"A number that identifies this instance."},{"Attribute Name":"Manufacturer","Tag":"(0008,0070)","Type":"2","Attribute Description":"Manufacturer of the equipment that produced the sources."},{"Attribute Name":"Manufacturer's Model Name","Tag":"(0008,1090)","Type":"1C","Attribute Description":"Manufacturer's model name of the equipment that produced the sources. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":"Device Serial Number","Tag":"(0018,1000)","Type":"1C","Attribute Description":"Manufacturer's serial number of the equipment that produced the sources. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":"Software Versions","Tag":"(0018,1020)","Type":"1C","Attribute Description":"Manufacturer's designation of software version of the equipment that produced the sources. See . Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":"Acquisition DateTime","Tag":"(0008,002A)","Type":"1C","Attribute Description":"The time the acquisition of data that resulted in sources started. The value shall be the start date and time of the first contributing SOP Instance of the group specified by the Contributing SOP Instances Reference Sequence (0020,9529). Required if present and consistent in the contributing SOP Instances.  The Acquisition DateTime may be created by combining the values of Acquisition Date (0008,0022) and Acquisition Time (0008,0032) attributes in the contributing SOP Instances."},{"Attribute Name":"Station Name","Tag":"(0008,1010)","Type":"1C","Attribute Description":"User defined name identifying the machine that produced the sources. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":"Operators' Name","Tag":"(0008,1070)","Type":"1C","Attribute Description":"Name(s) of the operator(s) supporting the Series. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":"Operator Identification Sequence","Tag":"(0008,1072)","Type":"1C","Attribute Description":"Identification of the operator(s) supporting the Series. One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Protocol Name","Tag":"(0018,1030)","Type":"1C","Attribute Description":"User-defined description of the conditions under which the Series was performed. Required if present and consistent in the contributing SOP Instances.  This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."},{"Attribute Name":"Performed Protocol Code Sequence","Tag":"(0040,0260)","Type":"1C","Attribute Description":"Sequence describing the Protocol performed for the Procedure Step creating the sources. One or more Items shall be included in this Sequence. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Include","Tag":"No Baseline CID is defined."},{"Attribute Name":"Acquisition Protocol Name","Tag":"(0018,9423)","Type":"1C","Attribute Description":"User defined name of the protocol used to acquire this image. Required if present and consistent in the contributing SOP Instances."}];