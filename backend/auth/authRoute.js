const express = require("express");

const router = express.Router();

const usersController = require("../users/usersController");

router.post("/auth/login", usersController.loginUsers); // Login user
router.post("/register", usersController.newUsers); // Register user
router.post("/auth/logout", usersController.logoutUsers); // Logout user

module.exports = router;
