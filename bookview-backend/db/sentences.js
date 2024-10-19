const { Client } = require('pg');
require('dotenv').config();
const iconv = require('iconv-lite');
const { connect } = require('../routes/words');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

async function connectClient() {
    try {
        await client.connect();
        console.log('Connected to PostgreSQL database.');
    } catch (err) {
        console.error('Error connecting to PostgreSQL:', err);
    }
}

connectClient();


async function insertSentence(sentence, sequenceNumber) {
    //console.log(sentence)
    try {
        const result = await client.query(
            'INSERT INTO hp_three_sv (content, sequence_number) VALUES ($1, $2)',
            [sentence, sequenceNumber]
        );
        console.log(`Successfully inserted sentence with sequence_number ${sequenceNumber}.`, result);
    } catch (dbErr) {
       
        console.error(`Error inserting sentence with sequence_number ${sequenceNumber}, ${sentence}:`, dbErr);
    }
}

async function retrieveHarryPotterLine(sequenceNumber) {
    const result = await client.query(
        'SELECT * FROM hp_three_sv WHERE sequence_number = $1',
        [sequenceNumber]
    );
    //console.log('SQL RESULT', result.rows[0].content)
    return result.rows[0].content
}

module.exports = {
    insertSentence,
    retrieveHarryPotterLine,
};