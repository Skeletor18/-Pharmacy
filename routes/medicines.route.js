const { Router } = require("express");
const router = Router();
const { medicineController } = require("../controllers/medicinces.controller");

router.get("/medicine", medicineController.getMedicine);
router.get("/medicine/:id", medicineController.getMedicineId);
router.get("/medicine/category/:category_id", medicineController.categoryMedicine);
router.delete("/medicine", medicineController.deleteMedicine);
router.post("/medicine", medicineController.postMedicine);
router.patch("/medicine/:id", medicineController.patchMedicine);

module.exports = router;
