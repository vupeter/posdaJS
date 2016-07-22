datab = [{},{"Attribute Name":"Container Identifier","Tag":"(0040,0512)","Attribute Description":"The identifier for the container that contains the specimen(s) being imaged.","Example Value":"S07-100 A 5 1","Comments":""},{"Attribute Name":"Issuer of the Container Identifier Sequence","Tag":"(0040,0513)","Attribute Description":"Organization that assigned the Container Identifier","Example Value":"","Comments":""},{"Attribute Name":">Local Namespace Entity ID","Tag":"(0040,0031)","Attribute Description":"Identifies an entity within the local namespace or domain.","Example Value":"Case Medical Center","Comments":""},{"Attribute Name":"Container Type Code Sequence","Tag":"(0040,0518)","Attribute Description":"Type of container that contains the specimen(s) being imaged. Only a single item shall be permitted in this sequence","Example Value":"","Comments":"This would likely be a default container value for all slide specimens."},{"Attribute Name":">Code Value","Tag":"(0008,0100)","Attribute Description":"","Example Value":"G-81EA","Comments":"This is a code sequence item"},{"Attribute Name":">Coding Scheme Designator","Tag":"(0008,0102)","Attribute Description":"","Example Value":"SRT"},{"Attribute Name":">Code Meaning","Tag":"(0008,0104)","Attribute Description":"","Example Value":"Slide"},{"Attribute Name":"Container Component Sequence","Tag":"(0040,0520)","Attribute Description":"Description of one or more components of the container (e.g., description of the slide and of the coverslip). One or more Items may be included in this Sequence.","Example Value":"","Comments":""},{"Attribute Name":">Container Component Type Code Sequence","Tag":"(0050,0012)","Attribute Description":"Type of container component. One Item shall be included in this Sequence.","Example Value":"","Comments":""},{"Attribute Name":">>Code Value","Tag":"(0008,0100)","Attribute Description":"","Example Value":"A-0101D","Comments":"This is a code sequence item"},{"Attribute Name":">>Coding Scheme Designator","Tag":"(0008,0102)","Attribute Description":"","Example Value":"SRT"},{"Attribute Name":">>Code Meaning","Tag":"(0008,0104)","Attribute Description":"","Example Value":"Microscope slide cover slip"},{"Attribute Name":">Container Component Material","Tag":"(0050,001A)","Attribute Description":"Material of container component.","Example Value":"GLASS","Comments":""},{"Attribute Name":"Specimen Description Sequence","Tag":"(0040,0560)","Attribute Description":"Sequence of identifiers and detailed description of the specimen(s) being imaged. One or more Items shall be included in this Sequence.","Example Value":"","Comments":""},{"Attribute Name":">Specimen Identifier","Tag":"(0040,0551)","Attribute Description":"A departmental information system identifier for the Specimen.","Example Value":"S07-100 A 5 1","Comments":"Specimen and Container have same ID"},{"Attribute Name":">Issuer of the Specimen Identifier Sequence","Tag":"(0040,0562)","Attribute Description":"The name or code for the institution that has assigned the Specimen Identifier.","Example Value":"","Comments":""},{"Attribute Name":">>Local Namespace Entity ID","Tag":"(0040,0031)","Attribute Description":"Identifies an entity within the local namespace or domain.","Example Value":"Case Medical Center","Comments":""},{"Attribute Name":">Specimen UID","Tag":"(0040,0554)","Attribute Description":"Unique Identifier for Specimen","Example Value":"1.2.840.99790.986.33.1677.1.1.19.5","Comments":""},{"Attribute Name":">Specimen Short Description","Tag":"(0040,0600)","Attribute Description":"Short textual specimen description","Example Value":"Part A: LEFT UPPER LOBE, Block 5: Mass (2 pc), Slide 1: H&E","Comments":"This attribute concatenates four LIS fields: 1. Specimen Received, 2. Cassette Summary, 3. Number of Pieces in Block, 4. Staining. This does not always work this nicely. Often one or more of fields is empty or confusing.  This field is limited to 64 characters"},{"Attribute Name":">Specimen Detailed Description","Tag":"(0040,0602)","Attribute Description":"Detailed textual specimen description","Example Value":"A: Received fresh for intraoperative consultation, labeled with the patient's name, number and \"left upper lobe,\" is a pink-tan, wedge-shaped segment of soft tissue, 6.9 x 4.2 x 1.0 cm. The pleural surface is pink-tan and glistening with a stapled line measuring 12.0 cm. in length. The pleural surface shows a 0.5 cm. area of puckering. The pleural surface is inked black. The cut surface reveals a 1.2 x 1.1 cm, white-gray, irregular mass abutting the pleural surface and deep to the puckered area. The remainder of the cut surface is red-brown and congested. No other lesions are identified. Representative sections are submitted. Block 5: \"Mass\" (2 pieces)","Comments":"This is a mapping from the LIS Gross Description Field and the Block Summary. Note that in Case S07-100, there were six parts. This means the LIS gross description field will have six sections (A - F). We would have to parse the gross description field into those parts (A-F) and then only incorporate section \"A\" into this attribute. The same would be true of the Blocks.  One could consider listing all the Blocks associated with Part A. It would be easy to do and might give useful information."},{"Attribute Name":">Specimen Preparation Sequence","Tag":"(0040,0610)","Attribute Description":"Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. One or more Items may be present. This Sequence includes description of the specimen sampling step from a parent specimen, potentially back to the original part collection.","Example Value":"(see )","Comments":""},{"Attribute Name":">>Specimen Preparation Step Content Item Sequence","Tag":"(0040,0612)","Attribute Description":"Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition. One or more Items may be present."},{"Attribute Name":">Primary Anatomic Structure Sequence","Tag":"(0008,2228)","Attribute Description":"Original anatomic location in patient of specimen. This location may be inherited from the parent specimen, or further refined by modifiers depending on the sampling procedure for this specimen.","Example Value":"","Comments":""},{"Attribute Name":">>Code Value","Tag":"(0008,0100)","Attribute Description":"","Example Value":"T-28600","Comments":"This is a code sequence item"},{"Attribute Name":">>Coding Scheme Designator","Tag":"(0008,0102)","Attribute Description":"","Example Value":"SRT"},{"Attribute Name":">>Code Meaning","Tag":"(0008,0104)","Attribute Description":"","Example Value":"Left Upper Lobe of Lung"}];