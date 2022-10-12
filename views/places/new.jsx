const React = require('react');
const Def = require('../default');

function new_form() {
    // format a list of each state name for a <select></select> dropdown menu
    let stateList = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
    let stateOptionsFormatted = stateList.map( state => <option value={state} key={state}>{state}</option> );
    // show a form used to add a new place
    return (
        <Def title='Add a New Place - REST-rant'>
            <main>
                <h1>Add a New Place</h1>
                <form method='POST' action='/places'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input className='form-control' id='name' name='name' required/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture (URL)</label>
                            <input className='form-control' type='url' id='pic' name='pic'/>
                        </div>
                    </div>  
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input className='form-control' id='city' name='city'/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <select className='form-control' id='state' name='state'>
                                <option value='none' selected disabled hidden>Select an Option</option>
                                {stateOptionsFormatted}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input className='form-control' id='cuisines' name='cuisines' required/>
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='founded'>Year Founded</label>
                            <input className='form-control' id='founded' name='founded' type='number' value={new Date().getFullYear()}/>
                        </div>
                    </div>
                    <input className='btn btn-primary new-btn' type='submit' value='Add Place'/>
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;