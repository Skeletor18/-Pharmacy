const Category = require("../models/Category.model");

module.exports.categoryController = {
  getCategory: async (req, res) => {
    try {
      const categoryGet = await Category.find();
      res.json(categoryGet);
    } catch (err) {
      res.json(err);
    }
  },

  getCategoryId: async (req, res) => {
    try {
      const categoryId = await Category.findById(req.params.id);
      res.json(categoryId);
    } catch (err) {
      res.json(err);
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const categoryDelete = await Category.findByIdAndRemove(req.params.id);
      res.json(categoryDelete);
    } catch (err) {
      res.json(err);
    }
  },

  postCategory: async (req, res) => {
    try {
      const categoryPost = await Category.create({
        name: req.body.name,
      });
      res.json(categoryPost);
    } catch (err) {
      res.json(err);
    }
  },

  patchCategory: async (req, res) => {
    try {
      const categoryPatch = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(categoryPatch);
    } catch (err) {
      res.json(err);
    }
  },
};
