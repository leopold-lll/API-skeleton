### Nodejs skeleton API
Sample application to demonstrate how to **develop** an **API service**

### Steps to start the application
- git clone https://github.com/leopold-lll/API-skeleton.git
- npm install
- node start.js

### HOW TO USE API ASSIGNMENT
***Parameters*** (*required*)
- student ID
- assignment ID
- assignment type
- assignment-content

***URLs***
- consegnare un assignment 							(POST - /assignment)
- elimina tutti gli assignment 						(DELETE  - /assignment)
- leggere tutti gli assignment 						(GET  - /assignment)
- leggere tutti gli assignment di uno student ID  	(GET  - /assignment?studentid=:id)

- leggere uno specifico assignment 					(GET  - /assignment/:id)
- modificare assignment 							(PUT  - /assignment/:id)
- rimuovere assignment 								(DELETE - /assignment/:id)

***More details***
Read Apiary documentation in https://assignmentapi1.docs.apiary.io/

***Waffle -> user story***
https://waffle.io/leopold-lll/API-skeleton
