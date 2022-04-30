const express = require("express");
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200).render("index", { text: "Me!" });
});

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
