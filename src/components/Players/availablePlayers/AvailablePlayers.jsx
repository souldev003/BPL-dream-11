import React from "react";
import Card from "../../ui/Card";

const AvailablePlayers = ({ players }) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-6">
      {players.map((player) => (
        <Card key={player.id} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
