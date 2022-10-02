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

// GET /places/:id
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404).render('error404');
  } else if (!places[id]) {
    res.status(404).render('error404');
  } else {
    res.render('places/show', { place: places[id] });
  }
});

// GET /places/:id/edit
router.get('/:id/edit', (req, res) => {
  res.send(`/${req.params.id}/edit`);
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

// POST /places/:id/rant

// PUT /places/:id

// DELETE /places/:id/rant/:rantId

module.exports = router;