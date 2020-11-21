import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Portfolio from './components/portfolio/portfolio';
import AnimatedCursor from './components/mouse/mouse';


function App() {
  return (
    <div className="App background">
      <AnimatedCursor />
      <Portfolio/>
    </div>
  );
}

export default App;