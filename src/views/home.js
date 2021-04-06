import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main/Main'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills'
import Navbar from "../components/Navbar";

function Home() {
   return( 
   <>
    <Navbar/>
    <div id='main'>
    <Main />
    </div>
    <div id='about'>
    <About />
    </div>
    <div id='projects'>
    <Projects />
    </div>
    <div id='skills'>
    <Skills/>
    </div>
    <div id='contact'>
    <Contact/>
   </div>
    <Footer/>
    </>
   )
}

export default Home
