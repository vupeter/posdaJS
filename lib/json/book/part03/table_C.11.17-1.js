datab = [{},{"Attribute Name":"Structured Display Image Box Sequence","Tag":"(0072,0422)","Type":"1","Attribute Description":"The image display boxes defined in the display environment, together with the reference to the image to be displayed in each Image Box. One or more Items shall be included in this Sequence."},{"Attribute Name":">Display Environment Spatial Position","Tag":"(0072,0108)","Type":"1","Attribute Description":"Exactly four dimensionless floating point values, in the range 0.0 to 1.0, indicating the rectangular coordinate position of the Image Box within the Display Environment.  For the Basic Structured Display with a single screen, the Display Environment is coextensive with the screen defined in the Nominal Screen Definition Sequence (0072,0102).  See"},{"Attribute Name":">Image Box Number","Tag":"(0072,0302)","Type":"1","Attribute Description":"An integer that is unique across all Items of the Structured Display Image Box Sequence (0072,0422) that identifies the Image Box."},{"Attribute Name":">Image Box Layout Type","Tag":"(0072,0304)","Type":"1","Attribute Description":"Type of layout of the Image Box. The types are primarily distinguished by their interaction technique.  Defined Terms:  TILED  A scrollable array of rectangles, each containing a single frame of image pixel data.    STACK  A single rectangle containing a steppable single frame, intended for user-controlled stepping through the image set, usually via continuous device interaction (e.g., mouse scrolling) or by single stepping (mouse or button click).    CINE  A single rectangle, intended for animation where the user controls are play sequence, rate of play, and direction.    VOLUME_VIEW  A single rectangle, intended for volumetric display.    VOLUME_CINE  A single rectangle, intended for animation of a volumetric view.    SINGLE  A single rectangle, intended for images and objects with no defined methods of interaction.     This value may also be used for non-image objects, such as waveforms and SR documents."},{"Attribute Name":">Image Box Tile Horizontal Dimension","Tag":"(0072,0306)","Type":"1C","Attribute Description":"Positive integer defining the horizontal Image Box tile dimension; the number of columns. Required if the value of Image Box Layout Type (0072,0304) is TILED."},{"Attribute Name":">Image Box Tile Vertical Dimension","Tag":"(0072,0308)","Type":"1C","Attribute Description":"Positive integer defining the vertical Image Box tile dimension; the number of rows. Required if the value of Image Box Layout Type (0072,0304) is TILED."},{"Attribute Name":">Image Box Overlap Priority","Tag":"(0072,0320)","Type":"3","Attribute Description":"If this Image Box overlaps in spatial position with others, this attribute indicates the layer of this Image Box in relation to the others. The value shall be a positive integer in the range 1 to 100, where 1 = top and 100 = bottom. If this attribute is not present, then the expected behavior is not defined."},{"Attribute Name":">Display Set Horizontal Justification","Tag":"(0072,0717)","Type":"3","Attribute Description":"Indicates direction in which to horizontally justify the image within an Image Box that is not the same shape (aspect ratio) as the image.  Enumerated Values:  LEFT      CENTER      RIGHT       Typically used in mammography display applications in which images from the patient's left and right are displayed \"back to back\", rather than centered."},{"Attribute Name":">Display Set Vertical Justification","Tag":"(0072,0718)","Type":"3","Attribute Description":"Indicates direction in which to vertically justify the image within an Image Box that is not the same shape (aspect ratio) as the image.  Enumerated Values:  TOP      CENTER      BOTTOM"},{"Attribute Name":">Preferred Playback Sequencing","Tag":"(0018,1244)","Type":"1C","Attribute Description":"Describes the preferred playback sequencing for the Image Box. Overrides any Preferred Playback Sequencing (0018,1244) value in the image objects being displayed. Required if the value of Image Box Layout Type (0072,0304) is CINE.  Enumerated Values:  0  Looping (1,2…n,1,2,…n,1,2,….n,…)    1  Sweeping (1,2,…n,n-1,…2,1,2,…n,…)    2  Stop (1,2…n)"},{"Attribute Name":">Recommended Display Frame Rate","Tag":"(0008,2144)","Type":"1C","Attribute Description":"Recommended rate at which the frames of a multi-frame image shall be displayed, in frames/second. Shall have a value greater than zero. Overrides any Recommended Display Frame Rate (0008,2144) value in the image objects being displayed. Required if the value of Image Box Layout Type (0072,0304) is CINE and if Cine Relative to Real-Time (0072,0330) is not present."},{"Attribute Name":">Cine Relative to Real-Time","Tag":"(0072,0330)","Type":"1C","Attribute Description":"A positive dimensionless floating point numeric factor equal to playback rate divided by acquisition rate. Required if the value of Image Box Layout Type (0072,0304) is CINE and if Recommended Display Frame Rate (0008,2144) is not present.  The acquisition rate may change within the image object, as specified in Frame Time Vector (0018,1065)."},{"Attribute Name":">Initial Cine Run State","Tag":"(0018,0042)","Type":"1C","Attribute Description":"Defined Terms:  STOPPED      RUNNING      Required if the value of Image Box Layout Type (0072,0304) is CINE."},{"Attribute Name":">Start Trim","Tag":"(0008,2142)","Type":"2C","Attribute Description":"The frame number of the first frame of the multi-frame image to be displayed in a CINE Image Box. Required if the value of Image Box Layout Type (0072,0304) is CINE."},{"Attribute Name":">Stop Trim","Tag":"(0008,2143)","Type":"2C","Attribute Description":"The Frame Number of the last frame of the multi-frame image to be displayed in a CINE Image Box. Required if the value of Image Box Layout Type (0072,0304) is CINE."},{"Attribute Name":">Referenced First Frame Sequence","Tag":"(0072,0427)","Type":"2C","Attribute Description":"Reference to the initial frame in a stack to be displayed in this image box. If value is not present, the first image frame to be displayed is not defined by the Standard. Zero or one Item shall be included in this Sequence. Required if the value of Image Box Layout Type (0072,0304) is STACK."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Referenced Image Sequence","Tag":"(0008,1140)","Type":"2C","Attribute Description":"Reference to the Image SOP Instances, or frames from multi-frame Image SOP Instances, to be displayed in this Image Box. Zero or more Items shall be included in this Sequence. Required if Referenced Presentation State Sequence (0008,9237), Referenced Stereometric Instance Sequence (0008,1134), and Referenced Instance Sequence (0008,114A) are not present. See ."},{"Attribute Name":">>Include","Tag":"The order of frames identified in the Referenced Frame Number (0008,1160) attribute affects ordering in STACK Image Box Layout. See ."},{"Attribute Name":">>Referenced Presentation State Sequence","Tag":"(0008,9237)","Type":"1C","Attribute Description":"Reference to a Softcopy Presentation State SOP Instance or a Volumetric Presentation State SOP Instance to be applied to the referenced image. One or more items shall be included in this Sequence. Multiple items are only permitted if the Image Box Layout Type (0072,0304) has a value of VOLUME_CINE. Required if presentation controls are to be applied to the image or image frame before rendering in the Structured Display."},{"Attribute Name":">>>Include","Tag":""},{"Attribute Name":">Referenced Presentation State Sequence","Tag":"(0008,9237)","Type":"1C","Attribute Description":"Reference to a Softcopy Presentation State SOP Instance whose referenced images are to be displayed in the Image Box using the presentation controls of the referenced SOP Instance. Only a single Item shall be included in this Sequence. Required if Referenced Image Sequence (0008,1140), Referenced Stereometric Instance Sequence (0008,1134), and Referenced Instance Sequence (0008,114A) are not present. See ."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Referenced Instance Sequence","Tag":"(0008,114A)","Type":"1C","Attribute Description":"Reference to a non-image SOP Instance (e.g., waveform, SR, encapsulated document) whose content is to be displayed in the Image Box. Only a single Item shall be included in this Sequence. Required if Referenced Presentation State Sequence (0008,9237), Referenced Stereometric Instance Sequence (0008,1134), and Referenced Image Sequence (0008,1140) are not present. See ."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":">Referenced Stereometric Instance Sequence","Tag":"(0008,1134)","Type":"1C","Attribute Description":"Reference to a Stereometric SOP Instance whose referenced images are to be displayed in the Image Box. Only a single Item shall be included in this Sequence. Required if Referenced Presentation State Sequence (0008,9237), Referenced Instance Sequence (0008,114A), and Referenced Image Sequence (0008,1140) are not present. See ."},{"Attribute Name":">>Include","Tag":""},{"Attribute Name":"Image Box Synchronization Sequence","Tag":"(0072,0430)","Type":"1C","Attribute Description":"Description of synchronized display between two or more Image Boxes. Required if synchronized display is specified between Image Boxes. One or more Items shall be included in this Sequence."},{"Attribute Name":">Synchronized Image Box List","Tag":"(0072,0432)","Type":"1","Attribute Description":"Multi-valued list of two or more Image Box Number (0072,0302) values. Indicates that the display of multiple image frames within the specified Image Boxes are synchronized. Referenced Image Boxes shall be of same Image Box Layout Type (0072,0304). An Image Box Number value may appear in only one Image Box Synchronization Sequence (0072,0430) item."},{"Attribute Name":">Type of Synchronization","Tag":"(0072,0434)","Type":"1","Attribute Description":"Type of synchronization between Image Boxes.  Defined Terms:  FRAME      POSITION      TIME      PHASE      See ."}];