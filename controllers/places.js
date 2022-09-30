const router = require('express').Router();

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai-food.jpg',
        picAuthor: 'Jerome Jome',
        picAuthorCredit: 'https://unsplash.com/@jomemui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        picSiteCredit: 'https://unsplash.com/s/photos/thai-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg',
        picAuthor: 'Justin Veenema',
        picAuthorCredit: 'https://unsplash.com/@justinveenema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        picSiteCredit: 'https://unsplash.com/s/photos/caffe-cats?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
      }];
    res.render('places/index', { places });
});

module.exports = router;