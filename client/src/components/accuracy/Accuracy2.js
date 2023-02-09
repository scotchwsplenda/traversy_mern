import React, { useEffect,  useState, Fragment , MenuItem} from 'react';
import options from '../../NFL_Schedule2022.json'
import OverUnders from '../../NFL_OverUnder_2022.json'
import Spreads from '../../NFL_Spread_2022.json'
import axios from "axios"
// const axios = require('axios');

/*

the actual OvUnd column grows by a weird amount, divisible by 3, then you switch between teams

*/

const Accuracy = () => {

  const [post, setPost] = useState([""]);
  const [overundies, setOverundies] = useState([""]);
  const [spreadis, setSpreadis] = useState([""]);
  const [teamy, setTeam] = useState([{ team : ""  }]);
  const [drop, setDrop] = useState([""]);

  const baseURL = "api/submissions";

//this is how we get the data out of mongo
  useEffect(() => {
  axios.get(baseURL).then((response) => {
  function custom_sort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime() ;} 
  setPost(response.data.sort(custom_sort)) //this is where the responses get loaded into an array or object or something 
  });}, []);


//maybe you can define the actual spreads outside the per guesser mapping and for a for in range of 18 type thing inside the table?
const realspread = spreadis
  const allGuesses =  teamy.map( //this part breaks down all the mongodb guesses separated by guesser
    (item, index) => { 
      console.log(index, "BIKE")
//this is the spread by guesser
  const guesserspread = [ 
    item.Week1_teamscore - item.Week1_oppscore,
    item.Week2_teamscore - item.Week2_oppscore,
    item.Week3_teamscore - item.Week3_oppscore,
    item.Week4_teamscore - item.Week4_oppscore,
    item.Week5_teamscore - item.Week5_oppscore,
    item.Week6_teamscore - item.Week6_oppscore,
    item.Week7_teamscore - item.Week7_oppscore,
    item.Week8_teamscore - item.Week8_oppscore,
    item.Week9_teamscore - item.Week9_oppscore,
    item.Week10_teamscore - item.Week10_oppscore,
    item.Week11_teamscore - item.Week11_oppscore,
    item.Week12_teamscore - item.Week12_oppscore,
    item.Week13_teamscore - item.Week13_oppscore,
    item.Week14_teamscore - item.Week14_oppscore,
    item.Week15_teamscore - item.Week15_oppscore,
    item.Week16_teamscore - item.Week16_oppscore,
    item.Week17_teamscore - item.Week17_oppscore,
    item.Week18_teamscore - item.Week18_oppscore]


// how do I put these all inside something so I can run it with one line and close it with the little carrot on the side?
// const sexy = 
    console.log({...spreadis},"{...spreadis}")
      console.log(guesserspread[Object.keys(guesserspread)[0]],"guesserspread[Object.keys(guesserspread)[0]]")

      console.log(guesserspread,"guesserspread")
      console.log(guesserspread[1],"guesserspread[1]")
      console.log(typeof(guesserspread),"typeof guesserspread")

      console.log({...guesserspread},"{...guesserspread}")
      const guesserspreadarray = {...guesserspread}
      console.log(guesserspreadarray,"guesserspreadarray")

      console.log(Spreads[drop], "Spreads[drop]")
      try {
        console.log(Spreads[drop][1], 'Spreads[drop][1]')
      } catch (err) {
        console.log(err.message, 'Spreads[drop][1]'); 
      }


      // THIS BUT IN THE HTML
      for (var i = 0; i < 3; i++) {
        try {
          console.log(Spreads[drop][i],guesserspread[i], Spreads[drop][i]+guesserspread[i],item.guessername)
        } catch (err) {
          console.log(err.message, 'Spreads[drop][1]'); 
        }

    }
    // Spreads[drop][i],guesserspread[i] this but for the calculation peice, bundled into a nice formula 


    // this part is the HTML subcomponent peice
    return (<div className="profile-grid" key={index}> 

    <h1> Guess Name: {item.guessername}</h1>
    <div className='profile-top'>
      <h4>Submitted: {item.date} </h4>
      </div>
        <table> 
          <tr><th>Actual Spread</th><th>GuessedSpread</th><th>Actual OvUnd</th></tr>
          <tr><td>{Spreads[drop][1]}</td><td>{guesserspread[1]}</td></tr>
          <tr><td>{Spreads[drop][2]}</td><td>{guesserspread[2]}</td></tr>
          <tr><td>{Spreads[drop][3]}</td><td>{guesserspread[3]}</td></tr>
          <tr><td>{Spreads[drop][4]}</td><td>{guesserspread[4]}</td></tr>
        </table>    
      </div>

    )
    }
  
    )

// this block is 3 consecutive commands
  options = {  "Pick Team": "",...options } //spreading out everything in the NFL_Schedule2022 file, add a 'pick team' key with a blank value
  const keys = Object.keys(options) //asking for only the key, which is the team name
  const optionItems = keys.map((item) => <option value={item}>{item}</option>); //mapping the team names as option lines in html

  const handleChange = (event) => {//event.target.value is the value of the team when you 'onChange', what is the magic that makes this work? like how does the computer know you changed it
    setTeam(post.filter(guess => guess.team === event.target.value)); //this filters the mongodb object to just the team you want
    setOverundies(OverUnders[event.target.value]);//this updates file source JSON to a filtered object, the key is the team you chose in the dropdown
    setSpreadis(Spreads[event.target.value]);
    setDrop(event.target.value) //this is just to update the dropdown bar so it stays after you click
  }



return <Fragment>
<div >
<label className='post profile-about2'>
  What team do you care to see butt guesses for?
  <select classnName="post profile-input"
    value={drop}
    onChange={handleChange}>
    {optionItems}
  </select>
</label>
</div>
  <div className="wrapper">
    {allGuesses}
  </div>
</Fragment> 
}


export default Accuracy
