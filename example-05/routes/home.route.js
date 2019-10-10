const { showPage } = require("../controllers/page.controller");

module.exports = function(router) {
  router.get("/", showPage);
};
