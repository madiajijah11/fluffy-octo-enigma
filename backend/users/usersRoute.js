const express = require("express");

const router = express.Router();

const usersController = require("./usersController");
const usersControllerPrisma = require("./usersControllerPrisma");

router.get("/users", usersControllerPrisma.getUsers);
router.post("/users", usersControllerPrisma.newUsers);

// router.get("/users", usersController.getUsers); // Get all users
// router.post("/users", (_req, res, _next) => {
// 	res.status(405).json({
// 		message: "Method not allowed",
// 	});
// });
router.delete("/users", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
router.get("/users/:email", usersController.getUsersByEmail); // Get user by email

module.exports = router;
