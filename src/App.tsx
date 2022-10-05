import React from 'react';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      Start Project
      <Greet name = {"Sanyam"} messageCount = {20} isLoggedIn = {true} />
    </div>
  );
}

export default App;
