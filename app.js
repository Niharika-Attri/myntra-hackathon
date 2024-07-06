const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.mongodbURI)
    .then( app.listen(process.env.PORT, () => {
        console.log('Connected to database');
        console.log('Server running on port 3000');
    }))
    .catch((err) => {console.log(err);})

app.use(express.json())

app.use(morgan('dev'))