import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 67 },
    { name: "Dhoni", score: 95 },
    { name: "Pant", score: 45 },
    { name: "Hardik", score: 78 },
    { name: "Jadeja", score: 59 },
    { name: "Shami", score: 30 },
    { name: "Ashwin", score: 88 },
    { name: "Gill", score: 76 },
    { name: "Surya", score: 82 },
    { name: "Kuldeep", score: 63 },
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((player, idx) => (
          <li key={idx}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
