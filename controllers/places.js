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
      if (err && err.name == 'ValidationError') {
        let message = 'Validation Error: ';
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        res.render('places/new', {message, body: req.body});
      } else {
        res.status(404).render('error404');
      }
    });
});

// GET /places/new
router.get('/new', (req, res) => {
  res.render('places/new');
});

// GET /places/:id
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then( place => {
      res.render('places/show', { place })
    })
    .catch( err => {
      console.log('err', err);
      res.status(404).render('error404');
    });
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

// POST /places/:id/comment
router.post('/:id/comment', (req, res) => {
  console.log(req.body);
  req.body.rant = req.body.rant ? true : false;
  db.Place.findById(req.params.id)
    .then( place => {
      db.Comment.create(req.body)
        .then( comment => {
          place.comments.push(comment.id);
          place.save()
            .then( () => res.redirect(`/places/${req.params.id}`) );
        })
        .catch( err => res.status(404).render('error404'));
    })
    .catch( err => res.status(404).render('error404'));
});

// DELETE /places/:id/comment/:commentId
router.delete('/:id/rand/:randId', (req, res) => {
  res.send('DELETE /places/:id/rand/:randId stub');
});

module.exports = router;