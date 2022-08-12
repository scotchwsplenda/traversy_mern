import React, { Fragment } from 'react';
import options from '../../NFL_Schedule2022.json'

// https://www.reactshark.com/blog/display-json-react

const Newguess = () => {

  

return <Fragment>
    <div class="wrapper">
    <form class="form" action="create-profile.html">

        <div>
        <input type="email" placeholder="Email Address" name="email" />
        </div>

        <div class="form-group">
        <h2>{options["Seattle Seahawks"][0]}</h2>
        <input type="number" placeholder="Week 1 ${opponent} score"/>
        <input type="text" placeholder='Week 1 opponent score'/>
        </div>


    <div>
        <div>
      <label>
        What do we eat?
        <select >
        <option value='Seahawks'>Seahawks</option>
        <option value='Cardinals'>Cardinals</option>
        <option value='Falcons'>Falcons</option>
        <option value='Ravens'>Ravens</option>
        <option value='Bills'>Bills</option>
        <option value='Panthers'>Panthers</option>
        <option value='Bears'>Bears</option>
        <option value='Bengals'>Bengals</option>
        <option value='Browns'>Browns</option>
        <option value='Cowboys'>Cowboys</option>
        <option value='Broncos'>Broncos</option>
        <option value='Lions'>Lions</option>
        <option value='Packers'>Packers</option>
        <option value='Texans'>Texans</option>
        <option value='Colts'>Colts</option>
        <option value='Jaguars'>Jaguars</option>
        <option value='Chiefs'>Chiefs</option>
        <option value='Chargers'>Chargers</option>
        <option value='Rams'>Rams</option>
        <option value='Raiders'>Raiders</option>
        <option value='Dolphins'>Dolphins</option>
        <option value='Vikings'>Vikings</option>
        <option value='Saints'>Saints</option>
        <option value='Patriots'>Patriots</option>
        <option value='Giants'>Giants</option>
        <option value='Jets'>Jets</option>
        <option value='Eagles'>Eagles</option>
        <option value='Steelers'>Steelers</option>
        <option value='49ers'>49ers</option>
        <option value='Buccaneers'>Buccaneers</option>
        <option value='Titans'>Titans</option>
        <option value='Commandos'>Commandos</option>
        </select>
      </label>
      </div>
    </div>


    </form>
    </div>




</Fragment>

}

export default Newguess;