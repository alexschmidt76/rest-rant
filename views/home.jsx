const React = require('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main id='home'>
                <h1>REST-rant</h1>
                <p><b>
                    REST-rant is an app that lets you review restaraunts! <br/>
                    Not only that, but you can also add new restaraunts to review!
                </b></p>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/example-rest-1.jpg" alt="Example image of restaraunt"/>
                            <div className='carousel-caption d-none d-md-block'>
                                Photo by <a href="https://unsplash.com/@jaywennington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jay Wennington</a> on <a href="https://unsplash.com/s/photos/food-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/example-rest-2.jpg" alt="Example image of restaraunt"/>
                            <div className='carousel-caption d-none d-md-block'>
                                Photo by <a href="https://unsplash.com/@spencerdavis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Spencer Davis</a> on <a href="https://unsplash.com/s/photos/food-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/example-rest-3.jpg" alt="Example image of restaraunt"/>
                            <div className='carousel-caption d-none d-md-block'>
                                Photo by <a href="https://unsplash.com/@eddie2oh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edward Franklin</a> on <a href="https://unsplash.com/s/photos/food-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </a>
                </div>
                <h2>Check out the places you can review <a href='/places'>here</a>!</h2>
            </main>
        </Def>
    );
}

module.exports = home;