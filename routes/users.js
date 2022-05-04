const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.use(logger); // Will run the logger for each path
// If you wanted to run it for just a specific path, you need to add it as a function
// Ex. router.get("/", logger, (req, res) => {...}) <- This would run the logger for this route only

router.get("/", (req, res) => {
  console.log(req.query.name);

  res.status(200).send("Users list");
});

router.post("/", (req, res) => {
  let { firstName, lastName, age } = req.body;
  try {
    User.create({ firstName, lastName, age });
  } catch (e) {
    console.log(e);
  }
  res.status(200).send("Create user");
});

router.get("/new", (req, res) => {
  res.status(200).render("users/new");
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

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
