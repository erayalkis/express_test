const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.use(logger); // Will run the logger for each path
// If you wanted to run it for just a specific path, you need to add it as a function
// Ex. router.get("/", logger, (req, res) => {...}) <- This would run the logger for this route only

router.get("/", async (req, res) => {
  const users = await User.findAll();

  res.status(200).render("users/index", { users });
});

router.post("/", (req, res) => {
  let { firstName, lastName, age } = req.body;
  try {
    User.create({ firstName, lastName, age }).catch((e) => {
      throw e;
    });
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
  .delete(async (req, res) => {
    const user = await User.findOne({ id: req.params.id });
    user.destroy();

    res.redirect("/users");
  });

function logger(req, res, next) {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
}

module.exports = router;
