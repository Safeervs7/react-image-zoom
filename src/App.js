import React from 'react';
import Test from 'react-image-zoom';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test</p>
        <Test
          imageHeight = "500px"
          imageWidth = "300px"
          circleRadius = "50px"
          zoomScale = "1.5"
          image={require("./assets/1.jpg")}
        />
        <p style={{float: "left", width: "10%"}}>test</p>
      </header>
    </div>
  );
}

export default App;
