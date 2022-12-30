const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
var colors = require("colors");

require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it is working

app.get("/", (req, res) => {
	res.type("text/plain");
	res.send("Server Expresso ☕ for task management app is runnign for client side");
});
app.get("/", (req, res) => {
	res.type("text/plain");
	res.send("Server Expresso ☕ About");
});
app.use((req, res) => {
	res.type("text/plain");
	res.status(404);
	res.send("404 Not found ☕_☕");
});
app.listen(port, () =>
	console.log(`Expresso ☕ is on Port ${port} Ctrl + C to Stop `.bgRed),
);
