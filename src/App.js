import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Facilities from './components/pages/Facilities';
import Programs from './components/pages/Programs';
import Team from './components/pages/Team';
import Footer from './components/Footer'
import Tournaments from './components/pages/Tournaments'
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Facilities' component={Facilities} />
          <Route path='/Programs' component={Programs} />
          <Route path='/Team' component={Team} />
          <Route path='/Tournaments' component={() => { 
     window.location.href = 'https://playtennis.usta.com/tournaments?location=On%20Serve'; 
     return null;
}}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

