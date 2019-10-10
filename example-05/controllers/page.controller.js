exports.showPage = function controller(req, res) {
  res.render("page", { title: "Hello, World!" });
};
