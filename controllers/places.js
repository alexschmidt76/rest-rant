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
    res.render('places/show', { place: places[id], id });
  }
});

// GET /places/:id/edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404).render('error404');
  }else if (!places[id]) {
    res.status(404).render('error404');
  } else {
    res.render('places/edit', { place: places[id], id });
  }
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
router.put('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404).render('error404');
  } else if (!places[id]) {
    res.status(404).render('error404');
  } else {
    if (!req.body.pic) {
      req.body.pic = places[id].pic;
    }
    if (!req.body.city) {
      req.body.city = 'Anytown';
    }
    if (!req.body.state) {
      req.body.state = 'USA';
    }
    places[id] = req.body;
    res.redirect(`/places/${id}`)
  }
});

// DELETE /places/:id
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.status(404).render('error404');
  } else if (!places[id]) {
    res.status(404).render('error404');
  } else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

// DELETE /places/:id/rant/:rantId

module.exports = router;