import React from 'react';
import '../../App.css';
import styles from '../../App.css';
export default function Product() {
  return (
    <>
      <h1 id="programs-title">Our Programs</h1>
      <div className="containerPrograms">
      <div className="wrapperPrograms">
        <img src={process.env.PUBLIC_URL + "/images/adidascampimage.jpeg"} alt='On Serve Tennis' class="programsImage"></img>
        <div className="text-programs">
          <h2 class="programs-header">Junior Programs</h2>
          <p>We offer programs to all ages assuring each student gets comprehensive coaching and development, with a strong emphasis on having fun as welll.
          Our camp structure is tailored to students of all levels. </p>

          <h3 className="structure">Camp Structure</h3>
          <ul>
            <li>Drills followed by matchplay.  Improvised games targeting different aspects.</li>
            <li><b>Beginners</b> will focus on stroke production & court positioning.</li>
            <li><b>Intermediate/Advanced Players</b> will work on singles & doubles strategy and tournament level match play.</li>
            <li><b>Tournament Level Players</b> Live ball drills will be accompanied by match play.</li>
          </ul>
          <h4 class="programs-schedule">Schedule</h4>
          <p class="schedule-text"><b>Summer Session</b></p>
          <p><i>All ages, All skill levels: 9am-12pm</i></p>
          <p>August 9th - August 13th</p>
				  <p>August 16th - August 20th</p>
          <p>August 23rd - August 27th</p>
  
        </div>  
      </div>
    
      </div>
    </>

  );
}
