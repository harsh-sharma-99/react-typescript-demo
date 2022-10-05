import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const personName = {
    firstName:"Barry",
    lastName:"Allen"
  }

  const names = [
    {
      firstName:"lo",
      lastName:"ping"
    },
    {
      firstName:"hi",
      lastName:"chi"
    },
    {
      firstName:"lun",
      lastName:"tun"
    },
  ]
  return (
    <div className="App">
      Start Project
      <Greet name = {"Sanyam"} messageCount = {20} isLoggedIn = {true} />
      <Person name = {personName} />
      <PersonList nameList = {names}/>
    </div>
  );
}

export default App;
