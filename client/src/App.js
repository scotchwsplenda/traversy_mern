import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Submissions from './components/submissions/Submissions2';
import Newguess2 from './components/guesses/Newguess2';
import About from './components/layout/about';
import Accuracy from './components/accuracy/Accuracy2';
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
          <Route exact path='/submissions' component={Submissions} ></Route>
          <Route exact path='/about' component={About} ></Route>
          <Route exact path='/accuracy' component={Accuracy} ></Route>
        </Switch>
      </section>
    </Fragment>
  </Router>

);


export default App;
