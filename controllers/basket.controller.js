const Basket = require("../models/Basket.model");
const Medicine = require("../models/Medicine.model");
const User = require("../models/User.model");

module.exports.basketController = {
  getBasket: async (req, res) => {
    try {
      const basketGet = await Basket.find().populate("user medicine", "name");
      res.json(basketGet);
    } catch (err) {
      res.json(err);
    }
  },

  getBasketId: async (req, res) => {
    try {
      const basketId = await Basket.findById(req.params.id).populate(
        "user medicine",
        "name"
      );
      res.json(basketId);
    } catch (err) {
      res.json(err);
    }
  },

  deleteBasket: async (req, res) => {
    try {
      const basketDelete = await Basket.findByIdAndRemove(req.params.id);
      res.json(basketDelete);
    } catch (err) {
      res.json(err);
    }
  },

  portBasket: async (req, res) => {
    const { user, medicine, total } = req.body;
    try {
      const basketPort = await Basket.create({
        user,
        medicine,
        total,
      });
      res.json(basketPort);
    } catch (err) {
      res.json(err);
    }
  },

  patchBasket: async (req, res) => {
    const { user, medicine, total } = req.body;
    try {
      const bastetPatch = await Basket.findByIdAndUpdate(req.params.id, {
        user,
        medicine,
        total,
      });
      res.json(bastetPatch);
    } catch (err) {
      res.json(err);
    }
  },

  clearBasket: async (req, res) => {
    try {
      await Basket.find({ user: req.params.user_id }).updateOne({
        medicine: [],
        total: 0,
      });
      return res.json("Корзина очищена");
    } catch (err) {
      res.json(err);
    }
  },

  addBasket: async (req, res) => {
    const user = await User.findById(req.params.user_id);
    const medicine = await Medicine.findById(req.params.medicine_id);
    const basket = await Basket.findById({ user: req.params.user_id });

    try {
      if (!user.permission && medicine.permission) {
        return res.json("Нет рецепта");
      } else {
        await basket.updateOne({
          $push: { medicine: req.params.medicine_id },
          $inc: { total: medicine.price },
        });
        return res.json(`${medicine.name}, добавлен в карзину`);
      }
    } catch (err) {
      res.json(err);
    }
  },
};
