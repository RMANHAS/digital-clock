import './App.css';
import React, { useState } from 'react';


function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setNewTime] = useState(time);
  const UPDATE = () => {
    time = new Date().toLocaleTimeString();
    setNewTime(time);

  }
  setInterval(UPDATE, 1000);
  return (
    <div className="App">
      <h1>
        {currentTime}
        <button onClick={UPDATE}>GET TIME</button>
      </h1>

    </div>
  );
}

export default App;
