datab = [{},{"Attribute Name":"X-Ray 3D Acquisition Sequence","Tag":"(0018,9507)","Type":"1","Attribute Description":"Each item represents an acquisition context related to one or more reconstructions. The values of Acquisition Index (0020,9518) may be used as index to Items in this Sequence. One or more Items shall be included in this Sequence."},{"Attribute Name":">Field of View Shape","Tag":"(0018,1147)","Type":"1C","Attribute Description":"Shape of the Field of View in the referenced images.  Enumerated Values:  RECTANGLE      ROUND      HEXAGONAL      Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">X-Ray Receptor Type","Tag":"(0018,9420)","Type":"1C","Attribute Description":"Identifies the type of X-Ray receptor used.  Enumerated Values:  IMG_INTENSIFIER      DIGITAL_DETECTOR      Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Physical Detector Size","Tag":"(0018,9429)","Type":"1C","Attribute Description":"Dimensions of the physical detector measured in mm as a row size followed by a column size. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Position of Isocenter Projection","Tag":"(0018,9430)","Type":"1C","Attribute Description":"Position of the Isocenter measured in physical detector elements as a row offset followed by a column offset from the TLHC of a rectangle circumscribing the physical detector area. Required if Isocenter Reference System Sequence (0018,9462) is present and if the values are present and consistent in the contributing SOP Instances."},{"Attribute Name":">Distance Source to Detector","Tag":"(0018,1110)","Type":"1C","Attribute Description":"Distance from source to receptor plane perpendicular to the receptor plane in mm or distance in mm from source to detector center on the chest wall line. See . Required if present and consistent in the contributing SOP Instances.  This value is traditionally referred to as Source Image Receptor Distance (SID)."},{"Attribute Name":">Distance Source to Isocenter","Tag":"(0018,9402)","Type":"1C","Attribute Description":"Distance from source to isocenter in mm. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Focal Spot(s)","Tag":"(0018,1190)","Type":"1C","Attribute Description":"Nominal focal spot size in mm used to acquire this image. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Type","Tag":"(0018,1160)","Type":"1C","Attribute Description":"Type of filter(s) inserted into the X-Ray beam (e.g., wedges). See Attribute Description in  for Defined Terms.  Multiple type of filters can be expressed by a combination, e.g., BUTTERFLY+WEDGE.  Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Material","Tag":"(0018,7050)","Type":"1C","Attribute Description":"The X-Ray absorbing material used in the filter. May be multi-valued. See Attribute Description in  for Defined Terms. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Thickness Minimum","Tag":"(0018,7052)","Type":"1C","Attribute Description":"See Attribute Description in . Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Thickness Maximum","Tag":"(0018,7054)","Type":"1C","Attribute Description":"See Attribute Description in . Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Beam Path Length Minimum","Tag":"(0018,7056)","Type":"1C","Attribute Description":"See Attribute Description in . Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Filter Beam Path Length Maximum","Tag":"(0018,7058)","Type":"1C","Attribute Description":"See Attribute Description in . Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">Table X Position to Isocenter","Tag":"(0018,9466)","Type":"3","Attribute Description":"X position of the Table Reference Point with respect to the Isocenter (mm). See  for further explanation."},{"Attribute Name":">Table Y Position to Isocenter","Tag":"(0018,9467)","Type":"3","Attribute Description":"Y position of the Table Reference Point with respect to the Isocenter (mm). See  for further explanation."},{"Attribute Name":">Table Z Position to Isocenter","Tag":"(0018,9468)","Type":"3","Attribute Description":"Z position of the Table Reference Point with respect to the Isocenter (mm). See  for further explanation."},{"Attribute Name":">Table Horizontal Rotation Angle","Tag":"(0018,9469)","Type":"3","Attribute Description":"Rotation of the table in the horizontal plane. See  for further explanation."},{"Attribute Name":">Table Head Tilt Angle","Tag":"(0018,9470)","Type":"3","Attribute Description":"Angle of the head-feet axis of the table in degrees relative to the horizontal plane. See  for further explanation."},{"Attribute Name":">Table Cradle Tilt Angle","Tag":"(0018,9471)","Type":"3","Attribute Description":"Angle of the left-right axis of the table in degrees relative to the horizontal plane. See  for further explanation."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Per Projection Acquisition Sequence","Tag":"(0018,9538)","Type":"1C","Attribute Description":"Sequence containing detailed acquisition context of each individual projection used in this acquisition context. One or more Items shall be included in this Sequence. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">>Positioner Isocenter Primary Angle","Tag":"(0018,9463)","Type":"1C","Attribute Description":"Position of the X-Ray center beam for this projection in the isocenter reference system in the X direction (deg). See  for further explanation. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">>Positioner Isocenter Secondary Angle","Tag":"(0018,9464)","Type":"1C","Attribute Description":"Position of the X-Ray center beam for this projection in the isocenter reference system in the Z direction (deg). See  for further explanation. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">>Positioner Isocenter Detector Rotation Angle","Tag":"(0018,9465)","Type":"1C","Attribute Description":"Rotation of the X-Ray detector plane for this projection (deg). See  for further explanation. Required if present and consistent in the contributing SOP Instances."},{"Attribute Name":">>Positioner Primary Angle","Tag":"(0018,1510)","Type":"3","Attribute Description":"Position of the X-Ray Image Intensifier about the patient from the RAO to LAO direction where movement from RAO to vertical is positive. See  for further explanation."},{"Attribute Name":">>Positioner Secondary Angle","Tag":"(0018,1511)","Type":"3","Attribute Description":"Position of the X-Ray Image Intensifier about the patient from the CAU to CRA direction where movement from CAU to vertical is positive. See  for further explanation."}];