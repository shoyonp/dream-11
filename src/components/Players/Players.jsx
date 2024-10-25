import { useEffect, useState } from "react";
import "./Players.css";
const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  
  return (
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-xl font-bold">Available Players</h2>
      <div>
        <button className="available hover:bg-slate-200">Available</button>
        <button className="selected hover:bg-slate-200">
          Selected<span> 0</span>
        </button>
      </div>
    </div>
  );
};

export default Players;
