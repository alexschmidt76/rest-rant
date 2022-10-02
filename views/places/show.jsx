const React = require('react');
const Def = require('../default');

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <p className='text-center'>
                    {data.place.cuisines}
                </p>
                <img src={data.place.pic} alt={data.place.name}/>
                <p className='text-center'>
                    Located in {data.place.city}, {data.place.state}
                </p>
            </main>
        </Def>
    );
}

module.exports = show;
