const express = require("express");
const app = express();

console.log("I am testing the travis test from a pull request");
app.get("/", (req, res) => res.send("hello world"));

module.exports = app;
