import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <a href="/"><i className="fa-solid fa-football"></i> NFL Guesser</a>
        </h1>
        <ul>
          <li><a href="submissions">Submissions</a></li>
          <li><a href="guess">Guess</a></li>
          <li><a href="about">About</a></li>
          <li><a href="accuracy">Accuracy</a></li>
        </ul>
      </nav>
    )
}

export default Navbar