import React from 'react';
import './App.css'
import 'bulma/css/bulma.css'
import Portfolio from './components/portfolio/portfolio'

function App() {
  return (
    <div className="App background">
        { Portfolio() }
    </div>
  );
}

export default App;