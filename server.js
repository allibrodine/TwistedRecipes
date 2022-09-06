const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3002;

//require session dependencies
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//session cookies
const sess = {
    secret: 'Super super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

//handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//use front end files
app.use(express.static(path.join(__dirname, 'public')));

//turn on routes
app.use(require('./controllers'));

//turn on server connection
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on PORT 3002'));
})