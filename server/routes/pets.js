const express = require("express");

const router = express.Router();

const petsController = require("../controllers/pets");

// Pets routes
router.get("/pets", petsController.getPets); // Get all pets
router.post("/pets", petsController.newPets);
// router.delete("/pets", petsController.deletePets); // Delete all pets
router.delete("/pets", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});

// Pets routes by name
router.get("/pets/:name", petsController.getPetsByName); // Get user by id

module.exports = router;
