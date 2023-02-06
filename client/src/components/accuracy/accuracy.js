import React, { useEffect, useState, Fragment } from 'react';
import options from '../../NFL_Schedule2022.json'
const axios = require('axios');

const keys = Object.keys(options);



const Accuracy = () => {
  // const [inputs, BASICALLY RELOADS THE SCREEN WITH USER INPUT ] = React.useState({});
  const [inputs, setInputs] = useState({
    team: "Seahawks"
  });


  // this one allows you to loop through the keys in the json file and then load it into the dropdown
  const optionItems = keys.map((item) =>
    <option value={item}>{item}</option>
  );

// this one makes the option bar stick with whatever you chose
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const baseURL = "api/submissions";


  return <Fragment>


      <div>
        <label className='post profile-about2'>
          What team do you care to guess upon?
          <select classnName="post profile-input"
            value={[inputs.team]}
            onChange={handleChange}
            name='team'
            type='text'
            font-size='24px'
          
            >
            {optionItems}
          </select>
        </label>
        </div>
        </Fragment> 

}

export default Accuracy
