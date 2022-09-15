const Medicine = require("../models/Medicine.model");

module.exports.medicineController = {
  getMedicine: async (req, res) => {
    try {
      const medicineGet = await Medicine.find().populate("category", "name");
      res.json(medicineGet);
    } catch (err) {
      res.json(err);
    }
  },

  getMedicineId: async (req, res) => {
    try {
      const medicineId = await Medicine.findById(req.params.id).populate(
        "category",
        "name"
      );
      res.json(medicineId);
    } catch (err) {
      res.json(err);
    }
  },

  deleteMedicine: async (req, res) => {
    try {
      const medicineDelete = await Medicine.findByIdAndRemove(req.params.id);
      res.json(medicineDelete);
    } catch (err) {
      res.json(err);
    }
  },

  postMedicine: async (req, res) => {
    const { name, price, category, permission } = req.body;
    try {
      const medicinePost = await Medicine.create({
        name,
        price,
        category,
        permission,
      });
      res.json(medicinePost);
    } catch (err) {
      res.json(err);
    }
  },

  patchMedicine: async (req, res) => {
    const { name, price, category, permission } = req.body;
    try {
      const medicinePatch = await Medicine.findByIdAndUpdate(req.params.id, {
        name,
        price,
        category,
        permission,
      });
      res.json(medicinePatch);
    } catch (err) {
      res.json(err);
    }
  },

  categoryMedicine : async(req,res) =>{
    try{
        const category = await Medicine.findById({category : req.params.category_id}).populate('category' , 'name')
        res.json(category)
    }catch(err){
        res.json(err)
    }
  }
};
