import React, { Fragment, useState } from 'react';
import options from '../../NFL_Schedule2022.json'
import Week from './Week';
import axios from 'axios';

// https://www.reactshark.com/blog/display-json-react


const keys = Object.keys(options);



const Newguess = () => {

  // const [inputs, BASICALLY RELOADS THE SCREEN WITH USER INPUT ] = React.useState({});
  const [inputs, setInputs] = useState({
    team: "Seahawks"
    , guessername: ""
  });


  // this one allows you to loop through the keys in the json file and then load it into the dropdown
  const optionItems = keys.map((item) =>
    <option value={item}>{item}</option>
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSaveWeekData = (enteredWeekData) => {
    const weekData = { ...enteredWeekData }
    // need to concatenate all the weekly guesses and the inputs into a single object but I can't get 'weekData' out of this function
    Object.assign(inputs, weekData)
    console.log(inputs)
  }

  const handleSubmit = async event => {
    event.preventDefault();

    // console.log(inputs)
    const guessy = {
      guessername: inputs.guessername
      , team: inputs.team
      ,email: inputs.email
      , Week1_oppscore: inputs.Week1_oppscore
      , Week2_oppscore: inputs.Week2_oppscore
      , Week3_oppscore: inputs.Week3_oppscore
      , Week4_oppscore: inputs.Week4_oppscore
      , Week5_oppscore: inputs.Week5_oppscore
      , Week6_oppscore: inputs.Week6_oppscore
      , Week7_oppscore: inputs.Week7_oppscore
      , Week8_oppscore: inputs.Week8_oppscore
      , Week9_oppscore: inputs.Week9_oppscore
      , Week10_oppscore: inputs.Week10_oppscore
      , Week11_oppscore: inputs.Week11_oppscore
      , Week12_oppscore: inputs.Week12_oppscore
      , Week13_oppscore: inputs.Week13_oppscore
      , Week14_oppscore: inputs.Week14_oppscore
      , Week15_oppscore: inputs.Week15_oppscore
      , Week16_oppscore: inputs.Week16_oppscore
      , Week17_oppscore: inputs.Week17_oppscore
      , Week18_oppscore: inputs.Week18_oppscore
      , Week1_teamscore: inputs.Week1_teamscore
      , Week2_teamscore: inputs.Week2_teamscore
      , Week3_teamscore: inputs.Week3_teamscore
      , Week4_teamscore: inputs.Week4_teamscore
      , Week5_teamscore: inputs.Week5_teamscore
      , Week6_teamscore: inputs.Week6_teamscore
      , Week7_teamscore: inputs.Week7_teamscore
      , Week8_teamscore: inputs.Week8_teamscore
      , Week9_teamscore: inputs.Week9_teamscore
      , Week10_teamscore: inputs.Week10_teamscore
      , Week11_teamscore: inputs.Week11_teamscore
      , Week12_teamscore: inputs.Week12_teamscore
      , Week13_teamscore: inputs.Week13_teamscore
      , Week14_teamscore: inputs.Week14_teamscore
      , Week15_teamscore: inputs.Week15_teamscore
      , Week16_teamscore: inputs.Week16_teamscore
      , Week17_teamscore: inputs.Week17_teamscore
      , Week18_teamscore: inputs.Week18_teamscore
    }
    try {
      const config = {
        headers:
        {
          'Content-Type': 'application/JSON'
        }
      }
      const body = JSON.stringify(guessy);

      const res = await axios.post('api/guess', body, config)
      window.location = '/submissions'
      console.log(res)
    }
    catch (err) { }
    // return <Redirect to='/submissions'/>
    // console.log(guessy)
  }

  return <Fragment>

    <form onSubmit={handleSubmit} >
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

        <label className='post profile-about2'>Please give your guess a name*
          <input
          className='post profile-input'
            type='text'
            name="guessername"
            value={[inputs.guessername]}
            onChange={handleChange}
            required='true' />
        </label>
        <p>'This name must be unique and ideally something you'll remember. It doesn't necessarily have to be your name but please not too naughty</p>
        <label className='post profile-about2'>Please provide me an email address*
          <input
          className='post profile-input'
            type='text'
            name="email"
            value={[inputs.email]}
            onChange={handleChange} 
            required='true' />
        </label>
        <p>*Around mid January I'll remind you to compare your guesses against what happened in the season, which is kinda the point of this whole deal</p>
      </div>
      <p>--For all you jokers out there, the max guessable score is 69--</p>
      <div className="wrapper">
        {/* action="/guess" */}
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][0]} team={inputs.team} weeky="1" oppscore='Week1_oppscore' teamscore='Week1_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][1]} team={inputs.team} weeky="2" oppscore='Week2_oppscore' teamscore='Week2_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][2]} team={inputs.team} weeky="3" oppscore='Week3_oppscore' teamscore='Week3_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][3]} team={inputs.team} weeky="4" oppscore='Week4_oppscore' teamscore='Week4_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][4]} team={inputs.team} weeky="5" oppscore='Week5_oppscore' teamscore='Week5_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][5]} team={inputs.team} weeky="6" oppscore='Week6_oppscore' teamscore='Week6_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][6]} team={inputs.team} weeky="7" oppscore='Week7_oppscore' teamscore='Week7_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][7]} team={inputs.team} weeky="8" oppscore='Week8_oppscore' teamscore='Week8_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][8]} team={inputs.team} weeky="9" oppscore='Week9_oppscore' teamscore='Week9_teamscore' ></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][9]} team={inputs.team} weeky="10" oppscore='Week10_oppscore' teamscore='Week10_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][10]} team={inputs.team} weeky="11" oppscore='Week11_oppscore' teamscore='Week11_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][11]} team={inputs.team} weeky="12" oppscore='Week12_oppscore' teamscore='Week12_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][12]} team={inputs.team} weeky="13" oppscore='Week13_oppscore' teamscore='Week13_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][13]} team={inputs.team} weeky="14" oppscore='Week14_oppscore' teamscore='Week14_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][14]} team={inputs.team} weeky="15" oppscore='Week15_oppscore' teamscore='Week15_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][15]} team={inputs.team} weeky="16" oppscore='Week16_oppscore' teamscore='Week16_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][16]} team={inputs.team} weeky="17" oppscore='Week17_oppscore' teamscore='Week17_teamscore'></Week>
        <Week onSaveWeekData={handleSaveWeekData} tix={options[inputs.team][17]} team={inputs.team} weeky="18" oppscore='Week18_oppscore' teamscore='Week18_teamscore'></Week>

        <button className="btn btn-primary" type="submit" >Submit</button>

      </div>
    </form>


  </Fragment>
}

export default Newguess;