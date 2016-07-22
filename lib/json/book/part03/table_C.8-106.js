datab = [{},{"Attribute Name":"Rows","Tag":"(0028,0010)","Type":"1","Attribute Description":"Number of voxels in the vertical direction in the frame."},{"Attribute Name":"Columns","Tag":"(0028,0011)","Type":"1","Attribute Description":"Number of voxels in the horizontal direction in the frame."},{"Attribute Name":"Data Point Rows","Tag":"(0028,9001)","Type":"1","Attribute Description":"Number of rows of data points in spectroscopic data."},{"Attribute Name":"Data Point Columns","Tag":"(0028,9002)","Type":"1","Attribute Description":"Number of columns of data points in spectroscopic data."},{"Attribute Name":"Data Representation","Tag":"(0028,9108)","Type":"1","Attribute Description":"Data representation of the data points. Each data point shall have the same representation.  Enumerated Values:  COMPLEX  Data is complex pair    REAL  Data contains only real component    IMAGINARY  Data contains only imaginary component    MAGNITUDE  Magnitude data"},{"Attribute Name":"Signal Domain Columns","Tag":"(0028,9003)","Type":"1","Attribute Description":"Domain of represented signal in column direction.  Enumerated Values:  FREQUENCY      TIME"},{"Attribute Name":"Signal Domain Rows","Tag":"(0028,9235)","Type":"1C","Attribute Description":"Domain of represented signal in row direction.  Enumerated Values:  FREQUENCY      TIME      Required if Data Point Rows (0028,9001) has a value of more than 1."},{"Attribute Name":"First Order Phase Correction Angle","Tag":"(5600,0010)","Type":"1C","Attribute Description":"First Order Phase Correction Angle. Number of values is determined by Row*Column*Number of Frames. Required if First Order Phase Correction (0018,9198) equals YES"},{"Attribute Name":"Spectroscopy Data","Tag":"(5600,0020)","Type":"1","Attribute Description":"A data stream of the signal intensities that comprise the spectroscopic data. See  for further explanation."}];