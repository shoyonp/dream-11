import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
const Select = ({ addplayer, handleISActiveState }) => {
  const { name, img, batting_style, id } = addplayer;
  return (
    <div className="flex border border-gray-200 rounded-2xl p-3 items-center justify-between my-3">
      <div className="flex items-center gap-6">
        <img className="w-28 object-cover rounded-xl" src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{batting_style}</p>
        </div>
      </div>
      <div
        className="text-2xl"
        onClick={() => handleISActiveState("selected", id)}
      >
        <MdDeleteForever></MdDeleteForever>
      </div>
    </div>
  );
};

Select.propTypes = {
  addplayer: PropTypes.object,
  handleISActiveState: PropTypes.func,
};
export default Select;
