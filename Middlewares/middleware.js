const User = require("../schemas/user.schema");
const passport = require("passport");
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const params = {
  secretOrKey: "99c0003a218b94e0eba0260cc1ec5a1767976ba39fb279a38cc0c2ebca6ed388",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

module.exports = function () {
  const strategy = new Strategy(params, function (payload, done) {
    if (payload.expire <= Date.now()) {
      return done(new Error("TokenExpired"));
    }

    User.findById(payload.id, function (err, user) {
      if (err) {
        return done(new Error("UserNotFound"));
      } else {
        return done(null, user);
      }
    });
  });

  passport.use(strategy);

  return {
    initialize: function () {
      return passport.initialize();
    },
  };
};