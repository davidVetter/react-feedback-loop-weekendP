const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

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

module.exports = router;