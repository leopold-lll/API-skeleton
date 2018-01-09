const Db = require("../models/db.js");
const assignment = require("../models/assignment.js");

//assignment

exports.getAllAssignments = function(req, res) {
	console.log("\nfunzione getAllAssignments");
	var all = Db.getAll();
	if(req.query.studentid !== undefined){
		var id = req.query.studentid;
		var list = [];
		for(i = 0; i < all.length; i++){
			if(all[i]['studentId'] == id){
				list.push(all[i]);
			}
		}

		if(list.length==0){
			return res.json({message: 'Student Id (178127) non trovato'});
		}else{
			return res.json(list);
		}
	} else {
		return res.json(all);
	}
};

exports.sendAssignmentById = function (req, res) {
	console.log("\nfunzione sendAssignmentById");
	var new_id = Db.length();
	var new_obj;

	assignmentId = new_id;
	studentId = req.body.studentId;
	assignmentType = req.body.assignment_type;
	assignmentContent= req.body.assignment_content;
 	new_obj = new assignment(assignmentId, studentId, assignmentType, assignmentContent);

 	console.log("add NODE: " + JSON.stringify(new_obj));
	Db.insert(new_obj);
	return res.json({message: 'Assignment aggiunto'});
};

//assignment/:id

exports.getAssignmentById = function(req, res) {
	console.log("\nfunzione getAssignmentById");
	var id = req.params.id;
	var element = Db.getById(id);
	if (element !== undefined){
		return res.json(element);
	} else {
		return res.json({message: 'Assignment non trovato'});
	}
};

exports.removeAssignmentById = function(req, res) {
	console.log("\nfunzione removeAssignmentById");
	var id = req.params.id;
	var element = Db.getById(id);
	if (element !== undefined){
		Db.removeById(id);
		return res.json({message: 'Assignment ' + id + ' eliminato'});
	} else {
		return res.json({message: 'Assignment non trovato'});
	}
};

exports.updateAssignmentById = function(req, res) {	
	console.log("\nfunzione updateAssignmentById");
	var id = req.params.id;
	var found = Db.getById(id);
	if (found !== undefined){
		studentId = req.body.studentId;
		assignmentType = req.body.assignment_type;
		assignmentContent= req.body.assignment_content;
		obj = new assignment(id, studentId, assignmentType, assignmentContent);
		Db.updateById(id, obj);
		return res.json({message: 'Assignment ' + id + ' aggiornato'});
	} else {
		return res.json({message: 'Assignment non trovato'});
	}
};