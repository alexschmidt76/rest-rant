const React = require('react');
const Def = require('../default');

function show(data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    );
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce( (tot, c) => {
            return tot + c.stars;
        }, 0);
        let averageRating = Math.round(sumRatings / data.place.comments.length);
        let stars = '';
        for (let i = 0; i < averageRating; i++) {
            stars += '*';
        }
        rating = (
            <h3>
                {stars}
            </h3>
        )
        comments = data.place.comments.map( c => {
            return (
                <div className='border' key={c.id}>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                    <h4>Rating: {c.stars}/5</h4>
                </div>
            );
        });
    }
    return (
        <Def title={`${data.place.name} - REST-rant`}>
            <main id='show-page'>
                <h1>{data.place.name}</h1>
                <p>{data.place.showEstablished()}</p>
                <div className='row' id='show-div'>
                    <div className='col-sm-8'>
                        <img src={data.place.pic} alt={data.place.name}/>
                    </div>
                    <div className='col-sm-4'>
                        <div id='place-rating'>
                            <h2>Rating</h2>
                            {rating}
                        </div>
                        <div id='place-description'>
                            <h2>Description</h2>
                            <p className='text-center'>
                                {data.place.name} is located in {data.place.city}, {data.place.state}. <br/>
                                They serve {data.place.cuisines}.
                            </p>
                        </div>
                        <div id='edit-delete-btn-container'>
                            <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>Edit</a>
                            <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
                                <input type='submit' className='btn btn-danger' value={'Delete'}/>
                            </form>
                        </div>
                    </div>
                </div>
                <hr/>
                <h2>Comments</h2>
                {comments}
                <h3>Add a comment:</h3>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                    <label htmlFor='author'>Author:</label>
                    <input name='author' id='author' type='text'/>
                    <label htmlFor='content'>Comment:</label>
                    <input name='content' id='content' type='text'/>
                    <label htmlFor='stars'>Star Rating</label>
                    <input name='stars' id='stars' type='number' min='0' step='0.5' max='5'/>
                    <label htmlFor='rant'>Rant</label>
                    <input name='rant' id='rant' type='checkbox'/>
                    <input type='submit'/>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;