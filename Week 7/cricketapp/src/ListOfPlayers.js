import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  const players70 = [];
  players.map((item) => {
    if (item.score <= 70) {
      players70.push(item);
    }
  });

  return (
    <div>
      <h2>List of Players</h2>
      {players.map((item) => {
        return (
          <div>
            <li>Mr. {item.name}<span> {item.score} </span></li>
          </div>
        );
      })}

      <h2>List of Players having Scores Less than 70</h2>
      {players70.map((item) => {
        return (
          <div>
            <li>Mr. {item.name}<span> {item.score} </span></li>
          </div>
        );
      })}
    </div>
  );
}

export default ListofPlayers;
