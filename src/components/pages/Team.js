import React from 'react';
import '../../App.css';
export default function Product() {
  return (
    <>
      <h1 id="teamTitle">Meet The Team</h1>
      <div className="containerTeam">
      <div className="wrapperTeam">
        <img src='images/raza.jpeg' alt='Raza Baig - On Serve Tennis' className="team-img"></img>
        <div className="textTeam">
          <h2>Raza Baig</h2>
          <h3>Director of Tennis</h3>
          <p>Raza Baig has been head coach at Ramapo college for over 12 years.Coach Baig took over the tennis programs at Ramapo after serving as the Interim Head Coach for the Fall 2009 and Spring 2010 seasons.  
            Prior to serving in the interim position, Baig was an assistant coach with both programs for two years. 
            Coach Baig attended Allegheny College where he was a member of the tennis team in both singles and doubles play for three years.  
            He is a certified professional certified by both the USPTA and the USNTA.  Coach Baig has been teaching professionally for 13 years</p>
        </div>
      </div>
      <div className="wrapperTeam">
        <img src='images/Prasanna.jpg' alt='Luke Granger - GG Tennis Academy' className="team-img"></img>
        <div className="textTeam">
          <h2>Prasanna Fernando</h2>
          <h3>Head Pro</h3>
          <p>Coach Prasanna Fernando enters his ninth season as an assistant tennis coach at Ramapo College. Fernando was a four-year standout for the Roadrunners from 2007-2011.
            Since 2011, Fernando has been a local tennis teaching pro in the surrounding area while he played at the USTA Pro Circuit event hosted by the University of Southern California in 2015.
            Fernando was a high performance tennis coach at Elevation Tennis from 2014-2016 while he was also a hitting partner for top juniors and pros from 2012-2016.</p>
        </div>
      </div>
      </div>
    </>

  );
}
