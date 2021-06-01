const Role = require('../models/Role');

function addRole() {
    if(!Role.find({ name: 'user' })) {
        new Role({
            name: 'user'
        }).save(err => {
            err ? console.log(err) : console.log('Cargo de usuário criado.');
        });
    }
    if(!Role.find({ name: 'admin' })) {
        new Role({
            name: 'admin'
        }).save(err => {
            err ? console.log(err) : console.log('Cargo de admin criado.');
        });
    }
};

addRole();

module.exports = {
    async showRoles(req, res) {
        const role = await Role.find(req.params);
        return res.json(role);
    },
}