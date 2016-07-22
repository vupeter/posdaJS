datab = [{},{"Attribute Name":"Content Date","Tag":"(0008,0023)","Type":"1","Attribute Description":"The date the content creation started."},{"Attribute Name":"Content Time","Tag":"(0008,0033)","Type":"1","Attribute Description":"The time the content creation started."},{"Attribute Name":"Include","Tag":""},{"Attribute Name":"Fiducial Set Sequence","Tag":"(0070,031C)","Type":"1","Attribute Description":"A sequence of items, each of which is a fiducial set. One or more Items shall be included in this Sequence."},{"Attribute Name":">Frame of Reference UID","Tag":"(0020,0052)","Type":"1C","Attribute Description":"Identifies a Frame of Reference that may or may not be an image set (e.g., an atlas or physical space). See  for further explanation. Required if Referenced Image Sequence (0008,1140) is absent. May be present otherwise."},{"Attribute Name":">Referenced Image Sequence","Tag":"(0008,1140)","Type":"1C","Attribute Description":"Identifies the set of images in which the fiducials are located. One or more Items shall be included in this Sequence. Required if Frame of Reference UID (0020,0052) is absent. May be present otherwise. All referenced images shall have the same Frame of Reference UID if present in the images."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Fiducial Sequence","Tag":"(0070,031E)","Type":"1","Attribute Description":"A sequence that specifies fiducials, one item per fiducial. One or more Items shall be included in this Sequence."},{"Attribute Name":">>Fiducial Identifier","Tag":"(0070,0310)","Type":"1","Attribute Description":"A fiducial assignment identifier that is unique within this Fiducial Sequence item but may match the fiducial identifier of an equivalent feature in another item."},{"Attribute Name":">>Fiducial Identifier Code Sequence","Tag":"(0070,0311)","Type":"1C","Attribute Description":"A code sequence for a term that identifies a well-known fiducial type (potentially including methodology, anatomy, tools, etc.). Only a single Item shall be included in this Sequence. Required if Identifier (0070,0310) is absent. May be present otherwise."},{"Attribute Name":">>>Include","Tag":"Defined ."},{"Attribute Name":">>Fiducial UID","Tag":"(0070,031A)","Type":"3","Attribute Description":"Globally unique identifier for the fiducial instance of this fiducial assignment."},{"Attribute Name":">>Fiducial Description","Tag":"(0070,030F)","Type":"3","Attribute Description":"User description or comments about the fiducial."},{"Attribute Name":">>Shape Type","Tag":"(0070,0306)","Type":"1","Attribute Description":"See  for Defined Terms."},{"Attribute Name":">>Number of Contour Points","Tag":"(3006,0046)","Type":"1C","Attribute Description":"Number of points (triplets) in Contour Data (3006,0050). Required if Contour Data is present."},{"Attribute Name":">>Contour Data","Tag":"(3006,0050)","Type":"1C","Attribute Description":"Specifies the coordinates of this item's fiducial. One triplet (x,y,z) shall be present for each point in the fiducial. See  for further explanation. Required if Frame of Reference UID (0020,0052) is present in this item of the Fiducial Set Sequence (0070,031C). Shall not be present otherwise.  Contour Data may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."},{"Attribute Name":">>Contour Uncertainty Radius","Tag":"(0070,0312)","Type":"3","Attribute Description":"The estimated uncertainty radius for the Contour Data in mm. See"},{"Attribute Name":">>Graphic Coordinates Data Sequence","Tag":"(0070,0318)","Type":"1C","Attribute Description":"The image pixel locations of the fiducial's points. One or more Items shall be included in this Sequence. More than one item shall be present only if a fiducial spans more than one image. Required if Contour Data is not present. May be present otherwise."},{"Attribute Name":">>>Graphic Data","Tag":"(0070,0022)","Type":"1","Attribute Description":"Graphic point coordinates of the fiducial points in the image of the Referenced Image Sequence. If Fiducial's Contour Data (3006,0050) is present, these points correlate to the points in the Contour Data, one row-column pair for each point and in the same order. See  for further explanation."},{"Attribute Name":">>>Referenced Image Sequence","Tag":"(0008,1140)","Type":"1","Attribute Description":"A sequence that specifies the image containing the fiducial's graphic coordinates. Only a single Item shall be included in this Sequence. Shall be an image within the set of the images in the Referenced Image Sequence (0008,1140) of the encapsulating Fiducial Set Sequence (0070,031C) item."},{"Attribute Name":">>>>Include","Tag":""}];