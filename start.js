/*
    Project: Sample API for manage student assignments
    Author: stefano.leonardi-2@studenti.unitn.it
*/

const express   = require("express"),
	app         = express(),
	bodyParser  = require("body-parser"),
	assignmentRouter  = express.Router(),
	assignmentRoutes  = require("./route/assignmentRoutes.js")


// middleware route to support CORS and preflighted requests
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, DELETE');
    return res.status(200).json({});
  }
next();
});


// Body-parser (To parse the request body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* 
    Add to avoid cross origin access.
    Access-Control-Allow-Origin is set to '*' so that server REST APIs are accessible for all the domains.
    By setting domain name to some value, the API access can be restricted to only the mentioned domain. 
    Eg, Access-Control-Allow-Origin: 'mywebsite.com'
*/
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});

// routig prefix
app.use("/assignment", assignmentRouter);

// routing
assignmentRouter.route('/')
  .get(assignmentRoutes.getAllAssignments)
  .post(assignmentRoutes.sendAssignmentById)
  .delete(assignmentRoutes.deleteAllAssignment);
  
assignmentRouter.route('/:id')
  .get(assignmentRoutes.getAssignmentById)
  .put(assignmentRoutes.updateAssignmentById)
  .delete(assignmentRoutes.removeAssignmentById);
  

// pagine interne
app.get("/", function(req, res){
  console.log("Pagina principale");
  res.sendFile(__dirname+"/front-end/index.html");
})

app.get("/pippo.html", function(req, res){
  console.log("Pippo");
  res.sendFile(__dirname+"/front-end/pippo.html");
})


// Set the port number
app.set("port", process.env.PORT || 3000);

// Start the service
app.listen(app.get("port"), function(){
  console.log("Sample node server Started @ " + new Date() + " Running on port no: " + app.get("port"));
});

