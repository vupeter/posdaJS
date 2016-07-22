datab = [{},{"":"1","NL":"","Rel with Parent":"","VT":"CONTAINER","Concept Name":"EV (121070, DCM, \"Findings\")","VM":"1","Req Type":"M","Condition":"","Value Set Constraint":""},{"":"2","NL":">","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (121058, DCM, \"Procedure reported\")","VM":"1","Req Type":"M","Condition":"","Value Set Constraint":"$Procedure"},{"":"3","NL":">","Rel with Parent":"HAS ACQ CONTEXT","VT":"CODE","Concept Name":"EV (18139-6, LN, \"Stage\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"B"},{"":"4","NL":">","Rel with Parent":"CONTAINS","VT":"IMAGE","Concept Name":"EV (125201, DCM, \"Illustration of Finding\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"5","NL":">","Rel with Parent":"CONTAINS","VT":"TEXT","Concept Name":"EV (18118-0, LN, \"LV Wall Motion Segmental Findings\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"6","NL":">","Rel with Parent":"CONTAINS","VT":"NUM","Concept Name":"DT (125202, DCM, \"LV Wall Motion Score Index\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"7","NL":">>","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (G-E048, SRT, \"Assessment Scale\")","VM":"1","Req Type":"M","Condition":"","Value Set Constraint":"B"},{"":"8","NL":">","Rel with Parent":"CONTAINS","VT":"CONTAINER","Concept Name":"EV (121070, DCM, \"Findings\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"9","NL":">>","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (G-C0E3, SRT, \"Finding Site\")","VM":"1","Req Type":"M","Condition":"","Value Set Constraint":"DT (T-D0772, SRT, \"Myocardial Wall\")"},{"":"10","NL":">>","Rel with Parent":"CONTAINS","VT":"CODE","Concept Name":"EV (18179-2, LN, \"Wall Segment\")","VM":"1-n","Req Type":"M","Condition":"","Value Set Constraint":"B"},{"":"11","NL":">>>","Rel with Parent":"HAS PROPERTIES","VT":"CODE","Concept Name":"EV (F-32050, SRT, \"Cardiac Wall Motion\")","VM":"1","Req Type":"MC","Condition":"IF row 12 is absent","Value Set Constraint":"D"},{"":"12","NL":">>>","Rel with Parent":"HAS PROPERTIES","VT":"CODE","Concept Name":"EV (G-C504, SRT, \"Associated Morphology\")","VM":"1","Req Type":"MC","Condition":"IF row 11 is absent","Value Set Constraint":"D"},{"":"13","NL":">>>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"DT (G-C1E3, SRT, \"Score\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"14","NL":">>>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"EV (122624, DCM, \"Wall Thickness Ratio end-systolic to end-diastolic\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"UNITS = DT (%, UCUM, \"%\")"}];