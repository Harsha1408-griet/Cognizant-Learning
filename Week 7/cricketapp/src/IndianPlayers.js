import React from 'react';

export function OddPlayers({ players: [first, , third, , fifth] }) {
  return (
    <div>
      <h2>Odd Players</h2>
      <li> First : {first} </li>
      <li> Third : {third} </li>
      <li> Fifth : {fifth} </li>
    </div>
  );
}

export function EvenPlayers({ players: [ , second, , fourth, , sixth] }) {
  return (
    <div>
      <h2>Even Players</h2>
      <li> Second : {second} </li>
      <li> Fourth : {fourth} </li>
      <li> Sixth : {sixth} </li>
    </div>
  );
}

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];
