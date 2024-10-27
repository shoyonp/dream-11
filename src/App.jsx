import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import DblComponent from "./components/DblComponent/DblComponent";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [addPlayers, setAddPlayers] = useState([]);
  const [coins, setCoins] = useState(0);

  const handleAddCoins = () => {
    toast.success("Credit Added to your Account");
    let coin = 20000000;
    const newCoin = coin + coins;
    setCoins(newCoin);
  };

  const handleAddToSelected = (player, price, name) => {
    if (price < coins) {
      toast.success(`Congrates !! ${name} is now in your team`);
      const newPlayers = [...addPlayers, player];
      setAddPlayers(newPlayers);
      setCoins(coins - price);
    } else {
      toast.error("Not enough money to buy this player.Claim some Credit ");
    }
  };

  const [isActive, setIsActive] = useState({
    player: true,
  });

  const handleISActiveState = (status, id) => {
    const remainingPlayer = addPlayers.filter((player) => player.id !== id);
    setAddPlayers(remainingPlayer);
    if (status == "player") {
      setIsActive({
        player: true,
      });
    } else {
      setIsActive({
        player: false,
      });
    }
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar coins={coins}></Navbar>
        <Banner handleAddCoins={handleAddCoins}></Banner>
        <div className="">
          <DblComponent
            isActive={isActive}
            handleISActiveState={handleISActiveState}
            handleAddToSelected={handleAddToSelected}
            addPlayers={addPlayers}
          ></DblComponent>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition:Bounce
          />
        </div>
      </div>
      <div className="mt-12">
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
