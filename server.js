const path = require("path");
require("dotenv").config({path: path.join(__dirname, ".env")});

const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.render("main");
})

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}`);
});