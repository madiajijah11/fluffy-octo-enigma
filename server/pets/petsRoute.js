const express = require("express");

const router = express.Router();

const petsController = require("./petsController");

// Pets routes
router.get("/pets", petsController.getPets); // Get all pets
router.post("/pets", petsController.newPets); // Create new pet
router.delete("/pets", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
router.get("/pets/:name", petsController.getPetsByName); // Get pet by name

module.exports = router;
