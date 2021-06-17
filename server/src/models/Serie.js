const mongoose = require('mongoose');

const SerieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    plot: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    opening_video: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Category'
    }],
}, { timestamps: true, collection: 'series' });

module.exports = mongoose.model('Serie', SerieSchema);