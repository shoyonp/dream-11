import { useEffect, useState } from "react";
import "./Players.css";
import Player from "../Player/Player";
import PropTypes from "prop-types";

const Players = ({ handleAddToSelected }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <h2 className="text-xl mx-auto mt-4 md:text-3xl font-bold mb-3">
        Available Players
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 ">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            handleAddToSelected={handleAddToSelected}
          ></Player>
        ))}
      </div>
    </>
  );
};

Players.propTypes = {
  handleAddToSelected: PropTypes.func,
};
export default Players;
