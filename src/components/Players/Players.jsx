import { useEffect, useState } from "react";
import "./Players.css";
import Player from "../Player/Player";
const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-3xl font-bold">Available Players</h2>
        <div>
          <button className="available hover:bg-slate-100">Available</button>
          <button className="selected hover:bg-slate-100">
            Selected<span> 0</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-7 ">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </>
  );
};

export default Players;
