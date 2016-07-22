datab = [{},{"Attribute Name":"Ion Machine Verification Sequence","Tag":"(0074,1046)","Description":"Sequence containing ion machine verification parameters. Zero or one Item shall be included in this Sequence."},{"Attribute Name":">Ion Control Point Verification Sequence","Tag":"(0074,104E)","Description":"Beam control points for current ion treatment beam. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Meterset Rate Set","Tag":"(3008,0045)","Description":"The specified speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) in referenced RT Plan per minute."},{"Attribute Name":">>Nominal Beam Energy","Tag":"(300A,0114)","Description":"Nominal Beam Energy at control point."},{"Attribute Name":">>Beam Limiting Device Position Sequence","Tag":"(300A,011A)","Description":"Beam limiting device (collimator) jaw or leaf (element) positions. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>RT Beam Limiting Device Type","Tag":"(300A,00B8)","Description":"Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6)  Enumerated Values:  X  symmetric jaw pair in IEC X direction    Y  symmetric jaw pair in IEC Y direction    ASYMX  asymmetric jaw pair in IEC X direction    ASYMY  asymmetric pair in IEC Y direction    MLCX  multileaf (multi-element) jaw pair in IEC X direction    MLCY  multileaf (multi-element) jaw pair in IEC Y direction"},{"Attribute Name":">>>Leaf/Jaw Positions","Tag":"(300A,011C)","Description":"Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, … 1N, 201, 202, … 2N."},{"Attribute Name":">>Gantry Angle","Tag":"(300A,011E)","Description":"Gantry angle of radiation source in degrees, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system."},{"Attribute Name":">>Gantry Rotation Direction","Tag":"(300A,011F)","Description":"Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Beam Limiting Device Angle","Tag":"(300A,0120)","Description":"Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system."},{"Attribute Name":">>Beam Limiting Device Rotation Direction","Tag":"(300A,0121)","Description":"Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Patient Support Angle","Tag":"(300A,0122)","Description":"Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system."},{"Attribute Name":">>Patient Support Rotation Direction","Tag":"(300A,0123)","Description":"Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Table Top Vertical Position","Tag":"(300A,0128)","Description":"Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ."},{"Attribute Name":">>Table Top Longitudinal Position","Tag":"(300A,0129)","Description":"Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ."},{"Attribute Name":">>Table Top Lateral Position","Tag":"(300A,012A)","Description":"Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ."},{"Attribute Name":">>Table Top Pitch Angle","Tag":"(300A,0140)","Description":"Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ."},{"Attribute Name":">>Table Top Pitch Rotation Direction","Tag":"(300A,0142)","Description":"Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Table Top Roll Angle","Tag":"(300A,0144)","Description":"Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ."},{"Attribute Name":">>Table Top Roll Rotation Direction","Tag":"(300A,0146)","Description":"Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Head Fixation Angle","Tag":"(300A,0148)","Description":"Angle in degrees of the head fixation for eye treatments with respect to the Table Top Pitch Angle (300A,0140) coordinate system. Positive head fixation angle is the same direction as positive Table Top Pitch. See ."},{"Attribute Name":">>Gantry Pitch Angle","Tag":"(300A,014A)","Description":"Gantry Pitch Angle in degrees of the radiation source, i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system. See ."},{"Attribute Name":">>Gantry Pitch Rotation Direction","Tag":"(300A,014C)","Description":"Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"},{"Attribute Name":">>Snout Position","Tag":"(300A,030D)","Description":"Axial position in mm of the snout, measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators)."},{"Attribute Name":">>Range Shifter Settings Sequence","Tag":"(300A,0360)","Description":"Range Shifter settings for the current control point. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>Range Shifter Setting","Tag":"(300A,0362)","Description":"Machine specific setting attribute for the range shifter. See ."},{"Attribute Name":">>>Referenced Range Shifter Number","Tag":"(300C,0100)","Description":"Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314)."},{"Attribute Name":">>Lateral Spreading Device Settings Sequence","Tag":"(300A,0370)","Description":"Lateral Spreading Device settings for the current control point. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>Lateral Spreading Device Setting","Tag":"(300A,0372)","Description":"Machine specific setting attribute for the lateral spreading device. See ."},{"Attribute Name":">>>Referenced Lateral Spreading Device Number","Tag":"(300C,0102)","Description":"Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332)."},{"Attribute Name":">>Range Modulator Settings Sequence","Tag":"(300A,0380)","Description":"Range Modulator Settings for current control point. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>Range Modulator Gating Start Value","Tag":"(300A,0382)","Description":"Start position, defining the range modulator position at which the beam is switched on."},{"Attribute Name":">>>Range Modulator Gating Stop Value","Tag":"(300A,0384)","Description":"Stop position, defining the range modulator position at which the beam is switched off."},{"Attribute Name":">>>Referenced Range Modulator Number","Tag":"(300C,0104)","Description":"Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342)."},{"Attribute Name":">>Ion Wedge Position Sequence","Tag":"(300A,03AC)","Description":"Wedge positions for current control point. One or more Items shall be included in this Sequence."},{"Attribute Name":">>>Wedge Thin Edge Position","Tag":"(300A,00DB)","Description":"Closest distance in mm from the central axis of the beam along a wedge axis to the thin edge as projected to the machine isocentric plane. Value is positive is the wedge does not cover the central axis, negative if it does. See ."},{"Attribute Name":">>>Wedge Position","Tag":"(300A,0118)","Description":"Position of Wedge at current Control Point.  Enumerated Values:  IN      OUT"},{"Attribute Name":">>Referenced Control Point Index","Tag":"(300C,00F0)","Description":"Uniquely identifies Control Point specified by Control Point Index (300A,0112 within the Beam referenced by Referenced Beam Number (300C,0006)."},{"Attribute Name":">Recorded Snout Sequence","Tag":"(3008,00F0)","Description":"Snouts associated with Beam. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Accessory Code","Tag":"(300A,00F9)","Description":"An accessory identifier to be read by a device such as a bar code reader."},{"Attribute Name":">>Snout ID","Tag":"(300A,030F)","Description":"User or machine supplied identifier for Snout."},{"Attribute Name":">Recorded Range Shifter Sequence","Tag":"(3008,00F2)","Description":"Range shifters recorded with Beam. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">>Accessory Code","Tag":"(300A,00F9)","Description":"An accessory identifier to be read by a device such as a bar code reader."},{"Attribute Name":">>Range Shifter ID","Tag":"(300A,0318)","Description":"User or machine supplied identifier for Range Modulator."},{"Attribute Name":">>Referenced Range Shifter Number","Tag":"(300C,0100)","Description":"Uniquely identifies range shifter specified by Range Shifter Number (300A,0316) within Beam referenced by Referenced Beam Number (300C,0006)."},{"Attribute Name":">Recorded Lateral Spreading Device Sequence","Tag":"(3008,00F4)","Description":"Lateral spreading devices associated with Beam. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">>Accessory Code","Tag":"(300A,00F9)","Description":"An accessory identifier to be read by a device such as a bar code reader."},{"Attribute Name":">>Lateral Spreading Device ID","Tag":"(300A,0336)","Description":"User or machine supplied identifier for Lateral Spreading Device."},{"Attribute Name":">>Referenced Lateral Spreading Device Number","Tag":"(300C,0102)","Description":"Uniquely identifies lateral spreading device specified by Lateral Spreading Device Number (300A,0334) within Beam referenced by Referenced Beam Number (300C,0006)."},{"Attribute Name":">Recorded Range Modulator Sequence","Tag":"(3008,00F6)","Description":"Range modulators associated with Beam. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">>Accessory Code","Tag":"(300A,00F9)","Description":"An accessory identifier to be read by a device such as a bar code reader."},{"Attribute Name":">>Range Modulator ID","Tag":"(300A,0346)","Description":"User or machine supplied identifier for Range Modulator."},{"Attribute Name":">>Range Modulator Type","Tag":"(300A,0348)","Description":"Type of Range Modulator. See  for Defined Terms."},{"Attribute Name":">>Beam Current Modulation ID","Tag":"(300A,034C)","Description":"User-supplied identifier for the beam current modulation pattern."},{"Attribute Name":">>Referenced Range Modulator Number","Tag":"(300C,0104)","Description":"Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342)."},{"Attribute Name":">Radiation Mass Number","Tag":"(300A,0302)","Description":"Mass number of radiation."},{"Attribute Name":">Radiation Atomic Number","Tag":"(300A,0304)","Description":"Atomic number of radiation."},{"Attribute Name":">Radiation Charge State","Tag":"(300A,0306)","Description":"Charge state of radiation."},{"Attribute Name":">Scan Mode","Tag":"(300A,0308)","Description":"The method of beam scanning to be used during treatment.  Enumerated Values:  NONE  No beam scanning is performed    UNIFORM  The beam is scanned between control points to create a uniform lateral fluence distribution across the field    MODULATED  The beam is scanned between control points to create a modulated lateral fluence distribution across the field"},{"Attribute Name":">Number of Range Shifters","Tag":"(300A,0312)","Description":"Number of range shifters associated with current beam."},{"Attribute Name":">Number of Lateral Spreading Devices","Tag":"(300A,0330)","Description":"Number of lateral spreading devices associated with current beam."},{"Attribute Name":">Number of Range Modulators","Tag":"(300A,0340)","Description":"Number of range modulators associated with current beam."},{"Attribute Name":">Patient Support Type","Tag":"(300A,0350)","Description":"Defined Terms:  TABLE  Treatment delivery system table    CHAIR  Treatment delivery system chair    See ."},{"Attribute Name":">Patient Support ID","Tag":"(300A,0352)","Description":"User-specified identifier for manufacturer specific patient support devices."},{"Attribute Name":">Patient Support Accessory Code","Tag":"(300A,0354)","Description":"A Patient Support accessory identifier to be read by a device such as a bar code reader."},{"Attribute Name":">Fixation Light Azimuthal Angle","Tag":"(300A,0356)","Description":"Azimuthal angle in degrees of the fixation light coordinate around the IEC BEAM LIMITING DEVICE Y-axis. Used for eye treatments. See ."},{"Attribute Name":">Fixation Light Polar Angle","Tag":"(300A,0358)","Description":"Polar angle in degrees of the fixation light coordinate. Used for eye treatments. See ."}];