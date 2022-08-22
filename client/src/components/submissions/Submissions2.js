import React, { useEffect, useState } from 'react';
const axios = require('axios');

// https://www.geeksforgeeks.org/how-to-map-data-into-components-using-reactjs/
const Newguess = () => {

  const baseURL = "api/submissions";

  const [post, setPost] = useState([""]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const allGuesses = post.map((item,index)=>{
    const record =[
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
      item.Week18_teamscore - item.Week18_oppscore, ];
    const x = record.filter(num => num > 0).length



  return <div key={index}>
     <h1> {item.guessername}</h1>
     <h2> {item.team}</h2>
     <h3> Wins: {x}</h3>
     <h3> Losses: {17-x}</h3>

     </div>
 })

  // if (!post) return null;
  // const optionItems = post.map((item, index) =>{
  //     return <li value={index}>{item}</li>}
  // );


  return (
    <div>
      {allGuesses} 


      {/* <p></p> */}
    </div>
  );
}
export default Newguess;