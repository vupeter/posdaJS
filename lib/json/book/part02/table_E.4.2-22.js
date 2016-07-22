datab = [{},{"Attribute":"Magnification Type","Tag":"(2010,0060)","Valid Range":"REPLICATE BILINEAR CUBIC NONE","Default Value if not sent by SCU or invalid value received":"Configurable","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Max Density","Tag":"(2010,0130)","Valid Range":"170-350","Default Value if not sent by SCU or invalid value received":"320","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Smoothing Types (See Note 1)","Tag":"(2010,0080)","Valid Range":"0-15, the value is laser specific.","Default Value if not sent by SCU or invalid value received":"Configurable","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Border Density (See Note 2)","Tag":"(2010,0100)","Valid Range":"WHITE BLACK","Default Value if not sent by SCU or invalid value received":"BLACK","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Trim (See Note 3)","Tag":"(2010,0140)","Valid Range":"YES NO","Default Value if not sent by SCU or invalid value received":"NO","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Reference Presentation LUT Sequence","Tag":"(2050,0500)","Valid Range":"N/A","Default Value if not sent by SCU or invalid value received":"N/A","Response to Invalid Value":"N/A"},{"Attribute":">Referenced SOP Class UID","Tag":"(0008,1150)","Valid Range":"SOP Class UID","Default Value if not sent by SCU or invalid value received":"Mandatory if sequence is present, no default","Response to Invalid Value":"Failure (0x0106)"},{"Attribute":">Referenced SOP Instance UID","Tag":"(0008,1155)","Valid Range":"SOP Instance UID","Default Value if not sent by SCU or invalid value received":"Mandatory if sequence is present, no default","Response to Invalid Value":"Failure (0x0106)"},{"Attribute":"Illumination","Tag":"(2010,015E)","Valid Range":"Any valid value in the unit of cd/m^2","Default Value if not sent by SCU or invalid value received":"2000, Mandatory if Presentation LUT is supported","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Configuration Information","Tag":"(2010,0150)","Valid Range":"LUT = m,n m = a character string or 0, n = 0-15, the value is laser specific. CSxxx 000 ≤ xxx ≤ 015","Default Value if not sent by SCU or invalid value received":"m = a character string or 0, n is configurable.","Response to Invalid Value":"Warning (0x116)"},{"Attribute":"Reflective Ambient Light","Tag":"(2010,0160)","Valid Range":"Any valid value in the unit of cd/m^2","Default Value if not sent by SCU or invalid value received":"10, Mandatory if Presentation LUT is supported","Response to Invalid Value":"Warning (0x116)"}];