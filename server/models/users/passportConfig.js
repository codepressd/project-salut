import passport from 'passport';
import User from './users';
import serverConfig from '../../config';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import LocalStrategy from 'passport-local';

const localOptions = { usernameField: 'email' };
//local login Strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
        if (err) {
            return done(err); }
        if (!user) {
            return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

        user.comparePassword(password, function(err, isMatch) {
            if (err) {
                return done(err); }
            if (!isMatch) {
                return done(null, false, { error: "Your login details could not be verified. Please try again." }); }

            return done(null, user);
        });
    });
});

//JWT Login Strategy
const jwtOptions ={
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: serverConfig.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {  
  User.findById(payload._id, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
