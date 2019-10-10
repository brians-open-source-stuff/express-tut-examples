const express = require("express");
const app = express();

app.get("/", function controller(req, res) {
  res.send("Hello, World!");
});

require("./bin/server")(app);
