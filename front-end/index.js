// svuoto le text area al refresh della pagina
function init() {
    document.getElementById("get1").value = "";
    document.getElementById("get2").value = "";
    document.getElementById("get2a").value = "0";
    document.getElementById("post1").value = "";
    document.getElementById("post1a").value = "33";
    document.getElementById("post1b").value = "compito a casa";
    document.getElementById("post1c").value = "hello world";
    document.getElementById("put1").value = "";
    document.getElementById("put1a").value = "0";
    document.getElementById("put1b").value = "123";
    document.getElementById("put1c").value = "esame";
    document.getElementById("put1d").value = "come va??";
    document.getElementById("delete1").value = "";
    document.getElementById("delete2").value = "";
    document.getElementById("delete2a").value = "0";
}
window.onload = init;

///////////////////// _COSTANTI_ ///////////////////////////////////////
const base_path = "https://tentativo178127.herokuapp.com/assignment/"
const mess_not_found = {"message":"Assignment non trovato"}

//////////////////// _FUNZIONI_ /////////////////////////////////////////
function callGET(id) {
	//alert("invio GET")
	fetch(base_path,
		{method: 'GET'}
    ).
    then(function(res) {
    	return res.json()
    })
    .then((data) =>{
    	//alert(JSON.stringify(data))
        var str = "dati:\t";
        if(data.length==0){
            str = "noone assignment"
        } else{
            data.forEach((a) => {//a[ssignment]
                str += "\nsID: " + a.studentId + 
                	"\tassID: " + a.assignmentId + 
                	"\tass Type: " + a.assignmentType + 
                	"\tass Content: " + a.assignmentContent;
            });
        }
        document.getElementById(id).value = str;
	})//.catch((err)=>console.log(err))
}

function callGETone(id) {
    //alert("invio GETone")
    fetch(base_path + document.getElementById("get2a").value + "/",
        {method: 'GET'}
    ).
    then(function(res) {
        if(res.status === 400){
            return true
        } else{
            return res.json()
        }
    })
    .then((data) =>{
        var str = "dato:\t";
        if(data==true){
            str = "assignment non trovato";
        } else{
            str += "\nsID: " + data[0].studentId + 
                "\tassID: " + data[0].assignmentId + 
                "\tass Type: " + data[0].assignmentType + 
                "\tass Content: " + data[0].assignmentContent;
        }
        document.getElementById(id).value = str;
    })//.catch((err)=>console.log(err))
}

function callPOST(id) {
	//alert("invio POST")

    // creo json da inviare
    const assignment0_noID = {
        "studentId":document.getElementById("post1a").value,
        "assignmentType":document.getElementById("post1b").value,
        "assignmentContent":document.getElementById("post1c").value
    }

	fetch(base_path,{
            method: 'POST',
            body: JSON.stringify(assignment0_noID),
            headers: {"Content-Type": "application/json"}
        }
    ).
    then(function(res) {
    	return res
    })
    .then((data) =>{
    	var str;
    	if(data.status === 200){
    		str = "ricevuto 200 ok, assignment aggiunto con successo"
    	} else{
    		str = "assignment non aggiunto"
    	}
        document.getElementById(id).value = str;
	})//.catch((err)=>console.log(err))
}

function callPUT(id) {
    //alert("invio PUT")

    // creo json da inviare
    const assignment1_noID = {
        "studentId":document.getElementById("put1b").value,
        "assignmentType":document.getElementById("put1c").value,
        "assignmentContent":document.getElementById("put1d").value
    }

    fetch(base_path + document.getElementById("put1a").value + "/",{
            method: 'PUT',
            body: JSON.stringify(assignment1_noID),
            headers: {"Content-Type": "application/json"}
        }
    ).
    then(function(res) {

        return res.json()
    })
    .then((data) =>{
        document.getElementById(id).value = JSON.stringify(data.message);
    })//.catch((err)=>console.log(err))
}

function callDELETE(id) {
	//alert("invio DELETE")
    fetch(base_path,
        {method: 'DELETE'}
    ).
    then(function(res) {
        return res
    })
    .then((data) =>{
        var str;
        if(data.ok){ // equivale a data.status === 200
            str = "ricevuto 200 ok, tutti gli assignment eliminati con successo"
        } else{
            str = "assignment non eliminati"
        }
        document.getElementById(id).value = str;
    })//.catch((err)=>console.log(err))*/
}

function callDELETEone(id) {
    //alert("invio DELETEone")
    fetch(
        base_path + document.getElementById("delete2a").value + "/",
        {method: 'DELETE'}
    ).
    then(function(res) {
        return res.json()
    })
    .then((data) =>{
        document.getElementById(id).value = JSON.stringify(data.message);
    })//.catch((err)=>console.log(err))*/
}