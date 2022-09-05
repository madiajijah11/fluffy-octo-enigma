const Pets = require("./petsModel");

const newPets = (req, res, _next) => {
	const { src, name, age, type, breed, description } = req.body;
	if (!src || !name || !age || !type || !breed || !description) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}

	const height = Math.floor(Math.random() * 2) + 1;
	const width = height === 1 ? 3 : 4;

	const newPets1 = new Pets({
		src,
		height,
		width,
		name,
		age,
		type,
		breed,
		description,
	});
	newPets1.save((error) => {
		if (error) {
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
	Pets.find({}, (error, data) => {
		if (error) {
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
	}).sort({ createdAt: -1 });
};

const getPetById = (req, res, _next) => {
	const { id } = req.params;
	if (!id) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	Pets.find({ _id: id }, (error, data) => {
		if (error) {
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

const deletePetById = (req, res, _next) => {
	const { id } = req.params;
	Pets.findByIdAndDelete({ _id: id }, (error, data) => {
		if (error) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(404).json({
				message: "No pets found",
			});
		}
		return res.status(200).json({
			message: "Pet deleted successfully",
			data,
		});
	});
};

module.exports = { newPets, getPets, getPetById, deletePetById };
