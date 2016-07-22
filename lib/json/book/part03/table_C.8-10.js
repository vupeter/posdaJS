datab = [{},{"Attribute Name":"Energy Window Information Sequence","Tag":"(0054,0012)","Type":"2","Attribute Description":"Sequence of Items that describe the energy window groups used. Zero or more Items shall be included in this Sequence. The number of items shall be equal to Number of Energy Windows (0054,0011). The first item corresponds to frames with value of 1 in the Energy Window Vector (0054,0010), the second item with value 2, etc."},{"Attribute Name":">Energy Window Name","Tag":"(0054,0018)","Type":"3","Attribute Description":"A user defined name that describes this Energy Window."},{"Attribute Name":">Energy Window Range Sequence","Tag":"(0054,0013)","Type":"3","Attribute Description":"Sequence of Items that describes this energy window group. One or more Items are permitted in this Sequence."},{"Attribute Name":">>Energy Window Lower Limit","Tag":"(0054,0014)","Type":"3","Attribute Description":"The lower limit of the energy window in KeV. See  for further explanation."},{"Attribute Name":">>Energy Window Upper Limit","Tag":"(0054,0015)","Type":"3","Attribute Description":"The upper limit of the energy window in KeV. See  for further explanation."},{"Attribute Name":"Radiopharmaceutical Information Sequence","Tag":"(0054,0016)","Type":"2","Attribute Description":"Sequence of Items that describe isotope information. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">Radionuclide Code Sequence","Tag":"(0054,0300)","Type":"2","Attribute Description":"Sequence that identifies the radionuclide. Zero or one Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline .  The Coding Scheme Designator (0008,0102) shall have an Enumerated Value of \"99SDM\" for historical reasons. Code Meaning (0008,0104) shall be Type 3 for historical reasons."},{"Attribute Name":">Radiopharmaceutical Route","Tag":"(0018,1070)","Type":"3","Attribute Description":"Route of injection."},{"Attribute Name":">Administration Route Code Sequence","Tag":"(0054,0302)","Type":"3","Attribute Description":"Sequence that identifies the administration route for the radiopharmaceutical. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline .  Code Meaning (0008,0104) shall be Type 3 for historical reasons."},{"Attribute Name":">Radiopharmaceutical Volume","Tag":"(0018,1071)","Type":"3","Attribute Description":"Volume of injection in cubic cm."},{"Attribute Name":">Radiopharmaceutical Start Time","Tag":"(0018,1072)","Type":"3","Attribute Description":"Time of start of injection. See  for further explanation."},{"Attribute Name":">Radiopharmaceutical Stop Time","Tag":"(0018,1073)","Type":"3","Attribute Description":"Time of end of injection. See  for further explanation."},{"Attribute Name":">Radionuclide Total Dose","Tag":"(0018,1074)","Type":"3","Attribute Description":"Total amount of radionuclide injected. See  for further explanation."},{"Attribute Name":">Radiopharmaceutical Administration Event UID","Tag":"(0008,3012)","Type":"3","Attribute Description":"Unique identification of the administration of the radiopharmaceutical to the patient.  The UID is the same Radiopharmaceutical Administration Event UID that is in the Radiopharmaceutical Radiation Dose Report."},{"Attribute Name":">Calibration Data Sequence","Tag":"(0054,0306)","Type":"3","Attribute Description":"Sequence that contains calibration data. One or more Items are permitted in this Sequence."},{"Attribute Name":">>Energy Window Number","Tag":"(0054,0308)","Type":"1","Attribute Description":"The Item number in the Energy Window Information Sequence to which the following calibration data relates. The Items are numbered starting from 1."},{"Attribute Name":">>Syringe Counts","Tag":"(0018,1045)","Type":"3","Attribute Description":"Pre-injection syringe count rate in counts/sec. See  for further explanation."},{"Attribute Name":">>Residual Syringe Counts","Tag":"(0054,0017)","Type":"3","Attribute Description":"Post-injection residue syringe count rate in counts/sec. See  for further explanation."},{"Attribute Name":">Radiopharmaceutical","Tag":"(0018,0031)","Type":"3","Attribute Description":"Name of the radiopharmaceutical."},{"Attribute Name":">Radiopharmaceutical Code Sequence","Tag":"(0054,0304)","Type":"3","Attribute Description":"Sequence that identifies the radiopharmaceutical. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline .  Code Meaning (0008,0104) shall be Type 3 for historical reasons."},{"Attribute Name":"Intervention Drug Information Sequence","Tag":"(0018,0026)","Type":"3","Attribute Description":"Sequence of Items that describes the intervention drugs used. One or more Items are permitted in this Sequence."},{"Attribute Name":">Intervention Drug Name","Tag":"(0018,0034)","Type":"3","Attribute Description":"Name of intervention drug."},{"Attribute Name":">Intervention Drug Code Sequence","Tag":"(0018,0029)","Type":"3","Attribute Description":"Sequence that identifies the intervention drug name. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline .  Code Meaning (0008,0104) shall be Type 3 for historical reasons."},{"Attribute Name":">Administration Route Code Sequence","Tag":"(0054,0302)","Type":"3","Attribute Description":"Sequence that identifies the administration route for the intervention drug. Only a single Item is permitted in this Sequence."},{"Attribute Name":">>Include","Tag":"Baseline .  Code Meaning (0008,0104) shall be Type 3 for historical reasons."},{"Attribute Name":">Intervention Drug Start Time","Tag":"(0018,0035)","Type":"3","Attribute Description":"Time of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032)."},{"Attribute Name":">Intervention Drug Stop Time","Tag":"(0018,0027)","Type":"3","Attribute Description":"Time of completion of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032)."},{"Attribute Name":">Intervention Drug Dose","Tag":"(0018,0028)","Type":"3","Attribute Description":"Intervention drug dose, in mg."}];