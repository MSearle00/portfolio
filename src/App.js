import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/aboutMe' component={AboutMe} />
          <Route path='/projects' component={Projects} />
          <Route path='/contactMe' component={ContactMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
