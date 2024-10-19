const express = require('express');
const {retrieveHarryPotterLine} = require('../db/sentences')

const router = express.Router();


// Route to fetch sentences with pagination
router.get('/:page?', async (req, res) => {
    const page = req.params.page || 0;
    console.log(`received request for page from text endpoint ${page}`)
    line = await retrieveHarryPotterLine(page)
    res.json({text: line})
});


module.exports = router;