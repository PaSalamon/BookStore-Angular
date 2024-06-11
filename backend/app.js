const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const route = require('../backend/route.js');

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.listen(3000,() => console.log('Server startd on port 3000'));

app.use('/bookstore', route);