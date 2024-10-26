import "./banner.css";
import blogo from "../../assets/assets/banner-main.png";
import PropTypes from "prop-types";
const Banner = ({ handleAddCoins }) => {
  return (
    <div
      id="banner"
      className="sm:w-full text-center p-7 bg-black text-white mb-10"
    >
      <img className="mx-auto mb-5" src={blogo} alt="" />
      <h1 className="font-bold text-3xl mb-5">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-base font-medium mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button onClick={() => handleAddCoins()} className="hover:bg-slate-200">
        Claim Free Credit
      </button>
    </div>
  );
};

Banner.propTypes = {
  handleAddCoins: PropTypes.func,
};
export default Banner;
