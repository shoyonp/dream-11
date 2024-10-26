import footerLogo from "../../assets/assets/logo-footer.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="bg-[#06091A] relative">
      <img className="mx-auto p-8" src={footerLogo} alt="" />
      <div className="my-9 md:flex justify-between text-white w-10/12 mx-auto mb-4">
        <div className="mb-5">
          <h3>About Us</h3>
          <p className="font-normal text-xs opacity-60 w-48">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="mb-5">
          <h3>Quick Links</h3>
          <ul className="font-normal text-xs opacity-60 flex flex-col gap-2">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="mb-5">
          <h3>Subscribe</h3>
          <p className="font-normal text-xs text-white opacity-60 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex items-center">
            <input
              className="border rounded-xl p-2"
              type="text"
              placeholder="Enter your email"
              name=""
              id="email"
            />
            <button id="subscribe">Subscribe</button>
          </div>
        </div>
      </div>
      <hr />
      <p className="font-normal text-xs text-white opacity-60 text-center p-5">
        @2024 Your Company All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
