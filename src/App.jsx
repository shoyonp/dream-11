import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Players from "./components/Players/Players";

function App() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Players></Players>
      </div>
      <Footer></Footer>
      <Newsletter></Newsletter>
    </>
  );
}

export default App;
