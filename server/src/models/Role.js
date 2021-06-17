const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true, collection: 'roles'});

module.exports = mongoose.model('Role', RoleSchema);