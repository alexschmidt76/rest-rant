const db = require('../models');

async function seed() {
    // get the place
    let place = await db.Place.findOne({ name: 'H-Thai-ML' });

    // fake example comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    });

    // add comment to place's comments
    place.comments.push(comment.id);

    // save the place
    await place.save();

    // exit program
    process.exit();
}

seed();