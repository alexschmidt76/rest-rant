const router = require('express').Router();

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg'
        // Photo by <a href="https://unsplash.com/@jomemui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jerome Jome</a> on <a href="https://unsplash.com/s/photos/thai-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
        // Photo by <a href="https://unsplash.com/@justinveenema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Justin Veenema</a> on <a href="https://unsplash.com/s/photos/caffe-cats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      }];
    res.render('places/index', { places });
});

module.exports = router;