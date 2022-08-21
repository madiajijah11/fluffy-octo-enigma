const Users = require("../models/users");
const bcryptjs = require("bcryptjs");

const newUsers = (req, res, _next) => {
	const { name, email, password, confirmPassword } = req.body;
	if (!name || !email || !password || !confirmPassword) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	if (password !== confirmPassword) {
		return res.status(400).json({
			message: "Passwords do not match",
		});
	}
	Users.findOne({ email: email }, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (data) {
			return res.status(400).json({
				message: "User already exists",
			});
		}
		const salt = bcryptjs.genSaltSync(10);
		const hash = bcryptjs.hashSync(password, salt);
		const newUsers1 = new Users({
			name: name,
			email: email,
			password: hash,
		});
		newUsers1.save((err1) => {
			if (err1) {
				return res.status(500).json({
					message: "Something went wrong",
				});
			}
			return res.status(201).json({
				message: "User created successfully",
			});
		});
	});
};

const getUsers = (_req, res, _next) => {
	Users.find({}, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(404).json({
				message: "No users found",
			});
		}
		return res.status(200).json({
			message: "Complete Users found",
			data: data,
		});
	}).sort({ createdAt: -1 });
};

const deleteUsers = (_req, res, _next) => {
	Users.deleteMany({}, (err) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		return res.status(200).json({
			message: "Complete Users deleted successfully",
		});
	});
};

module.exports = { newUsers, getUsers, deleteUsers };
