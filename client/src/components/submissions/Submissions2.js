import React, { useEffect, useState, Fragment } from 'react';
import options from '../../NFL_Schedule2022.json'
const axios = require('axios');


// https://www.geeksforgeeks.org/how-to-map-data-into-components-using-reactjs/
const Newguess = () => {

  const baseURL = "api/submissions";

  const [post, setPost] = useState([""]);

  const [teamy, setTeam] = useState(["Seahawks"]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    } );
    
  }, []);
  // console.log(post)
  const allGuesses = post.map((item, index) => {
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



    return <div className="profile-grid" key={index}>
      <h1> {item.guessername}</h1>
      <h2 > {item.team} </h2>
      <h3> Wins: {x}</h3>
      <h3> Losses: {17 - x}</h3>
    </div>
  })
  const keys = Object.keys(options);
  const optionItems = keys.map((item) =>
    <option value={item}>{item}</option>
  );

  // if (!post) return null;
  // const optionItems = post.map((item, index) =>{
  //     return <li value={index}>{item}</li>}
  // );
  const handleChange = (event) => {
    setTeam(event.target.value);

    console.log(teamy)
  }

  // const filteredallGuesses = allGuesses.filter(team===teamy)
    // console.log(filteredallGuesses)

  return (<Fragment>
<div >


    <label className='post profile-about2'>
    What team do you care to guess upon?
    <select classnName="post profile-input"
    value={teamy}
    onChange={handleChange}>
      {optionItems}
    </select>
  </label>
  </div>


    <div className="wrapper">
      {allGuesses}

    </div>
    </Fragment>
  );
}
export default Newguess;