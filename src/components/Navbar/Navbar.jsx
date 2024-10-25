import logo from "../../assets/assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-5 mb-6">
      <img src={logo} alt="" />
      <ul className="flex items-center gap-5">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
        <li className="border rounded-xl p-2 text-base font-semibold">
          0 coin
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
