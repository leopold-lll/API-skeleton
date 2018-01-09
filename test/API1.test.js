//const baseURL = "http://localhost:3000/"
const baseURL = "https://tentativo178127.herokuapp.com/"
const fetch = require("node-fetch")

it("drop del database", done => { //work
    fetch(
        baseURL+"assignment",
        {
            method: 'DELETE'
        }
    ).
    then(function(res) {
        done();
        expect(res).toHaveProperty('status', 200);//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    })
});

it("cerco gli assignment di un utente inesistente", done => { //work
    fetch(
        baseURL+"assignment?studentid=666",
        {
            method: 'GET'
        }
    ).
    then(function(res) {
        done();
        expect(res.json()).resolves.toEqual(student_not_found);//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    })
});

it("inserisco un nuovo assignment", done => { //work
    fetch(
        baseURL+"assignment",
        {
            method: 'POST',
            body: JSON.stringify(assignment0_noID),
            headers: {"Content-Type": "application/json"}
        }
    ).
    then(function(res) {
        done();
        expect(res).toHaveProperty('status', 200);
    })
});

it("cerco l'assignment con id=0, e ne verifico le proprietà", done => { //work
    fetch(
        baseURL+"assignment/0",
        {
            method: 'GET'
        }
    )
    .then(function(res) {//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><
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

//////////////////// _-COSTANTI-_ ///////////////////////////////////////////////////////

const student_not_found = {"message":"Student Id non trovato"};

const assignment0_noID = {
    "studentId":"42",
    "assignmentType":"risposta",
    "assignmentContent":"ciao mondo"
}
