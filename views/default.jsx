const React = require('react');
const db = require('../models');

function Def(html) {
    // get places array from db for dropdown menu in navbar
    let places = html.places;
    let placesFormatted = places.map( place => <a className='dropdown-item' href={`/places/${place.id}`} key={place.id}>{place.name}</a> );
    // default html with navbar for every page
    return (
        <html>
            <head>
                <title>{html.title || 'REST-rant'}</title>
                <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body>
                <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container'>
                    <a className='navbar-brand' href='/'>REST-rant</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <a className='nav-link' href='/'>Home</a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a className='nav-link dropdown-toggle' href='/places' id='navbarDropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                                    Places
                                </a>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
                                    <a className='dropdown-item' href='/places'>All Places</a>
                                    <div className='dropdown-divider'></div>
                                    {placesFormatted}
                                </div>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/places/new'>Add Place</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Rate your favorite restaraunt today!
                        </span>
                    </div>
                </div>
                </nav>
                {html.children}
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
            </body>
        </html>
    );
}

module.exports = Def;