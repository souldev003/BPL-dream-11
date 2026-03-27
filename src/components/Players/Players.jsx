import React from "react";
import AvailablePlayers from "./availablePlayers/AvailablePlayers";
import { useEffect, useState } from "react";
import SelectedPlayers from "./selectedPlayers/SelectedPlayers";

const Players = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btnStatus, setBtnStatus] = useState("available");
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container mx-auto mt-14">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-3xl">
          {btnStatus === "available"
            ? "Available Players: "
            : `Selected Players ${selectedPlayer.length}/`}{" "}
          {players.length}
        </h1>
        <div className="flex items-center">
          <button
            onClick={() => setBtnStatus("available")}
            className={`btn btn-soft rounded-xl rounded-r-none ${btnStatus === "available" ? "text-[#00683D] bg-[#E7FE29]" : "btn-ghost"} border-transparent`}
          >
            Available
          </button>
          <button
            onClick={() => setBtnStatus("selected")}
            className={`btn btn-soft rounded-xl rounded-l-none ${btnStatus === "selected" ? "text-[#00683D] bg-[#E7FE29]" : "btn-ghost"} border-transparent`}
          >
            Selected({selectedPlayer.length})
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-50">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      ) : btnStatus === "available" ? (
        <AvailablePlayers
          players={players}
          coins={coins}
          setCoins={setCoins}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      ) : (
        <SelectedPlayers
          players={players}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />
      )}
    </div>
  );
};

export default Players;
