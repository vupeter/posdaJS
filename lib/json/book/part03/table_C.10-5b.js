datab = [{},{"Attribute Name":"Line Style Sequence","Tag":"(0070,0232)","Type":"3","Attribute Description":"Sequence that describes the line style. Only a single Item shall be included in this Sequence."},{"Attribute Name":">Pattern On Color CIELab Value","Tag":"(0070,0251)","Type":"1","Attribute Description":"A color triplet value used to encode the foreground. The units are specified in PCS-Values, and the value is encoded as CIELab. See . This value shall override the Graphic Layer Recommended Display CIELab Value (0070,0401)."},{"Attribute Name":">Pattern Off Color CIELab Value","Tag":"(0070,0252)","Type":"3","Attribute Description":"A color triplet value used to encode the color of parts of the line that are off, i.e., the background. The units are specified in PCS-Values, and the value is encoded as CIELab. See ."},{"Attribute Name":">Pattern On Opacity","Tag":"(0070,0284)","Type":"1","Attribute Description":"Encodes the foreground opacity. The value is encoded as floating point alpha value (0.0-1.0)."},{"Attribute Name":">Pattern Off Opacity","Tag":"(0070,0285)","Type":"3","Attribute Description":"Encodes the background opacity. The value is encoded as floating point alpha value (0.0-1.0)."},{"Attribute Name":">Line Thickness","Tag":"(0070,0253)","Type":"1","Attribute Description":"Specifies the line thickness. The dimension for this attribute is defined by Graphic Annotation Units (0070,0005) or Compound Graphic Units (0070,0282)."},{"Attribute Name":">Line Dashing Style","Tag":"(0070,0254)","Type":"1","Attribute Description":"The dashing style of the line to be displayed.  Enumerated Values:  SOLID      DASHED  Draws one part of the line with the Pattern On Color CIELab Value (0070,0251) and the other part with the Pattern Off Color CIELab Value (0070,0252).    See ."},{"Attribute Name":">Line Pattern","Tag":"(0070,0255)","Type":"1C","Attribute Description":"Pattern that defines the line dashing style. The Line Pattern is a 32 bit value. If the bit inside the pattern is set to 1 the foreground color is drawn, else the background color is drawn.  For example, 00FFH defines the dashes with an equal size.  Required if Line Dashing Style (0070,0254) has a value of DASHED."},{"Attribute Name":">Shadow Style","Tag":"(0070,0244)","Type":"1","Attribute Description":"The shadow style of the line to be displayed.  Enumerated Values:  NORMAL  the shadow is drawn on 1 side of the contour of the text object    OUTLINED  the shadow is drawn around the contour of the text object    OFF  no shadow    See"},{"Attribute Name":">Shadow Offset X","Tag":"(0070,0245)","Type":"1","Attribute Description":"Floating point value that defines the shadow offset in X direction in Graphic Annotation Units (0070,0005). See ."},{"Attribute Name":">Shadow Offset Y","Tag":"(0070,0246)","Type":"1","Attribute Description":"Floating point value that defines the shadow offset in Y direction in Graphic Annotation Units (0070,0005). See ."},{"Attribute Name":">Shadow Color CIELab Value","Tag":"(0070,0247)","Type":"1","Attribute Description":"A color triplet value used to encode the Shadow Color. The units are specified in PCS-Values, and the value is encoded as CIELab. See ."},{"Attribute Name":">Shadow Opacity","Tag":"(0070,0258)","Type":"1","Attribute Description":"Encodes the shadow opacity. The value is encoded as floating point alpha value (0.0-1.0)."}];