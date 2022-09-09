const express = require("express");
const router = express.Router();
const usersControllerPrisma = require("./usersControllerPrisma");

router.all("/", (_req, res, _next) => {
	res.status(405).json({
		message: "Method not allowed",
	});
});
router.post("/signup", usersControllerPrisma.newUsers);
router.post("/signin", usersControllerPrisma.signinUsers);

module.exports = router;
