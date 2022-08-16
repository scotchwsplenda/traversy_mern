import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Newguess from './components/guesses/Newguess';
import Newguess2 from './components/guesses/Newguess2';
import './App.css';

const App = () => (

  <Router>
    <Fragment>
      <Navbar/>
      <Route exact path='/' component={Landing} ></Route>
      <section className='container'> 
      {/* this switch / route is where you associate a url with a component */}
        <Switch>
          <Route exact path='/guess' component={Newguess2} ></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>

);


export default App;
