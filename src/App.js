import logo from './logo.svg';
import './css/App.css';
import '../src/css/style.css';
import '../src/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../src/assets/vendor/bootstrap/css/bootstrap-reboot.min.css';
import '../src/assets/vendor/boxicons/css/boxicons.min.css';
import '../src/assets/vendor/glightbox/css/glightbox.min.css';
import '../src/assets/vendor/remixicon/remixicon.css';
import '../src/assets/vendor/swiper/swiper-bundle.min.css';

  

//compinenetes 
import Navbar from './components/navbar/Navbar';
import Nosotros from './components/Nosotros';
import Cuentas from './components/Cuentas';
import Hero from './components/navbar/Hero';
import Valores from './components/Valores';

function App() {
  return (
    
      <div className="App">
      <Hero/> 
      <Navbar/>     
      <Nosotros/>
      <Cuentas/>
      <Valores/>
    
    
     
    </div>
    
  );
}

export default App;
