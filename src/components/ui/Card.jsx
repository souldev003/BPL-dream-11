import { FaFlag, FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({
  player,
  coins,
  setCoins,
  selectedPlayer,
  setSelectedPlayer,
}) => {
  const isSelected = selectedPlayer.find((p) => p.id === player.id);

  const handleChoosePlayer = () => {
    const newCoins = coins - player.price;

    const exist = selectedPlayer.find((p) => p.id === player.id);
    if (exist) {
      toast.warn(`${player.name} is already exist.`);
      return;
    }

    if (newCoins < 0) {
      toast.warn(`Not Enough Coins to purchase ${player.name}`);
      return;
    } else {
      toast.success(`Successfully Purchased ${player.name}`);
      setCoins(coins - player.price);
      setSelectedPlayer([...selectedPlayer, player]);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 shadow-sm mt-8">
        <figure className="h-64 w-full overflow-hidden">
          <img
            className="h-full w-full object-fill"
            src={player.image}
            alt="Cricketer"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> {player.name}
          </h2>

          <div className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center gap-2.5">
              <FaFlag />
              <span>{player.country}</span>
            </div>
            <button className="btn btn-soft">{player.role}</button>
          </div>
          <div>
            <div className="flex items-center justify-between mt-3">
              <span>Rating:</span>
              <span className="flex items-center gap-1">
                {player.rating} <FaStar />{" "}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Batting Style: </span>
              <span>{player.batting_style}</span>
            </div>
            <div className="flex items-center justify-between mt-3">
              <span>Price: ${player.price}</span>
              <button
                onClick={handleChoosePlayer}
                className={`btn ${isSelected ? "btn-disabled" : "btn-soft"}`}
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
