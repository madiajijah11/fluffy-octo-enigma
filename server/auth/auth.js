const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers.authorization;

	if (!token) {
		return res.status(401).json({
			message: "No token provided.",
		});
	}

	jwt.verify(token, process.env.SECRET, (err, decoded) => {
		if (!decoded) {
			return res.status(401).json({
				message: "Failed to authenticate token.",
			});
		}
		if (err) {
			return res.status(403).json({
				message: "Token is not valid.",
			});
		}
		req._Id = decoded;
		next();
	});
};

module.exports = verifyToken;
