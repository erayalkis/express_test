const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Users list");
});

router.post("/", (req, res) => {
  res.status(200).send("Create user");
});

router.get("/new", (req, res) => {
  res.status(200).send("New user form");
});

module.exports = router;
