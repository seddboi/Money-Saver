if(process.env.NODE_ENV !=='production') {
    require('dotenv').config()
  }

const flash = require('express-flash')
const passport = require('passport')
const session = require('express-session');
const methodOver = require('method-override')
const bcrypt = require ('bcrypt')

const express = require('express');
const router = express.Router();

// const router = require('express').Router()

const users = []

const initPassport = require('../passport-config')
initPassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(users => users.id === id)
  )


router.get('/', checkAuth, (req, res) => {
    res.render('home', {name: req.user.name});
  });
  
  router.get('/login',checkAlreadyAuth,  (req, res) => {
    res.render('login');
  });
  
  router.post('/login', checkAlreadyAuth,  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))
  
  router.get('/signup',  (req, res) => {
    res.render('signup');
  });
  
  
  router.post('/signup', checkAlreadyAuth, async (req, res) => {
    try {
      const hashPass = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashPass
      })
      res.redirect('/login')
    } catch {
      res.redirect('/signup')
    }
    console.log(users);
  });
  
  router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  });


  function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
  
  function checkAlreadyAuth(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
  

module.exports = router;