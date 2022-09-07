const express = require("express");
const router = express.Router();

const petsController = require("./petsController");
const petsControllerPrisma = require("./petsControllerPrisma");

// Pets routes
router.get("/pets", petsControllerPrisma.getPets); // Get all pets

router.post("/pets", petsControllerPrisma.newPet); // Create new pet

router.put("/pets/:id", petsControllerPrisma.updatePetById); // Update pet

router.delete("/pets", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});

router.get("/pets/:id", petsControllerPrisma.getPetById); // Get pet by id

router.delete("/pets/:id", petsControllerPrisma.deletePetById); // Delete pet by id

module.exports = router;
