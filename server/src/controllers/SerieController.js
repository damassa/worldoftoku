const Serie = require('../models/Serie');

module.exports = {
    async list(req, res) {
        const serie = await Serie.find(req.params);
        return res.json(serie);
    },

    async show(req, res) {
        const serie = await Serie.findById(req.params.id);
        return res.json(serie);
    },

    async store(req, res) {
        const { 
            name, 
            plot, 
            image, 
            opening_video, 
            year, 
            duration, 
            category 
            } = req.body;
            
        const serie = await Serie.create({
            name,
            plot,
            image,
            opening_video,
            year,
            duration,
            category
        })
        res.json(serie);
    },

    async update(req, res) {
        const serie = await Serie.findByIdAndUpdate(
            req.params.id, req.body, {new: true}
        );
        return res.json(serie);
    },

    async delete(req, res) {
        await Serie.findByIdAndRemove(req.params.id);
        return res.json();
    }
}