// Modules and Globals
require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT;

const db = require('./models');

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Controllers and Routs
// places controller
app.use('/places', require('./controllers/places'));

// home page
app.get('/', (req, res) => {
    db.Place.find()
        .then( places => res.render('home', { places }) );
});

// 404 page
app.get('*', (req, res) => {
    res.status(404).render('error404');
});

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});