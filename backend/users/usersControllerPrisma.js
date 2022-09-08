const bcryptjs = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUsers = async (_req, res) => {
	try {
		const users = await prisma.User.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				password: false,
				pets: false,
			},
		});
		return res.status(200).json(users);
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

const newUsers = async (req, res) => {
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

	const user = await prisma.User.findUnique({
		where: {
			email,
		},
	});

	if (user) {
		return res.status(400).json({
			message: "User already exists",
		});
	}

	const hashedPassword = bcryptjs.hashSync(password, 10);

	try {
		const newUser = await prisma.User.create({
			data: {
				name,
				email,
				password: hashedPassword,
			},
		});
		return res.status(201).json(newUser);
	} catch (error) {
		return res.status(500).json({
			message: "Something went wrong",
			error: error.message,
		});
	}
};

module.exports = { getUsers, newUsers };
