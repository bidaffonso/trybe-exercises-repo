import React from 'react';
import './App.css';
import MeInfo from './Components/Component';
import Image from './Components/Image';


function App() {
  return (
    <main>
      <MeInfo />
      <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText='Cute cat staring'/>
    </main>
  )
}

export default App;
