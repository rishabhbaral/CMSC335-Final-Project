# CMSC335-Final-Project
Final Project for CMSC335: JS based Weather App (Name TBD)
Requirements:
1. Design and implement a Node.js application.
2. Your application must rely on Node.js and Express.
3. Your application must rely on MongoDB.
4. Your application must have at least one form where users provide some data.
5. Your application must use some CSS.

**Functionality**
1. Start the application with the following command: node weatherApp.js
2. You will automatically be directed to the Homepage.ejs page, where you can sign in or create a new account.
3. If you choose to create a new account, you will be directed to the AccountCreation.ejs page, where you will be asked to enter a username, password, and email address.
4. To confirm your login, you will be directed to the AccountSignup.ejs page, where you wil be asked to confirm one of the following:
    - have your information be sent to the database
    - change some of your login information

**templates Folder**

**AccountCreation.ejs**
1. Designed for users new to the site.
2. To sign up, each user will be prompted to create an account, where they provide a username, password, and email address.
3. Users will also be asked to confirm their password.

**AccountSignup.ejs**
1. Displays the information inputted by the user (Username and Password)
2. Users are given the following options:
    - Send their information to the database.
    - Change some of their login information.

**Features to add**
- How are we going to be keeping track of users who've already created accounts? MongoDB, cookies?
- Need to figure out MongoDB migration (User info --> database)
- Need to figure out dynamic port number for forms (can't make server constant)

**Rishabh's comments**
- we need to basically do the following: 
    1. we need to have the user sign up (new user)
    2. once they sign up and send info to database, return to homepage
    3. need to link login with welcome page
    4. implement welcome page to be the display page for weather --> may need another collection in DB (store/retrieve)

**Kevin's comments**
    
**11/27**
- I've made considerable changes to MongoDB.
- When the user wants to proceed, the data is added to the database. Otherwise, the user is brought back to the registration page, and the data that the user just entered will NOT be added to the database.
- I've also added a feature that empties the database. This will be helpful especially when we want to debug the Mongo implementation.

**11/28**
- Ths user can now update his password in case he forgot it. The Mongo collection shows the update.

**To do**