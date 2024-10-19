const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


async function insertWord(word) {
    console.log(word)
    const query = `
        INSERT INTO vocab_sv (word, familiarity)
        VALUES ($1, 0)
        ON CONFLICT (word) DO NOTHING
        RETURNING *;
    `;

    try {
        const res = await pool.query(query, [word]);
        if (res.rowCount === 0) {
            console.log(`The word "${word}" already exists in the database.`);
        } else {
            console.log(`The word "${word}" has been added to the database.`);
        }
        return res
    } catch (err) {
        console.error('Error inserting word:', err);
    }
}

module.exports = {
    insertWord,
};