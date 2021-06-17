const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

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
        enum: [ "user", "admin" ]
    },
    token: {
        type: String
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Serie'
    }]
}, {timestamps: true, collection: 'users'});

module.exports = mongoose.model('User', UserSchema);