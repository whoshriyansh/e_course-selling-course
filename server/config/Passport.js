import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import Student from "../models/Student.model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const student = await Student.findOne({ googleId: profile.id });
      if (student) {
        return done(null, student);
      } else {
        const newStudent = new Student({
          googleId: profile.id,
          studentname: profile.displayName,
          email: profile.emails[0].value,
          fromGoogle: true,
        });
        await newStudent.save();
        return done(null, newStudent);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails"],
    },
    async (accessToken, refreshToken, profile, done) => {
      const student = await Student.findOne({ facebookId: profile.id });
      if (student) {
        return done(null, student);
      } else {
        const newStudent = new Student({
          facebookId: profile.id,
          studentname: profile.displayName,
          email: profile.emails[0].value,
          fromFacebook: true,
        });
        await newStudent.save();
        return done(null, newStudent);
      }
    }
  )
);

passport.serializeStudent((student, done) => {
  done(null, student.id);
});

passport.deserializeStudent((id, done) => {
  Student.findById(id, (err, student) => {
    done(err, student);
  });
});

export default passport;
