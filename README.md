# Get User Feedback

## Description

_Duration: 25 Hours_

This is an application that will collect feedback from users. The application has a form with 4 questions. The form is broken up into individual parts and the user is moved through the different questions as they answer each one. This is a single page application. Each question has a rating of stars between 1 and 5 for the user to select. Hovering a star will give show the associated text with that rating. Clicking a star will log the selected value and display it on the screen. Use the 'Next' buttons to move through each question. Using a 'Back' button will re-display the user's previous selection and also allow them to chose a different answer. User must select a rating to move on to the next page. If the user gets to the submit feedback information page with any of the values missing the user will get an alert and be taken back to that page to enter a rating. The comments page is the only optional question on the form. There is a review page for the user to confirm their information is correct before submitting. Upon submitting the user is a taken to a 'success' page and has the option via a button to start over and submit more feedback. This application is connected to a database so feedback is stored. There is an admin page that displays all the feeback stored in the database in a table.

<!-- To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com) -->

## Screen Shot

<img src='./public/images/Screen Shot 2022-10-03 at 8.18.35 AM.jpg'>
<img src='./public/images/Screen Shot 2022-10-03 at 8.14.34 AM.jpg'>
<img src='./public/images/Screen Shot 2022-10-03 at 8.14.52 AM.jpg'>
<img src='./public/images/Screen Shot 2022-10-03 at 8.15.19 AM.jpg'>
<img src='./public/images/Screen Shot 2022-10-03 at 8.19.55 AM.jpg'>

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org)

## Installation

1. Clone Repo
2. Create database called 'prime_feedback' in [PostgreSQL](https://www.postgresql.org)
3. Use SQL in data.sql from Repo to create required tables ([Postico](https://eggerapps.at/postico/))recommended to setup table)
4. Run 'npm install'
5. Run 'npm run server'
6. Run 'npm run client'
7. App should open in your browser

## Usage

1. If database is setup and app running in browser, we can collect some feedback!
2. Answer each question by selecting the correct number of stars.
3. After selecting a star, click 'Next' button.
4. Once all questions are answered, a review page displays all the entered information.
5. If all information looks good, then click 'Submit' button to send data to the database.
6. A 'Success' page is displayed and the user is presented the option to give more feedback.
7. Navigate to /admin to see a table of all the feedback currently in the database.


## Built With

 - HTML
 - CSS
 - Javascript
 - React.js
 - PG.js
 - Express.js
 - PostgresSQL
 - Postico
 - Postman
 - Git
 - GitHub
 - VScode
 - Sweet Alerts
 - Material UI
 - Framer Motion
 - Emotion
 - Node-Sass
 - React Transition Group

## License

- Free to use

## Acknowledgement
 - Thank you to [Emerging Digital Academy](http://emergingacademy.org/) for the skills to make this application!
 - Thanks to [express.js](https://expressjs.com) for the ability to create a server.
 - Thanks to [pg.js](https://www.npmjs.com/package/pg) for being able to connect my database to the server.
 - Thanks to [Coolors.co](https://coolors.co/) for the color palette used.
 - Thanks to [W3 SChools](https://www.w3schools.com) for the refernce material on HTML, Javascript and CSS.
 - Thanks to [Mozilla](https://developer.mozilla.org/en-US/) for the in-depth reference material when a deeper understanding is need.

## Support
If you have suggestions or issues, please email [me!](ddvetter23@gmail.com)

