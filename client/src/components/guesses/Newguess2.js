import React, { Fragment, useState } from 'react';
import options from '../../NFL_Schedule2022.json'
import Week from './Week';

// https://www.reactshark.com/blog/display-json-react


const keys = Object.keys(options);

const Newguess = () => {


// const [inputs, BASICALLY RELOADS THE SCREEN WITH USER INPUT ] = React.useState({});
  const [inputs, setInputs] = React.useState({
    team : "Seahawks"
    , guessername: ""
  });

  
// this one allows you to loop through the keys in the json file and then load it into the dropdown
  const optionItems = keys.map((item) =>
      <option value={item}>{item}</option>
  );

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSaveWeekData = (enteredWeekData) => {
    const weekData = {
      ...enteredWeekData};
    console.log(weekData)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs)
  }

return <Fragment>

    <form onSubmit={handleSubmit}>  
              <div>
              <label className='post profile-about'>
                Who Shall We Guess Upon?   
                <select classnName="profile-about" 
                value={[inputs.team]}  
                onChange={handleChange} 
                name='team' 
                type='text' 
                >
                {optionItems}
                </select>
              </label>
              
            <label> What be your name?
            <input 
              type='text'  
              name="guessername"
              value={[inputs.guessername]}  
              onChange={handleChange}  />
            </label>
            </div>
            
            <div className="wrapper">
    {/* action="/guess" */}
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][0]}   team={inputs.team} weeky="1"  oppscore = 'Week1_oppscore'  teamscore = 'Week1_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][1]}   team={inputs.team} weeky="2"  oppscore = 'Week2_oppscore'  teamscore = 'Week2_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][2]}   team={inputs.team} weeky="3"  oppscore = 'Week3_oppscore'  teamscore = 'Week3_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][3]}   team={inputs.team} weeky="4"  oppscore = 'Week4_oppscore'  teamscore = 'Week4_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][4]}   team={inputs.team} weeky="5"  oppscore = 'Week5_oppscore'  teamscore = 'Week5_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][5]}   team={inputs.team} weeky="6"  oppscore = 'Week6_oppscore'  teamscore = 'Week6_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][6]}   team={inputs.team} weeky="7"  oppscore = 'Week7_oppscore'  teamscore = 'Week7_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][7]}   team={inputs.team} weeky="8"  oppscore = 'Week8_oppscore'  teamscore = 'Week8_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][8]}   team={inputs.team} weeky="9"  oppscore = 'Week9_oppscore'  teamscore = 'Week9_teamscore' ></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][9]}   team={inputs.team} weeky="10" oppscore = 'Week10_oppscore' teamscore = 'Week10_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][10]}  team={inputs.team} weeky="11" oppscore = 'Week11_oppscore' teamscore = 'Week11_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][11]}  team={inputs.team} weeky="12" oppscore = 'Week12_oppscore' teamscore = 'Week12_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][12]}  team={inputs.team} weeky="13" oppscore = 'Week13_oppscore' teamscore = 'Week13_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][13]}  team={inputs.team} weeky="14" oppscore = 'Week14_oppscore' teamscore = 'Week14_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][14]}  team={inputs.team} weeky="15" oppscore = 'Week15_oppscore' teamscore = 'Week15_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][15]}  team={inputs.team} weeky="16" oppscore = 'Week16_oppscore' teamscore = 'Week16_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][16]}  team={inputs.team} weeky="17" oppscore = 'Week17_oppscore' teamscore = 'Week17_teamscore'></Week>
    <Week onSaveWeekData={handleSaveWeekData} tix ={options[inputs.team][17]}  team={inputs.team} weeky="18" oppscore = 'Week18_oppscore' teamscore = 'Week18_teamscore'></Week>

    <p><button className="btn" type="submit" >Submit</button></p>

   </div>
    </form>

  
</Fragment>
}

export default Newguess;