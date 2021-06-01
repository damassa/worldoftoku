const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');

const app = express();
const port = process.env.PORT || '3333';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('useFindAndModify', false);

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