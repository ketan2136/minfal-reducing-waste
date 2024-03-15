import "./App.css";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Over_ons from "./pages/Over_ons.jsx";
import Popcornbekers from "./pages/Popcornbekers.jsx";
import Refill from "./pages/Refill.jsx";
import Circulair from "./pages/Circulair.jsx";
import Producten from "./pages/Producten.jsx";

function App() {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Over_ons />} />
        <Route path="/popcornbekers" element={<Popcornbekers />} />
        <Route path="/refill" element={<Refill />} />
        <Route path="/circulair" element={<Circulair />} />
        <Route path="/producten" element={<Producten />} />
       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
