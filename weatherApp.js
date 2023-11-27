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
//Define the prompt that the CLI will use
const prompt = "Type stop to shutdown the server: ";
//show the prompt on the screen
process.stdout.write(prompt);

//Now we see what the user wants
process.stdin.on("readable", function () {
  let dataInput = process.stdin.read();
  if (dataInput !== null) {
    let command = dataInput.trim();
    if (command === "stop") {//Done with application (applicant) or Admin work (Administrator). Close Server.
      process.stdout.write("Shutting Down the Server\n");
      process.exit(0);
    } else{//Invalid option chosen
      process.stdout.write(`Invalid Command: ${command}\n`);
    }
    //the two lines below this will be for repeating the command
    process.stdout.write(prompt);
    process.stdin.resume();
  }
})

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
    let {username, email} = request.body;
    response.render("AccountSignup.ejs", {userid: username, emailaddr: email});
});

app.get("/PasswordReset", (request, response) => {
    response.render("passwordReset.ejs");
});

/* Goes back to Homepage.ejs */
app.get("/Homepage", (request, response) => {
    response.render("Homepage.ejs");
});

storeServer.listen(portNumber);