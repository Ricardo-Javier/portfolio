import React, {useState} from 'react';
// import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElements";
import {HeroContainer, HeroContent, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from "./MainElements";
import './Main.css';
import eye from '../../images/eye.gif';



const HeroSection = () => {
  const[hover, setHover]=useState(false)
  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
      </HeroBg> */}
      <HeroContent>
      <div className="main-container">
          <div class="typewriter-text anim1">
            Hello...
          </div>
          <div className="typewriter-text anim2">
              I'm Ricardo
          </div>
          <img className='typewriter-text anim3 eye' src ={eye} alt="Eye"/>          
      </div>   
        {/* <HeroBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
            Contact Me {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
