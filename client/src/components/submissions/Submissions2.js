import React, { useEffect, useState, Fragment } from 'react';
import options from '../../NFL_Schedule2022Submissions.json'
// const axios = require('axios');
import axios from "axios"


// https://www.geeksforgeeks.org/how-to-map-data-into-components-using-reactjs/
const Submissions = () => {

  const baseURL = "api/submissions";

  const [post, setPost] = useState([""]);

  const [teamy, setTeam] = useState([{ team : "Pick Team"  }]);

  const [drop, setDrop] = useState([""]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
    function custom_sort(a, b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime() ;
    } 
    setPost(response.data.sort(custom_sort))
    });

  }, []);
  // console.log(post)

  
 const allGuesses =  teamy.map((item, index) => {

    const record = [
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
      item.Week18_teamscore - item.Week18_oppscore,];
    const x = record.filter(num => num > 0).length

    const pf = [
      item.Week1_teamscore +
      item.Week2_teamscore +
      item.Week3_teamscore +
      item.Week4_teamscore +
      item.Week5_teamscore +
      item.Week6_teamscore +
      item.Week7_teamscore +
      item.Week8_teamscore +
      item.Week9_teamscore +
      item.Week10_teamscore +
      item.Week11_teamscore +
      item.Week12_teamscore +
      item.Week13_teamscore +
      item.Week14_teamscore +
      item.Week15_teamscore +
      item.Week16_teamscore +
      item.Week17_teamscore +
      item.Week18_teamscore]

    const pa = [
      item.Week1_oppscore +
      item.Week2_oppscore +
      item.Week3_oppscore +
      item.Week4_oppscore +
      item.Week5_oppscore +
      item.Week6_oppscore +
      item.Week7_oppscore +
      item.Week8_oppscore +
      item.Week9_oppscore +
      item.Week10_oppscore +
      item.Week11_oppscore +
      item.Week12_oppscore +
      item.Week13_oppscore +
      item.Week14_oppscore +
      item.Week15_oppscore +
      item.Week16_oppscore +
      item.Week17_oppscore +
      item.Week18_oppscore]

    return <div className="profile-grid" key={index}>
      <h1> Guess Name: {item.guessername}</h1>
      <h3>Avg Points Scored: {(pf / 17).toFixed(2)}</h3>
      <h3>Avg Points Allowed: {(pa / 17).toFixed(2)}</h3>
      <div className='profile-top'>
        <h4>Submitted: {item.date} </h4>
        <h3> Wins: {x}</h3>
        <h3> Losses: {17 - x}</h3>
      </div>
      <table>
        <tr>
          <th> Week </th>
          <th> Opp </th>
          <th> Score </th>
        </tr>
        <tr><td > Week 1 </td><td> {options[item.team][0]} </td><td> {item.Week1_teamscore} - {item.Week1_oppscore} </td></tr>
        <tr><td> Week 2 </td><td>  {options[item.team][1]} </td><td> {item.Week2_teamscore} - {item.Week2_oppscore} </td></tr>
        <tr><td> Week 3 </td><td>  {options[item.team][2]} </td><td> {item.Week3_teamscore} - {item.Week3_oppscore} </td></tr>
        <tr><td> Week 4 </td><td>  {options[item.team][3]} </td><td> {item.Week4_teamscore} - {item.Week4_oppscore} </td></tr>
        <tr><td> Week 5 </td><td>  {options[item.team][4]} </td><td> {item.Week5_teamscore} - {item.Week5_oppscore} </td></tr>
        <tr><td> Week 6 </td><td>  {options[item.team][5]} </td><td> {item.Week6_teamscore} - {item.Week6_oppscore} </td></tr>
        <tr><td> Week 7 </td><td>  {options[item.team][6]} </td><td> {item.Week7_teamscore} - {item.Week7_oppscore} </td></tr>
        <tr><td> Week 8 </td><td>  {options[item.team][7]} </td><td> {item.Week8_teamscore} - {item.Week8_oppscore} </td></tr>
        <tr><td> Week 9 </td><td>  {options[item.team][8]} </td><td> {item.Week9_teamscore} - {item.Week9_oppscore} </td></tr>
        <tr><td> Week 10 </td><td> {options[item.team][9]} </td><td> {item.Week10_teamscore} - {item.Week10_oppscore} </td></tr>
        <tr><td> Week 11 </td><td> {options[item.team][10]} </td><td> {item.Week11_teamscore} - {item.Week11_oppscore} </td></tr>
        <tr><td> Week 12 </td><td> {options[item.team][11]} </td><td> {item.Week12_teamscore} - {item.Week12_oppscore} </td></tr>
        <tr><td> Week 13 </td><td> {options[item.team][12]} </td><td> {item.Week13_teamscore} - {item.Week13_oppscore} </td></tr>
        <tr><td> Week 14 </td><td> {options[item.team][13]} </td><td> {item.Week14_teamscore} - {item.Week14_oppscore} </td></tr>
        <tr><td> Week 15 </td><td> {options[item.team][14]} </td><td> {item.Week15_teamscore} - {item.Week15_oppscore} </td></tr>
        <tr><td> Week 16 </td><td> {options[item.team][15]} </td><td> {item.Week16_teamscore} - {item.Week16_oppscore} </td></tr>
        <tr><td> Week 17 </td><td> {options[item.team][16]} </td><td> {item.Week17_teamscore} - {item.Week17_oppscore} </td></tr>
        <tr><td> Week 18 </td><td> {options[item.team][17]} </td><td> {item.Week18_teamscore} - {item.Week18_oppscore} </td></tr> 

      </table>

    </div>
  }   )


  options = { "Pick Team": "", ...options }
  const keys = Object.keys(options)
  const optionItems = keys.map((item) =>
    <option value={item}>{item}</option>
  );

  const pointsScored = teamy.reduce((accumulator, item) => {
    return accumulator
      + item.Week1_teamscore
      + item.Week2_teamscore
      + item.Week3_teamscore
      + item.Week4_teamscore
      + item.Week5_teamscore
      + item.Week6_teamscore
      + item.Week7_teamscore
      + item.Week8_teamscore
      + item.Week9_teamscore
      + item.Week10_teamscore
      + item.Week11_teamscore
      + item.Week12_teamscore
      + item.Week13_teamscore
      + item.Week14_teamscore
      + item.Week15_teamscore
      + item.Week16_teamscore
      + item.Week17_teamscore
      + item.Week18_teamscore
  }, 0);

  console.log(pointsScored)

  const pointsAllowed = teamy.reduce((accumulator, item) => {
    return accumulator
      + item.Week1_oppscore
      + item.Week2_oppscore
      + item.Week3_oppscore
      + item.Week4_oppscore
      + item.Week5_oppscore
      + item.Week6_oppscore
      + item.Week7_oppscore
      + item.Week8_oppscore
      + item.Week9_oppscore
      + item.Week10_oppscore
      + item.Week11_oppscore
      + item.Week12_oppscore
      + item.Week13_oppscore
      + item.Week14_oppscore
      + item.Week15_oppscore
      + item.Week16_oppscore
      + item.Week17_oppscore
      + item.Week18_oppscore
  }, 0);


  let tots = 0;
  teamy.forEach(item => {
    const record = [
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
      item.Week18_teamscore - item.Week18_oppscore,]
    const x = record.filter(num => num > 0).length
    tots = tots + x
  })




  const handleChange = (event) => {
    setTeam(post.filter(guess => guess.team === event.target.value));
    setDrop(event.target.value)
  }


  return (<Fragment>
    <div >


      <label className='post profile-about2'>
        What team do you care to see guesses for?
        <select classnName="post profile-input"
          value={drop}
          onChange={handleChange}>
          {optionItems}
        </select>
      </label>
    </div>
    <div className='post profile'>
      <div className='table'>
        <td>Avg Points Scored/Game: {((pointsScored / teamy.length) / 17).toFixed(2)}</td>
        <td> Avg Points Allowed/Game: {((pointsAllowed / teamy.length) / 17).toFixed(2)}</td>
        <td> Avg Wins: {(tots / teamy.length).toFixed(2)}</td>
        <td> Avg Losses: {(17 - (tots / teamy.length)).toFixed(2)}</td>
        <td> Total Guesses: {teamy.length}</td>
      </div>
    </div>

    <div className="wrapper">
      {allGuesses}
    </div>
  </Fragment>
  );
}
export default Submissions;