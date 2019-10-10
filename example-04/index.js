const express = require("express");
const app = express();
const router = express.Router();
const { readdirSync } = require("fs");
const { join } = require("path");

readdirSync(join(__dirname, "routes")).forEach(function(file) {
  require(join(__dirname, "routes", file))(router);
});

app.use(router);

require("./bin/server")(app);
