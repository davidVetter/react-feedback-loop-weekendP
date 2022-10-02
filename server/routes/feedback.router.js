const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// This GET returns all the feedback results in the database
router.get('/', (req, res) => {
    const query = `SELECT * FROM "feedback"`
    pool.query(query)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log(`Error making query ${query}`, error);
            res.sendStatus(500);
        });
});

// This POST adds a new feedback entry to the prime_feedback database
router.post('/', (req, res) => {
    console.log('In feedback POST with: ', req.body);
    const feedbackToAdd = req.body;
    const query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                   VALUES ($1, $2, $3, $4);`;
    pool.query(query, [feedbackToAdd.feelings, 
                       feedbackToAdd.understanding, 
                       feedbackToAdd.supported, 
                       feedbackToAdd.comments])
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error in POST: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;