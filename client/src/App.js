import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Guess from './components/guesses/Guess';
import Newguess from './components/guesses/Newguess';
import './App.css';

const App = () => (

  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path='/' component={Landing} ></Route>
      <section className='container'>
        <Switch>
          <Route exact path='/guess' component={Newguess} ></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>

);


export default App;
