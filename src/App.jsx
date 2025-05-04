import React, { useState } from 'react';
import Background from './Components/Background/Backgroound'; // fix typo if needed

const heroData = [
  { text1: "Dive into", text2: "what you love" },
  { text1: "Indulge", text2: "your passions" },
  { text1: "Give in to", text2: "your passions" },
];

const App = () => {

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
    </div>
  );
};

export default App;
