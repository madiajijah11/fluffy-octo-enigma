const express = require("express");

const router = express.Router();

const usersController = require("../controllers/Users");

// Users
router.get("/users", usersController.getUsers);
router.post("/users", usersController.newUsers);
router.delete("/users", usersController.deleteUsers);

module.exports = router;
