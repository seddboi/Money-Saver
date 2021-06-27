  const express = require('express');
  const exphbs  = require('express-handlebars');
  // const bcrypt = require ('bcrypt')
  const path = require('path');
  // const flash = require('express-flash')
  // const passport = require('passport')
  const session = require('express-session');
  // const methodOver = require('method-override')

  const SequelizeStore = require('connect-session-sequelize')(session.Store);
  const routes = require('./controllers');
  const sequelize = require('./config/connection');


  const app = express();

// const routes = require('./router')


  const PORT = process.env.PORT || 3000;
  

  
  
  // app.engine('handlebars', exphbs());
  // app.set('view engine', 'handlebars');
  
  
  // app.use(express.urlencoded({ extended: false }));
  // app.use(flash())
  // app.use(session({
  //   secret: process.env.SESSION_SECRET,
  //   resave: false,
  //   saveUninitialized: false
  // }));

  // app.use(passport.initialize());
  // app.use(passport.session());
  // app.use(methodOver('_method'));
  // app.use(express.static('public'));
  
  const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sess));

  
  app.engine('handlebars', exphbs);
  app.set('view engine', 'handlebars');
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, 'public')));
  

  app.use(routes);
  
  // app.listen(PORT,() => console.log(`Now listening to port ${PORT}!`));

  sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });
  