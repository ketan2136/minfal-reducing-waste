import './App.css';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero';
import Popcornbeker from './Components/Popcornbeker/Popcornbeker';
import Assortiment from './Components/Assortiment/Assortiment';
import Onze from './Components/Onze/Onze';
import Partner from './Components/Partner/Partner';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <CustomNavbar />
        <Hero />
        <Popcornbeker />
        <Assortiment />
        <Onze />
        <Partner />
        <Footer />
    </div>
  );
}

export default App;
