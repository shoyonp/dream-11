import PropTypes from "prop-types";
import "./DblComponent.css";
import Players from "../Players/Players";
import Selected from "../Selected/Selected";

const DblComponent = ({
  handleISActiveState,
  isActive,
  handleAddToSelected,
  addPlayers,
}) => {
  return (
    <div>
      <div className="text-center md:flex justify-end">
        {/* <h2 className="text-3xl font-bold mb-3">Available Players</h2> */}
        <div>
          <button
            onClick={() => handleISActiveState("player")}
            className={`${isActive.player ? "active available" : "available"}`}
          >
            Available
          </button>
          <button
            onClick={() => handleISActiveState("selected")}
            className={`${isActive.player ? "selected" : "active selected"}`}
          >
            Selected ({addPlayers.length})
          </button>
        </div>
      </div>
      <div>
        {isActive.player ? (
          <Players handleAddToSelected={handleAddToSelected}></Players>
        ) : (
          <Selected
            addPlayers={addPlayers}
            handleISActiveState={handleISActiveState}
            handleAddToSelected={handleAddToSelected}
          ></Selected>
        )}
      </div>
    </div>
  );
};

DblComponent.propTypes = {
  handleISActiveState: PropTypes.func,
  isActive: PropTypes.object,
  handleAddToSelected: PropTypes.func,
  addPlayers: PropTypes.array,
};
export default DblComponent;
