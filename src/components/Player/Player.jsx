import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";

import "./Player.css";
const Player = ({ player, handleAddToSelected }) => {
  const { name, img, country, role, batting_style, bowling_style, price } =
    player;
  return (
    <div>
      <div className="border border-gray-200 rounded-2xl p-4 mb-4">
        <div className="h-[200px]">
          <img
            className="h-full w-full rounded-2xl object-cover"
            src={img}
            alt=""
          />
        </div>
        <h2 className="text-xl font-semibold flex items-center gap-1 mt-4">
          <FaUser></FaUser>
          <span>{name}</span>
        </h2>
        <div className="flex items-center justify-between my-2">
          <p className="text-base font-normal ">{country}</p>
          <p className="bg-slate-50 p-2 rounded-lg text-sm font-normal">
            {role}
          </p>
        </div>
        <hr />
        <h3 className="font-bold text-base my-2">Rating</h3>
        <div className="flex items-center justify-between my-4">
          <p className="font-semibold text-base">{batting_style}</p>
          <p className="font-normal text-sm opacity-70">
            {bowling_style ? bowling_style : "N/A"}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-base">${price}</p>
          <button
            onClick={() => handleAddToSelected(player, price, name)}
            id="choose"
            className="text-sm"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleAddToSelected: PropTypes.func,
};
export default Player;
