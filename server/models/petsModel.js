const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema({
	name: { type: String, required: true },
	age: Number,
	type: String,
	breed: String,
	description: String,
});

const Pets = mongoose.model("Pets", PetsSchema);

module.exports = Pets;