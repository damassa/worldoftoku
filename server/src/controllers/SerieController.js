const Serie = require('../models/Serie');
const Category = require('../models/Category');

module.exports = {
  async list(req, res) {
    let order = { year: -1 };
    const serie = await Serie.find(req.params)
      .populate('category')
      .sort(order)
      .limit(10);
    return res.json(serie);
  },

  async show(req, res) {
    const serie = await Serie.findById(req.params.id).populate('category');
    return res.json(serie);
  },

  async getSerieByCategory(req, res) {
    const serie = Category.aggregate([
      { $match: { name: req.params.name } },
      {
        $lookup: {
          from: Serie.collection.name,
          let: { categoryId: '$_id' },
          pipeline: [
            { $match: { $expr: { $eq: ['$category', '$$categoryId'] } } },
          ],
          as: 'series',
        },
      },
      { $unwind: '$series' },
      { $replaceRoot: { newRoot: '$series' } },
    ]);
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
      category,
    } = req.body;

    const serie = await Serie.create({
      name,
      plot,
      image,
      opening_video,
      year,
      duration,
      category,
    });

    res.json(serie);
  },

  async update(req, res, err) {
    const serie = await Serie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (err) {
      return res.send(err);
    }
    return res.json(serie);
  },

  async delete(req, res) {
    await Serie.findByIdAndRemove(req.params.id);
    return res.json();
  },
};
