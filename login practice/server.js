if(process.env.NODE_ENV !=='production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const exphbs  = require('express-handlebars');
const bcrypt = require ('bcrypt')
const path = require('path');
const flash = require('express-flash')
const passport = require('passport')
const session = require('express-session');
const methodOver = require('method-override')
const sequelize = require('./config/connection');
// const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const initPassport = require('./passport-config')
initPassport(
  passport, 
  email => users.find(users => users.email === email),
  id => users.find(users => users.id === id)
  )


const users = []


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



app.use(express.urlencoded({ extended: false }));
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOver('_method'))
app.use(express.static('public'));


app.get('/', checkAuth, (req, res) => {
  res.render('home', {name: req.user.name});
});

app.get('/login',checkAlreadyAuth,  (req, res) => {
  res.render('login');
});

app.post('/login', checkAlreadyAuth,  passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
}))

app.get('/signup',  (req, res) => {
  res.render('signup');
});


app.post('/signup', checkAlreadyAuth, async (req, res) => {
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

app.delete('/logout', (req, res) => {
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


app.listen(3000);