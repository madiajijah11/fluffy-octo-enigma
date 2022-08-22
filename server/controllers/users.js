const Users = require("../models/users");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

const loginUsers = (req, res, _next) => {
	const { email, password } = req.body;
	if (!email || !password) {
		return res.status(400).json({
			message: "Please fill all fields",
		});
	}
	Users.findOne({ email: email }, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(400).json({
				message: "User does not exist",
			});
		}
		const isPasswordMatch = bcryptjs.compareSync(password, data.password);
		if (!isPasswordMatch) {
			return res.status(400).json({
				message: "Email or Password is incorrect",
			});
		}
		const generateToken = (payload) => {
			return jwt.sign(payload, process.env.SECRET, {
				expiresIn: "1d",
			});
		};
		const token = generateToken({
			userId: data._id,
			email: data.email,
			password: data.password,
		});
		return res.status(200).json({
			message: "User logged in successfully",
			id: data._id,
			email: data.email,
			token: token,
		});
	});
};

// get user by email
const getUsersByEmail = (req, res, _next) => {
	const { email } = req.params;
	Users.findOne({ email: email }, (err, data) => {
		if (err) {
			return res.status(500).json({
				message: "Something went wrong",
			});
		}
		if (!data) {
			return res.status(404).json({
				message: "User not found",
			});
		}
		return res.status(200).json({
			message: "User found",
			data: data,
		});
	}).sort({ createdAt: -1 });
};

module.exports = { newUsers, getUsers, deleteUsers, loginUsers, getUsersByEmail };
