const User = require('../models/User');
const Role = require('../models/Role');

function addRole() {
    if(!Role.find({ name: 'user' })) {
        new Role({
            name: 'user'
        }).save(err => {
            err ? console.log(err) : console.log('User role added.');
        });
    }
    if(!Role.find({ name: 'admin' })) {
        new Role({
            name: 'admin'
        }).save(err => {
            err ? console.log(err) : console.log('admin role added.');
        });
    }
};

addRole();

module.exports = {
    async showRoles(req, res) {
        const role = await Role.find(req.params);
        return res.json(role);
    },

    async list(req, res) {
        const user = await User.find(req.params).sort('name');
        return res.json(user);
    },

    async show(req, res) {
        const user = await User.findById(req.params).sort('name');
        return res.json(user);
    },

    async register(req, res) {
        const {
            username,
            email,
            password,
            role
        } = req.body;

        const user = await User.create({
            username,
            email,
            password,
            role
        });

        return res.json(user);
    },
}