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
                <div className='border col-sm-4' key={c.id}>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3><strong>- {c.author}</strong></h3>
                    <h4>Rating: {c.stars}/5</h4>
                    <form method='POST' action={`/places/${data.place.id}/comments/${c.id}?_method=DELETE`}>
                        <input type='submit' className='btn btn-danger' value='Delete Comment'/>
                    </form>
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
                <div className='row'>
                    {comments}
                </div>
                <hr/>
                <h3>Add a comment:</h3>
                <form method='POST' action={`/places/${data.place.id}/comment`}>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='content'>Comment</label>
                            <input className='form-control' name='content' id='content' type='text'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='author'>Author</label>
                            <input className='form-control' name='author' id='author' type='text'/>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='stars'>Star Rating</label>
                            <input className='form-control' name='stars' id='stars' type='number' defaultValue='2.5' min='0' step='0.5' max='5'/>
                        </div>
                        <div className='col-sm-4'>
                            <div className='form-group'>
                                <br/>
                                <label htmlFor='rant'>Rant?</label>
                                <br/>
                                <input className='' name='rant' id='rant' type='checkbox' width='10px'/>
                            </div>
                        </div>
                    </div>
                    <input className='btn btn-primary btn-new' type='submit' value='Add Comment'/>
                </form>
            </main>
        </Def>
    );
}

module.exports = show;