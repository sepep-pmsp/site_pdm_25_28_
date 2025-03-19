import './App.css'
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='home-app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='banner'>
          <Banner />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App