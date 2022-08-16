import React, { Fragment, useState } from 'react';
import options from '../../NFL_Schedule2022.json'
import Week from './Week';

// https://www.reactshark.com/blog/display-json-react


const keys = Object.keys(options);

const Newguess = () => {


// const [value, BASICALLY RELOADS THE SCREEN WITH USER INPUT ] = React.useState('Seahawks');
const [firstteam, setValue] = React.useState('Seahawks');
    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(event.target.value);
    };
  
// this one allows you to loop through the keys in the json file and then load it into the dropdown
    const optionItems = keys.map((item) =>
        <option value={item}>{item}</option>
    );

// just testing console log
    const buttFormSubmit = (event) => {
      console.log(event.target.value)}



return <Fragment>

    <form   name="buttform" id="buttform" onChange={buttFormSubmit} onSubmit={buttFormSubmit}>  
              <div>
              <label className='post profile-about'>
                Who Shall We Guess Upon?   
                <select classnName="profile-about" value={[firstteam]}  onChange={handleChange} >
                {optionItems}
                </select>
              </label>
              
            <label> What be your name?
            <input type='text'  name="guessername"/>
            </label>
            </div>
            
            <div className="wrapper">
    {/* action="/guess" */}
    <Week tix ={options[firstteam][0]}   team={firstteam} weeky="Week1" ></Week>
    <Week tix ={options[firstteam][1]}   team={firstteam} weeky="Week2" ></Week>
    <Week tix ={options[firstteam][2]}   team={firstteam} weeky="Week3" ></Week>
    <Week tix ={options[firstteam][3]}   team={firstteam} weeky="Week4" ></Week>
    <Week tix ={options[firstteam][4]}   team={firstteam} weeky="Week5" ></Week>
    <Week tix ={options[firstteam][5]}   team={firstteam} weeky="Week6" ></Week>
    <Week tix ={options[firstteam][6]}   team={firstteam} weeky="Week7" ></Week>
    <Week tix ={options[firstteam][7]}   team={firstteam} weeky="Week8" ></Week>
    <Week tix ={options[firstteam][8]}   team={firstteam} weeky="Week9" ></Week>
    <Week tix ={options[firstteam][9]}   team={firstteam} weeky="Week10" ></Week>
    <Week tix ={options[firstteam][10]}  team={firstteam} weeky="Week11" ></Week>
    <Week tix ={options[firstteam][11]}  team={firstteam} weeky="Week12" ></Week>
    <Week tix ={options[firstteam][12]}  team={firstteam} weeky="Week13" ></Week>
    <Week tix ={options[firstteam][13]}  team={firstteam} weeky="Week14" ></Week>
    <Week tix ={options[firstteam][14]}  team={firstteam} weeky="Week15" ></Week>
    <Week tix ={options[firstteam][15]}  team={firstteam} weeky="Week16" ></Week>
    <Week tix ={options[firstteam][16]}  team={firstteam} weeky="Week17" ></Week>
    <Week tix ={options[firstteam][17]}  team={firstteam} weeky="Week18" ></Week>
    {/* <Week tix ={options[value][18]}  team={value} Weeky="Week 18" ></Week> */}
    <p><button className="btn" type="submit" onSubmit={console.log()}>Submit</button></p>

   </div>
    </form>

  
</Fragment>
}

export default Newguess;