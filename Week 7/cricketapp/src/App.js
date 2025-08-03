import React from 'react';
import ListOfPlayers from './ListOfPlayers';
import { OddPlayers, EvenPlayers, IndianPlayers } from './IndianPlayers';

function App() {
  const flag = false; // Change to true to show ListOfPlayers

  return (
    <div className="App">
      {flag ? (
        <ListOfPlayers />
      ) : (
        <div>
          <OddPlayers players={['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6']} />
          <EvenPlayers players={['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6']} />

          <h2>List of Indian Players Merged:</h2>
          {IndianPlayers.map((player, index) => (
            <li key={index}>Mr. {player}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
