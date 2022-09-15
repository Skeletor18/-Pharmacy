const { Router } = require("express");
const router = Router();
const { userController } = require("../controllers/users.controller");

router.get("/user", userController.getUser);
router.get("/user/:id", userController.getUserId);
router.delete("/user/:id", userController.deleteUser);
router.post("/user", userController.postUser);
router.patch("/user/:id", userController.patchUser);
router.patch('/user/:user_id',userController.cashLimitUser)

module.exports = router;