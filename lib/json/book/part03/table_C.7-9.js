datab = [{},{"Attribute Name":"Instance Number","Tag":"(0020,0013)","Type":"2","Attribute Description":"A number that identifies this image.  This Attribute was named Image Number in earlier versions of this Standard."},{"Attribute Name":"Patient Orientation","Tag":"(0020,0020)","Type":"2C","Attribute Description":"Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See  for further explanation.  IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."},{"Attribute Name":"Content Date","Tag":"(0008,0023)","Type":"2C","Attribute Description":"The date the image pixel data creation started. Required if image is part of a series in which the images are temporally related. May be present otherwise.  This Attribute was formerly known as Image Date."},{"Attribute Name":"Content Time","Tag":"(0008,0033)","Type":"2C","Attribute Description":"The time the image pixel data creation started. Required if image is part of a series in which the images are temporally related. May be present otherwise."},{"Attribute Name":"Image Type","Tag":"(0008,0008)","Type":"3","Attribute Description":"Image identification characteristics. See  for Defined Terms and further explanation."},{"Attribute Name":"Acquisition Number","Tag":"(0020,0012)","Type":"3","Attribute Description":"A number identifying the single continuous gathering of data over a period of time that resulted in this image."},{"Attribute Name":"Acquisition Date","Tag":"(0008,0022)","Type":"3","Attribute Description":"The date the acquisition of data that resulted in this image started"},{"Attribute Name":"Acquisition Time","Tag":"(0008,0032)","Type":"3","Attribute Description":"The time the acquisition of data that resulted in this image started"},{"Attribute Name":"Acquisition DateTime","Tag":"(0008,002A)","Type":"3","Attribute Description":"The date and time that the acquisition of data that resulted in this image started.  The synchronization of this time with an external clock is specified in the  in Acquisition Time Synchronized (0018,1800)."},{"Attribute Name":"Referenced Image Sequence","Tag":"(0008,1140)","Type":"3","Attribute Description":"Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images). One or more Items are permitted in this Sequence."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Purpose of Reference Code Sequence","Tag":"(0040,A170)","Type":"3","Attribute Description":"Describes the purpose for which the reference is made. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Defined ."},{"Attribute Name":"Derivation Description","Tag":"(0008,2111)","Type":"3","Attribute Description":"A text description of how this image was derived. See  for further explanation."},{"Attribute Name":"Derivation Code Sequence","Tag":"(0008,9215)","Type":"3","Attribute Description":"A coded description of how this image was derived. See  for further explanation. One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."},{"Attribute Name":">Include","Tag":"Defined ."},{"Attribute Name":"Source Image Sequence","Tag":"(0008,2112)","Type":"3","Attribute Description":"The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image. One or more Items are permitted in this Sequence. See  for further explanation."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Purpose of Reference Code Sequence","Tag":"(0040,A170)","Type":"3","Attribute Description":"Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Defined ."},{"Attribute Name":">Spatial Locations Preserved","Tag":"(0028,135A)","Type":"3","Attribute Description":"The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image  Enumerated Values:  YES      NO      REORIENTED_ONLY  A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees       This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION.   When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."},{"Attribute Name":">Patient Orientation","Tag":"(0020,0020)","Type":"1C","Attribute Description":"The Patient Orientation values of the source image. Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."},{"Attribute Name":"Referenced Instance Sequence","Tag":"(0008,114A)","Type":"3","Attribute Description":"Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image. One or more Items are permitted in this Sequence."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":">Purpose of Reference Code Sequence","Tag":"(0040,A170)","Type":"1","Attribute Description":"Code describing the purpose of the reference to the Instance(s). Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"Defined  for referenced waveforms. Defined  for referenced RT Instances."},{"Attribute Name":"Images in Acquisition","Tag":"(0020,1002)","Type":"3","Attribute Description":"Number of images that resulted from this acquisition of data"},{"Attribute Name":"Image Comments","Tag":"(0020,4000)","Type":"3","Attribute Description":"User-defined comments about the image"},{"Attribute Name":"Quality Control Image","Tag":"(0028,0300)","Type":"3","Attribute Description":"Indicates whether or not this image is a quality control or phantom image.  Enumerated Values:  YES      NO      If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the . See"},{"Attribute Name":"Burned In Annotation","Tag":"(0028,0301)","Type":"3","Attribute Description":"Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.  Enumerated Values:  YES      NO      If this Attribute is absent, then the image may or may not contain burned in annotation."},{"Attribute Name":"Recognizable Visual Features","Tag":"(0028,0302)","Type":"3","Attribute Description":"Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.  Enumerated Values:  YES      NO      If this Attribute is absent, then the image may or may not contain recognizable visual features."},{"Attribute Name":"Lossy Image Compression","Tag":"(0028,2110)","Type":"3","Attribute Description":"Specifies whether an Image has undergone lossy compression (at a point in its lifetime).  Enumerated Values:  00  Image has NOT been subjected to lossy compression.    01  Image has been subjected to lossy compression.    Once this value has been set to 01 it shall not be reset. See ."},{"Attribute Name":"Lossy Image Compression Ratio","Tag":"(0028,2112)","Type":"3","Attribute Description":"Describes the approximate lossy compression ratio(s) that have been applied to this image. See ."},{"Attribute Name":"Lossy Image Compression Method","Tag":"(0028,2114)","Type":"3","Attribute Description":"A label for the lossy compression method(s) that have been applied to this image. See ."},{"Attribute Name":"Icon Image Sequence","Tag":"(0088,0200)","Type":"3","Attribute Description":"This icon image is representative of the Image. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Include","Tag":"See  for further explanation."},{"Attribute Name":"Presentation LUT Shape","Tag":"(2050,0020)","Type":"3","Attribute Description":"When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.  Enumerated Values:  IDENTITY  output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2 or any color photometric interpretation.    INVERSE  output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1.    When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."},{"Attribute Name":"Irradiation Event UID","Tag":"(0008,3010)","Type":"3","Attribute Description":"Unique identification of the irradiation event(s) associated with the acquisition of this image. See ."},{"Attribute Name":"Real World Value Mapping Sequence","Tag":"(0040,9096)","Type":"3","Attribute Description":"The mapping of stored values to associated Real World values. One or more Items are permitted in this Sequence."},{"Attribute Name":">Include","Tag":""}];