import "./App.css";
import CustomNavbar from "./Components/CustomNavbar/CustomNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footers/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Over_ons from "./pages/Over_ons.jsx";
import Popcornbekers from "./pages/Popcornbekers.jsx";
import Refill from "./pages/Refill.jsx";
import Circulair from "./pages/Circulair.jsx";
import Producten from "./pages/Producten.jsx";
import Contact from "./pages/Contact.jsx";
import Main_footer from "./pages/Main_footer.jsx";
import Last_footer from "./Components/Footer/Footers/Last_footer.jsx";

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
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      <Main_footer />
      <Last_footer />
    </>
  );
}

export default App;
