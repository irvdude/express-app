const { readFile } = require("fs").promises;
const express = require("express");

const app = express();

//static files from public library
app.use(express.static("public"));

app.get("/", async (req, res) => {
	res.send(await readFile("./home.html", "utf8"));
});

app.listen(3000, () =>
	console.log(`app is available on http://localhost:4000`),
);
