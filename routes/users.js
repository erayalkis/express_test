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

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Edit user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

module.exports = router;
