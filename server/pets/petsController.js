const Pets = require("./petsModel");

const newPets = (req, res, _next) => {
	const { name, age, type, breed, description } = req.body;
	if (!name || !age || !type || !breed || !description) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	const newPets1 = new Pets({
		name: name,
		age: age,
		type: type,
		breed: breed,
		description: description,
	});
	newPets1.save((err1) => {
		if (err1) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		return res.status(201).json({
			message: "Pet created successfully",
		});
	});
};

const getPets = (_req, res, _next) => {
	Pets.find({}, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(404).json({
				message: "No pets found",
			});
		}
		return res.status(200).json(data);
	});
};

const getPetsByName = (req, res, _next) => {
	const { name } = req.params;
	if (!name) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	Pets.find({ name: name }, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(404).json({
				message: "No pets found",
			});
		}
		return res.status(200).json(data);
	}).sort({ _id: -1 });
};

module.exports = { newPets, getPets, getPetsByName };
