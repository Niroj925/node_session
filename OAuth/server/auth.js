import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import 'dotenv/config';

//to communiacte with google api we have to do this 
//this is a middleware
const{GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET}=process.env;



passport.use(new GoogleStrategy({
  clientID:     GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8080/auth/google/callback",
  passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    console.log(profile);
     done(null, profile);
  // });
}
));
//to read and write from passport session we have to do serialize and deserialize 
//now we can get some datas of sign in email's 
passport.serializeUser(function(user, done) {
 return done(null, user);
});

passport.deserializeUser(function(user, done) {

   return done(null, user);
  
});