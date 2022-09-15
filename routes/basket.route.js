const { Router } = require("express");
const router = Router();

const { basketController } = require("../controllers/basket.controller");

router.get("/basket", basketController.getBasket);
router.get("/basket/:id", basketController.getBasketId);
router.delete("/basket/:id", basketController.deleteBasket);
router.post("/basket", basketController.portBasket);
router.patch("/basket/:id", basketController.patchBasket);
router.patch("/basket/clear/:user_id", basketController.clearBasket);
router.patch("/basket/user/:user_id/medicine/:medicine_id",basketController.addBasket);

module.exports = router;
