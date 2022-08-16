import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link class='btn btn-primary' to="/guess">Play Ball!</Link>
            </div>
          </div>
      </section>
    )
}

export default Landing;