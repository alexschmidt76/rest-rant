const React = require('react');
const Def = require('../default');

function show(data) {
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
                            <p>Not yet rated.</p>
                        </div>
                        <div id='place-description'>
                            <h2>Description</h2>
                            <p className='text-center'>
                                {data.place.name} is located in {data.place.city}, {data.place.state}. <br/>
                                They serve {data.place.cuisines}.
                            </p>
                        </div>
                        <div id='edit-delete-btn-container'>
                            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
                            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                                <input type='submit' className='btn btn-danger' value={'Delete'}>
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <h2>Comments</h2>
                    <p>Nothing here yet!</p>
                </div>
            </main>
        </Def>
    );
}

module.exports = show;