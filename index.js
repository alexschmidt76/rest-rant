// Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Controllers and Routs
// places controller
app.use('/places', require('./controllers/places'));

// home page
app.get('/', (req, res) => {
    res.render('home');
});

// 404 page
app.get('*', (req, res) => {
    res.status(404).render('error404');
});

// Listen for Connections
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});