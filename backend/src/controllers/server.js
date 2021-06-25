const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');
const cors = require('cors');
const route = require('./src/routes')

mongoose.connect('mongodb://localhost/Menu')

const app = express()

app.use(cors());

app.use(bodyParser.json());