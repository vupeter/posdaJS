datab = [{},{"Attribute Name":"2D Point Coordinates Sequence","Tag":"(0068,6550)","Type":"1C","Attribute Description":"2D coordinates of the point in the HPGL documents. One or more Items shall be included in this Sequence. Required if 3D Point Coordinates (0068,6590) is not present and HPGL Document Sequence (0068,62C0) is present. May be present if 3D Point Coordinates (0068,6590) is present and HPGL Document Sequence (0068,62C0) is present."},{"Attribute Name":">Referenced HPGL Document ID","Tag":"(0068,6440)","Type":"1","Attribute Description":"Value of the HPGL Document ID (0068,62D0) present in the HPGL Document Sequence (0068,62C0) that contains the 2D Drawing including the planning landmark. Shall be unique within the sequence."},{"Attribute Name":">2D Point Coordinates","Tag":"(0068,6560)","Type":"1","Attribute Description":"Coordinates of the point in the HPGL document. Coordinates are measured in millimeters of the printing space. See ."},{"Attribute Name":"3D Point Coordinates","Tag":"(0068,6590)","Type":"1C","Attribute Description":"3D Coordinates of the point. Required if 2D Point Coordinates Sequence (0068,6550) is not present and Implant Template 3D Model Surface Number (0068,6350) is present. May be present if 2D Point Coordinates Sequence (0068,6550) is present and Implant Template 3D Model Surface Number (0068,6350) is present."}];