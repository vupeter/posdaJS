datab = [{},{"Attribute Name":{"colspan":"1","rowspan":"1","text":"Ion Machine Verification Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(0074,1046)"},"Description":{"colspan":"1","rowspan":"1","text":"Sequence containing ion machine verification parameters. Zero or one Item shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Ion Control Point Verification Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(0074,104E)"},"Description":{"colspan":"1","rowspan":"1","text":"Beam control points for current ion treatment beam. Only a single Item shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Meterset Rate Set"},"Tag":{"colspan":"1","rowspan":"1","text":"(3008,0045)"},"Description":{"colspan":"1","rowspan":"1","text":"The specified speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) in referenced RT Plan per minute."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Nominal Beam Energy"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0114)"},"Description":{"colspan":"1","rowspan":"1","text":"Nominal Beam Energy at control point."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Beam Limiting Device Position Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,011A)"},"Description":{"colspan":"1","rowspan":"1","text":"Beam limiting device (collimator) jaw or leaf (element) positions. One or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>RT Beam Limiting Device Type"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00B8)"},"Description":{"colspan":"1","rowspan":"1","text":"Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6)  Enumerated Values:  X  symmetric jaw pair in IEC X direction    Y  symmetric jaw pair in IEC Y direction    ASYMX  asymmetric jaw pair in IEC X direction    ASYMY  asymmetric pair in IEC Y direction    MLCX  multileaf (multi-element) jaw pair in IEC X direction    MLCY  multileaf (multi-element) jaw pair in IEC Y direction"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Leaf/Jaw Positions"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,011C)"},"Description":{"colspan":"1","rowspan":"1","text":"Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, … 1N, 201, 202, … 2N."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Gantry Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,011E)"},"Description":{"colspan":"1","rowspan":"1","text":"Gantry angle of radiation source in degrees, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Gantry Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,011F)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Beam Limiting Device Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0120)"},"Description":{"colspan":"1","rowspan":"1","text":"Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Beam Limiting Device Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0121)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Patient Support Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0122)"},"Description":{"colspan":"1","rowspan":"1","text":"Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Patient Support Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0123)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. See .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Vertical Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0128)"},"Description":{"colspan":"1","rowspan":"1","text":"Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Longitudinal Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0129)"},"Description":{"colspan":"1","rowspan":"1","text":"Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Lateral Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,012A)"},"Description":{"colspan":"1","rowspan":"1","text":"Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Pitch Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0140)"},"Description":{"colspan":"1","rowspan":"1","text":"Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Pitch Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0142)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Roll Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0144)"},"Description":{"colspan":"1","rowspan":"1","text":"Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Table Top Roll Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0146)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Head Fixation Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0148)"},"Description":{"colspan":"1","rowspan":"1","text":"Angle in degrees of the head fixation for eye treatments with respect to the Table Top Pitch Angle (300A,0140) coordinate system. Positive head fixation angle is the same direction as positive Table Top Pitch. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Gantry Pitch Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,014A)"},"Description":{"colspan":"1","rowspan":"1","text":"Gantry Pitch Angle in degrees of the radiation source, i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Gantry Pitch Rotation Direction"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,014C)"},"Description":{"colspan":"1","rowspan":"1","text":"Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. See  and .  Enumerated Values:  CW  clockwise    CC  counter-clockwise    NONE  no rotation"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Snout Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,030D)"},"Description":{"colspan":"1","rowspan":"1","text":"Axial position in mm of the snout, measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Range Shifter Settings Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0360)"},"Description":{"colspan":"1","rowspan":"1","text":"Range Shifter settings for the current control point. One or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Range Shifter Setting"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0362)"},"Description":{"colspan":"1","rowspan":"1","text":"Machine specific setting attribute for the range shifter. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Referenced Range Shifter Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0100)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Lateral Spreading Device Settings Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0370)"},"Description":{"colspan":"1","rowspan":"1","text":"Lateral Spreading Device settings for the current control point. One or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Lateral Spreading Device Setting"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0372)"},"Description":{"colspan":"1","rowspan":"1","text":"Machine specific setting attribute for the lateral spreading device. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Referenced Lateral Spreading Device Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0102)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Range Modulator Settings Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0380)"},"Description":{"colspan":"1","rowspan":"1","text":"Range Modulator Settings for current control point. One or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Range Modulator Gating Start Value"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0382)"},"Description":{"colspan":"1","rowspan":"1","text":"Start position, defining the range modulator position at which the beam is switched on."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Range Modulator Gating Stop Value"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0384)"},"Description":{"colspan":"1","rowspan":"1","text":"Stop position, defining the range modulator position at which the beam is switched off."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Referenced Range Modulator Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0104)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Ion Wedge Position Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,03AC)"},"Description":{"colspan":"1","rowspan":"1","text":"Wedge positions for current control point. One or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Wedge Thin Edge Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00DB)"},"Description":{"colspan":"1","rowspan":"1","text":"Closest distance in mm from the central axis of the beam along a wedge axis to the thin edge as projected to the machine isocentric plane. Value is positive is the wedge does not cover the central axis, negative if it does. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>>Wedge Position"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0118)"},"Description":{"colspan":"1","rowspan":"1","text":"Position of Wedge at current Control Point.  Enumerated Values:  IN      OUT"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Referenced Control Point Index"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,00F0)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely identifies Control Point specified by Control Point Index (300A,0112 within the Beam referenced by Referenced Beam Number (300C,0006)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Recorded Snout Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(3008,00F0)"},"Description":{"colspan":"1","rowspan":"1","text":"Snouts associated with Beam. Only a single Item shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Accessory Code"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00F9)"},"Description":{"colspan":"1","rowspan":"1","text":"An accessory identifier to be read by a device such as a bar code reader."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Snout ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,030F)"},"Description":{"colspan":"1","rowspan":"1","text":"User or machine supplied identifier for Snout."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Recorded Range Shifter Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(3008,00F2)"},"Description":{"colspan":"1","rowspan":"1","text":"Range shifters recorded with Beam. Zero or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Accessory Code"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00F9)"},"Description":{"colspan":"1","rowspan":"1","text":"An accessory identifier to be read by a device such as a bar code reader."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Range Shifter ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0318)"},"Description":{"colspan":"1","rowspan":"1","text":"User or machine supplied identifier for Range Modulator."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Referenced Range Shifter Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0100)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely identifies range shifter specified by Range Shifter Number (300A,0316) within Beam referenced by Referenced Beam Number (300C,0006)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Recorded Lateral Spreading Device Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(3008,00F4)"},"Description":{"colspan":"1","rowspan":"1","text":"Lateral spreading devices associated with Beam. Zero or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Accessory Code"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00F9)"},"Description":{"colspan":"1","rowspan":"1","text":"An accessory identifier to be read by a device such as a bar code reader."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Lateral Spreading Device ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0336)"},"Description":{"colspan":"1","rowspan":"1","text":"User or machine supplied identifier for Lateral Spreading Device."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Referenced Lateral Spreading Device Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0102)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely identifies lateral spreading device specified by Lateral Spreading Device Number (300A,0334) within Beam referenced by Referenced Beam Number (300C,0006)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Recorded Range Modulator Sequence"},"Tag":{"colspan":"1","rowspan":"1","text":"(3008,00F6)"},"Description":{"colspan":"1","rowspan":"1","text":"Range modulators associated with Beam. Zero or more Items shall be included in this Sequence."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Accessory Code"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,00F9)"},"Description":{"colspan":"1","rowspan":"1","text":"An accessory identifier to be read by a device such as a bar code reader."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Range Modulator ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0346)"},"Description":{"colspan":"1","rowspan":"1","text":"User or machine supplied identifier for Range Modulator."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Range Modulator Type"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0348)"},"Description":{"colspan":"1","rowspan":"1","text":"Type of Range Modulator. See  for Defined Terms."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Beam Current Modulation ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,034C)"},"Description":{"colspan":"1","rowspan":"1","text":"User-supplied identifier for the beam current modulation pattern."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">>Referenced Range Modulator Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300C,0104)"},"Description":{"colspan":"1","rowspan":"1","text":"Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342)."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Radiation Mass Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0302)"},"Description":{"colspan":"1","rowspan":"1","text":"Mass number of radiation."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Radiation Atomic Number"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0304)"},"Description":{"colspan":"1","rowspan":"1","text":"Atomic number of radiation."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Radiation Charge State"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0306)"},"Description":{"colspan":"1","rowspan":"1","text":"Charge state of radiation."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Scan Mode"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0308)"},"Description":{"colspan":"1","rowspan":"1","text":"The method of beam scanning to be used during treatment.  Enumerated Values:  NONE  No beam scanning is performed    UNIFORM  The beam is scanned between control points to create a uniform lateral fluence distribution across the field    MODULATED  The beam is scanned between control points to create a modulated lateral fluence distribution across the field"}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Number of Range Shifters"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0312)"},"Description":{"colspan":"1","rowspan":"1","text":"Number of range shifters associated with current beam."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Number of Lateral Spreading Devices"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0330)"},"Description":{"colspan":"1","rowspan":"1","text":"Number of lateral spreading devices associated with current beam."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Number of Range Modulators"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0340)"},"Description":{"colspan":"1","rowspan":"1","text":"Number of range modulators associated with current beam."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Patient Support Type"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0350)"},"Description":{"colspan":"1","rowspan":"1","text":"Defined Terms:  TABLE  Treatment delivery system table    CHAIR  Treatment delivery system chair    See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Patient Support ID"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0352)"},"Description":{"colspan":"1","rowspan":"1","text":"User-specified identifier for manufacturer specific patient support devices."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Patient Support Accessory Code"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0354)"},"Description":{"colspan":"1","rowspan":"1","text":"A Patient Support accessory identifier to be read by a device such as a bar code reader."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Fixation Light Azimuthal Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0356)"},"Description":{"colspan":"1","rowspan":"1","text":"Azimuthal angle in degrees of the fixation light coordinate around the IEC BEAM LIMITING DEVICE Y-axis. Used for eye treatments. See ."}},{"Attribute Name":{"colspan":"1","rowspan":"1","text":">Fixation Light Polar Angle"},"Tag":{"colspan":"1","rowspan":"1","text":"(300A,0358)"},"Description":{"colspan":"1","rowspan":"1","text":"Polar angle in degrees of the fixation light coordinate. Used for eye treatments. See ."}}];