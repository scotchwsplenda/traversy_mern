import React from 'react'
import {Link} from 'react-router-dom'
import Newguess from '../guesses/Newguess'

// https://contactmentor.com/react-dropdown-search-multi-select/#:~:text=The%20%E2%80%9Creact-select%E2%80%9D%20library%20provides%20custom%20select%20HTML%20input,properties%20which%20can%20be%20selected%20from%20the%20dropdown.

const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">NFL Guesser</h1>
            <p className="lead">
              Guess game scores for the upcoming NFL season
            </p>
              {/* <div class="dropdown">
                <button>HubSpot Resources</button>
                <div class="dropdown-content">
                <Link to="/guess" class="btn-white">Make Your Guess </Link>
                <a class="btn-white" href="https://academy.hubspot.com/">Academy</a>
                <a href="https://www.youtube.com/user/hubspot">YouTube</a>
                </div>
              </div> */}
            <div>
              <label>
                What do we eat?
                <select>
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
          </div>
      </section>
    )
}

export default Landing;