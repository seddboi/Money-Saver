const app = express();
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');

const help = require('./utils/helpers');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers});

const session = require('express-session');

const app = express();
const port = process.env.port || 3306;

const SequelizeStore = require('connect-sesssion-sequalize')(sess.Store);

const sess = {
    secret: 'the lords cheeps',
    cookie: {},
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequalize.sync({ force: false }).then( () => {
    app.listen(port, () => console.log('Now listening'))
});