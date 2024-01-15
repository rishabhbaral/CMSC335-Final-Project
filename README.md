# App Name: Weather Beetle
# Collaborator Names: Rishabh Baral, Kevin Liao, Leo Suber

**Functionality**

For an overview of the functionality of this app, please see the following video: [Application Video](https://www.youtube.com/watch?v=VXZM6pHeZJA)
1. Navigate to the following URL: https://weatherbeetle.onrender.com/
2. You will automatically be directed to the Homepage.ejs page, where you can sign in or create a new account.
3. If you choose to create a new account, you will be directed to the AccountCreation.ejs page, where you will be asked to enter a username, password, and email address.
4. To confirm your login, you will be directed to the AccountSignup.ejs page, where you wil be asked to confirm one of the following:
    - have your information be sent to the database
    - change some of your login information
5. On the Homepage page, if you choose to log in, you will be directed to a page that informs you that your login was successful.
    - Otherwise, the data you provided was incorrect, and you will be redirected to the Homepage.
6. If your login was successful, you will be asked to enter a city, the weather of which you would like to know.
7. Afterwards, the city and corresponding country will be displayed, as well as an image that portrays the weather in the city at the time (e.g. rain, snow, fog).

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

**confirmNewPassword.ejs**
- Informs the user that his password has been reset.

**Homepage.ejs**
- The user can either log in to his account or create a new one.

**loginSuccess.ejs**
- Informs the user that he has logged in.

**passwordIncorrect.ejs**
- Informs the user that the login was unsuccessful due to an incorrect password.

**passwordReset.ejs**
- The user resets his password.

**UserAlreadyExists.ejs**
- Cannot create a new account, since one already exists with the information given.

**UserNotFound.ejs**
- Login value, since no user was found with the given information.

**Welcome.ejs**
- The user's login was successful beforehand.
- The user is asked to enter a city.
- Afterwards, information about the city's weather at the time is displayed.

**1/15/2024**
- Adjust the viewport in the Homepage.ejs to make the page fit on amaller screens.
- Collaborate on additional features to add.