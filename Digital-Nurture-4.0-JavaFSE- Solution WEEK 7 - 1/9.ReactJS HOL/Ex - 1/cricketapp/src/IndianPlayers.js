import React from 'react';

const IndianPlayers = () => {
  const oddPlayers = ['Virat', 'Pant', 'Hardik', 'Ashwin', 'Surya'];
  const evenPlayers = ['Rohit', 'Dhoni', 'Jadeja', 'Shami', 'Gill', 'Kuldeep'];

  // Destructuring example
  const [firstOdd, ...restOdd] = oddPlayers;
  const [firstEven, ...restEven] = evenPlayers;

  // Merging two arrays
  const T20players = ['Kohli', 'Rohit', 'Pant'];
  const RanjiTrophyPlayers = ['Pujara', 'Rahane', 'Karun'];
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>All Players (Merged)</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
