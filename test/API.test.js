const baseURL = "https://tentativo178127.herokuapp.com/"
const fetch = require("node-fetch")

it("cerco gli assignment di un utente inesistente", done => { //work
    fetch(
        baseURL+"assignment?studentid=666",
        {
            method: 'GET'
        }
    ).
    then(function(res) {
        done();
        expect(res.json()).resolves.toEqual(student_not_found);
    })
});

it("cerco l'assignment con id=0, e ne verifico le proprietà", done => { //work
    fetch(
        baseURL+"assignment/0",
        {
            method: 'GET'
        }
    )
    .then(function(res) {
        done();
        expect(res.json()).resolves.objectContaining({
            "studentId": expect.any(String),
            "assignmentId": expect.any(Number),
            "assignmentType": expect.any(String),
            "assignmentContent": expect.any(String)
            //,"loc": expect.any(Array)
        });
    })
});

/*it("inserisco un nuovo assignment", done => { //work
    fetch(
        baseURL+"assignment",
        {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: JSON.stringify(assignment1_noID)
        }
    ).
    then(function(res) {
        done();
        expect(res).toHaveProperty('status', 200);
    })
});

/*
it("cerco tutti gli assignment verifico se ne esiste uno", done => { //work
    fetch(
        baseURL+"assignment",
        {
            method: 'GET'
        }
    ).
    then(function(res) {
        done();
        //potrei verificare anche se ho molti altri assignement
        expect(res.json()).resolves.toContainEqual(assignment0, assignement1);
    })
});*/

//////////////////// _COSTANTI_ ///////////////////////////////////////////////////////

const student_not_found = {"message":"Student Id non trovato"};
const assignment0 = {
    "studentId":"42",
    "assignmentId":0,
    "assignmentType":"risposta",
    "assignmentContent":"ciao mondo"
}

const assignment1_noID = {
    "studentId":"33",
    "assignmentType":"compito a casa",
    "assignmentContent":"hello wolrd"
}
const assignment1_ID = {
    "assignmentId":1
}
const assignment1 = {
    json1: JSON.stringify(assignment1_noID),
    json2: JSON.stringify(assignment1_ID)
};