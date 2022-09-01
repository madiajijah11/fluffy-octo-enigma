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
router.get("/pets/:id", petsController.getPetsById); // Get pet by id
router.delete("/pets/:id", petsController.deletePetById); // Delete pet by id

module.exports = router;
