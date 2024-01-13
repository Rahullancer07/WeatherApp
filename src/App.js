import './App.css';
import { useState } from 'react';
import LandingPage from '../src/Pages/LandingPage'

function App() {
  const [city , setCity] = useState("");
  return (
    <div className="App">
      <LandingPage city={city} setCity={setCity}/>
    </div>
  );
}

export default App;
