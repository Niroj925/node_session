import GoogleStrategy from 'passport-google-oauth20';
import passport from 'passport';
import 'dotenv/config';
//to communiacte with google api we have to do this 
//this is a middleware
const{GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET}=process.env;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  //this function is immediately after verified gmail id

  function(accessToken, refreshToken, profile, cb) {
   // User.findOrCreate({ googleId: profile.id }, function (err, user) {
       console.log(profile);
      return cb(null,profile);
   // });
  }
));

//to read and write from passport we have to do serialize and deserialize 
//now we can get some datas of sign in emial's 
passport.serializeUser(function(user, cb) {
 return cb(null, user);
});

passport.deserializeUser(function(user, cb) {

   return cb(null, user);
  
});