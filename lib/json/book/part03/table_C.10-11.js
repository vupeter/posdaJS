datab = [{},{"Attribute Name":"Waveform Annotation Sequence","Tag":"(0040,B020)","Type":"1","Attribute Description":"Sequence of Annotation Items. One or more Items shall be included in this Sequence."},{"Attribute Name":">Unformatted Text Value","Tag":"(0070,0006)","Type":"1C","Attribute Description":"Text Observation Value (annotation). Mutually exclusive with Concept Name Code Sequence (0040,A043)"},{"Attribute Name":">Concept Name Code Sequence","Tag":"(0040,A043)","Type":"1C","Attribute Description":"Code representing the fully specified name of the NUMERIC measurement or CODED concept. Only a single Item shall be included in this Sequence. Mutually exclusive with Unformatted Text Value (0070,0006)."},{"Attribute Name":">>Include","Tag":"Baseline CID may be defined in IOD definition."},{"Attribute Name":">>Modifier Code Sequence","Tag":"(0040,A195)","Type":"1C","Attribute Description":"A sequence of items modifying or specializing the Concept Name. One or more Items shall be included in this Sequence. Required if the value of Concept Name Code Sequence (0040,A043) does not fully describe the semantics of the measurement or concept."},{"Attribute Name":">>>Include","Tag":"Baseline CID may be defined in IOD definition."},{"Attribute Name":">Concept Code Sequence","Tag":"(0040,A168)","Type":"3","Attribute Description":"A sequence that conveys the categorical coded nominal value. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline CID may be defined in IOD definition."},{"Attribute Name":">>Modifier Code Sequence","Tag":"(0040,A195)","Type":"1C","Attribute Description":"A sequence of items modifying or specializing the Concept. One or more Items shall be included in this Sequence. Required if the value of Concept Code Sequence (0040,A168) does not fully describe the semantics of the concept value."},{"Attribute Name":">>>Include","Tag":"Baseline CID may be defined in IOD definition."},{"Attribute Name":">Numeric Value","Tag":"(0040,A30A)","Type":"3","Attribute Description":"Numeric measurement value or values."},{"Attribute Name":">Measurement Units Code Sequence","Tag":"(0040,08EA)","Type":"3","Attribute Description":"Units of measurement. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline ."},{"Attribute Name":">Referenced Waveform Channels","Tag":"(0040,A0B0)","Type":"1","Attribute Description":"List of channels in waveform to which annotation applies. See"},{"Attribute Name":">Temporal Range Type","Tag":"(0040,A130)","Type":"1C","Attribute Description":"See  for Enumerated Values. Required if Annotation does not apply to entire Referenced Waveform Channels; shall not be present if Annotation applies to entire temporal extent of referenced channels."},{"Attribute Name":">Referenced Sample Positions","Tag":"(0040,A132)","Type":"1C","Attribute Description":"List of samples within a multiplex group specifying temporal points for annotation. Position of first sample is 1. Required if Temporal Range Type (0040,A130) is present, and if Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present. See"},{"Attribute Name":">Referenced Time Offsets","Tag":"(0040,A138)","Type":"1C","Attribute Description":"Specifies temporal points for annotation by number of seconds after start of data. Required if Temporal Range Type (0040,A130) is present, and if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."},{"Attribute Name":">Referenced DateTime","Tag":"(0040,A13A)","Type":"1C","Attribute Description":"Specifies temporal points for annotation by absolute time. Required if Temporal Range Type (0040,A130) is present, and if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."},{"Attribute Name":">Annotation Group Number","Tag":"(0040,A180)","Type":"3","Attribute Description":"Number identifying associated annotations (see )."}];