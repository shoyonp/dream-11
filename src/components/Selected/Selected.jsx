import PropTypes from "prop-types";
import Select from "../Select/Select";

const Selected = ({ addPlayers, handleISActiveState }) => {
  return (
    <div className="mb-7">
      {addPlayers.map((addplayer,idx) => (
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
  );
};

Selected.propTypes = {
    addPlayers: PropTypes.array,
    handleISActiveState: PropTypes.func,
};
export default Selected;
