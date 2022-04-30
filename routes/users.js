const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Users list");
});

router.get("/new", (req, res) => {
  res.status(200).send("New user form");
});

module.exports = router;
