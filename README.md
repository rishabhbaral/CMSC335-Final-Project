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
    
**11/27**
- I've made considerable changes to MongoDB.
- When the user wants to proceed, the data is added to the database. Otherwise, the user is brought back to the registration page, and the data that the user just entered will NOT be added to the database.
- I've also added a feature that empties the database. This will be helpful especially when we want to debug the Mongo implementation.

**11/28**
- Ths user can now update his password in case he forgot it. The Mongo collection shows the update.
- The user can now check their local weather, will need to be decided later whether we want to add multi-city or not.

**11/29**
- Removed access to homepage from welcome page (will be reimplemented with logout button)
- added favicon to welcome page (need to see whats wrong) and changed page title
    - I've also been unable to get it to work, but here's what I've tried so far:
        - Tried making the favicon-16x16 and favicon-32x32 files of type ico.
        - Tried copying and pasting them outside of the folder.
        - At this point, I'm honestly unsure of what else there is to do. I've tried looking up countless resources online with respect to this issue, and based on what I've read and tried out, it looks like it should work.
        - Perhaps we need to adjust the size? But if it's 16x16 or 32x32, that should be fine.

**Kevin's comments**
- At this point, I think I've done my part when it comes to MongoDB.
    - The DB can now add new users, allow users to update their passwords.
    - The DB also checks if the data is valid. See the Completed section below for more details.

**Features to add**
- We also want to create another DB where the user can add cities they want to access.
    - Create another Mongo collection.
    - The info in Welcome.ejs must be stored in a form if we want the submit button to have functionality.
    - What kind of info should this Mongo collection have?
    - Rishabh will handle the weather API stuff.

**Completed**
- Check for the login info entered. 
    - If the username already exists in the system and the user wants to create a new account, inform him that his username already exists.
    - On the other hand, if the user wants to log in and the username doesn't currently exist in the system, inform him that he needs to create an account first.
    - For "Confirm Password", make sure the 2 passwords match.

**Recent fixes**
- To go to the Welcome page, HOME is now replaced by WELCOME
- When the user is directed to the WELCOME page, instead of the Mongo username, the username of the user who just logged in is printed to the screen.