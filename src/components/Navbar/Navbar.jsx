import logo from "../../assets/assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-5 mb-6">
      <img src={logo} alt="" />
      <div className="flex items-center gap-5">
        <ul className="hidden md:flex items-center gap-5">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <p className="border rounded-xl p-2 text-base font-semibold">0 coin</p>
      </div>
    </div>
  );
};

export default Navbar;
