const express = require("express");
const helmet = require("helmet");
const comporession = require("compression");

const app = express();

app.use(helmet());
app.use(comporession());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route("/api").get((_req, res) => {
	res.json({ message: "Hello World" });
});

const listener = app.listen(process.envPORT || 3000, (err) => {
	if (err) {
		return console.log("something bad happened", err);
	}
	console.log(`server is listening on ${listener.address().port}`);
});
