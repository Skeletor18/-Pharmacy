const User = require("../models/User.model");
const Basket = require("../models/Basket.model");

module.exports.userController = {
  getUser: async (req, res) => {
    try {
      const userGet = await User.find();
      res.json(userGet);
    } catch (err) {
      res.json(err);
    }
  },

  getUserId: async (req, res) => {
    try {
      const userId = await User.findById(req.params.id);
      res.json(userId);
    } catch (err) {
      res.json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const userDelete = await User.findByIdAndRemove(req.params.id);
      res.json(userDelete);
    } catch (err) {
      res.json(err);
    }
  },

  postUser: async (req, res) => {
    const { name, permission, wallet } = req.body;
    try {
      const userPost = await User.create({
        name,
        permission,
        wallet,
      });
      res.json(userPost);
    } catch (err) {
      res.json(err);
    }
  },

  patchUser: async (req, res) => {
    const { name, permission, wallet } = req.body;
    try {
      const userPatch = User.findByIdAndUpdate(req.params.id, {
        name,
        permission,
        wallet,
      });
      res.json(userPatch);
    } catch (err) {
      res.json(err);
    }
  },
  cashLimitUser: async (req, res) => {
    const user = User.findById(req.params.user_id);
    const basket = Basket.find({ user: req.paras.user_id });
    try {
      if (user.wallet < basket.total) {
        return res.json("Недостаточно средств");
      }
      await user.updateOne({
        $inc: { wallet: basket.total * -1 },
      });
      await basket.updateOne({
        medicine: [],
        total: 0,
      });
      return res.json("Покупка совершена");
    } catch (err) {
      res.json(err);
    }
  },
};
