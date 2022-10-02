const express = require('express'); // bring in express
const app = express(); // initialize express
const bodyParser = require('body-parser'); // bring in body parser 
const PORT = process.env.PORT || 5000; // setup port to use

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
const feedback = require('./routes/feedback.router.js'); // bring in feedback router
app.use('/feedback', feedback); // set url to use

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});