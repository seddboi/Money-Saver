  const express = require('express');
  const app = express();
  const exphbs  = require('express-handlebars');
  const bcrypt = require ('bcrypt')
  const path = require('path');
  const flash = require('express-flash')
  const passport = require('passport')
  const session = require('express-session');
  const methodOver = require('method-override')
//   const sequelize = require('./config/connection');


  // const routes = require('./controllers');
const routes = require('./router')


  const PORT = process.env.PORT || 3000;
  
//   const SequelizeStore = require('connect-session-sequelize')(session.Store);
  
  
  app.engine('handlebars', exphbs());
  app.set('view engine', 'handlebars');
  
  
  
  app.use(express.urlencoded({ extended: false }));
  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(methodOver('_method'));
  app.use(express.static('public'));
  
  app.use(routes);
  
  app.listen(PORT,() => console.log(`Now listening to port ${PORT}`));