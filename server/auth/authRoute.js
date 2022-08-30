const express = require("express");

const router = express.Router();

const usersController = require("../users/usersController");

router.post("/auth/login", usersController.loginUsers); // Login user
router.post("/register", usersController.newUsers); // Register user

module.exports = router;
