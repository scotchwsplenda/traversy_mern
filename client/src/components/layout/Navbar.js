import React from 'react'


const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
        <h1>
          <a href="/"><i className="fa-solid fa-football"></i> NFL Guesser</a>
        </h1>
        <ul>
          <li><a href="profiles.html">Developers</a></li>
          <li><a href="register.html">Register</a></li>
          <li><a href="guess">Guess</a></li>

        </ul>
      </nav>
    )
}

export default Navbar