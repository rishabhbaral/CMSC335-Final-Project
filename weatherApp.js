const http = require("http"); //Using HTTP to make server
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

/* MONGO SET UP */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, 'credentialsDontPost/.env') })

/* Username and Password of MongoDB Collection */
const username = process.env.MONGO_DB_USERNAME;
const password = process.env.MONGO_DB_PASSWORD;

/* Variables or MongoDB collection */
let currName = "";
let currEmail = "";
let currPassword = "";

/* Our database and collection */
const databaseAndCollection = {db: "ourData", collection: "weatherData"};
const { MongoClient, ServerApiVersion } = require('mongodb');
async function main() {
  const uri = `mongodb+srv://${username}:${password}@cluster0.vyuzvd9.mongodb.net/`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

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

/* Initializes request.body with post information */ 
app.use(bodyParser.urlencoded({extended:false}));

app.post("/AccountSignup", async (request, response) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.vyuzvd9.mongodb.net/`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    //Use MongoDB to store the data.
    let {username, email, password} = request.body;
    //Updates global variables.
    currName = username;
    currEmail = email;
    currPassword = password;
    //Stores data in form of JSON.
    let user = {userName: username, userEmail: email, 
                      userPassword: password};

    response.render("AccountSignup.ejs", {userid: username, emailaddr: email});
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

app.get("/sendInfo", async (request, response) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.vyuzvd9.mongodb.net/`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    let user = {userName: currName, userEmail: currEmail, 
                      userPassword: currPassword};
    await insertUser(client, databaseAndCollection, user);

    response.render("Homepage.ejs");
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

async function insertUser(client, databaseAndCollection, user) {
  const result = await client.db(databaseAndCollection.db).collection(databaseAndCollection.collection).insertOne(user);
}

app.get("/PasswordReset", (request, response) => {
    response.render("passwordReset.ejs");
});

/* Goes back to Homepage.ejs. */
app.get("/Homepage", (request, response) => {
    response.render("Homepage.ejs");
});

/* Removes all data in current database. */
app.get("/clearCollection", async (request, response) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.vyuzvd9.mongodb.net/`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  try {
    await clearCollection(client, databaseAndCollection);
    response.render("Homepage.ejs"); //stays on default page
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
});

async function clearCollection(client, databaseAndCollection) {
  const result = await client.db(databaseAndCollection.db)
                             .collection(databaseAndCollection.collection)
                             .deleteMany({}); //deletes all content
}

main().catch(console.error);

storeServer.listen(portNumber);