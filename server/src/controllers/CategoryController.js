const Category = require('../models/Category');

module.exports = {
    async list(req, res) {
        const category = await Category.find(req.params).sort('name');
        return res.json(category);
    },
    
    async show(req, res) {
        const category = await Category.findById(req.params.id);
        return res.json(category);
    },

    async store(req, res) {
        const { name } = req.body;
        const category = await Category.create({name});
        return res.json(category);
    },

    async update(req, res) {
        const category = await Category.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        );
        return res.json(category);
    },

    async delete(req, res) {
        await Category.findByIdAndRemove(req.params.id);
        return res.json();
    }
}