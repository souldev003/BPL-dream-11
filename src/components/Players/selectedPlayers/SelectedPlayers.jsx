import React from "react";
import SelectedPlayerCard from "../../ui/SelectedPlayerCard";

const SelectedPlayers = ({
  selectedPlayer,
  setSelectedPlayer,
  coins,
  setCoins,
}) => {
  const handleDeleteSelectedPlayer = (player) => {
    // console.log(player);
    const filterPlayer = selectedPlayer.filter(
      (selectPlayer) => selectPlayer.name !== player.name,
    );

    setSelectedPlayer(filterPlayer);
    setCoins(coins + player.price);
  };
  return (
    <div>
      {selectedPlayer.length === 0 ? (
        <div className="container mx-auto py-16">
          <h1 className="text-4xl text-center text-gray-300 ">
            No Player Selected Yet
          </h1>
          <p className="text-gray-300 text-center mt-5">
            Go to Available tab to select Players{" "}
          </p>
        </div>
      ) : (
        selectedPlayer.map((player) => (
          <SelectedPlayerCard
            player={player}
            handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
          />
        ))
      )}
    </div>
  );
};

export default SelectedPlayers;
