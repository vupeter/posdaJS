datab = [{},{"Attribute Name":"Positioner Motion","Tag":"(0018,1500)","Type":"1","Attribute Description":"Describes the activity of the X-Ray Source during acquisition. See  for Defined Terms."},{"Attribute Name":"Positioner Type","Tag":"(0018,1508)","Type":"1","Attribute Description":"Enumerated Values:  MAMMOGRAPHIC"},{"Attribute Name":"Content Qualification","Tag":"(0018,9004)","Type":"1","Attribute Description":"Enumerated Values:  PRODUCT      RESEARCH      SERVICE      See  for further explanation."},{"Attribute Name":"Acquisition DateTime","Tag":"(0008,002A)","Type":"1","Attribute Description":"The date and time that the acquisition of data that resulted in this image started.  The synchronization of this time with an external clock is specified in the  in Acquisition Time Synchronized (0018,1800)."},{"Attribute Name":"Acquisition Duration","Tag":"(0018,9073)","Type":"1","Attribute Description":"The time in seconds needed for the compete acquisition. See  for further explanation."},{"Attribute Name":"Include","Tag":""},{"Attribute Name":"KVP","Tag":"(0018,0060)","Type":"1","Attribute Description":"Average of the peak kilo voltage outputs of the X-Ray generator used for all frames."},{"Attribute Name":"X-Ray Tube Current in mA","Tag":"(0018,9330)","Type":"1C","Attribute Description":"Average of the nominal X-Ray tube currents in milliamperes for all frames. Required if Exposure in mAs (0018,9332) is not present. May be present otherwise."},{"Attribute Name":"Exposure Time in ms","Tag":"(0018,9328)","Type":"1C","Attribute Description":"Total (cumulative) duration of X-Ray exposure for all acquired frames in milliseconds. Required if Exposure in mAs (0018,9332) is not present. May be present otherwise."},{"Attribute Name":"Exposure in mAs","Tag":"(0018,9332)","Type":"1C","Attribute Description":"The total (cumulative) exposure for all acquired frames expressed in mAs, for example calculated from Exposure Time and X-Ray Tube Current. Required if either Exposure Time in ms (0018,9328) or X-Ray Tube Current in mA (0018,9330) is not present. May be present otherwise."},{"Attribute Name":"Focal Spot(s)","Tag":"(0018,1190)","Type":"1","Attribute Description":"Nominal focal spot size in mm used to acquire all frames."},{"Attribute Name":"Anode Target Material","Tag":"(0018,1191)","Type":"1","Attribute Description":"The primary material in the anode of the X-Ray source.  Defined Terms:  TUNGSTEN      MOLYBDENUM      RHODIUM"},{"Attribute Name":"Body Part Thickness","Tag":"(0018,11A0)","Type":"1","Attribute Description":"The average thickness in mm of the body part examined when compressed, if compression has been applied during exposure."},{"Attribute Name":"Compression Force","Tag":"(0018,11A2)","Type":"1","Attribute Description":"The compression force applied to the body part during exposure, measured in Newtons."},{"Attribute Name":"Paddle Description","Tag":"(0018,11A4)","Type":"1","Attribute Description":"Description of the compression paddle, if compression was applied to the body part during exposure."},{"Attribute Name":"Exposure Control Mode","Tag":"(0018,7060)","Type":"1","Attribute Description":"Type of exposure control  Defined Terms:  AUTOMATIC      MANUAL"},{"Attribute Name":"Exposure Control Mode Description","Tag":"(0018,7062)","Type":"1","Attribute Description":"Text description of the mechanism of exposure control. May describe the number and type of exposure sensors or position of the sensitive area of the imaging detector."},{"Attribute Name":"Patient Orientation","Tag":"(0020,0020)","Type":"1C","Attribute Description":"Patient direction of the rows and columns of the most representative frame. Required if View Code Sequence (0054,0220) has an Item value other than one representing a specimen image. May be present otherwise."},{"Attribute Name":"Image Comments","Tag":"(0020,4000)","Type":"3","Attribute Description":"User-defined comments about the image."},{"Attribute Name":"Samples per Pixel","Tag":"(0028,0002)","Type":"1","Attribute Description":"Number of samples (planes) in this image.  Enumerated Values:  1"},{"Attribute Name":"Photometric Interpretation","Tag":"(0028,0004)","Type":"1","Attribute Description":"Specifies the intended interpretation of the pixel data.  Enumerated Values:  MONOCHROME1      MONOCHROME2"},{"Attribute Name":"Bits Allocated","Tag":"(0028,0100)","Type":"1","Attribute Description":"Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.  Enumerated Values:  8      16"},{"Attribute Name":"Bits Stored","Tag":"(0028,0101)","Type":"1","Attribute Description":"Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored.  Enumerated Values:  8      9      10      11      12      13      14      15      16"},{"Attribute Name":"High Bit","Tag":"(0028,0102)","Type":"1","Attribute Description":"Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall have an Enumerated Value of one less than the value of Bits Stored (0028,0101)."},{"Attribute Name":"Pixel Representation","Tag":"(0028,0103)","Type":"1","Attribute Description":"Data representation of the pixel samples. Each sample shall have the same pixel representation.  Enumerated Values:  0000H  unsigned integer"},{"Attribute Name":"Quality Control Image","Tag":"(0028,0300)","Type":"3","Attribute Description":"Indicates whether or not this image is a quality control of phantom image.  Enumerated Values:  YES      NO"},{"Attribute Name":"Burned in Annotation","Tag":"(0028,0301)","Type":"1","Attribute Description":"Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.  Enumerated Values:  NO"},{"Attribute Name":"Lossy Image Compression","Tag":"(0028,2110)","Type":"1","Attribute Description":"Specifies whether an Image has undergone lossy compression (at a point in its lifetime).  Enumerated Values:  00  Image has NOT been subjected to lossy compression.    01  Image has been subjected to lossy compression.    Once this value has been set to 01 it shall not be reset. See ."},{"Attribute Name":"Lossy Image Compression Ratio","Tag":"(0028,2112)","Type":"1C","Attribute Description":"Describes the approximate lossy compression ratio(s) that have been applied to this image. See . Required if Lossy Image Compression (0028,2110) is \"01\"."},{"Attribute Name":"Lossy Image Compression Method","Tag":"(0028,2114)","Type":"1C","Attribute Description":"A label for the lossy compression method(s) that have been applied to this image. See . Required if Lossy Image Compression (0028,2110) is \"01\"."},{"Attribute Name":"Organ Dose","Tag":"(0040,0316)","Type":"1","Attribute Description":"Organ dose value measured in dGy representing the collective total for all acquired frames.  This may be an estimated value."},{"Attribute Name":"Entrance Dose in mGy","Tag":"(0040,8302)","Type":"1","Attribute Description":"Entrance dose value measured in mGy at the surface of the patient representing the collective total for all acquired frames.  This may be an estimated value based on assumptions about the patient's body size and habitus."},{"Attribute Name":"Type of Detector Motion","Tag":"(0054,0202)","Type":"1","Attribute Description":"Describes the activity of the Detector during acquisition. See  for Defined Terms."},{"Attribute Name":"Icon Image Sequence","Tag":"(0088,0200)","Type":"3","Attribute Description":"This icon image is representative of the Image. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Include","Tag":"See  for further explanation."},{"Attribute Name":"Presentation LUT Shape","Tag":"(2050,0020)","Type":"1","Attribute Description":"Specifies a transformation for the Presentation LUT such that the output of all grayscale transformations, if any, is defined to be in P-Values.  Enumerated Values:  IDENTITY  output is in P-Values; shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2.    INVERSE  output after inversion is in P-Values; shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."}];