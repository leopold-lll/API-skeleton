//const baseURL = "http://localhost:3000/"
const baseURL = "https://tentativo178127.herokuapp.com/"
const fetch = require("node-fetch")

//////////////////// _-FUNZIONI-_ ///////////////////////////////////////////////////////

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
        expect(res.json()).resolves.toContainEqual(assignment0);//, assignement1, assignement2
    })
});

it("modifico un assignment", done => { //work
    fetch(
        baseURL+"assignment/0",
        {
            method: 'PUT',
            body: JSON.stringify(assignment1_noID),
            headers: {"Content-Type": "application/json"},
            credentials: "same-origin"
        }
    ).
    then(function(res) {
        done();
        expect(res.json()).resolves.toEqual(aggiornato);
    })
});

it("elimino uno specifico assignment", done => { //work
    fetch(
        baseURL+"assignment/0",
        {
            method: 'DELETE'
        }
    ).
    then(function(res) {
        done();
        expect(res).toHaveProperty('status', 200);
    })
});

//////////////////// _-COSTANTI-_ ///////////////////////////////////////////////////////

const aggiornato = {"message":"Assignment 0 aggiornato"};

const assignment0_noID = {
    "studentId":"42",
    "assignmentType":"risposta",
    "assignmentContent":"ciao mondo"
}
const assignment0_ID = {
    "assignmentId":0,
}
var assignment0 = JSON.parse( (JSON.stringify(assignment0_ID) + JSON.stringify(assignment0_noID)).replace(/}{/g,",") )

const assignment1_noID = {
    "studentId":"33",
    "assignmentType":"compito a casa",
    "assignmentContent":"hello world"
}