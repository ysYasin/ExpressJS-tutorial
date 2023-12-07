const express = require("express");

const application = express.Router();

application.get("/", (req, res) => {
  res.send("Hello Bangladesh");
});

application.get("/about", (req, res) => {
  res.send("beche thakte sex koro");
});

application.get("/blog", (req, res) => {
  res.send("Onk Boro ekta blog, buje buje poro please");
});

module.exports = application;
