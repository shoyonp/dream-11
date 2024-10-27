import PropTypes from "prop-types";
import Select from "../Select/Select";

const Selected = ({ addPlayers, handleISActiveState }) => {
  return (
    <>
      <h2 className="mx-auto mt-4 text-xl md:text-3xl text-left font-bold mb-3">Selected Players ({addPlayers.length}/11)</h2>
      <div className="mb-7">
        {addPlayers.map((addplayer, idx) => (
          <Select
            key={idx}
            addplayer={addplayer}
            handleISActiveState={handleISActiveState}
          ></Select>
        ))}
        <button onClick={() => handleISActiveState("player")}>
          Add More Player
        </button>
      </div>
    </>
  );
};

Selected.propTypes = {
  addPlayers: PropTypes.array,
  handleISActiveState: PropTypes.func,
};
export default Selected;
