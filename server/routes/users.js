const express = require("express");

const router = express.Router();

const usersController = require("../controllers/Users");

// Users routes
router.get("/users", usersController.getUsers); // Get all users
router.post("/users", (req, res, next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
// router.delete("/users", usersController.deleteUsers); // Delete all users
router.delete("/users", (req, res, next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});

// Users routes by email
router.get("/users/:email", usersController.getUsersByEmail); // Get user by id

module.exports = router;
