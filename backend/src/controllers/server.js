const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const cors = require('cors');

mongoose.connect('mongodb://localhost/Menu')

const app = express()

app.use(cors());

app.use(bodyParser.json());

app.listen(3000, () => console.log('Server on'));