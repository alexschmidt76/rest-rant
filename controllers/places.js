const router = require('express').Router();
const places = require('../models/places.js');

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places });
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// POST /places
router.post('/', (req, res) => {
  // add default values if none are provided
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400';
  }
  if (!req.body.city) {
    req.body.city = 'Anytown';
  }
  if (!req.body.state) {
    req.body.state = 'USA';
  }
  places.push(req.body);
  res.redirect('/places');
});

module.exports = router;