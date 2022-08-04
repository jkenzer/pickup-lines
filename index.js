const express = require("express");
const app = express();
const lines = require("./all-lines.json");

app.get("/", (req, res) => {
  const json = lines[Math.floor(Math.random() * lines.length)];
  res.status(200).json(json);
});

app.listen(3000, () => console.log("Server started"));
