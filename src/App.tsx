import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
      <Status status = "success" />
     
      <Oscar>
      <Heading>Leonardo won oscars</Heading>
      </Oscar>

      <Greet name = {"Harsh"} messageCount = {10} isLoggedIn = {true} />
    </div>
  );
}

export default App;
