const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const db = require("./db/sqlite");

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).render("index", { text: "Me!" });
});

app.use("/users", userRouter);

db.authenticate()
  .then(() => console.log("SQLite3 database is running"))
  .catch(() => console.log("Unable to connect to SQLite3 database :("));

db.sync()
  .then(() => console.log("SQLite3 synchnorized"))
  .catch(() =>
    console.log("An exception was encountered while synchnorizing database")
  );

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
