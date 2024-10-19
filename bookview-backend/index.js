const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const wordsRouter = require('./routes/words'); // Assuming you have a route handler in a separate file
const  txtRouter  = require('./routes/txt');
const load_txt = require('./helpers');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS for all routes and origins
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/words', wordsRouter);
app.use('/api/txt', txtRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    //load_txt()
});
