const React = require('react');
const Def = require('../default');
const stateList = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

function new_form(data) {
    // format a list of each state name for a <select></select> dropdown menu
    let stateListFormatted = [];
    // check for body to autopopulate on validation error
    if (data.body) {
        stateListFormatted = (
            stateList.map( state => {
                return (
                    data.body.state == state ?
                    <option value={state} key={state} selected>{state}</option> :
                    <option value={state} key={state}>{state}</option>
                )
            })
        );
    } else {
        let returnList = stateList.map( state => <option value={state} key={state}>{state}</option> );
        returnList.push(<option value='none' key={'select-an-option'} selected disabled hidden>Select an Option</option>);
        stateListFormatted = returnList;
    }
    // generate error messages if needed
    let message = '';
    if (data.message) {
        message = <h4 className='alert alert-danger'>{data.message}</h4>;
    }
    // show a form used to add a new place
    return (
        <Def title='Add a New Place - REST-rant' places={data.places}>
            <main>
                <h1>Add a New Place</h1>
                {message}
                <form method='POST' action='/places'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name</label>
                            <input 
                                className='form-control' 
                                id='name' 
                                name='name' 
                                defaultValue={data.body ? data.body.name : ''} 
                                required
                            />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture (URL)</label>
                            <input 
                                className='form-control' 
                                type='url'
                                id='pic' 
                                name='pic' 
                                defaultValue={data.body ? data.body.pic : ''}
                            />
                        </div>
                    </div>  
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City</label>
                            <input 
                                className='form-control' 
                                id='city' 
                                name='city' 
                                defaultValue={data.body ? data.body.city : ''}
                            />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State</label>
                            <select className='form-control' id='state' name='state'>
                                {stateListFormatted}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines</label>
                            <input 
                                className='form-control' 
                                id='cuisines' 
                                name='cuisines' 
                                required
                            />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='founded'>Year Founded</label>
                            <input 
                                className='form-control' 
                                id='founded' 
                                name='founded' 
                                type='number' 
                                defaultValue={new Date().getFullYear()}
                            />
                        </div>
                    </div>
                    <input className='btn btn-primary new-btn' type='submit' value='Add Place'/>
                </form>
            </main>
        </Def>
    );
}

module.exports = new_form;