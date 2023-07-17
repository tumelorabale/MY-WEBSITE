import React from 'react'
import '../styles/Header.css'
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import GetAppIcon from '@mui/icons-material/GetApp';
import Tumeloresume from './Tumeloresume.pdf';

function Header() {
  return (
    <div className='Header'>
        <div className='Contacts'>
            <h3>Contact Me</h3>
            <div id='cell'> <CallIcon/>Cell phone: +1 319 419 8461</div>
            <div id='email'> <AttachEmailIcon/>Email: tumelorabale@outlook.com</div>
            <div id='resume'><GetAppIcon/><a href={Tumeloresume} download="TumeloResume" 
            target="_blank"
            rel="noreferrer"
            className='tag'
          >
            Download Resume
          </a></div>
            
            
        </div>
    </div>
  )
}

export default Header
