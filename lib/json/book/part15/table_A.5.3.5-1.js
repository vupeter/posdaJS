datab = [{},{"Real World Entities":"Event","Field Name":"EventID","Opt.":"M","Value Constraints":"EV (110107, DCM, \"Import\")"},{"Real World Entities":"EventActionCode","Field Name":"M","Opt.":"Shall be: C = Create"},{"Real World Entities":"EventDateTime","Field Name":"M","Opt.":"not specialized"},{"Real World Entities":"EventOutcomeIndicator","Field Name":"M","Opt.":"not specialized"},{"Real World Entities":"EventTypeCode","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Active Participant: User or Process Importing the data (1..n)","Field Name":"UserID","Opt.":"M","Value Constraints":"The identity of the local user or process importing the data."},{"Real World Entities":"AlternativeUserID","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"UserName","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"UserIsRequestor","Field Name":"M","Opt.":"See"},{"Real World Entities":"RoleIDCode","Field Name":"M","Opt.":"EV (110152, DCM, \"Destination Role ID\")"},{"Real World Entities":"NetworkAccessPointTypeCode","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"NetworkAccessPointID","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Active Participant: Source Media (1)","Field Name":"UserID","Opt.":"M","Value Constraints":"See"},{"Real World Entities":"AlternativeUserID","Field Name":"U","Opt.":"See"},{"Real World Entities":"UserName","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"UserIsRequestor","Field Name":"M","Opt.":"Shall be FALSE"},{"Real World Entities":"RoleIDCode","Field Name":"M","Opt.":"EV (110155, DCM, \"Source Media\")"},{"Real World Entities":"NetworkAccessPointTypeCode","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"NetworkAccessPointID","Field Name":"MC","Opt.":"Shall be present if Net Access Point Type Code is present. Shall use fields as specified in RFC3881."},{"Real World Entities":"MediaIdentifier","Field Name":"M","Opt.":"Volume ID, URI, or other identifier for media"},{"Real World Entities":"MediaType","Field Name":"M","Opt.":"Values selected from DCID (405)"},{"Real World Entities":"Active Participant: Source (0..n)","Field Name":"UserID","Opt.":"M","Value Constraints":"See"},{"Real World Entities":"AlternativeUserID","Field Name":"U","Opt.":"See"},{"Real World Entities":"UserName","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"UserIsRequestor","Field Name":"M","Opt.":"See"},{"Real World Entities":"RoleIDCode","Field Name":"M","Opt.":"EV (110153, DCM, \"Source Role ID\")"},{"Real World Entities":"NetworkAccessPointTypeCode","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"NetworkAccessPointID","Field Name":"MC","Opt.":"Shall be present if Net Access Point Type Code is present."},{"Real World Entities":"Participating Object: Studies (0..N)","Field Name":"ParticipantObjectTypeCode","Opt.":"M","Value Constraints":"Shall be: 2 = system"},{"Real World Entities":"ParticipantObjectTypeCodeRole","Field Name":"M","Opt.":"Shall be: 3 = report"},{"Real World Entities":"ParticipantObjectDataLifeCycle","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectIDTypeCode","Field Name":"M","Opt.":"EV (110180, DCM, \"Study Instance UID\")"},{"Real World Entities":"ParticipantObjectSensitivity","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectID","Field Name":"M","Opt.":"The Study Instance UID"},{"Real World Entities":"ParticipantObjectName","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectQuery","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectDetail","Field Name":"U","Opt.":"Not specialized"},{"Real World Entities":"ParticipantObjectDescription","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"SOPClass","Field Name":"MC","Opt.":"See"},{"Real World Entities":"Accession","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"NumberOfInstances","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Instances","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Encrypted","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Anonymized","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"Participating Object: Patients (1..N)","Field Name":"ParticipantObjectTypeCode","Opt.":"M","Value Constraints":"Shall be: 1 = person"},{"Real World Entities":"ParticipantObjectTypeCodeRole","Field Name":"M","Opt.":"Shall be: 1 = patient"},{"Real World Entities":"ParticipantObjectDataLifeCycle","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectIDTypeCode","Field Name":"M","Opt.":"Shall be: 2 = patient ID"},{"Real World Entities":"ParticipantObjectSensitivity","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectID","Field Name":"M","Opt.":"The patient ID"},{"Real World Entities":"ParticipantObjectName","Field Name":"U","Opt.":"The patient name"},{"Real World Entities":"ParticipantObjectQuery","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectDetail","Field Name":"U","Opt.":"not specialized"},{"Real World Entities":"ParticipantObjectDescription","Field Name":"U","Opt.":"not specialized"}];