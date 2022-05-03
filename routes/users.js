const express = require("express");
const router = express.Router();

router.use(logger); // Will run the logger for each path
// If you wanted to run it for just a specific path, you need to add it as a function
// Ex. router.get("/", logger, (req, res) => {...}) <- This would run the logger for this route only

router.get("/", (req, res) => {
  res.status(200).send("Users list");
});

router.post("/", (req, res) => {
  console.log(req.body.firstName);
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
