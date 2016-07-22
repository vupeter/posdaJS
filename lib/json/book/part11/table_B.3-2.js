datab = [{},{"Key Attribute":"Patient's Birth Date","Tag":"(0010,0030)","Directory Record Type":"PATIENT","Type":"2","Notes":""},{"Key Attribute":"Patient's Sex","Tag":"(0010,0040)","Directory Record Type":"PATIENT","Type":"2","Notes":""},{"Key Attribute":"Institution Name","Tag":"(0008,0080)","Directory Record Type":"SERIES","Type":"2","Notes":""},{"Key Attribute":"Institution Address","Tag":"(0008,0081)","Directory Record Type":"SERIES","Type":"2","Notes":""},{"Key Attribute":"Performing Physicians' Name","Tag":"(0008,1050)","Directory Record Type":"SERIES","Type":"2","Notes":""},{"Key Attribute":"Icon Image Sequence","Tag":"(0088,0200)","Directory Record Type":"IMAGE","Type":"1","Notes":""},{"Key Attribute":"Image Type","Tag":"(0008,0008)","Directory Record Type":"IMAGE","Type":"1C","Notes":"Required if the SOP Instance referenced by the Directory Record is an XA Image."},{"Key Attribute":"Calibration Image","Tag":"(0050,0004)","Directory Record Type":"IMAGE","Type":"2","Notes":""},{"Key Attribute":"Referenced Image Sequence","Tag":"(0008,1140)","Directory Record Type":"IMAGE","Type":"1C","Notes":"Required if the SOP Instance referenced by the Directory Record is an XA Image and has an Image Type (0008,0008) value 3 of BIPLANE A or BIPLANE B. May be present otherwise."},{"Key Attribute":">Referenced SOP Class UID","Tag":"(0008,1150)","Directory Record Type":"IMAGE","Type":"1C","Notes":"Required if Referenced Image Sequence (0008,1140) is present"},{"Key Attribute":">Referenced SOP Instance UID","Tag":"(0008,1155)","Directory Record Type":"IMAGE","Type":"1C","Notes":"Required if Referenced Image Sequence (0008,1140) is present"},{"Key Attribute":">All other elements from Referenced Image Sequence (including Purpose of Reference Code Sequence and its content)","Tag":"IMAGE","Directory Record Type":"3","Type":""},{"Key Attribute":"Lossy image Compression Ratio","Tag":"(0028,2112)","Directory Record Type":"IMAGE","Type":"1C","Notes":"Required if present in image object with a non-zero length value."}];