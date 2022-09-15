const { Router } = require("express");
const router = Router();
const { categoryController } = require("../controllers/categories.controller");

router.get("/category", categoryController.getCategory);
router.get("/category/:id", categoryController.getCategoryId);
router.delete("/category/:id", categoryController.deleteCategory);
router.post("/category", categoryController.postCategory);
router.patch("/category/:id", categoryController.patchCategory);

module.exports = router;
