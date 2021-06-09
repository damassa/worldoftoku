const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const path = require('path');
const jwt = require('jsonwebtoken');
const routes = require('./src/routes');
const User = require('./src/models/User');

require("dotenv").config({
    path: path.join(__dirname, "./.env")
});

const app = express();
const port = process.env.PORT || '3333';

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(async (req, res, next) => {
    if(req.headers["x-access-token"]) {
        try {
            const accessToken = req.headers["x-access-token"];
            const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
            if(exp < Date.now().valueOf() / 1000) {
                return res.status(401).json({
                    error: "Token JWT expirada. Logue para obter um token novo."
                });
            }
            res.locals.loggedInUser = await User.findById(userId);
            next();
        } catch(err) {
            next(err);
        }
    } else {
        next();
    }
});

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/tokusatsu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected');
});

requireDir("./src/models");

app.use('/api', routes);

app.listen(port, () => {
    console.log('Listening at port: ' + port);
});