import React, { useEffect, useState, Fragment, MenuItem } from 'react';
import options from '../../NFL_Schedule2022.json'
import OverUnders from '../../NFL_OverUnder_2022.json'
import Spreads from '../../NFL_Spread_2022.json'
import axios from "axios"

const Accuracy = () => {

  const [post, setPost] = useState([""]);
  const [overundies, setOverundies] = useState([""]);
  const [spreadis, setSpreadis] = useState([""]);
  const [teamy, setTeam] = useState([{ team: "" }]);
  const [drop, setDrop] = useState("");

  const baseURL = "api/submissions";

  //this is how we get the data out of mongo
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      function custom_sort(a, b) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      setPost(response.data.sort(custom_sort)) //this is where the responses get loaded into an array or object or something 
    });
  }, []);

  const allGuesses = teamy.map( //this part breaks down all the mongodb guesses separated by guesser
    (item, index) => {
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
      const guesseroverund = [
        item.Week1_teamscore + item.Week1_oppscore,
        item.Week2_teamscore + item.Week2_oppscore,
        item.Week3_teamscore + item.Week3_oppscore,
        item.Week4_teamscore + item.Week4_oppscore,
        item.Week5_teamscore + item.Week5_oppscore,
        item.Week6_teamscore + item.Week6_oppscore,
        item.Week7_teamscore + item.Week7_oppscore,
        item.Week8_teamscore + item.Week8_oppscore,
        item.Week9_teamscore + item.Week9_oppscore,
        item.Week10_teamscore + item.Week10_oppscore,
        item.Week11_teamscore + item.Week11_oppscore,
        item.Week12_teamscore + item.Week12_oppscore,
        item.Week13_teamscore + item.Week13_oppscore,
        item.Week14_teamscore + item.Week14_oppscore,
        item.Week15_teamscore + item.Week15_oppscore,
        item.Week16_teamscore + item.Week16_oppscore,
        item.Week17_teamscore + item.Week17_oppscore,
        item.Week18_teamscore + item.Week18_oppscore]
      // try {
      // console.log({ ...spreadis }, "{...spreadis}")
      // console.log(guesserspread[Object.keys(guesserspread)[0]], "guesserspread[Object.keys(guesserspread)[0]]")

      // console.log(guesserspread, "guesserspread")
      // console.log(guesserspread[1], "guesserspread[1]")
      // console.log(typeof (guesserspread), "typeof guesserspread")

      // console.log({ ...guesserspread }, "{...guesserspread}")
      // const guesserspreadarray = { ...guesserspread }
      // console.log(guesserspreadarray, "guesserspreadarray")
      // console.log(Spreads[drop], "Spreads[drop]")
      // try {
      //   console.log(Spreads[drop][1], 'Spreads[drop][1]')
      // } catch (err) {
      //   console.log(err.message, 'Spreads[drop][1]');
      // }} catch (err) {console.log(err.message, "EGGS")}

      const outside = []
      outside.push(item.guessername)
      guesserspread.forEach((item, index) => {
        const actSpread = Spreads[drop][index]
        if (item * actSpread > 0) {
          const absy = Math.abs(item - actSpread)
          if (absy <= 3) { outside.push(100) }
          else if (absy <= 7) { outside.push(95) }
          else if (absy <= 10) { outside.push(90) }
          else if (absy <= 14) { outside.push(85) }
          else if (absy <= 21) { outside.push(80) }
          else { outside.push(75) }
        }
        else { outside.push('bitt') }
      })

      console.log(outside)

      return (<div className="profile-grid" key={index}>
        <h1> Guess Name: {item.guessername}</h1>
        <div className='profile-top'>
          <h4>Submitted: {item.date} </h4>
        </div>
        <table>
          <tr><th>WK</th><th>GuessedSpread</th><th>ActualSpread</th><th>GuessedOvUn</th><th>ActualOvUnd</th></tr>
          {guesserspread.map((x, i) => {
            return <tr><td>WK{i + 1}</td><td>{x}</td><td>{Spreads[drop][i]}</td><td>{guesseroverund[i]}</td><td>{OverUnders[drop][i]}</td></tr>
          })}
        </table>
      </div>
      )
    })


  // this block is 3 consecutive commands
  options = { "Pick Team": "", ...options } //spreading out everything in the NFL_Schedule2022 file, add a 'pick team' key with a blank value
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
