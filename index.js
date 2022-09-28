// DEPENDENCIES
const express = require('express');

// CONFIGURATION
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();

// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ROUTES
// home page
app.get('/', (req, res) => {
    res.render('home');
});

// 404 page
app.get('*', (req, res) => {
    res.status(404).render('error404');
});

// Places
app.use('/places', require('./controllers/places'));

// LISTEN
app.listen(PORT, () => {
    console.log('connected');
});