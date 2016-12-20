/**
 * Created by Паша on 29.11.2016.
 */
import express = require("express");
var router = express.Router();

class AuthRoutes {
    passport: any;

    constructor(passport: any){
        this.passport = passport;
    }

    get routes(){
        router.get('/success',function(req,res){
            res.send({state: 'success', user: req.user ? req.user: null});
        });
        
        router.get('/failure',function(req,res){
            res.send({state: 'failure',user:null,message:"Invalid username or password"});
        });
        
        router.post('/login',this.passport.authenticate('login',{
            successRedirect: '/api/auth/success',
            failureRedirect: '/api/auth/failure'
        }));

        router.post('/signup', this.passport.authenticate('signup', {
            successRedirect: '/api/auth/success',
            failureRedirect: '/api/auth/failure'
        }));

        router.get('/signout', function(req, res) {
            req.session.user = null;
            req.logout();
            res.redirect('/');
        });

        router.get('/session', function(req, res){
            console.log(req.user);
            res.redirect('/');
        });

        return router;

    };
}

Object.seal(AuthRoutes);
export = AuthRoutes;