/**
 * Created by Паша on 29.11.2016.
 */
var User = require('../../app/dataAccess/schemas/UserSchema');
var LocalStrategy   = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

export function config(passport){
    passport.serializeUser(function(user, done) {
        console.log('serializing user:',user.login);
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('deserializing user:',user.login);
            done(err, user);
        });
    });

    passport.use('login', new LocalStrategy({
            usernameField : 'login',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, login, password, done) {
            console.log('try to login:  '+login);
            User.findOne({ 'login' :  login },
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User Not Found with login '+login);
                        return done(null, false);
                    }
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false);
                    }
                    return done(null, user);
                }
            );
        }
    ));

    passport.use('signup', new LocalStrategy({
            usernameField : 'login',
            passwordField : 'password',
            passReqToCallback : true
        },
        function(req, username, password, done) {
            User.findOne({ login :  username }, function(err, user) {
                if (err){
                    console.log('Error in SignUp: '+ err);
                    return done(err);
                }
                // already exists
                if (user) {
                    console.log('User already exists with username: '+ username);
                    return done(null, false);
                } else {
                    var newUser = new User();
                    newUser.login = username;
                    newUser.password = createHash(password);

                    // save the user
                    newUser.save(function(err) {
                        if (err){
                            console.log('Error in Saving user: '+err);
                            throw err;
                        }
                        console.log(newUser.username + ' Registration succesful');
                        return done(null, newUser);
                    });
                }
            });
        })
    );

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
};

