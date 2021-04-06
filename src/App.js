
import './App.css';
import Home from "./views/home"
import sample from './video.mp4'
import { Link, animateScroll as scroll } from "react-scroll";


function App() {
  return (
    <>
      <video autoPlay loop muted id='video'>
      <source src={sample} type='video/mp4' />
      </video>
      <div className='layer'></div>
      <div className="App">
      <Home/>
      </div>
    </>
  );
}

export default App;
