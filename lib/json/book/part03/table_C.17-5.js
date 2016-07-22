datab = [{},{"Attribute Name":"Value Type","Tag":"(0040,A040)","Type":"1","Attribute Description":"The type of the value encoded in this Content Item.  Enumerated Values:  TEXT      NUM      CODE      DATE      TIME      DATETIME      UIDREF      PNAME      COMPOSITE      IMAGE      WAVEFORM      SCOORD      SCOORD3D      TCOORD      CONTAINER      See  for further explanation."},{"Attribute Name":"Concept Name Code Sequence","Tag":"(0040,A043)","Type":"1C","Attribute Description":"Code describing the concept represented by this Content Item. Also conveys the value of Document Title and section headings in documents. Only a single Item shall be included in this Sequence. Required if Value Type (0040,A040) is TEXT, NUM, CODE, DATETIME, DATE, TIME, UIDREF or PNAME. Required if Value Type (0040,A040) is CONTAINER and a heading is present, or this is the Root Content Item.  That is, containers without headings do not require Concept Name Code Sequence  Required if Value Type (0040,A040) is COMPOSITE, IMAGE, WAVEFORM, SCOORD, SCOORD3D or TCOORD, and the Purpose of Reference is conveyed in the Concept Name. See  for further explanation."},{"Attribute Name":">Include","Tag":"No Baseline CID is defined."},{"Attribute Name":"Text Value","Tag":"(0040,A160)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is TEXT. Text data that is unformatted and whose manner of display is implementation dependent. The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of UT. The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the .  The text may contain single or multi-byte characters and use code extension techniques as described in  if permitted by the values of Specific Character Set (0008,0005)."},{"Attribute Name":"DateTime","Tag":"(0040,A120)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is DATETIME."},{"Attribute Name":"Date","Tag":"(0040,A121)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is DATE."},{"Attribute Name":"Time","Tag":"(0040,A122)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is TIME."},{"Attribute Name":"Person Name","Tag":"(0040,A123)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is PNAME."},{"Attribute Name":"UID","Tag":"(0040,A124)","Type":"1C","Attribute Description":"This is the value of the Content Item. Required if Value Type (0040,A040) is UIDREF."},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is NUM.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is CODE.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is COMPOSITE.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is IMAGE.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is WAVEFORM.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is SCOORD.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is SCOORD3D.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is TCOORD.","Tag":""},{"Attribute Name":"Include  if and only if Value Type (0040,A040) is CONTAINER.","Tag":""}];