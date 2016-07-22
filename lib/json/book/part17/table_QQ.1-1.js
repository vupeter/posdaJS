datab = [{},{"Example":"1","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"NA","Mapping":"Identity","Blending Operation":"None","Blending Weight Inputs":"NA"},{"Example":"2","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = grayscale TISSUE_INTENSITY","Mapping":"Grayscale","Blending Operation":"Output = RGB1","Blending Weight Inputs":"Weight 1 = 1.0 (constant)"},{"Example":"Weight 2 = 0.0 (constant)"},{"Example":"3","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = f(TISSUE_INTENSITY)","Mapping":"Colorized","Blending Operation":"Output = RGB1","Blending Weight Inputs":"Weight 1 = 1.0 (constant)"},{"Example":"Weight 2 = 0.0 (constant)"},{"Example":"4","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = grayscale TISSUE_INTENSITY","Mapping":"Grayscale","Blending Operation":"Output = proportional summation of RGB1 and RGB2","Blending Weight Inputs":"Weight 1 = constant"},{"Example":"FLOW_VELOCITY","Data Types":"RGB2 = g(FLOW_VELOCITY)","Blending RGB Inputs":"Colorized","Mapping":"Weight 2 = constant"},{"Example":"5","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = grayscale TISSUE_INTENSITY","Mapping":"Grayscale","Blending Operation":"Threshold based on FLOW_VELOCITY","Blending Weight Inputs":"Weight 1 = 1 - Alpha 2"},{"Example":"FLOW_VELOCITY","Data Types":"RGB2 = g(FLOW_VELOCITY)","Blending RGB Inputs":"Colorized","Mapping":"Weight 2 = constant"},{"Example":"6","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = grayscale TISSUE_INTENSITY","Mapping":"Grayscale","Blending Operation":"Threshold based on FLOW_VELOCITY (MSB) and FLOW_VARIANCE (LSB) with 2-dimensional color mapping","Blending Weight Inputs":"Weight 1 = 1 - Alpha 2"},{"Example":"FLOW_VELOCITY","Data Types":"RGB2 = g(FLOW_VELOCITY, FLOW_ VARIANCE)","Blending RGB Inputs":"Colorized","Mapping":"Weight 2 = Alpha 2"},{"Example":"FLOW_ VARIANCE","Data Types":"Colorized"},{"Example":"7","Data Types":"TISSUE_INTENSITY","Blending RGB Inputs":"RGB1 = f(TISSUE_INTENSITY)","Mapping":"Colorized","Blending Operation":"Combination based on all data value inputs with colorized tissue and colorized 2-dimensional color mapping of flow and variance.","Blending Weight Inputs":"Weight 1 = Alpha 1"},{"Example":"FLOW_VELOCITY","Data Types":"RGB2 = g(FLOW_VELOCITY, FLOW_ VARIANCE)","Blending RGB Inputs":"Colorized","Mapping":"Weight 2 = Alpha 2"},{"Example":"FLOW_ VARIANCE","Data Types":"Colorized"}];