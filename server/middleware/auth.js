const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers["x-access-token"];

	if (!token) {
		return res.status(401).json({
			message: "No token provided.",
		});
	}

	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (!decoded) {
			return res.status(403);
		}
		if (err) {
			return res.status(401).json({
				message: "Invalid token.",
			});
		}
		req.userId = decoded.userId;
		next();
	});
};

module.exports = verifyToken;
