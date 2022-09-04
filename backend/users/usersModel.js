const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
