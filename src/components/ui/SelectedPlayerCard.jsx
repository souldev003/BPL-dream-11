import React from "react";
import { FaUser } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
const SelectedPlayerCard = ({ player, handleDeleteSelectedPlayer }) => {
  return (
    <div className="mb-16">
      <div
        key={player.id}
        className="flex items-center justify-between p-6 rounded-2xl mt-7 border border-amber-600"
      >
        <div className="flex text-center gap-3">
          <img
            className="w-20 h-auto object-cover rounded-2xl"
            src={player.image}
            alt="player"
          />
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-semibold text-start flex items-center gap-3">
              <FaUser className="fill-amber-200" />
              {player.name}
            </div>
            <h4>Lorem lorem lorem lorem</h4>
          </div>
        </div>

        <div>
          <button
            onClick={() => handleDeleteSelectedPlayer(player)}
            className="btn"
          >
            <RiDeleteBinLine className="text-red-500"></RiDeleteBinLine>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
