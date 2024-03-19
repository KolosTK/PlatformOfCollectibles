import User from "../schemas/user.schema.js";
import passport from "passport";
import passportJWT from "passport-jwt";
import dotenv from 'dotenv';

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
dotenv.config();

const params = {
  secretOrKey: process.env.JWT_SECRET,
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