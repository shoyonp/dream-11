import "./banner.css";
import blogo from "../../assets/assets/banner-main.png";
const Banner = () => {
  return (
    <div id="banner" className="text-center p-7 bg-black text-white">
      <img className="mx-auto mb-5" src={blogo} alt="" />
      <h1 className="font-bold text-3xl mb-5">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-base font-medium mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="hover:bg-slate-200">Claim Free Credit</button>
    </div>
  );
};

export default Banner;
