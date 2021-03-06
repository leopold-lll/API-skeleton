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

			return res.json({message: 'Student Id non trovato'});
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
	assignmentType = req.body.assignmentType;
	assignmentContent= req.body.assignmentContent;
 	new_obj = new assignment(assignmentId, studentId, assignmentType, assignmentContent);

 	console.log("add NODE: " + JSON.stringify(new_obj));
	Db.insert(new_obj);
	return res.sendStatus(200);
	//return res.json({message: 'Assignment aggiunto'});
};

//assignment/:id

exports.getAssignmentById = function(req, res) {
	console.log("\nfunzione getAssignmentById");
	var id = req.params.id;
	var element = Db.getById(id);
	if (element !== undefined){
		element = [element]
		return res.json(element);
	} else {
		return res.sendStatus(400);
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
	console.log("id: " + id);
	var found = Db.getById(id);
	console.log("A");
	if (found !== undefined){
	console.log("b");
		studentId = req.body.studentId;
		assignmentType = req.body.assignmentType;
		assignmentContent= req.body.assignmentContent;
		obj = new assignment(id, studentId, assignmentType, assignmentContent);
		console.log(JSON.stringify(obj))
		Db.updateById(id, obj);
		return res.json({message: 'Assignment ' + id + ' aggiornato'});
	} else {
	console.log("c");
		return res.json({message: 'Assignment non trovato'});
	}
};

exports.deleteAllAssignment = function(req, res) {
	console.log("\nfunzione deleteAllAssignment");
	Db.drop();
	return res.sendStatus(200);
};