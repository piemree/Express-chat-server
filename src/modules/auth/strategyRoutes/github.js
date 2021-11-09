const passport = require("passport");
module.exports = (router) => {
  router.get(
    "/github",
    passport.authenticate("github", {
      scope: ["email", "profile"],
    })
  );
  router.get(
    "/github/callback",
    passport.authenticate("github", {
      failureRedirect: "/failed",
    }),
    function (req, res) {
      req.session.save(() => {
        res.redirect("http://localhost:8000");
      });
    }
  );
};
