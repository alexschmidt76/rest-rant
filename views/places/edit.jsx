const React = require('react');
const Def = require('../default.jsx');

function edit_form(data) {
    let stateList = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    let stateOptionsFormatted = stateList.map( state => {
        return (
            state == data.place.state ?
            <option value={state} key={state} selected>{state}</option> :
            <option value={state} key={state}>{state}</option> 
        );
    });
    return (
        <Def>
            <main>
                <h1>Edit {data.place.name}</h1>
                <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required defaultValue={data.place.name}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture</label>
                            <input className='form-control' type='url' id='pic' name='pic'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city' defaultValue={data.place.city}/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <select className='form-control' id='state' name='state'>
                                {stateOptionsFormatted}
                            </select>
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='cuisines'>Cuisines</label>
                        <input className='form-control' id='cuisines' name='cuisines' required defaultValue={data.place.cuisines}/>
                    </div>
                    <input className='btn btn-primary new-btn' type='submit' value='Add Place'/>
                </form>
            </main>
        </Def>
    );
}

module.exports = edit_form;