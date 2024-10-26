import PropTypes from "prop-types";
import logo from "../../assets/assets/logo.png";
const Navbar = ({ coins }) => {
  return (
    <div className="flex items-center justify-between mt-5 mb-10 sticky top-0 backdrop-blur">
      <img src={logo} alt="" />
      <div className="flex items-center gap-5">
        <ul className="hidden md:flex items-center gap-5">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <p className="border rounded-xl p-2 text-base font-semibold">
          {coins} coin
        </p>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number,
};
export default Navbar;
