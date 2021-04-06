import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import './About.css';


function About() {
  return (
    <div className='container'>
    <Jumbotron>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">GitHub</Button>
      </p>
    </Jumbotron>
    </div>
  )
}

export default About
