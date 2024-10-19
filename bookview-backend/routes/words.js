const express = require('express');
const db = require('../db');
const { insertWord } = require('../db/words');

const router = express.Router();

// POST /api/words
router.post('/', async (req, res) => {
    const { words } = req.body;
    console.log('hit words endpoint')
    console.log(req.body)

    if (!words || !Array.isArray(words)) {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    try {
        db_response = words.map((word) => insertWord(word));
        return res.status(200).json({response: 
            db_response
        })

    } catch (error) {
        console.error('Error inserting words:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
