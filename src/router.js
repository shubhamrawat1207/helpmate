const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 5500
require("./db/container.js");
const help_crew = require("./models/structure.js");
const app = express();

app.set("view engine", "hbs");
const static_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("views", view_path);
hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => {
    console.log(`The server is running on port 5500`);
});
