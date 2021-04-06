import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css';
import { PlayCircleFilledWhite } from '@material-ui/icons';


function Navbar() {

  // Styles
  const navItem = {
    color: '#DDCFD1',
    fontSize:'20px',
    lineHeight:'2',
    fontFamily: 'Cutive Mono, monospace'
  };

  const navLink = {
    borderColor:'#DDCFD1',
    
  };
  
  
  return (
    <>
      <ButtonGroup className='nav' variant="text" color="primary" aria-label="text primary button group">
      <Link
        style={navLink}
        activeClass="active"
        to='main'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
            <Button style={navItem}>Main</Button>
          </Link>
          <Link
          style={navLink}
        activeClass="active"
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
            <Button style={navItem}>About</Button>
          </Link>
          <Link
          style={navLink}
        activeClass="active"
        to='projects'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
            <Button style={navItem}>Projects</Button>
          </Link>
          <Link
          style={navLink}
        activeClass="active"
        to='skills'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
            <Button style={navItem}>Skills</Button>
          </Link>
            <Link
            style={navLink}
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
        <Button style={navItem}>Contact</Button>
      </Link>
      </ButtonGroup>
 </>
  )
}

export default Navbar