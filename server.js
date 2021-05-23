// this is the main code for the server connection

// const express = require('express');
// const sequelize = require('./config/connection');
// const routes = require('./controllers');
// const path = require('path');

// // const help = require('./utils/helpers');

// const exphbs = require('express-handlebars');
// // const hbs = exphbs.create({helpers});

// const session = require('express-session');

// const app = express();
// const port = process.env.port || 3306;

// // const SequelizeStore = require('connect-sesssion-sequelize')(sess.Store);

// // // const sess = {
// //     secret: 'the lords cheeps',
// //     cookie: {},
// //     resave: false,
// //     saveUninitialized: false,
// //     store: new SequelizeStore({
// //         db: sequelize,
// //     }),
// // };

// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then( () => {
//     app.listen(port, () => console.log('Now listening'))
// });

// ----------------------------------------------------------------------------------
// This is used to test the teller-connect button page

const express = require('express');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));
// Sets up the routes
app.use(require('./controllers/index'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});