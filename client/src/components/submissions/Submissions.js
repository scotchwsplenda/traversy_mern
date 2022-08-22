import React, { Fragment, useEffect, useState } from 'react';
import options from '../../NFL_Schedule2022.json'
import Submission from './Submission';
const axios = require('axios');

const keys = Object.keys(options);

const Newguess = () => {
  const [data, setData] = useState({})
  // const funky = axios.get('/api/submissions', { headers: { 'Content-Type': 'application/JSON' } })
  useEffect(() => {
    getData('http://localhost:5000/api/submissions').then((data) => {
          console.log(data);
    })

  }, [])

  const getData = async (url = '', data = {}) => {
    // Example POST method implementation:

    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response)
    debugger
    return response.json(); // parses JSON response into native JavaScript objects

  }

  return (<div> </div>)
}
export default Newguess;