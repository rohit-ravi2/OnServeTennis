import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
//import logo from './logowhitetext.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-left'>
        <ul class="footerInfo">
          <li>(201) 913-5354</li>
          <li>onservetennis@yahoo.com</li>
          <li>199 Halifax Rd, Mahwah, NJ 07430</li>
        </ul>
      </div>
      <small class='website-rights'>On Serve Tennis© 2022</small>
    </div>
  );
}

export default Footer;
