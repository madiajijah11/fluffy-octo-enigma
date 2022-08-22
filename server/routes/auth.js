const express = require("express");

const router = express.Router();

const usersController = require("../controllers/Users");

// Login
router.post("/login", usersController.loginUsers);
router.post("/register", usersController.newUsers);

module.exports = router;
