import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const HeroContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:0 30px;
  height:900px;
  position:relative;
  z-index:9;

`;

export const HeroContent =styled.div`
  z-index:3;
  max-width:1200px;
  position:absolute;
  padding:8px 24px;
  display: flex;
  flex-direction:column;
  align-items:center;
    
`
export const HeroBtnWrapper = styled.div`
  margin-top:32px;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left:8px;
  font-size:20px;
`

export const ArrowRight =styled(MdKeyboardArrowRight)`
  margin-left:8px;
  font-size:20px;
`