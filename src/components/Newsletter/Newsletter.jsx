import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className=" border rounded-3xl w-10/12 p-3 backdrop-blur absolute bottom-5 left-8 md:left-[76px] lg:left-[127px] -bottom-96">
      <div id="newsbg" className="text-center ">
        <div className="p-12">
          <h2 className="font-bold text-2xl mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="font-medium text-sm mb-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-3 items-center justify-center">
            <input
              className="border rounded-xl p-2"
              type="email"
              placeholder="Enter your email"
              name=""
              id=""
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
