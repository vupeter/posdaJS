datab = [{},{"Attribute Name":"Measured Value Sequence","Tag":"(0040,A300)","Type":"2","Attribute Description":"This is the value of the Content Item. Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement. Zero or one Item shall be included in this Sequence."},{"Attribute Name":">Numeric Value","Tag":"(0040,A30A)","Type":"1","Attribute Description":"Numeric measurement value. Only a single value shall be present."},{"Attribute Name":">Floating Point Value","Tag":"(0040,A161)","Type":"1C","Attribute Description":"The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present. Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."},{"Attribute Name":">Rational Numerator Value","Tag":"(0040,A162)","Type":"1C","Attribute Description":"The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present. Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."},{"Attribute Name":">Rational Denominator Value","Tag":"(0040,A163)","Type":"1C","Attribute Description":"The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. Only a single value shall be present. Required if Rational Numerator Value (0040,A162) is present."},{"Attribute Name":">Measurement Units Code Sequence","Tag":"(0040,08EA)","Type":"1","Attribute Description":"Units of measurement. Only a single Item shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"Defined ."},{"Attribute Name":"Numeric Value Qualifier Code Sequence","Tag":"(0040,A301)","Type":"3","Attribute Description":"Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item. Only a single Item is permitted in this Sequence."},{"Attribute Name":">Include","Tag":"Defined ."}];