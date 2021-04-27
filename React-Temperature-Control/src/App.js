
import './App.css';
import React, { useState } from 'react';
function App() {
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState('cold')

  const increseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    setTemperatureValue(newTemperature)
    if(newTemperature >= 15){
      setTemperatureColor('hot')
    }
  }
  const decreaseTemperature = () => {
    const newTemperature = temperatureValue - 1;
    setTemperatureValue(temperatureValue - 1)
    if(newTemperature < 15){
      setTemperatureColor('cold')
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
          <button onClick={increseTemperature}>+</button>
          <button onClick={decreaseTemperature}>-</button>
      </div>
    </div>
  );
}

export default App;
