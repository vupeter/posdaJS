datab = [{},{"Attribute Name":"Measurement Laterality","Tag":"(0024,0113)","Type":"1","Attribute Description":"Laterality of body part (eye) examined. See  for further explanation.  Enumerated Values:  R  right    L  left    B  both left and right together     This Attribute is mandatory, in order to ensure that measurements may be positioned correctly relative to one another for display.   Laterality (0020,0060) is a Series level Attribute and must be the same for all Measurements in the Series, hence it must be absent if multiple instances from different eyes are encoded."},{"Attribute Name":"Presented Visual Stimuli Data Flag","Tag":"(0024,0037)","Type":"1","Attribute Description":"Whether the device was able to determine presented visual stimuli.  Enumerated Values:  YES      NO"},{"Attribute Name":"Number of Visual Stimuli","Tag":"(0024,0038)","Type":"1C","Attribute Description":"The total number of visual stimuli presented to the patient. This includes the number of stimuli repetitions. Required if Presented Visual Stimuli Data Flag (0024,0037) is YES."},{"Attribute Name":"Visual Field Test Duration","Tag":"(0024,0088)","Type":"1","Attribute Description":"Total time the visual field machine was actively presenting visual stimuli to patient, in seconds."},{"Attribute Name":"Foveal Sensitivity Measured","Tag":"(0024,0086)","Type":"1","Attribute Description":"Whether foveal sensitivity was measured.  Enumerated Values:  YES      NO"},{"Attribute Name":"Foveal Sensitivity","Tag":"(0024,0087)","Type":"1C","Attribute Description":"Foveal Sensitivity is the reciprocal of foveal threshold (1/foveal threshold), in dB. Foveal Threshold is the minimum amount of luminance increment on a uniform background that can be detected by the patient at coordinates 0,0 (relative to the center of the patient's fixation). See  for further explanation. Required if the value for Foveal Sensitivity Measured (0024,0086) is YES."},{"Attribute Name":"Foveal Point Normative Data Flag","Tag":"(0024,0117)","Type":"1","Attribute Description":"Existence of normative data base for the foveal point sensitivity.  Enumerated Values:  YES      NO"},{"Attribute Name":"Foveal Point Probability Value","Tag":"(0024,0118)","Type":"1C","Attribute Description":"The percentile of the foveal point sensitivity within an age corrected normal visual field, in percent. Required if the value for Foveal Sensitivity Measured (0024,0086) is YES and Foveal Point Normative Data Flag (0024,0117) is YES."},{"Attribute Name":"Screening Baseline Measured","Tag":"(0024,0120)","Type":"1","Attribute Description":"Whether visual field screening baseline was measured.  Enumerated Values:  YES      NO"},{"Attribute Name":"Screening Baseline Measured Sequence","Tag":"(0024,0122)","Type":"1C","Attribute Description":"Information about the starting luminance screening values. One or more Items shall be included in this Sequence. Required if the value for Screening Baseline Measured (0024,0120) is YES."},{"Attribute Name":">Screening Baseline Type","Tag":"(0024,0124)","Type":"1","Attribute Description":"Method used to determine starting luminance screening values.  Enumerated Values:  CENTRAL      PERIPHERAL"},{"Attribute Name":">Screening Baseline Value","Tag":"(0024,0126)","Type":"1","Attribute Description":"Visual Field screening baseline value, in dB."},{"Attribute Name":"Blind Spot Localized","Tag":"(0024,0106)","Type":"1","Attribute Description":"Whether the blind spot was measured.  Enumerated Values:  YES      NO"},{"Attribute Name":"Blind Spot X-Coordinate","Tag":"(0024,0107)","Type":"1C","Attribute Description":"The horizontal coordinate of the patient's blind spot relative to the center of the patient's fixation, in degrees, such that toward the right is positive. Required if the value for Blind Spot Localized (0024,0106) is YES. See  for further explanation."},{"Attribute Name":"Blind Spot Y-Coordinate","Tag":"(0024,0108)","Type":"1C","Attribute Description":"The vertical coordinate of the patient's blind spot relative to the center of the patient fixation, in degrees, such that up is positive. Required if the value for Blind Spot Localized (0024,0106) is YES. See  for further explanation."},{"Attribute Name":"Minimum Sensitivity Value","Tag":"(0024,0105)","Type":"1","Attribute Description":"The minimum sensitivity value generated by the equipment used for this visual field test, in dB."},{"Attribute Name":"Test Point Normals Data Flag","Tag":"(0024,0057)","Type":"1","Attribute Description":"Existence of normative data base for this set of test points.  Enumerated Values:  YES      NO"},{"Attribute Name":"Test Point Normals Sequence","Tag":"(0024,0058)","Type":"1C","Attribute Description":"Normative data base used for this test sequence. Only a single Item shall be included in this Sequence. Required if Test Point Normals Data Flag (0024,0057) is YES."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Age Corrected Sensitivity Deviation Algorithm Sequence","Tag":"(0024,0065)","Type":"1C","Attribute Description":"Software algorithm used to provide the probability that the age corrected sensitivity deviation values at each test point belong to a normal visual field. Only a single Item shall be included in this Sequence. Required if Test Point Normals Data Flag (0024,0057) is YES."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Generalized Defect Sensitivity Deviation Algorithm Sequence","Tag":"(0024,0067)","Type":"1C","Attribute Description":"Software algorithm used to provide the probability that the sensitivity deviation values at each test point belong to a normal visual field. Only a single Item shall be included in this Sequence. Required if Test Point Normals Data Flag (0024,0057) is YES."},{"Attribute Name":">Include","Tag":""},{"Attribute Name":"Visual Field Test Point Sequence","Tag":"(0024,0089)","Type":"1","Attribute Description":"Information for each test point in the visual field. One or more Items shall be included in this Sequence."},{"Attribute Name":">Visual Field Test Point X-Coordinate","Tag":"(0024,0090)","Type":"1","Attribute Description":"The horizontal coordinate of a single test point relative to the center of the patient fixation, in degrees, such that toward the right is positive."},{"Attribute Name":">Visual Field Test Point Y-Coordinate","Tag":"(0024,0091)","Type":"1","Attribute Description":"The vertical coordinate of a single test point relative to the center of the patient fixation, in degrees, such that up is positive."},{"Attribute Name":">Stimulus Results","Tag":"(0024,0093)","Type":"1","Attribute Description":"Whether the patient saw a stimulus presented at a luminance other than maximum, a presentation at maximum luminance, or did not see any presented stimulus.  Enumerated Values:  SEEN  stimulus seen at a luminance value less than maximum    NOT SEEN  stimulus not seen    SEEN AT MAX  stimulus seen at the maximum luminance possible for the instrument     SEEN AT MAX is a value only relevant to Screening tests."},{"Attribute Name":">Sensitivity Value","Tag":"(0024,0094)","Type":"1C","Attribute Description":"If Stimulus Results (0024,0093) is SEEN then this value is the sensitivity, in dB. Required if Content Item Modifier Sequence (0040,0441) within Performed Protocol Code Sequence (0040,0260) contains an item with the value (R-408C3, SRT, \"Diagnostic\"). May be present otherwise.  If this is not present, refer to the attribute Minimum Sensitivity Value (0024,0105)."},{"Attribute Name":">Retest Stimulus Seen","Tag":"(0024,0095)","Type":"3","Attribute Description":"Whether the retested stimulus presented was seen by the patient.  Enumerated Values:  YES      NO"},{"Attribute Name":">Retest Sensitivity Value","Tag":"(0024,0096)","Type":"3","Attribute Description":"If the Retest Stimulus Seen (0024,0095) is YES, then this value is the sensitivity, in dB.  If this is not present, refer to the attribute Minimum Sensitivity Value (0024,0105)."},{"Attribute Name":">Quantified Defect","Tag":"(0024,0098)","Type":"3","Attribute Description":"Difference between the expected and the determined sensitivity, each in dB.  This field is only useful when the sensitivity is quantified. Some examples include Test Strategy Code Sequence (0024,0015) with items providing values such as Quantity-Defects, 2LT-Dynamic, 2LT-Normal."},{"Attribute Name":">Visual Field Test Point Normals Sequence","Tag":"(0024,0097)","Type":"1C","Attribute Description":"Information about normal values for each visual field test point. One or more Items shall be included in this Sequence. Required if Test Point Normals Data Flag (0024,0057) is YES."},{"Attribute Name":">>Age Corrected Sensitivity Deviation Value","Tag":"(0024,0092)","Type":"1","Attribute Description":"Difference between the patient's local sensitivity and the age corrected normal sensitivity, in dB."},{"Attribute Name":">>Age Corrected Sensitivity Deviation Probability Value","Tag":"(0024,0100)","Type":"1","Attribute Description":"The percentile of the age corrected sensitivity deviation within the normal population of visual field, in percent."},{"Attribute Name":">> Generalized Defect Corrected Sensitivity Deviation Flag","Tag":"(0024,0102)","Type":"1","Attribute Description":"Whether generalized defect corrected data are available for this point.  Enumerated Values:  YES      NO"},{"Attribute Name":">>Generalized Defect Corrected Sensitivity Deviation Value","Tag":"(0024,0103)","Type":"1C","Attribute Description":"The age corrected sensitivity deviation after correction for the Generalized Defect, in dB. Generalized defect is proportional to the loss in sensitivity shared by all points in the visual field. Required if Generalized Defect Corrected Sensitivity Deviation Flag (0024,0102) is YES."},{"Attribute Name":">>Generalized Defect Corrected Sensitivity Deviation Probability Value","Tag":"(0024,0104)","Type":"1C","Attribute Description":"The percentile of the generalized defect corrected sensitivity deviation within the normal population of visual field, in percent. Required if Generalized Defect Corrected Sensitivity Deviation Flag (0024,0102) is YES."}];