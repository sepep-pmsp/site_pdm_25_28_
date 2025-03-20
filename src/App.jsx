import { HashRouter } from 'react-router-dom';
import './App.css'

import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/home';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App