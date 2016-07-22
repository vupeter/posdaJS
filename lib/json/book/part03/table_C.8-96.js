datab = [{},{"Attribute Name":"MR Diffusion Sequence","Tag":"(0018,9117)","Type":"1","Attribute Description":"Identifies the diffusion parameters of this frame. Only a single Item shall be included in this Sequence."},{"Attribute Name":">Diffusion b-value","Tag":"(0018,9087)","Type":"1C","Attribute Description":"Diffusion sensitization factor in sec/mm2. This is the actual b-value for original frames and those derived from frames with the same b-value, or the most representative b-value when derived from images with different b-values. Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL. May be present otherwise."},{"Attribute Name":">Diffusion Directionality","Tag":"(0018,9075)","Type":"1C","Attribute Description":"Specifies whether diffusion conditions for the frame are directional, or isotropic with respect to direction.  Defined Terms:  DIRECTIONAL      BMATRIX      ISOTROPIC      NONE  To be used when Frame Type (0008,9007) value 4 equals DIFFUSION_ANISO or Diffusion b-value (0018,9087) is 0 (zero).    Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL. May be present otherwise."},{"Attribute Name":">Diffusion Gradient Direction Sequence","Tag":"(0018,9076)","Type":"1C","Attribute Description":"Sequence containing orientations of all diffusion sensitization gradients that were applied during the acquisition of this frame. Only a single Item shall be included in this Sequence. Required if Diffusion Directionality (0018,9075) equals DIRECTIONAL May be present if Diffusion Directionality (0018,9075) equals BMATRIX."},{"Attribute Name":">>Diffusion Gradient Orientation","Tag":"(0018,9089)","Type":"1C","Attribute Description":"The direction cosines of the diffusion gradient vector with respect to the patient Required if Frame Type (0008,9007) Value 1 of this frame is ORIGINAL. May be present otherwise."},{"Attribute Name":">Diffusion b-matrix Sequence","Tag":"(0018,9601)","Type":"1C","Attribute Description":"The directional diffusion sensitization expressed as a 3x3 matrix with diagonal symmetry (with six unique elements from which the other elements can be derived). The rows and columns of the matrix are the X (right to left), Y (anterior to posterior) and Z (foot to head) patient-relative orthogonal axes as defined in . The values are in units of ms/mm2. Only a single Item shall be included in this Sequence. Required if Diffusion Directionality (0018,9075) equals BMATRIX."},{"Attribute Name":">>Diffusion b-value XX","Tag":"(0018,9602)","Type":"1","Attribute Description":"The value of b[X,X]."},{"Attribute Name":">>Diffusion b-value XY","Tag":"(0018,9603)","Type":"1","Attribute Description":"The value of b[X,Y]."},{"Attribute Name":">>Diffusion b-value XZ","Tag":"(0018,9604)","Type":"1","Attribute Description":"The value of b[X,Z]."},{"Attribute Name":">>Diffusion b-value YY","Tag":"(0018,9605)","Type":"1","Attribute Description":"The value of b[Y,Y]."},{"Attribute Name":">>Diffusion b-value YZ","Tag":"(0018,9606)","Type":"1","Attribute Description":"The value of b[Y,Z]."},{"Attribute Name":">>Diffusion b-value ZZ","Tag":"(0018,9607)","Type":"1","Attribute Description":"The value of b[Z,Z]."},{"Attribute Name":">Diffusion Anisotropy Type","Tag":"(0018,9147)","Type":"1C","Attribute Description":"Class of diffusion anisotropy calculation.  Defined Terms:  FRACTIONAL      RELATIVE      VOLUME_RATIO      Required if Frame Type (0008,9007) value 4 equals DIFFUSION_ANISO."}];