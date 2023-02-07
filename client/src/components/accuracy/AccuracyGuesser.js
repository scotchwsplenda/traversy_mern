import React, {useState} from "react";
import OverUnders from '../../NFL_OverUnder_2022.json'
import Spreads from '../../NFL_Spread_2022.json'

const AccuracyGuesser = (props) => {


    return (<div className="profile-grid" key={index}> 
    <h1> Guess Name: {item.guessername}</h1>
    <div className='profile-top'>
      <h4>Submitted: {item.date} </h4>
      </div>
        <table> 
          <tr><th>Actual Spread</th><th>GuessedSpread</th><th>Actual OvUnd</th></tr>
          <td>
         {/* {Spreads[drop].map(reptile  => (<tr key={reptile}>{reptile}</tr> ) )}    */}
         </td>
         <td>
         {guesserspread.map(reptile => (<tr key={reptile}>{reptile}</tr> ))}   
         </td>
        <td>
         {Spreads[team].map(gull => (<tr key={gull}>{gull}</tr>))} 
         </td>
        </table>    
      </div>
)
}


export default AccuracyGuesser;