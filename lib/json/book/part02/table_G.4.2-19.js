datab = [{},{"Service Status":"Refused","Further Meaning":"Out of Resources","Status Codes":"A700","Behavior":"Current query is terminated; remaining queries continue"},{"Service Status":"Error","Further Meaning":"Identifier does not match SOP Class","Status Codes":"A900","Behavior":"Current query is terminated; remaining queries continue"},{"Service Status":"","Further Meaning":"Unable to process","Status Codes":"Cxxx","Behavior":"Current query is terminated; remaining queries continue"},{"Service Status":"Cancel","Further Meaning":"Matching terminated due to Cancel request","Status Codes":"FE00","Behavior":"Ignored (should never occur, since cancels never issued)"},{"Service Status":"Success","Further Meaning":"Matching is complete - No final Identifier is supplied","Status Codes":"0000","Behavior":"Current query is terminated. If one or more Pending responses were received, logic is applied to trigger Retrieve of best suited Hanging Protocol Instances; remaining queries continue"},{"Service Status":"Pending","Further Meaning":"Matches are continuing - Current Match is supplied and any Optional Keys were supported in the same manner as Required Keys","Status Codes":"FF00","Behavior":"Identifier stored temporarily for use in setting up Retrieve."},{"Service Status":"","Further Meaning":"Matches are continuing - Warning that one or more Optional Keys were not supported for existence and/or matching for this Identifier","Status Codes":"FF01","Behavior":"Identifier stored temporarily for use in setting up Retrieve"}];