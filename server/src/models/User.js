const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user',
        roles: [ "user", "admin" ]
    },
    token: {
        type: String
    }
}, {timestamps: true, collection: 'users'});

module.exports = mongoose.model('User', UserSchema);