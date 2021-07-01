const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

//Get Method
router.get("/", userController.getUserController);

// login and signup router
router.post("/login", userController.loginUserController);

//signup router
router.post("/register", userController.registerUserController);

module.exports = router;
