datab = [{},{"Attribute Name":"Image Type","Tag":"(0008,0008)","Type":"1","Attribute Description":"Image identification characteristics. See  for specialization."},{"Attribute Name":"Samples per Pixel","Tag":"(0028,0002)","Type":"1","Attribute Description":"Number of samples (planes) in this image. See  for specialization."},{"Attribute Name":"Photometric Interpretation","Tag":"(0028,0004)","Type":"1","Attribute Description":"Specifies the intended interpretation of the pixel data. See  for specialization."},{"Attribute Name":"Bits Allocated","Tag":"(0028,0100)","Type":"1","Attribute Description":"Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See  for specialization."},{"Attribute Name":"Bits Stored","Tag":"(0028,0101)","Type":"1","Attribute Description":"Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See  for specialization."},{"Attribute Name":"High Bit","Tag":"(0028,0102)","Type":"1","Attribute Description":"Most significant bit for pixel sample data. Each sample shall have the same high bit. See  for specialization."},{"Attribute Name":"Rescale Intercept","Tag":"(0028,1052)","Type":"1","Attribute Description":"The value b in relationship between stored values (SV) and the output units. Output units = m*SV+b If Image Type (0008,0008) Value 1 is ORIGINAL and Value 3 is not LOCALIZER, output units shall be Hounsfield Units (HU)."},{"Attribute Name":"Rescale Slope","Tag":"(0028,1053)","Type":"1","Attribute Description":"m in the equation specified in Rescale Intercept (0028,1052)."},{"Attribute Name":"Rescale Type","Tag":"(0028,1054)","Type":"1C","Attribute Description":"Specifies the output units of Rescale Slope (0028,1053) and Rescale Intercept (0028,1052). See  for Defined Terms and further explanation. Required if the Rescale Type is not HU (Hounsfield Units). May be present otherwise."},{"Attribute Name":"KVP","Tag":"(0018,0060)","Type":"2","Attribute Description":"Peak kilo voltage output of the x-ray generator used"},{"Attribute Name":"Acquisition Number","Tag":"(0020,0012)","Type":"2","Attribute Description":"A number identifying the single continuous gathering of data over a period of time that resulted in this image"},{"Attribute Name":"Scan Options","Tag":"(0018,0022)","Type":"3","Attribute Description":"Parameters of scanning sequence."},{"Attribute Name":"Data Collection Diameter","Tag":"(0018,0090)","Type":"3","Attribute Description":"The diameter in mm of the region over which data were collected"},{"Attribute Name":"Data Collection Center (Patient)","Tag":"(0018,9313)","Type":"3","Attribute Description":"The x, y, and z coordinates (in the patient coordinate system) in mm of the center of the region in which data were collected. See ."},{"Attribute Name":"Reconstruction Diameter","Tag":"(0018,1100)","Type":"3","Attribute Description":"Diameter in mm of the region from within which data were used in creating the reconstruction of the image. Data may exist outside this region and portions of the patient may exist outside this region."},{"Attribute Name":"Reconstruction Target Center (Patient)","Tag":"(0018,9318)","Type":"3","Attribute Description":"The x, y, and z coordinates (in the patient coordinate system) of the reconstruction center target point as used for reconstruction in mm. See .  If the reconstructed image is not magnified or panned the value corresponds with the Data Collection Center (Patient) (0018,9313) attribute."},{"Attribute Name":"Distance Source to Detector","Tag":"(0018,1110)","Type":"3","Attribute Description":"Distance in mm from source to detector center.  This value is traditionally referred to as Source Image Receptor Distance (SID)."},{"Attribute Name":"Distance Source to Patient","Tag":"(0018,1111)","Type":"3","Attribute Description":"Distance in mm from source to isocenter (center of field of view).  This value is traditionally referred to as Source Object Distance (SOD)."},{"Attribute Name":"Gantry/Detector Tilt","Tag":"(0018,1120)","Type":"3","Attribute Description":"Nominal angle of tilt in degrees of the scanning gantry. Not intended for mathematical computations."},{"Attribute Name":"Table Height","Tag":"(0018,1130)","Type":"3","Attribute Description":"The distance in mm of the top of the patient table to the center of rotation; below the center is positive."},{"Attribute Name":"Rotation Direction","Tag":"(0018,1140)","Type":"3","Attribute Description":"Direction of rotation of the source when relevant, about nearest principal axis of equipment.  Enumerated Values:  CW  clockwise    CC  counter clockwise"},{"Attribute Name":"Exposure Time","Tag":"(0018,1150)","Type":"3","Attribute Description":"Time of x-ray exposure in msec. If Acquisition Type (0018,9302) equals SPIRAL, the value of this attribute shall be Revolution Time (0018,9305) divided by the Spiral Pitch Factor (0018,9311). See  and ."},{"Attribute Name":"X-Ray Tube Current","Tag":"(0018,1151)","Type":"3","Attribute Description":"X-Ray Tube Current in mA."},{"Attribute Name":"Exposure","Tag":"(0018,1152)","Type":"3","Attribute Description":"The exposure expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current."},{"Attribute Name":"Exposure in µAs","Tag":"(0018,1153)","Type":"3","Attribute Description":"The exposure expressed in µAs, for example calculated from Exposure Time and X-Ray Tube Current."},{"Attribute Name":"Filter Type","Tag":"(0018,1160)","Type":"3","Attribute Description":"Label for the type of filter inserted into the x-ray beam."},{"Attribute Name":"Generator Power","Tag":"(0018,1170)","Type":"3","Attribute Description":"Power in kW to the x-ray generator."},{"Attribute Name":"Focal Spot(s)","Tag":"(0018,1190)","Type":"3","Attribute Description":"Size of the focal spot in mm. For devices with variable focal spot or multiple focal spots, small dimension followed by large dimension."},{"Attribute Name":"Convolution Kernel","Tag":"(0018,1210)","Type":"3","Attribute Description":"A label describing the convolution kernel or algorithm used to reconstruct the data"},{"Attribute Name":"Revolution Time","Tag":"(0018,9305)","Type":"3","Attribute Description":"The time in seconds of a complete revolution of the source around the gantry orbit."},{"Attribute Name":"Single Collimation Width","Tag":"(0018,9306)","Type":"3","Attribute Description":"The width of a single row of acquired data (in mm).  Adjacent physical detector rows may have been combined to form a single effective acquisition row."},{"Attribute Name":"Total Collimation Width","Tag":"(0018,9307)","Type":"3","Attribute Description":"The width of the total collimation (in mm) over the area of active x-ray detection.  This will be equal the number of effective detector rows multiplied by single collimation width."},{"Attribute Name":"Table Speed","Tag":"(0018,9309)","Type":"3","Attribute Description":"The distance in mm that the table moves in one second during the gathering of data that resulted in this image."},{"Attribute Name":"Table Feed per Rotation","Tag":"(0018,9310)","Type":"3","Attribute Description":"Motion of the table (in mm) during a complete revolution of the source around the gantry orbit."},{"Attribute Name":"Spiral Pitch Factor","Tag":"(0018,9311)","Type":"3","Attribute Description":"Ratio of the Table Feed per Rotation (0018,9310) to the Total Collimation Width (0018,9307)."},{"Attribute Name":"Exposure Modulation Type","Tag":"(0018,9323)","Type":"3","Attribute Description":"A label describing the type of exposure modulation used for the purpose of limiting the dose.  Defined Terms:  NONE"},{"Attribute Name":"Estimated Dose Saving","Tag":"(0018,9324)","Type":"3","Attribute Description":"A percent value of dose saving due to the use of Exposure Modulation Type (0018,9323). A negative percent value of dose savings reflects an increase of exposure."},{"Attribute Name":"CTDIvol","Tag":"(0018,9345)","Type":"3","Attribute Description":"Computed Tomography Dose Index (CTDIvol), in mGy according to IEC 60601-2-44, Ed.2.1 (Clause 29.1.103.4), The Volume CTDIvol. It describes the average dose for this image for the selected CT conditions of operation."},{"Attribute Name":"CTDI Phantom Type Code Sequence","Tag":"(0018,9346)","Type":"3","Attribute Description":"The type of phantom used for CTDI measurement according to IEC 60601-2-44. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Include","Tag":"Defined ."},{"Attribute Name":"Water Equivalent Diameter","Tag":"(0018,1271)","Type":"3","Attribute Description":"The diameter, in mm, of a cylinder of water having the same X-Ray attenuation as the patient for this reconstructed slice (e.g., as described in )."},{"Attribute Name":"Water Equivalent Diameter Method Code Sequence","Tag":"(0018,1272)","Type":"1C","Attribute Description":"The method of calculation of Water Equivalent Diameter (0018,1271). Required if Water Equivalent Diameter (0018,1271) is present. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Include","Tag":"Defined ."},{"Attribute Name":"Include","Tag":"Defined CID for the Anatomic Region Sequence is ."},{"Attribute Name":"Include","Tag":""},{"Attribute Name":"Calcium Scoring Mass Factor Patient","Tag":"(0018,9351)","Type":"3","Attribute Description":"The calibration factor for the calcium mass score. These factors incorporate the effects of   KV value of the CT image   the patient size.   machine specific corrections   See ."},{"Attribute Name":"Calcium Scoring Mass Factor Device","Tag":"(0018,9352)","Type":"3","Attribute Description":"The calibration factors for the calcium mass score of the device. These factors incorporate the effects of   KV value of the CT image   machine specific corrections   This a multi-value attribute, the first value specifies the mass factor for a small patient size, the second value for a medium patient size and the third value for a large patient size. See ."},{"Attribute Name":"Energy Weighting Factor","Tag":"(0018,9353)","Type":"1C","Attribute Description":"The weighting factor of the data from the primary source in a multiple energy composition image. This factor incorporates the effects of   the specific X-Ray source and kV value   examination specific characteristics.   Required if one Derivation Code Sequence (0008,9215) Item value is (113097, DCM, \"Multi-energy proportional weighting\"). May be present otherwise."},{"Attribute Name":"CT Additional X-Ray Source Sequence","Tag":"(0018,9360)","Type":"3","Attribute Description":"Contains the attributes describing additional acquisition parameters beyond the primary source in a multiple X-Ray source system or a multi-energy acquisition. The primary X-Ray source is specified in other attributes of this module. One or more Items are permitted in this Sequence."},{"Attribute Name":">KVP","Tag":"(0018,0060)","Type":"1","Attribute Description":"Peak kilo voltage output of the X-Ray generator used."},{"Attribute Name":">X-Ray Tube Current in mA","Tag":"(0018,9330)","Type":"1","Attribute Description":"Nominal X-Ray tube current in milliamperes."},{"Attribute Name":">Data Collection Diameter","Tag":"(0018,0090)","Type":"1","Attribute Description":"The diameter in mm of the region over which data were collected."},{"Attribute Name":">Focal Spot(s)","Tag":"(0018,1190)","Type":"1","Attribute Description":"Used nominal size of the focal spot in mm."},{"Attribute Name":">Filter Type","Tag":"(0018,1160)","Type":"1","Attribute Description":"Type of filter(s) inserted into the X-Ray beam."},{"Attribute Name":">Filter Material","Tag":"(0018,7050)","Type":"1","Attribute Description":"The X-Ray absorbing material used in the filter."},{"Attribute Name":">Exposure in mAs","Tag":"(0018,9332)","Type":"3","Attribute Description":"The exposure expressed in milliampere seconds, for example calculated from exposure time and X-Ray tube current."},{"Attribute Name":">Energy Weighting Factor","Tag":"(0018,9353)","Type":"1C","Attribute Description":"The weighting factor of the data from this additional source in a multiple energy composition image. This factor incorporates the effects of   the specific X-Ray source and kV value   examination specific characteristics.   Required if one Derivation Code Sequence (0008,9215) Item value is (113097, DCM, \"Multi-energy proportional weighting\"). May be present otherwise."},{"Attribute Name":"Isocenter Position","Tag":"(300A,012C)","Type":"3","Attribute Description":"Isocenter coordinates (x,y,z), in mm. Specifies the location of the machine isocenter in the patient-based coordinate system associated with the Frame of Reference. It allows transformation from the equipment-based coordinate system to the patient-based coordinate system."},{"Attribute Name":"Include","Tag":""}];