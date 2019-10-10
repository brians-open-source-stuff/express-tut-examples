module.exports = function(router) {
  router.get("/", function controller(req, res) {
    res.send("Hello, World!");
  });
};
