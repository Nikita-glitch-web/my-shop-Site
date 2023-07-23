exports.get500 = (req, res, next) => {
  res
    .status(500)
    .render("500", { pageTitle: "Internal Server Error!", path: "/500" });
};
