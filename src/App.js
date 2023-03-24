import './App.css';
import Menu from './Components/Menu/Menu';
import Landing from './Components/Landing/Landing';
import Welcome from './Components/Welcome/Welcome'; 
import FeaturedWorks from './Components/FeaturedWorks/FeaturedWorks';
import Offer from './Components/Offer/Offer';
import PriceBox from './Components/Pricing/Pricing';
import Team from './Components/Team/Team';
import Contact from './Components/Contact/Contact';
import React from 'react';

function App() {
  return (
    <div className='father-container'>
      <Menu/>
      <Landing/>
      <Welcome/>
      <FeaturedWorks/>
      <Offer/>
      <PriceBox/>
      <Team/>
      <Contact/>
    </div>
    );
  }
  
export default App;
