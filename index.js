const express = require("express");
const path = require("path");

const app = express();
let port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    console.log("Home route hit");
    res.render("home");
});

app.listen(port, () => {
    console.log(`app is listening ${port}`);
});