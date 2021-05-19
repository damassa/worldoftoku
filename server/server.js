const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();
const port = process.env.PORT || '3333';

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/tokusatsu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected');
});

requireDir("./src/models");

app.use('/api', require('./src/routes'));

app.listen(port, () => {
    console.log('Listening at port: ' + port);
});