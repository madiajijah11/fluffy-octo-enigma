const express = require("express");

const router = express.Router();

const usersController = require("./usersController");

router.get("/users", usersController.getUsers); // Get all users
router.post("/users", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
router.delete("/users", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
router.get("/users/:email", usersController.getUsersByEmail); // Get user by email

module.exports = router;
