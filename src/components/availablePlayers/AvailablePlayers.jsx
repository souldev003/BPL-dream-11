import React from "react";

const AvailablePlayers = ({ players }) => {
  console.log(players);
  return (
    <div className="container mx-auto mt-20">
      <h2>Available Player: {players.length}</h2>
    </div>
  );
};

export default AvailablePlayers;
