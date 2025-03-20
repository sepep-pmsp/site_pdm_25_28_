import './App.css'

import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';

function App() {
  return (
    <div className='home-app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='home'>
            <Home />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App