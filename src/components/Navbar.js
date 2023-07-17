import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {

    const[expandNavbar, setExpandNavbar]= useState(false)
    const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);


    const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ...
  const [activeLink, setActiveLink] = useState('');
  return (
    <div className= {`navbar ${isSticky ? "sticky" : ""}`} id={expandNavbar ? "open" : "close"}>
      <div className='toggleButton'>
        <button onClick={() =>{setExpandNavbar((prev)=>!prev);}}>
        <DehazeIcon/>
        </button>
      </div>
      <div className='links'>
      <Link
      to="/"
      className={`link ${activeLink === '/' ? 'active' : ''}`}
      onClick={() => setActiveLink('/')}
    >
      <b>Home</b>
    </Link>
    <Link
      to="/project"
      className={`link ${activeLink === '/project' ? 'active' : ''}`}
      onClick={() => setActiveLink('/project')}
    >
      <b>Projects</b>
    </Link> 
      </div>

    </div>
  )
}

export default Navbar
