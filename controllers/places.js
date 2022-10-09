const router = require('express').Router();
const db = require('../models');

// GET /places
router.get('/', (req, res) => {
  db.Place.find()
    .then( places => {
      res.render('places/index', { places });
    })
    .catch( err => {
      console.log('err', err);
      res.status(404).render('error404');
    });
});

// POST /places
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then( () => {
      res.redirect('/places');
    })
    .catch( err => {
      console.log('err', err);
      res.status(404).render('error404');
    });
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET /places/:id
router.get('/:id', (req, res) => {
  res.send('GET /places/:id stub');
});

// PUT /places/:id
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub');
});

// DELETE /places/:id
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub');
});

// GET /places/:id/edit
router.get('/:id/edit', (req, res) => {
  res.send('GET /places/:id/edit stub');
});

// POST /places/:id/rant
router.post('/:id/rant', (req, res) => {
  res.send('POST /places/:id/rant stub');
});

// DELETE /places/:id/rant/:rantId
router.delete('/:id/rand/:randId', (req, res) => {
  res.send('DELETE /places/:id/rand/:randId stub');
});

module.exports = router;