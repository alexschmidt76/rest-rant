const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main id="home">
                <h1>REST-rant</h1>
                <div id="home-img">
                    <img src="/images/french-toast.jpg" alt="French Toast with bananas and blueberries" />
                    <div>
                        Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <h2>Check out the places you can review <a href="/places">here</a>!</h2>
            </main>
        </Def>
    );
}

module.exports = home;