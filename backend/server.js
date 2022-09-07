const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRoutes = require("./users/usersRoute");
const auth = require("./auth/authRoute");
const verifyToken = require("./auth/auth");
const petsRoutes = require("./pets/petsRoute");

dotenv.config("./.env");

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", auth);
app.use("/api/v1", usersRoutes, petsRoutes);
// app.use("/api/v1", verifyToken, usersRoutes, petsRoutes);

app.route("/").get((_req, res) => {
	res.sendFile(`${process.cwd()}/index.html`);
});

// mongoose.connect(
// 	process.env.MONGODB_URI,
// 	(err) => {
// 		if (err) return console.log(`Error : ${err}`);
// 	},
// 	console.log(`MongoDB Connection -- Ready state is: ${mongoose.connection.readyState}`)
// );

const listener = app.listen(process.envPORT || 3000, (err) => {
	if (err) {
		return console.log("something bad happened", err);
	}
	console.log(`server is listening on ${listener.address().port}`);
});
