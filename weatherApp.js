const http = require("http"); //Using HTTP to make server
const path = require("path"); //using path to access current working directory (equiv of pwd)
const express = require("express"); /* Accessing express module */
const ejs = require("ejs");
const fs = require("fs");
const bodyParser = require("body-parser"); /* To handle post parameters */
const app = express(); /* app is a request handler function */
const portNumber = 5000; /* Fix the port that the server will use*/
const httpSuccessStatus = 200;/*Set the Server to be always working*/

//Set the encoding for the text that will be rendered (UTF-8)
process.stdin.setEncoding("utf8");

//indicate that the server is live
const storeServer = http.createServer(app);
console.log(`Web server is running at http://localhost:${portNumber}`);

/* directory where templates will reside */
app.set("views", path.resolve(__dirname, "templates"));

/* view/templating engine */
app.set("view engine", "ejs");

//Formatting the mainpage response
app.get("/", (request, response) => {
    response.render("Homepage.ejs");
});

app.get("/CreateAccount", (request, response) => {
    response.render("AccountCreation.ejs");
});

app.use(bodyParser.urlencoded({extended:false}));

app.post("/AccountSignup", (request, response) => {
    let {user, email} = request.body;
    response.render("AccountSignup.ejs", {username: user, emailaddr: email});
});

app.get("/PasswordReset", (request, response) => {
    response.render("passwordReset.ejs");
});

storeServer.listen(portNumber);