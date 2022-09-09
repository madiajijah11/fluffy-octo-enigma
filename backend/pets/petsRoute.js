const express = require("express");
const router = express.Router();
const petsControllerPrisma = require("./petsControllerPrisma");
const requireAuth = require("../middleware/requireAuth");

// Pets routes
router.get("/", petsControllerPrisma.getPets); // Get all pets
router.post("/", requireAuth, petsControllerPrisma.newPet); // Create new pet
router.put("/:id", requireAuth, petsControllerPrisma.updatePetById); // Update pet
router.get("/:id", petsControllerPrisma.getPetById); // Get pet by id
router.delete("/:id", requireAuth, petsControllerPrisma.deletePetById); // Delete pet by id
router.all("/", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});

module.exports = router;
