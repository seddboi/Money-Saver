const router = require('express').Router();
const models = require('../models');
const User = require('../models/user');

// login route
router.post('login', (req, res) => {
    models.user.findOne({
        where: {
            email: req.body.email,
        },
    }).then( (data) => {
        if (!data) {
            res.status(404).json({message: 'Sorry, we were unable to locate your account.'});
        };

        const passChecker = data.verifyPassword(req.body.password);
        if(!passChecker) {
            res.status(400).json({message: 'Sorry, we were unable to locate your account.'});
        };

        req.session.save( () => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;

            res.json({
                user: data,
                message: 'Welcome!'
            });
        });

    }).catch( (err) => {
        res.status(500).json(err);
    });
});

// Sign Up (create user) route
router.post('/', (req, res) => {
    models.user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,  
    }).then( (data) => {
        req.session.save( () => {
            req.session.user_id = data.id;
            req.session.username = data.username;
            req.session.loggedIn = true;

            res,json(data);
        });
    }).catch( (err) => {
        res.status(500).jsomn(err);
    });
});

// Logout routes
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy( () => {
            res.status(204).end();
        }); 
    } else {
        res.status(404).end();
    }
});