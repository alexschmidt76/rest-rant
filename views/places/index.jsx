const React = require('react');
const Def = require('../default');

function index(data) {
    if (data.places.length > 0) {
        // format each place in col-sm-6 divs
        let placesFormatted = data.places.map( (place, index) => {
            return (
                <div className='col-sm-6' key={index}>
                    <div className="card">
                        <img className="card-img-top" src={place.pic} alt={place.name}/>
                        <div className="card-body">
                            <h5 className="card-title">{place.name}</h5>
                            <p className="card-text">Serves {place.cuisines}, located in {place.city}, {place.state}.</p>
                            <a href={`/places/${place.id}`} className="btn btn-primary">See Rants</a>
                        </div>
                    </div>
                </div>
            );
        });
        // build places page
        return (
            <Def title='REST-rant Places'>
                <main>
                    <h1>Places to Rant or Rave About</h1>
                    <div className='row'>
                        {placesFormatted}
                    </div>
                </main>
            </Def>
        );
    } else {
        return (
            <Def title='REST-rant Places'>
                <main>
                    <h1>Places to Rant or Rave About</h1>
                    Nothing to see here, for now!
                </main>
            </Def>
        );
    }
}

module.exports = index;