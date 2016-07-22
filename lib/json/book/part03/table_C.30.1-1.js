datab = [{},{"Attribute Name":"Procedure Step State","Tag":"(0074,1000)","Attribute Description":"State of the Procedure Step.  Enumerated Values:  SCHEDULED      IN PROGRESS      CANCELED      COMPLETED      See  for details on Unified Procedure Step states."},{"Attribute Name":"Progress Information Sequence","Tag":"(0074,1002)","Attribute Description":"Information about work progress for the Procedure Step. Zero or one Item shall be included in this Sequence."},{"Attribute Name":">Procedure Step Progress","Tag":"(0074,1004)","Attribute Description":"A numerical indicator of progress expressed as percentage complete.  This is primarily for status rendering (e.g., progress bar). The percentage is not necessarily an accurate indication of total time."},{"Attribute Name":">Procedure Step Progress Description","Tag":"(0074,1006)","Attribute Description":"A textual description of progress.  For example, it might contain \"Annealing complete\"."},{"Attribute Name":">Procedure Step Communications URI Sequence","Tag":"(0074,1008)","Attribute Description":"Contact Information to communicate with performers of the Procedure Step. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">>Contact URI","Tag":"(0074,100A)","Attribute Description":"URI to communicate with performer of the procedure in progress. Any URI (telephone number, URL, etc.) is permitted.  The VR of this attribute has changed from UT to UR."},{"Attribute Name":">>Contact Display Name","Tag":"(0074,100c)","Attribute Description":"Name of the person, department or organization to contact for more information about the performance of the Procedure Step."},{"Attribute Name":">Procedure Step Cancellation DateTime","Tag":"(0040,4052)","Attribute Description":"Date and Time at which the procedure step was discontinued."},{"Attribute Name":">Reason For Cancellation","Tag":"(0074,1238)","Attribute Description":"A textual description of the reason a procedure step was discontinued."},{"Attribute Name":">Procedure Step Discontinuation Reason Code Sequence","Tag":"(0074,100e)","Attribute Description":"Coded Reason(s) for Discontinuing the Procedure Step. Zero or more Items shall be included in this Sequence."},{"Attribute Name":">>Include","Tag":"Defined ."}];