import React, { useState } from 'react';
import Background from './Components/Background/Backgroound'; // fix typo if needed
import Navbar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';


const heroData = [
  { text1: "Dive into", text2: "what you love" },
  { text1: "Indulge", text2: "your passions" },
  { text1: "Give in to", text2: "your passions" },    //bak=ckground immage text 
];

const App = () => {

  const [heroCount, setHeroCount] = useState(2);   //imagecount
  const [playStatus, setPlayStatus] = useState(false); //video play status

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />   
      <Navbar/>
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData}
      heroCount={heroCount[heroData]}
      setHeroCount={setHeroCount}
      playStatus={playStatus}/>
    </div>
  );
};

export default App;
