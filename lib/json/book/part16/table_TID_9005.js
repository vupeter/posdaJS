datab = [{},{"":"1","NL":"","Rel with Parent":"","VT":"CONTAINER","Concept Name":"EV (111515, DCM, \"Relevant Risk Factors\")","VM":"1","Req Type":"M","Condition":"","Value Set Constraint":""},{"":"2","NL":">","Rel with Parent":"CONTAINS","VT":"CODE","Concept Name":"EV (F-01500, SRT, \"Risk factor\")","VM":"1-n","Req Type":"M","Condition":"","Value Set Constraint":"$RiskList"},{"":"3","NL":">>","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (111530, DCM, \"Risk Factor modifier\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"EV (G-0002, SRT, \"Family history of\")"},{"":"4","NL":">>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"EV (18185-9, LN, \"Gestational Age\")","VM":"1","Req Type":"UC","Condition":"IFF value of row 2 is (G-0305, SRT, \"History of - premature delivery\")","Value Set Constraint":""},{"":"5","NL":">>","Rel with Parent":"HAS OBS CONTEXT","VT":"CODE","Concept Name":"EV (111534, DCM, \"Role of person reporting\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"D"},{"":"6","NL":">>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"EV (111538, DCM, \"Age at Occurrence\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"UNITS = EV (a, UCUM, \"Year\")"},{"":"7","NL":">>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"EV (G-7290, SRT, \"Duration\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"UNITS = D"},{"":"8","NL":">>","Rel with Parent":"HAS PROPERTIES","VT":"TEXT","Concept Name":"EV (121106, DCM, \"Comment\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":""},{"":"9","NL":">>","Rel with Parent":"INFERRED FROM","VT":"CODE","Concept Name":"EV (111537, DCM, \"Family Member with Risk Factor\")","VM":"1-n","Req Type":"U","Condition":"","Value Set Constraint":"$FamilyList"},{"":"10","NL":">>>","Rel with Parent":"HAS PROPERTIES","VT":"NUM","Concept Name":"EV (111538, DCM, \"Age at Occurrence\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"UNITS = EV (a, UCUM, \"Year\")"},{"":"11","NL":">>>","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (111539, DCM, \"Menopausal phase\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"D"},{"":"12","NL":">>>","Rel with Parent":"HAS CONCEPT MOD","VT":"CODE","Concept Name":"EV (111540, DCM, \"Side of Family\")","VM":"1","Req Type":"U","Condition":"","Value Set Constraint":"D"}];